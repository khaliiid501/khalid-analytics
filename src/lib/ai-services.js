// AI Services Integration
import { OpenAI } from 'openai';
import { Client } from '@notionhq/client';
import axios from 'axios';

// OpenAI Configuration
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Notion Configuration
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

// Perplexity Configuration
const perplexityAPI = axios.create({
  baseURL: 'https://api.perplexity.ai',
  headers: {
    'Authorization': `Bearer ${process.env.PERPLEXITY_API_KEY}`,
    'Content-Type': 'application/json',
  },
});

// AI Financial Analysis Service
export class AIFinancialAnalyzer {
  
  // تحليل السوق باستخدام OpenAI
  static async analyzeMarketTrends(stockData) {
    try {
      const prompt = `
        قم بتحليل البيانات التالية للأسهم وتقديم توصيات استثمارية:
        ${JSON.stringify(stockData)}
        
        يرجى تقديم:
        1. تحليل الاتجاه العام
        2. نقاط القوة والضعف
        3. توصيات الشراء/البيع
        4. التوقعات المستقبلية
        
        الرجاء الرد باللغة العربية وبصيغة JSON منظمة.
      `;

      const completion = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 1000,
        temperature: 0.7,
      });

      return JSON.parse(completion.choices[0].message.content);
    } catch (error) {
      console.error('خطأ في تحليل OpenAI:', error);
      return null;
    }
  }

  // البحث في الأخبار المالية باستخدام Perplexity
  static async getMarketNews(query = "Saudi stock market news") {
    try {
      const response = await perplexityAPI.post('/chat/completions', {
        model: 'llama-3.1-sonar-large-128k-online',
        messages: [
          {
            role: 'system',
            content: 'أنت محلل مالي متخصص. قم بتقديم آخر الأخبار المالية وتأثيرها على الأسواق.'
          },
          {
            role: 'user',
            content: `ما هي آخر الأخبار المالية المؤثرة على السوق السعودي؟ ${query}`
          }
        ],
        max_tokens: 500,
      });

      return response.data.choices[0].message.content;
    } catch (error) {
      console.error('خطأ في Perplexity API:', error);
      return "عذراً، لا يمكن جلب الأخبار حالياً";
    }
  }

  // توليد تقرير شامل
  static async generateInvestmentReport(portfolioData) {
    try {
      const marketAnalysis = await this.analyzeMarketTrends(portfolioData);
      const marketNews = await this.getMarketNews();
      
      return {
        timestamp: new Date().toISOString(),
        analysis: marketAnalysis,
        news: marketNews,
        recommendations: await this.generateRecommendations(portfolioData),
        riskAssessment: await this.assessRisk(portfolioData)
      };
    } catch (error) {
      console.error('خطأ في توليد التقرير:', error);
      return null;
    }
  }

  // تقييم المخاطر
  static async assessRisk(portfolioData) {
    const prompt = `
      قم بتقييم مستوى المخاطر للمحفظة التالية:
      ${JSON.stringify(portfolioData)}
      
      قدم تقييماً يشمل:
      1. مستوى المخاطر (منخفض/متوسط/عالي)
      2. العوامل المؤثرة على المخاطر
      3. توصيات للتقليل من المخاطر
      4. نسبة المخاطر المقترحة لكل فئة استثمار
    `;

    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 800,
      });

      return completion.choices[0].message.content;
    } catch (error) {
      console.error('خطأ في تقييم المخاطر:', error);
      return "غير متوفر حالياً";
    }
  }

  // توليد التوصيات
  static async generateRecommendations(portfolioData) {
    const prompt = `
      بناءً على المحفظة الاستثمارية التالية، قدم توصيات محددة:
      ${JSON.stringify(portfolioData)}
      
      شمل:
      1. أسهم مقترحة للشراء
      2. أسهم مقترحة للبيع
      3. إعادة توزيع المحفظة
      4. الأهداف السعرية
      
      قدم التوصيات في صيغة JSON منظمة باللغة العربية.
    `;

    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 1000,
      });

      return JSON.parse(completion.choices[0].message.content);
    } catch (error) {
      console.error('خطأ في توليد التوصيات:', error);
      return [];
    }
  }
}

// Notion Integration Service
export class NotionIntegration {
  
  // حفظ التحليل في Notion
  static async saveAnalysisToNotion(analysis) {
    try {
      const response = await notion.pages.create({
        parent: { database_id: process.env.NOTION_DATABASE_ID },
        properties: {
          'Title': {
            title: [
              {
                text: {
                  content: `تحليل استثماري - ${new Date().toLocaleDateString('ar-SA')}`
                }
              }
            ]
          },
          'Date': {
            date: {
              start: new Date().toISOString().split('T')[0]
            }
          },
          'Analysis': {
            rich_text: [
              {
                text: {
                  content: JSON.stringify(analysis, null, 2)
                }
              }
            ]
          }
        }
      });

      return response.id;
    } catch (error) {
      console.error('خطأ في حفظ البيانات في Notion:', error);
      return null;
    }
  }

  // جلب التحليلات السابقة من Notion
  static async getPreviousAnalyses() {
    try {
      const response = await notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID,
        sorts: [
          {
            property: 'Date',
            direction: 'descending'
          }
        ]
      });

      return response.results;
    } catch (error) {
      console.error('خطأ في جلب البيانات من Notion:', error);
      return [];
    }
  }
}

// Real-time Data Service
export class MarketDataService {
  
  // جلب بيانات السوق الحية
  static async getLiveMarketData() {
    try {
      // هنا يمكن ربط API حقيقي للبورصة السعودية
      const response = await axios.get('https://api.example-market.com/live-data', {
        headers: {
          'Authorization': `Bearer ${process.env.MARKET_API_KEY}`
        }
      });

      return response.data;
    } catch (error) {
      console.error('خطأ في جلب بيانات السوق:', error);
      // إرجاع بيانات تجريبية في حالة الخطأ
      return this.getMockMarketData();
    }
  }

  // بيانات تجريبية للتطوير
  static getMockMarketData() {
    return {
      timestamp: new Date().toISOString(),
      indices: {
        tasi: { value: 11500, change: +150, changePercent: 1.32 },
        nomu: { value: 4200, change: -45, changePercent: -1.06 }
      },
      topGainers: [
        { symbol: 'SABIC', price: 89.5, change: +3.2, volume: 1250000 },
        { symbol: 'ARAMCO', price: 32.1, change: +1.8, volume: 2100000 },
        { symbol: 'STC', price: 45.7, change: +2.1, volume: 890000 }
      ],
      topLosers: [
        { symbol: 'NCB', price: 67.3, change: -2.5, volume: 750000 },
        { symbol: 'RAJHI', price: 178.2, change: -4.1, volume: 420000 }
      ]
    };
  }
}

export default {
  AIFinancialAnalyzer,
  NotionIntegration,
  MarketDataService
};