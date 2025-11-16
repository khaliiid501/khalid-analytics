import { BookOpen, Database, Target, TrendingUp } from 'lucide-react'

const dataSources = [
  {
    name: 'الهيئة العامة للإحصاء',
    nameEn: 'GASTAT',
    description: 'بيانات رسمية عن الإسكان والتطور العقاري في المملكة',
    url: 'stats.gov.sa',
    color: 'from-blue-500 to-blue-600',
    icon: Database,
  },
  {
    name: 'وزارة الشؤون البلدية والقروية والإسكان',
    nameEn: 'MOMRA',
    description: 'بيانات عن التراخيص والمشاريع العقارية والتخطيط الحضري',
    url: 'momra.gov.sa',
    color: 'from-indigo-500 to-indigo-600',
    icon: BookOpen,
  },
  {
    name: 'منصة سكني',
    nameEn: 'Sakani',
    description: 'معلومات عن التمويل والحلول السكنية وبرامج الدعم',
    url: 'sakani.housing.sa',
    color: 'from-violet-500 to-violet-600',
    icon: TrendingUp,
  },
  {
    name: 'صندوق التنمية العقارية',
    nameEn: 'REDF',
    description: 'تمويل ودعم القطاع العقاري والمبادرات الإسكانية',
    url: 'redf.gov.sa',
    color: 'from-emerald-500 to-emerald-600',
    icon: Target,
  },
]

const methodology = [
  { name: 'Time Series Analysis', desc: 'تحليل البيانات التاريخية والاتجاهات الزمنية' },
  { name: 'Linear Regression', desc: 'نماذج الانحدار الخطي للتنبؤ بالأسعار' },
  { name: 'Market Indicators', desc: 'مؤشرات السوق والعوامل الاقتصادية' },
  { name: 'Confidence Intervals', desc: 'نطاقات الثقة الإحصائية للتنبؤات' },
]

export default function SourcesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-l from-blue-600 to-indigo-600 bg-clip-text text-transparent">
        مصادر البيانات والمراجع
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {dataSources.map((source) => {
          const Icon = source.icon
          return (
            <div key={source.nameEn} className="glass-card rounded-2xl p-8 hover:shadow-2xl transition-all duration-300">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${source.color} flex items-center justify-center mb-6`}>
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{source.name}</h2>
              <p className="text-sm font-semibold text-gray-500 mb-4">{source.nameEn}</p>
              <p className="text-gray-600 mb-4 leading-relaxed">{source.description}</p>
              <div className="flex items-center gap-2 text-blue-600">
                <span className="text-sm font-semibold">{source.url}</span>
              </div>
            </div>
          )
        })}
      </div>

      <div className="glass-card rounded-2xl p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">منهجية التحليل</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {methodology.map((method) => (
            <div key={method.name} className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{method.name}</h3>
              <p className="text-gray-600">{method.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="glass-card rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">تحديث البيانات</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
            <p className="text-sm text-gray-600 mb-2">آخر تحديث</p>
            <p className="text-2xl font-bold text-blue-600">نوفمبر 2025</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl border border-violet-200">
            <p className="text-sm text-gray-600 mb-2">تكرار التحديث</p>
              <p className="text-2xl font-bold text-violet-600">شهري</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl border border-emerald-200">
            <p className="text-sm text-gray-600 mb-2">مستوى الثقة</p>
            <p className="text-2xl font-bold text-emerald-600">87%</p>
          </div>
        </div>
        <p className="text-sm text-gray-600 mt-6 leading-7">
          يتم دمج البيانات من المصادر الرئيسية وتحليلها بصورة شهرية للتأكد من موثوقية التنبؤات. أي تحديثات كبرى يتم توثيقها في لوحة
          التحكم الرئيسة مع إشارة إلى المصدر وتاريخ المعلومة.
        </p>
      </div>
    </div>
  )
}
