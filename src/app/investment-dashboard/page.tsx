'use client';

import React, { useState } from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle, 
  Target, 
  Brain,
  Zap,
  Globe,
  Shield,
  Flame,
  Crown,
  Lightbulb,
  BarChart3,
  PieChart,
  Calendar,
  Clock,
  DollarSign,
  Percent,
  Award,
  Rocket
} from 'lucide-react';

// بيانات بديلة مؤقتة
const investmentOpportunities2025 = {
  topOpportunities: [
    {
      symbol: 'ARAMCO',
      name: 'أرامكو السعودية',
      sector: 'الطاقة والبتروكيماويات',
      currentPrice: 28.45,
      targetPrice: 35.80,
      score: 94,
      potential: '+25.8%',
      risk: 'منخفض',
      timeframe: '6-12 شهر',
      confidence: 89,
      reasons: [
        'برنامج التوسع في البتروكيماويات بقيمة 20 مليار دولار',
        'ارتفاع أسعار النفط إلى 88-95 دولار للبرميل',
        'استثمار 50 مليار ريال في الطاقة المتجددة',
        'زيادة توزيعات الأرباح بنسبة 15% في 2025'
      ]
    },
    {
      symbol: 'STC',
      name: 'شركة الاتصالات السعودية',
      sector: 'الاتصالات والتقنية',
      currentPrice: 124.50,
      targetPrice: 165.00,
      score: 88,
      potential: '+32.5%',
      risk: 'متوسط',
      timeframe: '9-15 شهر',
      confidence: 82,
      reasons: [
        'قيادة تطوير شبكة 5G في المملكة والمنطقة',
        'استثمارات في الذكاء الاصطناعي وإنترنت الأشياء',
        'نمو قطاع الحوسبة السحابية بنسبة 45% سنوياً'
      ]
    },
    {
      symbol: 'SABIC',
      name: 'سابك',
      sector: 'البتروكيماويات المتقدمة',
      currentPrice: 89.20,
      targetPrice: 112.50,
      score: 86,
      potential: '+26.1%',
      risk: 'متوسط',
      timeframe: '8-14 شهر',
      confidence: 78,
      reasons: [
        'الريادة في تطوير البلاستيك المعاد تدويره',
        'مشاريع الكيماويات المتخصصة عالية القيمة',
        'شراكة مع شركات التقنية الحيوية'
      ]
    }
  ],
  economicContext: {
    gdpGrowth: 4.8,
    inflationRate: 2.1,
    oilPrice: 92.50,
    vision2030Progress: 68,
    unemploymentRate: 7.2,
    foreignReserves: '445B',
    publicDebt: 24.8,
    nonOilGrowth: 6.2,
    keyTrends: [
      'نمو القطاع غير النفطي بأسرع معدل منذ 2019',
      'زيادة الاستثمار الأجنبي المباشر بنسبة 35%',
      'نمو قطاع السياحة والترفيه بنسبة 28%',
      'ارتفاع الاحتياطيات الأجنبية لأعلى مستوى تاريخي',
      'تحسن مؤشر سهولة الأعمال إلى المرتبة 18 عالمياً'
    ]
  }
};

const geniusStrategies2025 = {
  vision2030Accelerator: {
    name: 'استراتيجية تسريع رؤية 2030',
    description: 'الاستثمار في قطاعات رؤية 2030 سريعة النمو مع التركيز على التقنيات الناشئة',
    expectedReturn: '28-35%',
    riskLevel: 'متوسط إلى عالي',
    timeline: '2-4 سنوات',
    investmentThesis: [
      'نمو القطاعات غير النفطية بمعدل يفوق 8% سنوياً',
      'ضخ استثمارات حكومية بقيمة 3.2 تريليون ريال حتى 2030',
      'جذب 1.3 تريليون ريال استثمارات أجنبية'
    ],
    allocation: {
      neomTech: 25,
      renewableEnergy: 20,
      entertainment: 15,
      logistics: 15,
      manufacturing: 15,
      healthcare: 10
    },
    keyHoldings: [
      'صندوق نيوم للاستثمار - 25%',
      'شركة أكوا باور - 15%',
      'الهيئة السعودية للبيانات والذكاء الاصطناعي - 12%'
    ]
  },
  greenTransition: {
    name: 'استراتيجية التحول الأخضر الذكية',
    description: 'الاستثمار في تقنيات الطاقة النظيفة والاقتصاد الدائري مع التركيز على الهيدروجين الأخضر',
    expectedReturn: '22-28%',
    riskLevel: 'متوسط',
    timeline: '3-6 سنوات',
    investmentThesis: [
      'السعودية تستهدف إنتاج 2.9 مليون طن هيدروجين أخضر سنوياً بحلول 2030',
      'استثمار 700 مليار ريال في مشاريع الطاقة المتجددة',
      'تطوير 16 منطقة اقتصادية خاصة للصناعات الخضراء'
    ],
    allocation: {
      hydrogenProduction: 30,
      solarWindPower: 25,
      energyStorage: 20,
      greenSteel: 15,
      carbonCapture: 10
    }
  }
};

const SmartCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-neutral-200/50 hover:shadow-xl transition-all duration-300 hover:bg-white/90 ${className}`}>
    {children}
  </div>
);

const PerformanceIndicator = ({ value, trend, label }: { value: string, trend: 'up' | 'down', label: string }) => (
  <div className="flex items-center justify-between">
    <span className="text-neutral-600 text-sm">{label}</span>
    <div className="flex items-center gap-2">
      <span className="font-semibold">{value}</span>
      {trend === 'up' ? (
        <TrendingUp className="w-4 h-4 text-emerald-600" />
      ) : (
        <TrendingDown className="w-4 h-4 text-crimson-600" />
      )}
    </div>
  </div>
);

export default function InvestmentDashboard() {
  const [selectedStrategy, setSelectedStrategy] = useState('vision2030Accelerator');

  const topOpportunities = investmentOpportunities2025.topOpportunities.slice(0, 5);
  const economicData = investmentOpportunities2025.economicContext;
  const currentStrategy = geniusStrategies2025[selectedStrategy as keyof typeof geniusStrategies2025];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-25 via-gulf-50/30 to-gold-50/20">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-neutral-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-gulf-600 via-emerald-600 to-gold-600 rounded-lg flex items-center justify-center">
              <Crown className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-gulf-600 via-emerald-600 to-gold-600 bg-clip-text text-transparent">الإدارة المالية الذكية</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-sm text-neutral-600">
              آخر تحديث: {new Date().toLocaleDateString('ar-SA')}
            </div>
            <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Performance Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <SmartCard className="bg-gradient-to-r from-emerald-50 to-gulf-50">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-neutral-900">إجمالي المحفظة</h3>
              <TrendingUp className="w-6 h-6 text-emerald-600" />
            </div>
            <div className="text-3xl font-bold text-emerald-700 mb-2">2.45M ريال</div>
            <div className="text-sm text-emerald-600">+12.8% هذا الشهر</div>
          </SmartCard>

          <SmartCard className="bg-gradient-to-r from-gulf-50 to-gold-50">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-neutral-900">العائد السنوي</h3>
              <Award className="w-6 h-6 text-gulf-600" />
            </div>
            <div className="text-3xl font-bold text-gulf-700 mb-2">28.5%</div>
            <div className="text-sm text-gulf-600">يتفوق على السوق بـ 14.2%</div>
          </SmartCard>

          <SmartCard className="bg-gradient-to-r from-gold-50 to-amber-50">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-neutral-900">مؤشر الذكاء</h3>
              <Brain className="w-6 h-6 text-gold-600" />
            </div>
            <div className="text-3xl font-bold text-gold-700 mb-2">94/100</div>
            <div className="text-sm text-gold-600">استراتيجية متقدمة</div>
          </SmartCard>

          <SmartCard className="bg-gradient-to-r from-crimson-50 to-red-50">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-neutral-900">تقييم المخاطر</h3>
              <Shield className="w-6 h-6 text-crimson-600" />
            </div>
            <div className="text-3xl font-bold text-crimson-700 mb-2">منخفض</div>
            <div className="text-sm text-crimson-600">متوازن ومحمي</div>
          </SmartCard>
        </div>

        {/* Top Investment Opportunities */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Rocket className="w-6 h-6 text-gulf-600" />
            <h2 className="text-2xl font-bold text-neutral-900">أفضل الفرص الاستثمارية لعام 2025</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {topOpportunities.map((opportunity, index) => (
              <SmartCard key={opportunity.symbol} className="relative overflow-hidden">
                <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-emerald-500 to-gulf-600"></div>
                
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-lg text-neutral-900">{opportunity.name}</h3>
                    <p className="text-sm text-neutral-600">{opportunity.sector}</p>
                    <p className="text-xs text-neutral-500 mt-1">#{index + 1} - {opportunity.symbol}</p>
                  </div>
                  <div className="text-left">
                    <div className="text-2xl font-bold text-emerald-700">{opportunity.potential}</div>
                    <div className="text-sm text-neutral-600">عائد متوقع</div>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-neutral-600">السعر الحالي</span>
                    <span className="font-semibold">{opportunity.currentPrice.toFixed(2)} ريال</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-neutral-600">الهدف</span>
                    <span className="font-semibold text-emerald-700">{opportunity.targetPrice.toFixed(2)} ريال</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-neutral-600">مستوى المخاطر</span>
                    <span className={`text-sm px-2 py-1 rounded-full ${
                      opportunity.risk === 'منخفض' ? 'bg-emerald-100 text-emerald-800' :
                      opportunity.risk === 'متوسط' ? 'bg-gold-100 text-gold-800' :
                      'bg-crimson-100 text-crimson-800'
                    }`}>
                      {opportunity.risk}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-neutral-600">الثقة</span>
                    <span className="font-semibold">{opportunity.confidence}%</span>
                  </div>
                </div>

                <div className="border-t border-neutral-200 pt-4">
                  <h4 className="font-semibold text-sm text-neutral-900 mb-2">الأسباب الرئيسية:</h4>
                  <ul className="space-y-1">
                    {opportunity.reasons.slice(0, 2).map((reason, idx) => (
                      <li key={idx} className="text-xs text-neutral-700 flex items-start gap-1">
                        <div className="w-1 h-1 bg-gulf-600 rounded-full mt-2 flex-shrink-0"></div>
                        {reason}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3">
                    <div className="text-xs text-neutral-600 mb-1">الأداء المتوقع:</div>
                    <div className="w-full bg-neutral-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-emerald-500 to-gulf-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${Math.min(opportunity.score, 100)}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-neutral-600 mt-1">{opportunity.score}/100</div>
                  </div>
                </div>
              </SmartCard>
            ))}
          </div>
        </div>

        {/* Genius Investment Strategies */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Lightbulb className="w-6 h-6 text-gold-600" />
            <h2 className="text-2xl font-bold text-neutral-900">الاستراتيجيات الاستثمارية العبقرية</h2>
          </div>
          
          {/* Strategy Selector */}
          <div className="flex flex-wrap gap-3 mb-6">
            {Object.entries(geniusStrategies2025).map(([key, strategy]) => (
              <button
                key={key}
                onClick={() => setSelectedStrategy(key)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedStrategy === key
                    ? 'bg-gradient-gulf text-white shadow-lg'
                    : 'bg-white text-neutral-700 hover:bg-neutral-50 border border-neutral-200'
                }`}
              >
                {strategy.name}
              </button>
            ))}
          </div>

          {/* Selected Strategy Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <SmartCard>
                <div className="flex items-center gap-3 mb-4">
                  <Brain className="w-6 h-6 text-gulf-600" />
                  <h3 className="text-xl font-bold text-neutral-900">{currentStrategy.name}</h3>
                </div>
                
                <p className="text-neutral-700 mb-6">{currentStrategy.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-emerald-700">{currentStrategy.expectedReturn}</div>
                    <div className="text-sm text-emerald-600">العائد المتوقع</div>
                  </div>
                  <div className="bg-gold-50 p-4 rounded-lg">
                    <div className="text-lg font-bold text-gold-700">{currentStrategy.riskLevel}</div>
                    <div className="text-sm text-gold-600">مستوى المخاطر</div>
                  </div>
                  <div className="bg-gulf-50 p-4 rounded-lg">
                    <div className="text-lg font-bold text-gulf-700">{currentStrategy.timeline}</div>
                    <div className="text-sm text-gulf-600">الإطار الزمني</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-neutral-900 mb-3">المنطق الاستثماري:</h4>
                  <ul className="space-y-2">
                    {currentStrategy.investmentThesis.map((thesis, index) => (
                      <li key={index} className="flex items-start gap-2 text-neutral-700">
                        <Target className="w-4 h-4 text-gulf-600 mt-0.5 flex-shrink-0" />
                        {thesis}
                      </li>
                    ))}
                  </ul>
                </div>

                {'keyHoldings' in currentStrategy && (
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-3">الاستثمارات الرئيسية:</h4>
                    <div className="space-y-2">
                      {currentStrategy.keyHoldings.map((holding, index) => (
                        <div key={index} className="flex justify-between items-center py-2 px-3 bg-neutral-50 rounded-lg">
                          <span className="text-neutral-700">{holding.split(' - ')[0]}</span>
                          <span className="font-semibold text-gulf-700">{holding.split(' - ')[1]}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </SmartCard>
            </div>

            <div>
              <SmartCard>
                <h3 className="font-bold text-neutral-900 mb-4 flex items-center gap-2">
                  <PieChart className="w-5 h-5 text-gulf-600" />
                  توزيع الاستثمارات
                </h3>
                <div className="space-y-3">
                  {Object.entries(currentStrategy.allocation).map(([sector, percentage]) => (
                    <div key={sector}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-neutral-700">{sector}</span>
                        <span className="font-semibold">{percentage}%</span>
                      </div>
                      <div className="w-full bg-neutral-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-gulf-500 to-emerald-500 h-2 rounded-full"
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </SmartCard>
            </div>
          </div>
        </div>

        {/* Economic Context */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Globe className="w-6 h-6 text-emerald-600" />
            <h2 className="text-2xl font-bold text-neutral-900">السياق الاقتصادي السعودي Q1 2025</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SmartCard className="bg-gradient-to-br from-emerald-50 to-gulf-50">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-700">{economicData.gdpGrowth}%</div>
                <div className="text-sm text-emerald-600 mt-1">نمو الناتج المحلي</div>
              </div>
            </SmartCard>
            
            <SmartCard className="bg-gradient-to-br from-gold-50 to-amber-50">
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-700">{economicData.nonOilGrowth}%</div>
                <div className="text-sm text-gold-600 mt-1">نمو القطاع غير النفطي</div>
              </div>
            </SmartCard>
            
            <SmartCard className="bg-gradient-to-br from-gulf-50 to-blue-50">
              <div className="text-center">
                <div className="text-3xl font-bold text-gulf-700">${economicData.oilPrice}</div>
                <div className="text-sm text-gulf-600 mt-1">سعر النفط (برنت)</div>
              </div>
            </SmartCard>
            
            <SmartCard className="bg-gradient-to-br from-purple-50 to-indigo-50">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-700">{economicData.vision2030Progress}%</div>
                <div className="text-sm text-purple-600 mt-1">تقدم رؤية 2030</div>
              </div>
            </SmartCard>
          </div>

          <SmartCard className="mt-6">
            <h3 className="font-bold text-neutral-900 mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-emerald-600" />
              الاتجاهات الاقتصادية الرئيسية
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {economicData.keyTrends.map((trend, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-neutral-50 rounded-lg">
                  <Zap className="w-4 h-4 text-gulf-600 mt-1 flex-shrink-0" />
                  <span className="text-neutral-700 text-sm">{trend}</span>
                </div>
              ))}
            </div>
          </SmartCard>
        </div>

        {/* Smart Alerts */}
        <SmartCard>
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="w-6 h-6 text-gold-600" />
            <h2 className="text-xl font-bold text-neutral-900">التنبيهات الذكية</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 bg-emerald-50 rounded-lg border border-emerald-200">
              <TrendingUp className="w-5 h-5 text-emerald-600 mt-0.5" />
              <div>
                <div className="font-semibold text-emerald-800">فرصة شراء ممتازة</div>
                <div className="text-sm text-emerald-700">أرامكو تقترب من مستوى الدعم القوي عند 26.80 ريال</div>
                <div className="text-xs text-emerald-600 mt-1">منذ 15 دقيقة</div>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-4 bg-gold-50 rounded-lg border border-gold-200">
              <Clock className="w-5 h-5 text-gold-600 mt-0.5" />
              <div>
                <div className="font-semibold text-gold-800">تحديث استراتيجي</div>
                <div className="text-sm text-gold-700">إعادة توزيع المحفظة نحو قطاع التقنية المالية</div>
                <div className="text-xs text-gold-600 mt-1">منذ ساعة</div>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-4 bg-gulf-50 rounded-lg border border-gulf-200">
              <Brain className="w-5 h-5 text-gulf-600 mt-0.5" />
              <div>
                <div className="font-semibold text-gulf-800">تحليل بالذكاء الاصطناعي</div>
                <div className="text-sm text-gulf-700">نموذج التنبؤ يشير لصعود قطاع الطاقة المتجددة بنسبة 18%</div>
                <div className="text-xs text-gulf-600 mt-1">منذ 3 ساعات</div>
              </div>
            </div>
          </div>
        </SmartCard>
      </div>
    </div>
  );
}