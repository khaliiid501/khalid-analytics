'use client';

import { useState } from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  Activity, 
  Fuel, 
  Crown,
  Wheat,
  Factory,
  Zap,
  AlertTriangle,
  Target,
  Brain,
  BarChart3,
  DollarSign
} from 'lucide-react';

const CommoditiesAnalysisPage = () => {
  const [activeTab, setActiveTab] = useState<'energy' | 'metals' | 'agriculture' | 'saudi'>('energy');

  // Simplified commodities data
  const commoditiesData = {
    energy: [
      {
        name: 'النفط الخام برنت',
        symbol: 'BRENT',
        currentPrice: 82.45,
        change24h: 1.23,
        changePercent: 1.51,
        volume24h: '890M',
        unit: 'دولار/برميل',
        volatility: 'متوسطة',
        trend: 'صاعد',
        support: 78.50,
        resistance: 87.20,
        saudiImpact: 'عالي جداً',
        prediction: 'ارتفاع متوقع',
        confidence: 78
      },
      {
        name: 'الغاز الطبيعي',
        symbol: 'NATGAS',
        currentPrice: 2.89,
        change24h: 0.08,
        changePercent: 2.84,
        volume24h: '145M',
        unit: 'دولار/مليون وحدة',
        volatility: 'عالية',
        trend: 'عرضي',
        support: 2.65,
        resistance: 3.15,
        saudiImpact: 'متوسط',
        prediction: 'استقرار نسبي',
        confidence: 65
      }
    ],
    metals: [
      {
        name: 'الذهب',
        symbol: 'GOLD',
        currentPrice: 2654.80,
        change24h: 12.45,
        changePercent: 0.47,
        volume24h: '2.8B',
        unit: 'دولار/أونصة',
        volatility: 'منخفضة',
        trend: 'صاعد قوي',
        support: 2620.00,
        resistance: 2700.00,
        saudiImpact: 'متوسط',
        prediction: 'صاعد طويل الأمد',
        confidence: 85
      },
      {
        name: 'الفضة',
        symbol: 'SILVER',
        currentPrice: 31.85,
        change24h: 0.67,
        changePercent: 2.14,
        volume24h: '1.1B',
        unit: 'دولار/أونصة',
        volatility: 'متوسطة',
        trend: 'صاعد',
        support: 29.50,
        resistance: 34.20,
        saudiImpact: 'منخفض',
        prediction: 'تقلب متوقع',
        confidence: 72
      },
      {
        name: 'النحاس',
        symbol: 'COPPER',
        currentPrice: 9.12,
        change24h: -0.08,
        changePercent: -0.87,
        volume24h: '890M',
        unit: 'دولار/رطل',
        volatility: 'عالية',
        trend: 'هابط',
        support: 8.95,
        resistance: 9.45,
        saudiImpact: 'عالي',
        prediction: 'انتعاش متوقع',
        confidence: 69
      }
    ],
    agriculture: [
      {
        name: 'القمح',
        symbol: 'WHEAT',
        currentPrice: 5.67,
        change24h: 0.12,
        changePercent: 2.16,
        volume24h: '450M',
        unit: 'دولار/بوشل',
        volatility: 'عالية',
        trend: 'صاعد',
        support: 5.40,
        resistance: 6.20,
        saudiImpact: 'عالي جداً',
        prediction: 'تقلب موسمي',
        confidence: 61
      }
    ],
    saudi: [
      {
        name: 'مؤشر البتروكيماويات',
        symbol: 'SABIC',
        currentPrice: 2845.60,
        change24h: 28.90,
        changePercent: 1.03,
        volume24h: '320M',
        unit: 'نقطة',
        volatility: 'متوسطة',
        trend: 'صاعد',
        support: 2780.00,
        resistance: 2920.00,
        saudiImpact: 'محوري',
        prediction: 'نمو مستدام',
        confidence: 88
      },
      {
        name: 'مؤشر الطاقة المتجددة',
        symbol: 'RENEWABLE_SA',
        currentPrice: 156.80,
        change24h: 4.20,
        changePercent: 2.75,
        volume24h: '85M',
        unit: 'نقطة',
        volatility: 'متوسطة',
        trend: 'صاعد قوي',
        support: 148.00,
        resistance: 165.00,
        saudiImpact: 'استراتيجي',
        prediction: 'نمو طويل الأمد',
        confidence: 92
      }
    ]
  };

  const investmentStrategies = [
    {
      name: 'المحفظة المحافظة',
      allocation: {
        gold: 40,
        oil: 20,
        silver: 15,
        agriculture: 15,
        copper: 10
      },
      riskLevel: 'منخفض',
      expectedReturn: '6-9%',
      timeHorizon: '5+ سنوات',
      shariaCompliance: 95
    },
    {
      name: 'المحفظة المتوازنة',
      allocation: {
        oil: 35,
        gold: 25,
        naturalGas: 15,
        copper: 10,
        silver: 10,
        agriculture: 5
      },
      riskLevel: 'متوسط',
      expectedReturn: '8-12%',
      timeHorizon: '3-7 سنوات',
      shariaCompliance: 90
    },
    {
      name: 'المحفظة القوية',
      allocation: {
        oil: 40,
        naturalGas: 20,
        copper: 15,
        silver: 15,
        agriculture: 10
      },
      riskLevel: 'عالي',
      expectedReturn: '12-18%',
      timeHorizon: '1-5 سنوات',
      shariaCompliance: 85
    }
  ];

  const formatPrice = (price: number) => {
    return price.toLocaleString('ar-SA', { 
      minimumFractionDigits: 2, 
      maximumFractionDigits: 2 
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

  const getImpactColor = (impact: string) => {
    const colors: { [key: string]: string } = {
      'عالي جداً': 'text-crimson-600 bg-crimson-100',
      'عالي': 'text-orange-600 bg-orange-100',
      'متوسط': 'text-yellow-600 bg-yellow-100',
      'منخفض': 'text-emerald-600 bg-emerald-100',
      'محوري': 'text-purple-600 bg-purple-100',
      'استراتيجي': 'text-indigo-600 bg-indigo-100'
    };
    return colors[impact] || 'text-gray-600 bg-gray-100';
  };

  const getShariaColor = (compliance: number) => {
    if (compliance >= 95) return 'text-emerald-600';
    if (compliance >= 85) return 'text-yellow-600';
    return 'text-orange-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gulf-50 via-white to-emerald-50">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gulf-600 to-emerald-600 bg-clip-text text-transparent mb-4">
            تحليل السلع العالمية 📊
          </h1>
          <p className="text-xl text-gulf-600 max-w-3xl mx-auto">
            تحليل متطور للسلع الأساسية مع التركيز على تأثيرها على الاقتصاد السعودي ورؤية 2030
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white rounded-xl p-1 shadow-lg border border-gulf-200">
            {[
              { key: 'energy', label: 'الطاقة', icon: Fuel },
              { key: 'metals', label: 'المعادن', icon: Crown },
              { key: 'agriculture', label: 'الزراعة', icon: Wheat },
              { key: 'saudi', label: 'السعودي', icon: Factory }
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

        {/* Commodities Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
          {commoditiesData[activeTab]?.map((commodity) => (
            <div 
              key={commodity.symbol}
              className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-gulf-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gulf-800 mb-1">{commodity.name}</h3>
                  <p className="text-sm text-gulf-600">{commodity.symbol}</p>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  {getTrendIcon(commodity.trend)}
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(commodity.saudiImpact)}`}>
                    {commodity.saudiImpact}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gulf-600 mb-1">السعر الحالي</p>
                  <p className="text-2xl font-bold text-gulf-800">{formatPrice(commodity.currentPrice)}</p>
                  <p className="text-xs text-gulf-500">{commodity.unit}</p>
                </div>
                <div>
                  <p className="text-sm text-gulf-600 mb-1">التغير 24 ساعة</p>
                  <p className={`text-lg font-semibold ${getChangeColor(commodity.change24h)}`}>
                    {commodity.changePercent > 0 ? '+' : ''}{commodity.changePercent.toFixed(2)}%
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="text-center p-2 bg-emerald-50 rounded-lg">
                  <p className="text-xs text-emerald-600">الدعم</p>
                  <p className="font-semibold text-emerald-800">{formatPrice(commodity.support)}</p>
                </div>
                <div className="text-center p-2 bg-crimson-50 rounded-lg">
                  <p className="text-xs text-crimson-600">المقاومة</p>
                  <p className="font-semibold text-crimson-800">{formatPrice(commodity.resistance)}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gulf-600">التوقع:</span>
                  <span className="text-sm font-medium text-gulf-800">{commodity.prediction}</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-1 rtl:space-x-reverse">
                    <Brain className="w-4 h-4 text-gold-500" />
                    <span className="text-sm text-gulf-600">الثقة:</span>
                  </div>
                  <span className="text-sm font-medium text-gulf-800">{commodity.confidence}%</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gulf-500">الحجم اليومي:</span>
                  <span className="font-medium text-gulf-700">{commodity.volume24h}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Investment Strategies Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gulf-800 mb-8 text-center">
            استراتيجيات الاستثمار الذكية 💎
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {investmentStrategies.map((strategy, index) => (
              <div 
                key={index}
                className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-gulf-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gulf-800 mb-3">{strategy.name}</h3>
                  
                  <div className="space-y-2 mb-4">
                    {Object.entries(strategy.allocation).map(([commodity, percentage]) => (
                      <div key={commodity} className="flex justify-between items-center">
                        <span className="text-sm text-gulf-600 capitalize">
                          {commodity === 'gold' ? 'الذهب' :
                           commodity === 'oil' ? 'النفط' :
                           commodity === 'silver' ? 'الفضة' :
                           commodity === 'agriculture' ? 'الزراعة' :
                           commodity === 'copper' ? 'النحاس' :
                           commodity === 'naturalGas' ? 'الغاز الطبيعي' : commodity}
                        </span>
                        <div className="flex items-center space-x-2 rtl:space-x-reverse">
                          <div className="w-20 h-2 bg-gulf-200 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-gold-400 to-emerald-400"
                              style={{ width: `${percentage}%` }}
                            />
                          </div>
                          <span className="text-sm font-medium text-gulf-800">{percentage}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 text-sm border-t border-gulf-200 pt-4">
                  <div className="flex justify-between">
                    <span className="text-gulf-600">مستوى المخاطرة:</span>
                    <span className="font-medium">{strategy.riskLevel}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gulf-600">العائد المتوقع:</span>
                    <span className="font-medium text-emerald-600">{strategy.expectedReturn}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gulf-600">الإطار الزمني:</span>
                    <span className="font-medium">{strategy.timeHorizon}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gulf-600">التوافق الشرعي:</span>
                    <span className={`font-medium ${getShariaColor(strategy.shariaCompliance)}`}>
                      {strategy.shariaCompliance}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Market Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-gulf-200/50">
            <h3 className="text-xl font-bold text-gulf-800 mb-4 flex items-center">
              <Target className="w-5 h-5 ml-2 text-gold-500" />
              تأثير رؤية 2030
            </h3>
            <div className="space-y-4">
              <div className="p-3 bg-emerald-50 rounded-lg">
                <h4 className="font-semibold text-emerald-800 mb-1">الطاقة المتجددة</h4>
                <p className="text-sm text-emerald-700">استثمار 200 مليار ريال لتحقيق 50% من الطاقة المتجددة</p>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-1">نيوم والمدن الذكية</h4>
                <p className="text-sm text-blue-700">طلب هائل على النحاس والمعادن الصناعية</p>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-1">الأمن الغذائي</h4>
                <p className="text-sm text-purple-700">تنويع مصادر الواردات الزراعية واستثمار التقنيات الحديثة</p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-gulf-200/50">
            <h3 className="text-xl font-bold text-gulf-800 mb-4 flex items-center">
              <AlertTriangle className="w-5 h-5 ml-2 text-gold-500" />
              التحديات والفرص
            </h3>
            <div className="space-y-4">
              <div className="p-3 bg-yellow-50 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-1">تحول الطاقة العالمي</h4>
                <p className="text-sm text-yellow-700">تحدي على المدى الطويل، فرصة في البتروكيماويات</p>
              </div>
              <div className="p-3 bg-crimson-50 rounded-lg">
                <h4 className="font-semibold text-crimson-800 mb-1">تقلبات أسعار النفط</h4>
                <p className="text-sm text-crimson-700">ضرورة التنويع وإدارة المخاطر المالية</p>
              </div>
              <div className="p-3 bg-indigo-50 rounded-lg">
                <h4 className="font-semibold text-indigo-800 mb-1">الابتكار التقني</h4>
                <p className="text-sm text-indigo-700">فرص في التعدين المستدام والزراعة الذكية</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommoditiesAnalysisPage;