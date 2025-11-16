// بيانات العملات المتقدمة مع تحليل تقني شامل
export const currencyData = {
  major: [
    {
      pair: 'USD/SAR',
      name: 'الدولار الأمريكي / الريال السعودي',
      currentRate: 3.7501,
      change24h: 0.0002,
      changePercent: 0.01,
      volume24h: '2.8B',
      marketCap: '1.2T',
      volatility: 'منخفضة',
      technicalIndicators: {
        rsi: 45.2,
        macd: 'صاعد',
        bollinger: 'وسط النطاق',
        support: 3.7450,
        resistance: 3.7550,
        trend: 'عرضي',
        strength: 'متوسط'
      },
      fundamentals: {
        interestRateDiff: 2.5,
        inflationDiff: -1.2,
        economicGrowth: 'إيجابي',
        politicalStability: 'مستقر',
        tradeBalance: 'فائض'
      },
      prediction: {
        shortTerm: 'مستقر',
        mediumTerm: 'صاعد طفيف',
        longTerm: 'مستقر',
        confidence: 85
      }
    },
    {
      pair: 'EUR/SAR',
      name: 'اليورو / الريال السعودي',
      currentRate: 4.0892,
      change24h: 0.0061,
      changePercent: 0.15,
      volume24h: '1.9B',
      marketCap: '850B',
      volatility: 'متوسطة',
      technicalIndicators: {
        rsi: 58.7,
        macd: 'صاعد',
        bollinger: 'قرب المقاومة',
        support: 4.0650,
        resistance: 4.1200,
        trend: 'صاعد',
        strength: 'قوي'
      },
      fundamentals: {
        interestRateDiff: 1.8,
        inflationDiff: 0.5,
        economicGrowth: 'معتدل',
        politicalStability: 'مستقر',
        tradeBalance: 'عجز طفيف'
      },
      prediction: {
        shortTerm: 'صاعد',
        mediumTerm: 'صاعد',
        longTerm: 'متقلب',
        confidence: 72
      }
    },
    {
      pair: 'GBP/SAR',
      name: 'الجنيه الإسترليني / الريال السعودي',
      currentRate: 4.7234,
      change24h: -0.0123,
      changePercent: -0.26,
      volume24h: '1.1B',
      marketCap: '720B',
      volatility: 'عالية',
      technicalIndicators: {
        rsi: 34.8,
        macd: 'هابط',
        bollinger: 'قرب الدعم',
        support: 4.6800,
        resistance: 4.7800,
        trend: 'هابط',
        strength: 'ضعيف'
      },
      fundamentals: {
        interestRateDiff: 3.2,
        inflationDiff: 2.1,
        economicGrowth: 'بطيء',
        politicalStability: 'متقلب',
        tradeBalance: 'عجز'
      },
      prediction: {
        shortTerm: 'هابط',
        mediumTerm: 'متقلب',
        longTerm: 'غير مؤكد',
        confidence: 61
      }
    }
  ],
  crypto: [
    {
      pair: 'BTC/USD',
      name: 'البيتكوين',
      currentRate: 87450.25,
      change24h: 2340.15,
      changePercent: 2.75,
      volume24h: '45.2B',
      marketCap: '1.72T',
      volatility: 'عالية جداً',
      technicalIndicators: {
        rsi: 72.3,
        macd: 'صاعد قوي',
        bollinger: 'كسر المقاومة',
        support: 82000,
        resistance: 92000,
        trend: 'صاعد قوي',
        strength: 'قوي جداً'
      },
      prediction: {
        shortTerm: 'صاعد',
        mediumTerm: 'صاعد',
        longTerm: 'صاعد',
        confidence: 78
      }
    },
    {
      pair: 'ETH/USD',
      name: 'الإيثيريوم',
      currentRate: 3245.80,
      change24h: 89.45,
      changePercent: 2.84,
      volume24h: '18.7B',
      marketCap: '390B',
      volatility: 'عالية',
      technicalIndicators: {
        rsi: 65.1,
        macd: 'صاعد',
        bollinger: 'وسط النطاق العلوي',
        support: 3100,
        resistance: 3500,
        trend: 'صاعد',
        strength: 'قوي'
      },
      prediction: {
        shortTerm: 'صاعد',
        mediumTerm: 'مستقر',
        longTerm: 'صاعد',
        confidence: 82
      }
    }
  ],
  emerging: [
    {
      pair: 'AED/SAR',
      name: 'الدرهم الإماراتي / الريال السعودي',
      currentRate: 1.0210,
      change24h: 0.0008,
      changePercent: 0.08,
      volume24h: '890M',
      volatility: 'منخفضة جداً',
      correlation: 0.95,
      economicTies: 'قوية جداً'
    },
    {
      pair: 'QAR/SAR',
      name: 'الريال القطري / الريال السعودي',
      currentRate: 1.0295,
      change24h: -0.0005,
      changePercent: -0.05,
      volume24h: '450M',
      volatility: 'منخفضة',
      correlation: 0.88,
      economicTies: 'قوية'
    }
  ]
};

// معادلات التحليل التقني المتقدم
export const technicalAnalysis = {
  calculateRSI: (prices: number[], period: number = 14) => {
    // حساب مؤشر القوة النسبية
    let gains = 0;
    let losses = 0;
    
    for (let i = 1; i <= period; i++) {
      const change = prices[i] - prices[i - 1];
      if (change > 0) gains += change;
      else losses -= change;
    }
    
    const avgGain = gains / period;
    const avgLoss = losses / period;
    const rs = avgGain / avgLoss;
    
    return 100 - (100 / (1 + rs));
  },
  
  calculateMACD: (prices: number[], fast: number = 12, slow: number = 26, signal: number = 9) => {
    // حساب مؤشر MACD
    const emaFast = calculateEMA(prices, fast);
    const emaSlow = calculateEMA(prices, slow);
    const macdLine = emaFast[emaFast.length - 1] - emaSlow[emaSlow.length - 1];
    
    return {
      macd: macdLine,
      signal: calculateEMA([macdLine], signal)[0],
      histogram: macdLine - calculateEMA([macdLine], signal)[0]
    };
  },
  
  calculateBollingerBands: (prices: number[], period: number = 20, stdDev: number = 2) => {
    // حساب نطاقات بولينجر
    const sma = calculateSMA(prices, period);
    const variance = prices.slice(-period).reduce((sum, price) => {
      return sum + Math.pow(price - sma, 2);
    }, 0) / period;
    
    const standardDeviation = Math.sqrt(variance);
    
    return {
      upper: sma + (standardDeviation * stdDev),
      middle: sma,
      lower: sma - (standardDeviation * stdDev)
    };
  }
};

function calculateEMA(prices: number[], period: number): number[] {
  const k = 2 / (period + 1);
  const ema = [prices[0]];
  
  for (let i = 1; i < prices.length; i++) {
    ema.push(prices[i] * k + ema[i - 1] * (1 - k));
  }
  
  return ema;
}

function calculateSMA(prices: number[], period: number): number {
  const sum = prices.slice(-period).reduce((a, b) => a + b, 0);
  return sum / period;
}

// استراتيجيات التداول المتقدمة
export const tradingStrategies = {
  carryTrade: {
    name: 'استراتيجية الكاري تريد',
    description: 'الاستفادة من فروق أسعار الفائدة بين العملات',
    riskLevel: 'متوسط',
    timeFrame: 'طويل الأمد',
    bestPairs: ['USD/SAR', 'EUR/SAR'],
    currentOpportunity: 'قوية'
  },
  
  momentum: {
    name: 'استراتيجية الزخم',
    description: 'تتبع الاتجاهات القوية والدخول مع حركة السوق',
    riskLevel: 'عالي',
    timeFrame: 'قصير إلى متوسط الأمد',
    bestPairs: ['BTC/USD', 'ETH/USD'],
    currentOpportunity: 'متوسطة'
  },
  
  meanReversion: {
    name: 'استراتيجية العودة للمتوسط',
    description: 'الشراء عند الانخفاض والبيع عند الارتفاع الزائد',
    riskLevel: 'متوسط',
    timeFrame: 'قصير الأمد',
    bestPairs: ['GBP/SAR', 'AED/SAR'],
    currentOpportunity: 'ضعيفة'
  }
};

// تحليل المخاطر المتقدم
export const riskAnalysis = {
  volatilityRanking: {
    low: ['USD/SAR', 'AED/SAR', 'QAR/SAR'],
    medium: ['EUR/SAR', 'ETH/USD'],
    high: ['GBP/SAR', 'BTC/USD'],
    veryHigh: []
  },
  
  correlationMatrix: {
    'USD/SAR': { 'EUR/SAR': -0.25, 'GBP/SAR': 0.15, 'AED/SAR': 0.95 },
    'EUR/SAR': { 'GBP/SAR': 0.72, 'AED/SAR': -0.18 },
    'GBP/SAR': { 'AED/SAR': 0.22 }
  },
  
  economicCalendar: [
    {
      date: '2025-11-18',
      event: 'بيانات التضخم الأمريكية',
      impact: 'عالي',
      affectedCurrencies: ['USD/SAR'],
      expected: 'انخفاض طفيف'
    },
    {
      date: '2025-11-20',
      event: 'اجتماع البنك المركزي الأوروبي',
      impact: 'عالي',
      affectedCurrencies: ['EUR/SAR'],
      expected: 'ثبات أسعار الفائدة'
    }
  ]
};