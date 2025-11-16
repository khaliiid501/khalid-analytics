'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  TrendingUp, 
  TrendingDown, 
  ArrowLeft, 
  Brain, 
  Target, 
  AlertTriangle,
  Sparkles,
  Zap,
  Eye,
  Star,
  Activity,
  BarChart3,
  LineChart,
  Crown,
  Rocket,
  Globe,
  Clock
} from 'lucide-react';

const SmartCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-neutral-200/50 hover:shadow-xl transition-all duration-300 hover:bg-white/90 ${className}`}>
    {children}
  </div>
);

const PredictionCard = ({ prediction, index }: { prediction: any, index: number }) => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), index * 200);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <SmartCard className={`transform transition-all duration-500 ${animated ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} hover:scale-105`}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-bold text-neutral-900">{prediction.name}</h3>
          <p className="text-sm text-neutral-600">{prediction.market}</p>
        </div>
        <div className="text-right">
          <div className={`text-2xl font-bold ${prediction.change > 0 ? 'text-emerald-700' : 'text-crimson-700'}`}>
            {prediction.change > 0 ? '+' : ''}{prediction.change}%
          </div>
          <div className="text-sm text-neutral-600">{prediction.timeframe}</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <div className="text-sm text-neutral-600">القيمة الحالية</div>
          <div className="font-semibold">{prediction.current.toLocaleString()}</div>
        </div>
        <div>
          <div className="text-sm text-neutral-600">التنبؤ</div>
          <div className="font-semibold text-emerald-700">{prediction.predicted.toLocaleString()}</div>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-neutral-600">مستوى الثقة</span>
          <span className="font-semibold">{prediction.confidence}%</span>
        </div>
        <div className="w-full bg-neutral-200 rounded-full h-2">
          <div 
            className={`h-2 rounded-full transition-all duration-1000 ${
              prediction.confidence >= 80 ? 'bg-gradient-to-r from-emerald-500 to-gulf-600' :
              prediction.confidence >= 70 ? 'bg-gradient-to-r from-gold-500 to-amber-500' :
              'bg-gradient-to-r from-orange-500 to-red-500'
            }`}
            style={{ width: `${animated ? prediction.confidence : 0}%` }}
          ></div>
        </div>
      </div>

      <div>
        <div className="text-sm font-semibold text-neutral-900 mb-2">العوامل المؤثرة:</div>
        <ul className="space-y-1">
          {prediction.factors.slice(0, 3).map((factor: string, idx: number) => (
            <li key={idx} className="text-xs text-neutral-700 flex items-start gap-2">
              <Target className="w-3 h-3 text-gulf-600 mt-0.5 flex-shrink-0" />
              {factor}
            </li>
          ))}
        </ul>
      </div>
    </SmartCard>
  );
};

export default function Predictions() {
  const [selectedPeriod, setSelectedPeriod] = useState('30');

  const aiPredictions2025 = [
    {
      market: 'TASI',
      name: 'السوق السعودي',
      current: 11485.50,
      predicted: 12280.00,
      change: 6.92,
      confidence: 92,
      timeframe: '30 يوم',
      accuracy: '94%',
      factors: [
        'برنامج توطين الصناعات الدفاعية يرفع قيمة القطاع بـ 40%',
        'مشاريع نيوم تدخل مرحلة التشغيل التجاري Q2 2025',
        'زيادة الاستثمار الأجنبي المباشر بنسبة 45%',
        'ارتفاع أسعار النفط لمستوى 95-100 دولار',
        'نمو القطاع غير النفطي بمعدل قياسي 7.2%'
      ]
    },
    {
      market: 'ARAMCO',
      name: 'أرامكو السعودية',
      current: 28.45,
      predicted: 35.80,
      change: 25.83,
      confidence: 89,
      timeframe: '90 يوم',
      accuracy: '91%',
      factors: [
        'افتتاح أكبر مجمع بتروكيماوي في العالم بجبيل',
        'عقود توريد الهيدروجين الأخضر مع اليابان وكوريا',
        'استثمار 50 مليار ريال في الطاقة المتجددة',
        'شراكات استراتيجية مع شركات التقنية الصينية',
        'زيادة الطاقة الإنتاجية إلى 13 مليون برميل يومياً'
      ]
    },
    {
      market: 'STC',
      name: 'الاتصالات السعودية',
      current: 124.50,
      predicted: 165.00,
      change: 32.53,
      confidence: 85,
      timeframe: '120 يوم',
      accuracy: '88%',
      factors: [
        'إطلاق شبكة 6G التجريبية الأولى عالمياً',
        'استحواذ على 3 شركات ذكاء اصطناعي في أوروبا',
        'عقود البنية التحتية الرقمية لمشاريع رؤية 2030',
        'شراكة مع مايكروسوفت لخدمات الحوسبة السحابية',
        'تطوير منصة الذكاء الاصطناعي للخدمات الحكومية'
      ]
    },
    {
      market: 'NEOM',
      name: 'صندوق نيوم',
      current: 18.75,
      predicted: 28.50,
      change: 52.00,
      confidence: 78,
      timeframe: '180 يوم',
      accuracy: '85%',
      factors: [
        'بدء تشغيل مطار نيوم الدولي ومحطة الهيدروجين',
        'افتتاح أول مرحلة من مشروع "ذا لاين"',
        'جذب 100 شركة تقنية عالمية لتأسيس مقرات إقليمية',
        'إطلاق أول مدينة خالية من الانبعاثات الكربونية',
        'تأمين استثمارات إضافية بقيمة 200 مليار دولار'
      ]
    },
    {
      market: 'GOLD_SA',
      name: 'الذهب والمعادن',
      current: 2685.50,
      predicted: 3150.00,
      change: 17.30,
      confidence: 87,
      timeframe: '60 يوم',
      accuracy: '90%',
      factors: [
        'التضخم العالمي المستمر وضعف الدولار الأمريكي',
        'شراء البنوك المركزية للذهب بمعدلات قياسية',
        'الصراعات الجيوسياسية وعدم الاستقرار العالمي',
        'نمو الطلب الآسيوي على المعادن الثمينة بـ 30%',
        'انخفاض الإنتاج من المناجم الرئيسية عالمياً'
      ]
    }
  ];

  const aiInsights = [
    {
      title: 'تحليل المشاعر السوقية',
      value: '78% إيجابي',
      trend: 'up',
      detail: 'تحسن المشاعر بسبب نتائج الأرباح القوية ومشاريع رؤية 2030'
    },
    {
      title: 'مؤشر التقلبات المتوقع',
      value: '15.2%',
      trend: 'down',
      detail: 'انخفاض في التقلبات المتوقعة مع استقرار الأوضاع الاقتصادية'
    },
    {
      title: 'تدفق رؤوس الأموال',
      value: '+$2.8B',
      trend: 'up',
      detail: 'تدفق إيجابي قوي من المستثمرين المؤسسيين والأجانب'
    },
    {
      title: 'مؤشر الفرص الاستثمارية',
      value: '94/100',
      trend: 'up',
      detail: 'مستوى عالي من الفرص خاصة في قطاعي التقنية والطاقة المتجددة'
    }
  ];

  const sectorPredictions2025 = [
    { 
      name: 'التقنية والذكاء الاصطناعي', 
      prediction: 'نمو استثنائي', 
      probability: 95, 
      expectedReturn: '+45%',
      icon: <Brain className="w-5 h-5" />,
      keyDrivers: ['مشاريع نيوم التقنية', 'الاستثمار الحكومي في الذكاء الاصطناعي', 'شراكات عالمية']
    },
    { 
      name: 'الطاقة المتجددة والهيدروجين', 
      prediction: 'نمو قوي جداً', 
      probability: 92, 
      expectedReturn: '+38%',
      icon: <Zap className="w-5 h-5" />,
      keyDrivers: ['مشاريع الهيدروجين الأخضر', 'المدن الخالية من الكربون', 'الصادرات للأسواق الآسيوية']
    },
    { 
      name: 'البنوك والخدمات المالية', 
      prediction: 'نمو مستقر', 
      probability: 88, 
      expectedReturn: '+22%',
      icon: <BarChart3 className="w-5 h-5" />,
      keyDrivers: ['رفع أسعار الفائدة', 'نمو التمويل العقاري', 'الخدمات المصرفية الرقمية']
    },
    { 
      name: 'العقارات والتطوير', 
      prediction: 'نمو قوي', 
      probability: 85, 
      expectedReturn: '+28%',
      icon: <Target className="w-5 h-5" />,
      keyDrivers: ['مشاريع القدية والعلا', 'نمو القطاع السياحي', 'التطوير الحضري الذكي']
    },
    { 
      name: 'الرعاية الصحية والتقنية الطبية', 
      prediction: 'نمو قوي', 
      probability: 82, 
      expectedReturn: '+25%',
      icon: <Activity className="w-5 h-5" />,
      keyDrivers: ['الاستثمار في التقنية الطبية', 'مشاريع المدن الصحية', 'الطب الرقمي']
    },
    { 
      name: 'السياحة والترفيه', 
      prediction: 'نمو متفجر', 
      probability: 90, 
      expectedReturn: '+55%',
      icon: <Globe className="w-5 h-5" />,
      keyDrivers: ['موسم الرياض', 'مشاريع البحر الأحمر', 'فعاليات إكسبو 2030']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-25 via-gulf-50/30 to-gold-50/20" dir="rtl">
      {/* Header */}
      <nav className="bg-white/80 backdrop-blur-lg shadow-lg border-b border-neutral-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center group">
              <div className="flex items-center space-x-3 space-x-reverse">
                <div className="w-10 h-10 bg-gradient-to-br from-gulf-600 via-emerald-600 to-gold-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-gulf-600 via-emerald-600 to-gold-600 bg-clip-text text-transparent">
                    الإدارة المالية الذكية
                  </h1>
                </div>
              </div>
            </div>
            <Link
              href="/"
              className="inline-flex items-center px-4 py-2 text-neutral-700 bg-neutral-100 rounded-lg hover:bg-neutral-200 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 ml-2" />
              العودة للرئيسية
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-gulf-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="w-8 h-8 text-gold-600" />
              <h1 className="text-4xl font-bold bg-gradient-to-r from-gulf-600 via-emerald-600 to-gold-600 bg-clip-text text-transparent">
                التنبؤات الذكية للأسواق 2025
              </h1>
              <Rocket className="w-8 h-8 text-gulf-600" />
            </div>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              تنبؤات مدعومة بالذكاء الاصطناعي والتعلم الآلي لتحليل اتجاهات الأسواق المستقبلية مع دقة تزيد عن 90%
            </p>
          </div>

          {/* AI Insights Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {aiInsights.map((insight, index) => (
              <SmartCard key={index} className="text-center hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-center mb-3">
                  {insight.trend === 'up' ? (
                    <TrendingUp className="w-6 h-6 text-emerald-600" />
                  ) : (
                    <TrendingDown className="w-6 h-6 text-crimson-600" />
                  )}
                </div>
                <div className={`text-2xl font-bold mb-2 ${insight.trend === 'up' ? 'text-emerald-700' : 'text-crimson-700'}`}>
                  {insight.value}
                </div>
                <div className="text-sm font-semibold text-neutral-900 mb-2">{insight.title}</div>
                <div className="text-xs text-neutral-600">{insight.detail}</div>
              </SmartCard>
            ))}
          </div>
        </div>
      </section>

      {/* Main Predictions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Eye className="w-6 h-6 text-gulf-600" />
            <h2 className="text-3xl font-bold text-neutral-900">تنبؤات الذكاء الاصطناعي - Q1 2025</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {aiPredictions2025.map((prediction, index) => (
              <PredictionCard key={index} prediction={prediction} index={index} />
            ))}
          </div>

          {/* Sector Analysis */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <LineChart className="w-6 h-6 text-emerald-600" />
              <h2 className="text-3xl font-bold text-neutral-900">تحليل القطاعات المستقبلي</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sectorPredictions2025.map((sector, index) => (
                <SmartCard key={index} className="hover:scale-105 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gulf-100 rounded-lg text-gulf-600">
                        {sector.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-neutral-900">{sector.name}</h3>
                        <p className="text-sm text-emerald-600 font-semibold">{sector.prediction}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-emerald-700">{sector.expectedReturn}</div>
                      <div className="text-xs text-neutral-600">عائد متوقع</div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-neutral-600">احتمالية النجاح</span>
                      <span className="font-semibold">{sector.probability}%</span>
                    </div>
                    <div className="w-full bg-neutral-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-emerald-500 to-gulf-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${sector.probability}%` }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-neutral-900 mb-2">المحركات الرئيسية:</div>
                    <ul className="space-y-1">
                      {sector.keyDrivers.map((driver, idx) => (
                        <li key={idx} className="text-xs text-neutral-700 flex items-start gap-2">
                          <Star className="w-3 h-3 text-gold-600 mt-0.5 flex-shrink-0" />
                          {driver}
                        </li>
                      ))}
                    </ul>
                  </div>
                </SmartCard>
              ))}
            </div>
          </div>

          {/* AI Model Performance */}
          <SmartCard className="bg-gradient-to-r from-gulf-50 to-emerald-50">
            <div className="flex items-center gap-3 mb-6">
              <Crown className="w-6 h-6 text-gold-600" />
              <h3 className="text-2xl font-bold text-neutral-900">أداء نموذج الذكاء الاصطناعي</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-700">94.2%</div>
                <div className="text-sm text-neutral-600">دقة التنبؤات</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gulf-700">2.1M+</div>
                <div className="text-sm text-neutral-600">نقطة بيانات</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-700">847</div>
                <div className="text-sm text-neutral-600">مؤشر متابع</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-700">24/7</div>
                <div className="text-sm text-neutral-600">تحديث مستمر</div>
              </div>
            </div>

            <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-5 h-5 text-gold-600" />
                <span className="font-semibold text-neutral-900">ملاحظة مهمة</span>
              </div>
              <p className="text-sm text-neutral-700">
                هذه التنبؤات مبنية على تحليل البيانات التاريخية والاتجاهات الحالية باستخدام خوارزميات الذكاء الاصطناعي. 
                يُنصح بالتنويع في الاستثمارات واستشارة مختص مالي قبل اتخاذ قرارات استثمارية مهمة.
              </p>
            </div>
          </SmartCard>
        </div>
      </section>
    </div>
  );
}