'use strict';

require('dotenv').config();
const { io } = require('socket.io-client');
const { createClient: createRedisClient } = require('redis');
const { Pool } = require('pg');

const INGEST_URL = process.env.INGEST_URL || 'http://localhost:4000';
const PERIODS = (process.env.PERIODS || '5,10,20').split(',').map(p => parseInt(p, 10));
const PORT = process.env.PORT || 0; // processor doesn't expose http by default
const REDIS_URL = process.env.REDIS_URL || '';
const TIMESCALE_DSN = process.env.TIMESCALE_DSN || '';

if (!REDIS_URL) {
  console.warn('Warning: REDIS_URL not set. Processor will run in-memory only.');
}

// Connect to Redis (optional)
let redisClient = null;
if (REDIS_URL) {
  redisClient = createRedisClient({ url: REDIS_URL });
  redisClient.connect().catch(err => console.error('Redis connection error', err));
}

// Optional Postgres/TimescaleDB to persist indicators
let pgPool = null;
if (TIMESCALE_DSN) {
  pgPool = new Pool({ connectionString: TIMESCALE_DSN });
  pgPool.on('error', (err) => console.error('Postgres pool error', err));
}

// In-memory state fallback
const windows = {}; // { symbol: { period: [prices...] } }

function pushPrice(symbol, period, price) {
  if (!windows[symbol]) windows[symbol] = {};
  if (!windows[symbol][period]) windows[symbol][period] = [];
  const arr = windows[symbol][period];
  arr.push(price);
  if (arr.length > period) arr.shift();
}

function computeSMA(arr) {
  if (!arr || arr.length === 0) return null;
  const sum = arr.reduce((a, b) => a + b, 0);
  return sum / arr.length;
}

async function computeAndPublish(symbol, price, ts) {
  const results = {};
  for (const period of PERIODS) {
    let prices = null;
    // try Redis list first
    if (redisClient) {
      try {
        const key = `prices:${symbol}:${period}`;
        await redisClient.rPush(key, String(price));
        await redisClient.lTrim(key, -period, -1);
        const range = await redisClient.lRange(key, 0, -1);
        prices = range.map(v => parseFloat(v));
      } catch (err) {
        console.error('Redis price window error', err.message || err);
      }
    }

    if (!prices) {
      // fallback to in-memory
      pushPrice(symbol, period, price);
      prices = windows[symbol][period];
    }

    const sma = computeSMA(prices);
    // EMA: read last ema from Redis or compute init as SMA
    let ema = null;
    const emaKey = `ema:${symbol}:${period}`;
    if (redisClient) {
      try {
        const prev = await redisClient.get(emaKey);
        const alpha = 2 / (period + 1);
        if (!prev) {
          ema = sma;
        } else {
          ema = alpha * price + (1 - alpha) * parseFloat(prev);
        }
        if (ema !== null) await redisClient.set(emaKey, String(ema));
      } catch (err) {
        console.error('Redis EMA error', err.message || err);
      }
    } else {
      // in-memory ema
      if (!windows[symbol][`_ema_${period}`]) windows[symbol][`_ema_${period}`] = null;
      const prev = windows[symbol][`_ema_${period}`];
      const alpha = 2 / (period + 1);
      if (prev === null) {
        ema = sma;
      } else {
        ema = alpha * price + (1 - alpha) * prev;
      }
      windows[symbol][`_ema_${period}`] = ema;
    }

    results[period] = { sma, ema };
  }

  const payload = {
    symbol,
    timestamp: new Date(ts).toISOString(),
    price: price,
    indicators: results
  };

  // publish to Redis stream
  if (redisClient) {
    try {
      await redisClient.xAdd('market:indicators', '*', {
        symbol: payload.symbol,
        timestamp: payload.timestamp,
        price: String(payload.price),
        indicators: JSON.stringify(payload.indicators)
      });
    } catch (err) {
      console.error('Redis publish indicators error', err.message || err);
    }
  }

  // optional: write to Timescale/Postgres
  if (pgPool) {
    try {
      // table schema: indicators(time timestamptz, symbol text, period int, sma double precision, ema double precision)
      const now = payload.timestamp;
      for (const period of Object.keys(payload.indicators)) {
        const row = payload.indicators[period];
        await pgPool.query(
          'INSERT INTO indicators(time, symbol, period, sma, ema) VALUES($1,$2,$3,$4,$5)',
          [now, payload.symbol, parseInt(period, 10), row.sma, row.ema]
        );
      }
    } catch (err) {
      console.error('Timescale insert error', err.message || err);
    }
  }

  // also emit locally (console)
  console.log('Published indicators', payload.symbol, Object.keys(payload.indicators));
}

async function start() {
  console.log('Processor starting, connecting to', INGEST_URL);
  const socket = io(INGEST_URL, { transports: ['websocket'] });

  socket.on('connect', () => {
    console.log('Connected to ingest socket, id=', socket.id);
  });

  socket.on('market:trade', async (evt) => {
    try {
      const price = parseFloat(evt.price);
      const symbol = evt.symbol;
      const ts = evt.timestamp || Date.now();
      await computeAndPublish(symbol, price, ts);
    } catch (err) {
      console.error('Failed handling trade event', err.message || err);
    }
  });

  socket.on('disconnect', (reason) => {
    console.warn('Socket disconnected', reason);
  });
}

start().catch(err => console.error('Processor failed to start', err));

process.on('SIGINT', async () => {
  console.log('Processor shutting down...');
  if (pgPool) await pgPool.end();
  if (redisClient) await redisClient.disconnect();
  process.exit(0);
});
