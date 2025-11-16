import Link from 'next/link';
import { TrendingUp, TrendingDown, ArrowLeft, Brain, Target, AlertTriangle } from 'lucide-react';

export default function Predictions() {
  const aiPredictions = [
    {
      market: 'TASI',
      name: 'السوق السعودي',
      current: 11247.52,
      predicted: 11650.00,
      change: 3.58,
      confidence: 87,
      timeframe: '30 يوم',
      factors: ['ارتفاع أسعار النفط', 'أداء قطاع البنوك', 'الاستثمارات الأجنبية']
    },
    {
      market: 'ADX',
      name: 'سوق أبوظبي',
      current: 9842.31,
      predicted: 10200.00,
      change: 3.64,
      confidence: 82,
      timeframe: '30 يوم',
      factors: ['نمو القطاع المصرفي', 'مشاريع البنية التحتية', 'استقرار أسعار النفط']
    },
    {
      market: 'ARAMCO',
      name: 'أرامكو السعودية',
      current: 28.85,
      predicted: 31.20,
      change: 8.15,
      confidence: 79,
      timeframe: '60 يوم',
      factors: ['توقعات إيجابية للطلب على النفط', 'توزيعات أرباح مستقرة', 'استثمارات في التكنولوجيا']
    },
    {
      market: 'QE',
      name: 'بورصة قطر',
      current: 10543.67,
      predicted: 10800.00,
      change: 2.43,
      confidence: 75,
      timeframe: '45 يوم',
      factors: ['كأس العالم للأندية', 'نمو القطاع المصرفي', 'استثمارات في الغاز الطبيعي']
    }
  ];

  const sectorPredictions = [
    { name: 'البنوك', prediction: 'إيجابي', probability: 85, expectedReturn: '+4.2%' },
    { name: 'البتروكيماويات', prediction: 'إيجابي', probability: 78, expectedReturn: '+3.8%' },
    { name: 'العقار', prediction: 'إيجابي جداً', probability: 92, expectedReturn: '+6.1%' },
    { name: 'الاتصالات', prediction: 'محايد', probability: 65, expectedReturn: '+1.5%' },
    { name: 'التأمين', prediction: 'سلبي', probability: 70, expectedReturn: '-1.2%' },
    { name: 'الرعاية الصحية', prediction: 'إيجابي', probability: 81, expectedReturn: '+3.4%' }
  ];

  const riskFactors = [
    { risk: 'تقلبات أسعار النفط', impact: 'عالي', probability: 'متوسط' },
    { risk: 'أسعار الفائدة الأمريكية', impact: 'متوسط', probability: 'عالي' },
    { risk: 'التضخم العالمي', impact: 'متوسط', probability: 'متوسط' },
    { risk: 'التوترات الجيوسياسية', impact: 'عالي', probability: 'منخفض' }
  ];

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 80) return 'text-green-600';
    if (confidence >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getPredictionColor = (prediction: string) => {
    if (prediction.includes('إيجابي')) return 'text-green-600';
    if (prediction === 'محايد') return 'text-yellow-600';
    return 'text-red-600';
  };

  const getRiskColor = (impact: string) => {
    if (impact === 'عالي') return 'text-red-500';
    if (impact === 'متوسط') return 'text-yellow-500';
    return 'text-green-500';
  };

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Header */}
      <nav className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-blue-600 hover:text-blue-800 ml-4">
                <ArrowLeft className="h-5 w-5" />
              </Link>
              <h1 className="text-2xl font-bold text-gray-900">التنبؤات المدعومة بالذكاء الاصطناعي</h1>
            </div>
            <div className="flex space-x-4 space-x-reverse">
              <Link href="/markets/local" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                الأسواق المحلية
              </Link>
              <Link href="/markets/global" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                الأسواق العالمية
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* AI Analysis Overview */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-white">
            <div className="flex items-center mb-4">
              <Brain className="h-8 w-8 ml-3" />
              <h2 className="text-2xl font-bold">تحليل الذكاء الاصطناعي</h2>
            </div>
            <p className="text-blue-100 mb-4">
              يستخدم نظامنا خوارزميات متقدمة لتحليل البيانات التاريخية والمؤشرات الاقتصادية لتوقع حركة الأسواق
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <h3 className="font-medium mb-2">دقة التوقعات</h3>
                <p className="text-2xl font-bold">82.5%</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <h3 className="font-medium mb-2">البيانات المحللة</h3>
                <p className="text-2xl font-bold">5+ سنوات</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <h3 className="font-medium mb-2">العوامل المدروسة</h3>
                <p className="text-2xl font-bold">50+ مؤشر</p>
              </div>
            </div>
          </div>
        </div>

        {/* Market Predictions */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">توقعات الأسواق</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aiPredictions.map((prediction) => (
              <div key={prediction.market} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{prediction.name}</h3>
                      <p className="text-sm text-gray-500">{prediction.market}</p>
                    </div>
                    <div className="text-right">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getConfidenceColor(prediction.confidence)} bg-gray-100`}>
                        {prediction.confidence}% ثقة
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600">السعر الحالي</p>
                      <p className="text-lg font-semibold">{prediction.current.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">التوقع ({prediction.timeframe})</p>
                      <p className="text-lg font-semibold text-green-600">{prediction.predicted.toLocaleString()}</p>
                    </div>
                  </div>

                  <div className="flex items-center mb-4">
                    <TrendingUp className="h-5 w-5 text-green-500 ml-2" />
                    <span className="text-green-600 font-medium">+{prediction.change}% توقع الارتفاع</span>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600 mb-2">العوامل المؤثرة:</p>
                    <ul className="space-y-1">
                      {prediction.factors.map((factor, index) => (
                        <li key={index} className="text-sm text-gray-700 flex items-center">
                          <Target className="h-3 w-3 text-blue-500 ml-2" />
                          {factor}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Sector Predictions */}
          <div>
            <div className="bg-white shadow rounded-lg">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">توقعات القطاعات</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {sectorPredictions.map((sector, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-medium text-gray-900">{sector.name}</h4>
                        <p className={`text-sm ${getPredictionColor(sector.prediction)}`}>
                          {sector.prediction}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-900">{sector.expectedReturn}</p>
                        <p className="text-xs text-gray-500">{sector.probability}% احتمالية</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Risk Factors */}
          <div>
            <div className="bg-white shadow rounded-lg">
              <div className="px-6 py-4 border-b border-gray-200">
                <div className="flex items-center">
                  <AlertTriangle className="h-5 w-5 text-yellow-500 ml-2" />
                  <h3 className="text-lg font-medium text-gray-900">عوامل المخاطرة</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {riskFactors.map((risk, index) => (
                    <div key={index} className="border-l-4 border-yellow-400 pl-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium text-gray-900">{risk.risk}</h4>
                        <div className="text-right">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${getRiskColor(risk.impact)} bg-gray-100`}>
                            {risk.impact}
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">احتمالية الحدوث: {risk.probability}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Methodology */}
        <div className="mt-8">
          <div className="bg-white shadow rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">منهجية التحليل والتنبؤ</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">تحليل البيانات التاريخية</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• أسعار الأسهم والمؤشرات (5+ سنوات)</li>
                    <li>• أحجام التداول والسيولة</li>
                    <li>• البيانات المالية للشركات</li>
                    <li>• أسعار السلع والعملات</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">المؤشرات الاقتصادية</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• أسعار النفط والغاز</li>
                    <li>• أسعار الفائدة</li>
                    <li>• معدلات التضخم</li>
                    <li>• البيانات الاقتصادية العالمية</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">خوارزميات التعلم الآلي</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• الشبكات العصبية العميقة</li>
                    <li>• نماذج السلاسل الزمنية</li>
                    <li>• تحليل المشاعر السوقية</li>
                    <li>• خوارزميات التصنيف المتقدمة</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <div className="flex items-start">
              <AlertTriangle className="h-6 w-6 text-yellow-500 mt-1 ml-3" />
              <div>
                <h3 className="text-lg font-medium text-yellow-800 mb-2">إخلاء مسؤولية</h3>
                <p className="text-yellow-700 text-sm">
                  التنبؤات المقدمة هنا مبنية على تحليل البيانات التاريخية والمؤشرات الاقتصادية باستخدام الذكاء الاصطناعي.
                  هذه التوقعات لا تشكل نصائح استثمارية ولا تضمن النتائج المستقبلية. يُنصح بالتشاور مع مستشار مالي مؤهل قبل اتخاذ أي قرارات استثمارية.
                  الاستثمار في الأسواق المالية ينطوي على مخاطر وقد تتعرض لخسائر مالية.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}