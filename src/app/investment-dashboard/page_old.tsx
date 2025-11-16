'use client';

import { useState } from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  Activity, 
  DollarSign, 
  PieChart,
  AlertTriangle,
  Target,
  Brain,
  Star,
  Zap,
  Shield,
  Crown,
  Calculator,
  BarChart3,
  Bell
} from 'lucide-react';

const InvestmentDashboardPage = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState<'1D' | '1W' | '1M' | '3M' | '1Y'>('1M');

  // Portfolio data
  const portfolioData = {
    totalValue: 2850000,
    dailyChange: 45000,
    dailyChangePercent: 1.6,
    totalReturn: 285000,
    totalReturnPercent: 11.1,
    allocation: {
      stocks: 45,
      commodities: 25,
      currencies: 15,
      bonds: 10,
      crypto: 5
    }
  };

  const topOpportunities = [
    {
      symbol: 'ARAMCO',
      name: 'أرامكو السعودية',
      score: 95,
      potential: '+18%',
      risk: 'منخفض',
      timeframe: '6-12 شهر',
      reasons: ['رؤية 2030', 'تنويع الأعمال', 'توزيعات عالية'],
      category: 'أسهم'
    },
    {
      symbol: 'GOLD',
      name: 'الذهب',
      score: 88,
      potential: '+12%',
      risk: 'منخفض',
      timeframe: '3-6 شهر',
      reasons: ['تضخم عالمي', 'عدم اليقين الجيوسياسي', 'طلب البنوك المركزية'],
      category: 'سلع'
    },
    {
      symbol: 'BTC',
      name: 'البيتكوين',
      score: 76,
      potential: '+35%',
      risk: 'عالي',
      timeframe: '1-3 شهر',
      reasons: ['التبني المؤسسي', 'ETFs جديدة', 'نقص المعروض'],
      category: 'رقمي'
    }
  ];

  const smartAlerts = [
    {
      type: 'فرصة',
      icon: <Target className="w-4 h-4 text-emerald-500" />,
      title: 'فرصة شراء ذهبية',
      message: 'انخفض سعر الذهب 2% اليوم - فرصة دخول ممتازة',
      time: 'منذ 15 دقيقة',
      priority: 'عالي'
    },
    {
      type: 'تحذير',
      icon: <AlertTriangle className="w-4 h-4 text-orange-500" />,
      title: 'تقلب في أسعار النفط',
      message: 'تذبذب عالي متوقع بسبب اجتماع أوبك+',
      time: 'منذ ساعة',
      priority: 'متوسط'
    },
    {
      type: 'إنجاز',
      icon: <Star className="w-4 h-4 text-gold-500" />,
      title: 'تحقيق الهدف',
      message: 'محفظتك حققت عائد 15% كما هو مخطط',
      time: 'منذ يوم',
      priority: 'منخفض'
    }
  ];

  const marketSentiment = {
    overall: 'إيجابي',
    score: 72,
    factors: [
      { name: 'الأسهم السعودية', sentiment: 'إيجابي جداً', score: 85 },
      { name: 'النفط والطاقة', sentiment: 'إيجابي', score: 78 },
      { name: 'الذهب والمعادن', sentiment: 'محايد', score: 65 },
      { name: 'العملات الرقمية', sentiment: 'متقلب', score: 55 }
    ]
  };

  const geniusStrategies = [
    {
      name: 'استراتيجية رؤية 2030',
      description: 'الاستثمار في قطاعات رؤية 2030 الاستراتيجية',
      expectedReturn: '22-28%',
      riskLevel: 'متوسط',
      sectors: ['الطاقة المتجددة', 'التقنية', 'السياحة', 'الترفيه'],
      allocation: { stocks: 60, reits: 25, bonds: 15 },
      timeline: '3-5 سنوات'
    },
    {
      name: 'استراتيجية التضخم الذكية',
      description: 'الحماية من التضخم مع تحقيق عوائد متفوقة',
      expectedReturn: '15-20%',
      riskLevel: 'منخفض إلى متوسط',
      sectors: ['المعادن الثمينة', 'العقارات', 'السلع الأساسية'],
      allocation: { gold: 30, reits: 40, commodities: 30 },
      timeline: '2-4 سنوات'
    },
    {
      name: 'استراتيجية التقنية المالية',
      description: 'الاستثمار في مستقبل التقنية المالية',
      expectedReturn: '30-45%',
      riskLevel: 'عالي',
      sectors: ['البلوك تشين', 'الذكاء الاصطناعي', 'المدفوعات الرقمية'],
      allocation: { crypto: 40, techStocks: 50, startups: 10 },
      timeline: '1-3 سنوات'
    }
  ];

  const formatCurrency = (amount: number) => {
    return amount.toLocaleString('ar-SA') + ' ريال';
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-emerald-600 bg-emerald-100';
    if (score >= 80) return 'text-green-600 bg-green-100';
    if (score >= 70) return 'text-yellow-600 bg-yellow-100';
    if (score >= 60) return 'text-orange-600 bg-orange-100';
    return 'text-crimson-600 bg-crimson-100';
  };

  const getRiskColor = (risk: string) => {
    const colors: { [key: string]: string } = {
      'منخفض': 'text-emerald-600 bg-emerald-100',
      'متوسط': 'text-yellow-600 bg-yellow-100',
      'عالي': 'text-orange-600 bg-orange-100'
    };
    return colors[risk] || 'text-gray-600 bg-gray-100';
  };

  const getSentimentColor = (sentiment: string) => {
    if (sentiment.includes('إيجابي')) return 'text-emerald-600';
    if (sentiment.includes('محايد')) return 'text-yellow-600';
    if (sentiment.includes('متقلب')) return 'text-orange-600';
    return 'text-crimson-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gulf-50 via-white to-emerald-50">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gulf-600 to-emerald-600 bg-clip-text text-transparent mb-4">
            لوحة التحكم الاستثمارية الذكية 🧠
          </h1>
          <p className="text-xl text-gulf-600 max-w-3xl mx-auto">
            إدارة ذكية للاستثمارات مع تحليل متقدم وتوصيات عبقرية مدعومة بالذكاء الاصطناعي
          </p>
        </div>

        {/* Portfolio Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-gulf-200/50">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gulf-600">إجمالي المحفظة</span>
              <PieChart className="w-4 h-4 text-gulf-500" />
            </div>
            <p className="text-2xl font-bold text-gulf-800">{formatCurrency(portfolioData.totalValue)}</p>
            <p className={`text-sm ${portfolioData.dailyChangePercent >= 0 ? 'text-emerald-600' : 'text-crimson-600'}`}>
              {portfolioData.dailyChangePercent >= 0 ? '+' : ''}{portfolioData.dailyChangePercent}% اليوم
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-gulf-200/50">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gulf-600">العائد الكلي</span>
              <TrendingUp className="w-4 h-4 text-emerald-500" />
            </div>
            <p className="text-2xl font-bold text-emerald-600">+{portfolioData.totalReturnPercent}%</p>
            <p className="text-sm text-gulf-600">{formatCurrency(portfolioData.totalReturn)}</p>
          </div>

          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-gulf-200/50">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gulf-600">أفضل أداء</span>
              <Crown className="w-4 h-4 text-gold-500" />
            </div>
            <p className="text-lg font-bold text-gold-600">أرامكو</p>
            <p className="text-sm text-emerald-600">+24.5%</p>
          </div>

          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-gulf-200/50">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gulf-600">التنبيهات النشطة</span>
              <Bell className="w-4 h-4 text-crimson-500" />
            </div>
            <p className="text-2xl font-bold text-crimson-600">3</p>
            <p className="text-sm text-gulf-600">فرص جديدة</p>
          </div>
        </div>

        {/* Portfolio Allocation Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-gulf-200/50">
            <h3 className="text-xl font-bold text-gulf-800 mb-4 flex items-center">
              <PieChart className="w-5 h-5 ml-2 text-gold-500" />
              توزيع المحفظة
            </h3>
            <div className="space-y-3">
              {Object.entries(portfolioData.allocation).map(([asset, percentage]) => (
                <div key={asset} className="flex justify-between items-center">
                  <span className="text-gulf-700 capitalize">
                    {asset === 'stocks' ? 'الأسهم' :
                     asset === 'commodities' ? 'السلع' :
                     asset === 'currencies' ? 'العملات' :
                     asset === 'bonds' ? 'السندات' :
                     asset === 'crypto' ? 'العملات الرقمية' : asset}
                  </span>
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <div className="w-20 h-2 bg-gulf-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-gold-400 to-emerald-400"
                        style={{ width: `${(percentage / 45) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium text-gulf-800 min-w-[3rem]">{percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-gulf-200/50">
            <h3 className="text-xl font-bold text-gulf-800 mb-4 flex items-center">
              <Activity className="w-5 h-5 ml-2 text-gold-500" />
              مؤشر السوق العام
            </h3>
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-gulf-800 mb-1">
                  {marketSentiment.score}
                </div>
                <div className={`text-lg font-medium ${getSentimentColor(marketSentiment.overall)}`}>
                  {marketSentiment.overall}
                </div>
              </div>
              <div className="space-y-2">
                {marketSentiment.factors.map((factor) => (
                  <div key={factor.name} className="flex justify-between items-center">
                    <span className="text-sm text-gulf-600">{factor.name}</span>
                    <span className={`text-sm font-medium ${getSentimentColor(factor.sentiment)}`}>
                      {factor.score}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Top Investment Opportunities */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gulf-800 mb-8 text-center">
            أفضل الفرص الاستثمارية 🎯
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {topOpportunities.map((opportunity, index) => (
              <div 
                key={opportunity.symbol}
                className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-gulf-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-gulf-800">{opportunity.name}</h3>
                    <p className="text-sm text-gulf-600">{opportunity.symbol}</p>
                  </div>
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getScoreColor(opportunity.score)}`}>
                      {opportunity.score}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-xs text-gulf-600">الإمكانية</p>
                    <p className="text-lg font-bold text-emerald-600">{opportunity.potential}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gulf-600">المخاطرة</p>
                    <span className={`text-sm font-medium px-2 py-1 rounded ${getRiskColor(opportunity.risk)}`}>
                      {opportunity.risk}
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-xs text-gulf-600 mb-1">الإطار الزمني</p>
                  <p className="text-sm font-medium text-gulf-800">{opportunity.timeframe}</p>
                </div>

                <div>
                  <p className="text-xs text-gulf-600 mb-2">الأسباب الرئيسية:</p>
                  <div className="space-y-1">
                    {opportunity.reasons.map((reason, i) => (
                      <div key={i} className="flex items-center space-x-2 rtl:space-x-reverse">
                        <div className="w-1.5 h-1.5 bg-gold-400 rounded-full" />
                        <span className="text-xs text-gulf-700">{reason}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="w-full mt-4 bg-gradient-to-r from-gulf-500 to-emerald-500 text-white py-2 px-4 rounded-lg font-medium hover:shadow-lg transition-all duration-300">
                  تحليل مفصل
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Smart Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-gulf-200/50">
            <h3 className="text-xl font-bold text-gulf-800 mb-4 flex items-center">
              <Bell className="w-5 h-5 ml-2 text-gold-500" />
              التنبيهات الذكية
            </h3>
            <div className="space-y-4">
              {smartAlerts.map((alert, index) => (
                <div key={index} className="flex items-start space-x-3 rtl:space-x-reverse p-3 bg-gulf-50 rounded-lg">
                  <div className="flex-shrink-0 mt-1">
                    {alert.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="text-sm font-semibold text-gulf-800">{alert.title}</h4>
                      <span className="text-xs text-gulf-500">{alert.time}</span>
                    </div>
                    <p className="text-xs text-gulf-600">{alert.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-gulf-200/50">
            <h3 className="text-xl font-bold text-gulf-800 mb-4 flex items-center">
              <Calculator className="w-5 h-5 ml-2 text-gold-500" />
              حاسبة العوائد الذكية
            </h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gulf-600 mb-1">المبلغ المستثمر</label>
                  <input 
                    type="text" 
                    placeholder="100,000 ريال"
                    className="w-full px-3 py-2 border border-gulf-200 rounded-lg focus:outline-none focus:border-gold-400"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gulf-600 mb-1">المدة</label>
                  <select className="w-full px-3 py-2 border border-gulf-200 rounded-lg focus:outline-none focus:border-gold-400">
                    <option>6 أشهر</option>
                    <option>سنة واحدة</option>
                    <option>سنتان</option>
                    <option>5 سنوات</option>
                  </select>
                </div>
              </div>
              
              <div className="p-4 bg-emerald-50 rounded-lg">
                <div className="text-center">
                  <p className="text-sm text-emerald-600 mb-1">العائد المتوقع</p>
                  <p className="text-2xl font-bold text-emerald-800">118,500 ريال</p>
                  <p className="text-sm text-emerald-600">+18.5% عائد</p>
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-emerald-500 to-green-500 text-white py-2 px-4 rounded-lg font-medium">
                احسب العوائد المفصلة
              </button>
            </div>
          </div>
        </div>

        {/* Genius Investment Strategies */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gulf-800 mb-8 text-center">
            الاستراتيجيات العبقرية 🚀
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {geniusStrategies.map((strategy, index) => (
              <div 
                key={index}
                className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-gulf-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-gulf-800">{strategy.name}</h3>
                    <Brain className="w-5 h-5 text-gold-500" />
                  </div>
                  <p className="text-sm text-gulf-600 mb-4">{strategy.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="text-center p-3 bg-emerald-50 rounded-lg">
                    <p className="text-xs text-emerald-600">العائد المتوقع</p>
                    <p className="font-bold text-emerald-800">{strategy.expectedReturn}</p>
                  </div>
                  <div className="text-center p-3 bg-yellow-50 rounded-lg">
                    <p className="text-xs text-yellow-600">المخاطرة</p>
                    <p className="font-bold text-yellow-800">{strategy.riskLevel}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-xs text-gulf-600 mb-2">القطاعات المستهدفة:</p>
                  <div className="flex flex-wrap gap-1">
                    {strategy.sectors.map((sector, i) => (
                      <span key={i} className="px-2 py-1 bg-gulf-100 text-gulf-700 rounded-full text-xs">
                        {sector}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-center text-sm text-gulf-600 mb-4">
                  <span>الإطار الزمني: {strategy.timeline}</span>
                </div>

                <button className="w-full bg-gradient-to-r from-gold-500 to-yellow-500 text-white py-2 px-4 rounded-lg font-medium hover:shadow-lg transition-all duration-300">
                  تطبيق الاستراتيجية
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentDashboardPage;