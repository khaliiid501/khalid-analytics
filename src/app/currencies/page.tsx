'use client';

import { useState } from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  Activity, 
  DollarSign, 
  AlertTriangle, 
  Brain,
  Shield,
  Zap
} from 'lucide-react';

const CurrencyAnalysisPage = () => {
  const [activeTab, setActiveTab] = useState<'major' | 'crypto' | 'emerging'>('major');

  // Simplified currency data
  const currencyData = {
    major: [
      {
        pair: 'USD/SAR',
        name: 'الدولار الأمريكي / الريال السعودي',
        currentRate: 3.7501,
        change24h: 0.0002,
        changePercent: 0.01,
        volume24h: '2.8B',
        volatility: 'منخفضة',
        trend: 'عرضي',
        rsi: 45.2,
        support: 3.7450,
        resistance: 3.7550,
        confidence: 85
      },
      {
        pair: 'EUR/SAR',
        name: 'اليورو / الريال السعودي',
        currentRate: 4.0892,
        change24h: 0.0061,
        changePercent: 0.15,
        volume24h: '1.9B',
        volatility: 'متوسطة',
        trend: 'صاعد',
        rsi: 58.7,
        support: 4.0650,
        resistance: 4.1200,
        confidence: 72
      },
      {
        pair: 'GBP/SAR',
        name: 'الجنيه الإسترليني / الريال السعودي',
        currentRate: 4.7234,
        change24h: -0.0123,
        changePercent: -0.26,
        volume24h: '1.1B',
        volatility: 'عالية',
        trend: 'هابط',
        rsi: 34.8,
        support: 4.6800,
        resistance: 4.7800,
        confidence: 61
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
        volatility: 'عالية جداً',
        trend: 'صاعد قوي',
        rsi: 72.3,
        support: 82000,
        resistance: 92000,
        confidence: 78
      },
      {
        pair: 'ETH/USD',
        name: 'الإيثيريوم',
        currentRate: 3245.80,
        change24h: 89.45,
        changePercent: 2.84,
        volume24h: '18.7B',
        volatility: 'عالية',
        trend: 'صاعد',
        rsi: 65.1,
        support: 3100,
        resistance: 3500,
        confidence: 82
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
        trend: 'مستقر',
        rsi: 50.0,
        support: 1.0180,
        resistance: 1.0250,
        confidence: 95
      }
    ]
  };

  const tradingStrategies = [
    {
      name: 'استراتيجية الكاري تريد',
      description: 'الاستفادة من فروق أسعار الفائدة بين العملات',
      riskLevel: 'متوسط',
      timeFrame: 'طويل الأمد',
      opportunity: 'قوية'
    },
    {
      name: 'استراتيجية الزخم',
      description: 'تتبع الاتجاهات القوية والدخول مع حركة السوق',
      riskLevel: 'عالي',
      timeFrame: 'قصير إلى متوسط الأمد',
      opportunity: 'متوسطة'
    },
    {
      name: 'استراتيجية العودة للمتوسط',
      description: 'الشراء عند الانخفاض والبيع عند الارتفاع الزائد',
      riskLevel: 'متوسط',
      timeFrame: 'قصير الأمد',
      opportunity: 'ضعيفة'
    }
  ];

  const formatPrice = (price: number) => {
    if (price > 1000) {
      return price.toLocaleString('ar-SA', { 
        minimumFractionDigits: 2, 
        maximumFractionDigits: 2 
      });
    }
    return price.toLocaleString('ar-SA', { 
      minimumFractionDigits: 4, 
      maximumFractionDigits: 4 
    });
  };

  const getChangeColor = (change: number) => {
    return change >= 0 ? 'text-emerald-500' : 'text-crimson-500';
  };

  const getTrendIcon = (trend: string) => {
    if (trend.includes('صاعد')) return <TrendingUp className="w-5 h-5 text-emerald-500" />;
    if (trend.includes('هابط')) return <TrendingDown className="w-5 h-5 text-crimson-500" />;
    return <Activity className="w-5 h-5 text-gulf-500" />;
  };

  const getVolatilityBadge = (volatility: string) => {
    const colors: { [key: string]: string } = {
      'منخفضة': 'bg-emerald-100 text-emerald-800',
      'منخفضة جداً': 'bg-emerald-100 text-emerald-800',
      'متوسطة': 'bg-yellow-100 text-yellow-800',
      'عالية': 'bg-orange-100 text-orange-800',
      'عالية جداً': 'bg-crimson-100 text-crimson-800'
    };
    return colors[volatility] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gulf-50 via-white to-emerald-50">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gulf-600 to-emerald-600 bg-clip-text text-transparent mb-4">
            تحليل العملات المتقدم 💱
          </h1>
          <p className="text-xl text-gulf-600 max-w-3xl mx-auto">
            تحليل شامل ومتطور للعملات العالمية والرقمية مع توقعات الذكاء الاصطناعي والتحليل التقني المتقدم
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white rounded-xl p-1 shadow-lg border border-gulf-200">
            {[
              { key: 'major', label: 'العملات الرئيسية', icon: DollarSign },
              { key: 'crypto', label: 'العملات الرقمية', icon: Zap },
              { key: 'emerging', label: 'العملات الخليجية', icon: Shield }
            ].map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key as typeof activeTab)}
                className={`flex items-center space-x-2 rtl:space-x-reverse px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === key
                    ? 'bg-gradient-to-r from-gulf-500 to-emerald-500 text-white shadow-lg'
                    : 'text-gulf-600 hover:bg-gulf-50'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Currency Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
          {currencyData[activeTab]?.map((currency) => (
            <div 
              key={currency.pair}
              className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-gulf-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gulf-800 mb-1">{currency.pair}</h3>
                  <p className="text-sm text-gulf-600">{currency.name}</p>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  {getTrendIcon(currency.trend)}
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    getVolatilityBadge(currency.volatility)
                  }`}>
                    {currency.volatility}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gulf-600 mb-1">السعر الحالي</p>
                  <p className="text-2xl font-bold text-gulf-800">{formatPrice(currency.currentRate)}</p>
                </div>
                <div>
                  <p className="text-sm text-gulf-600 mb-1">التغير 24 ساعة</p>
                  <p className={`text-lg font-semibold ${getChangeColor(currency.change24h)}`}>
                    {currency.changePercent > 0 ? '+' : ''}{currency.changePercent.toFixed(2)}%
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="text-center p-2 bg-gulf-50 rounded-lg">
                  <p className="text-xs text-gulf-600">RSI</p>
                  <p className="font-semibold text-gulf-800">{currency.rsi}</p>
                </div>
                <div className="text-center p-2 bg-emerald-50 rounded-lg">
                  <p className="text-xs text-emerald-600">الدعم</p>
                  <p className="font-semibold text-emerald-800">{formatPrice(currency.support)}</p>
                </div>
                <div className="text-center p-2 bg-crimson-50 rounded-lg">
                  <p className="text-xs text-crimson-600">المقاومة</p>
                  <p className="font-semibold text-crimson-800">{formatPrice(currency.resistance)}</p>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <Brain className="w-4 h-4 text-gold-500" />
                  <span className="text-sm font-medium">ثقة التنبؤ: {currency.confidence}%</span>
                </div>
                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                  <div className={`w-2 h-2 rounded-full ${
                    currency.trend.includes('صاعد') ? 'bg-emerald-400' : 
                    currency.trend.includes('هابط') ? 'bg-crimson-400' : 'bg-gulf-400'
                  }`} />
                  <span className="text-xs text-gulf-600">اتجاه عام</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gulf-200">
                <div className="flex justify-between text-sm">
                  <span className="text-gulf-600">الحجم اليومي:</span>
                  <span className="font-medium text-gulf-800">{currency.volume24h}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trading Strategies Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gulf-800 mb-8 text-center">
            استراتيجيات التداول العبقرية 🧠
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tradingStrategies.map((strategy, index) => (
              <div 
                key={index}
                className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-gulf-200/50 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-gold-400 to-emerald-400 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gulf-800 mb-2">{strategy.name}</h3>
                  <p className="text-gulf-600 text-sm mb-4">{strategy.description}</p>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gulf-600">مستوى المخاطرة:</span>
                    <span className="font-medium">{strategy.riskLevel}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gulf-600">الإطار الزمني:</span>
                    <span className="font-medium">{strategy.timeFrame}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gulf-600">الفرصة الحالية:</span>
                    <span className={`font-medium ${
                      strategy.opportunity === 'قوية' ? 'text-emerald-600' :
                      strategy.opportunity === 'متوسطة' ? 'text-yellow-600' : 'text-crimson-600'
                    }`}>
                      {strategy.opportunity}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Risk Analysis */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gulf-800 mb-8 text-center">
            تحليل المخاطر المتطور ⚠️
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-gulf-200/50">
              <h3 className="text-xl font-bold text-gulf-800 mb-4 flex items-center">
                <AlertTriangle className="w-5 h-5 ml-2 text-gold-500" />
                تصنيف التقلبات
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-emerald-600">منخفض</span>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-gulf-100 text-gulf-700 rounded text-xs">USD/SAR</span>
                    <span className="px-2 py-1 bg-gulf-100 text-gulf-700 rounded text-xs">AED/SAR</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-yellow-600">متوسط</span>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-gulf-100 text-gulf-700 rounded text-xs">EUR/SAR</span>
                    <span className="px-2 py-1 bg-gulf-100 text-gulf-700 rounded text-xs">ETH/USD</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-orange-600">عالي</span>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-gulf-100 text-gulf-700 rounded text-xs">GBP/SAR</span>
                    <span className="px-2 py-1 bg-gulf-100 text-gulf-700 rounded text-xs">BTC/USD</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-gulf-200/50">
              <h3 className="text-xl font-bold text-gulf-800 mb-4 flex items-center">
                <Activity className="w-5 h-5 ml-2 text-gold-500" />
                التقويم الاقتصادي
              </h3>
              <div className="space-y-4">
                <div className="p-3 bg-gulf-50 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-sm font-medium text-gulf-800">بيانات التضخم الأمريكية</span>
                    <span className="text-xs px-2 py-1 rounded bg-crimson-100 text-crimson-800">عالي</span>
                  </div>
                  <p className="text-xs text-gulf-600 mb-1">18 نوفمبر 2024</p>
                  <p className="text-xs text-gulf-500">المتوقع: انخفاض طفيف</p>
                </div>
                <div className="p-3 bg-gulf-50 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-sm font-medium text-gulf-800">اجتماع البنك المركزي الأوروبي</span>
                    <span className="text-xs px-2 py-1 rounded bg-yellow-100 text-yellow-800">متوسط</span>
                  </div>
                  <p className="text-xs text-gulf-600 mb-1">20 نوفمبر 2024</p>
                  <p className="text-xs text-gulf-500">المتوقع: ثبات أسعار الفائدة</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyAnalysisPage;