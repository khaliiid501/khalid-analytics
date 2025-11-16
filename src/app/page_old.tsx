import Link from 'next/link';
import { TrendingUp, Globe, BarChart3, DollarSign } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50" dir="rtl">
      {/* Header */}
      <nav className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">
                <span className="text-blue-600">خليج</span> التحليلات
              </h1>
            </div>
            <div className="flex space-x-4 space-x-reverse">
              <Link href="/markets/local" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                الأسواق المحلية
              </Link>
              <Link href="/markets/global" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                الأسواق العالمية
              </Link>
              <Link href="/predictions" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                التنبؤات
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-right">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">مرجعية</span>
                  <span className="block text-blue-600 xl:inline"> التحليل المالي</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  منصة شاملة لتحليل الأسواق المحلية والعالمية، مخصصة للمستثمر السعودي والخليجي مع تنبؤات ذكية مدعومة بالذكاء الاصطناعي
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      href="/markets/local"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                    >
                      ابدأ التحليل
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:mr-3">
                    <Link
                      href="/predictions"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
                    >
                      عرض التنبؤات
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
          <div className="h-56 w-full bg-gradient-to-br from-blue-500 to-green-500 sm:h-72 md:h-96 lg:w-full lg:h-full flex items-center justify-center">
            <BarChart3 className="h-32 w-32 text-white opacity-20" />
          </div>
        </div>
      </div>

      {/* Market Overview Dashboard */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">نظرة عامة</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              الأسواق في لمحة
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              متابعة حية للمؤشرات الرئيسية في الأسواق المحلية والعالمية
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {/* Saudi Market */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <DollarSign className="h-6 w-6 text-green-400" />
                    </div>
                    <div className="mr-5 w-0 flex-1">
                      <dt className="text-sm font-medium text-gray-500 truncate">السوق السعودي (TASI)</dt>
                      <dd className="text-lg font-medium text-gray-900">11,247.52</dd>
                      <dd className="text-sm text-green-600">+1.24% (+138.45)</dd>
                    </div>
                  </div>
                </div>
              </div>

              {/* UAE Market */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <TrendingUp className="h-6 w-6 text-blue-400" />
                    </div>
                    <div className="mr-5 w-0 flex-1">
                      <dt className="text-sm font-medium text-gray-500 truncate">سوق أبوظبي (ADX)</dt>
                      <dd className="text-lg font-medium text-gray-900">9,842.31</dd>
                      <dd className="text-sm text-green-600">+0.87% (+84.72)</dd>
                    </div>
                  </div>
                </div>
              </div>

              {/* Global Markets */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Globe className="h-6 w-6 text-purple-400" />
                    </div>
                    <div className="mr-5 w-0 flex-1">
                      <dt className="text-sm font-medium text-gray-500 truncate">S&P 500</dt>
                      <dd className="text-lg font-medium text-gray-900">4,567.89</dd>
                      <dd className="text-sm text-red-600">-0.34% (-15.67)</dd>
                    </div>
                  </div>
                </div>
              </div>

              {/* Oil Price */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <BarChart3 className="h-6 w-6 text-yellow-400" />
                    </div>
                    <div className="mr-5 w-0 flex-1">
                      <dt className="text-sm font-medium text-gray-500 truncate">برنت الخام</dt>
                      <dd className="text-lg font-medium text-gray-900">$87.45</dd>
                      <dd className="text-sm text-green-600">+2.10% (+$1.80)</dd>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">الميزات</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              كل ما تحتاجه للاستثمار الذكي
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <p className="mr-16 text-lg leading-6 font-medium text-gray-900">تحليل الأسواق المحلية</p>
                </dt>
                <dd className="mt-2 mr-16 text-base text-gray-500">
                  تابع أسواق السعودية والإمارات والكويت وقطر والبحرين وعمان مع تحليل متقدم للقطاعات والشركات
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <Globe className="h-6 w-6" />
                  </div>
                  <p className="mr-16 text-lg leading-6 font-medium text-gray-900">مراقبة الأسواق العالمية</p>
                </dt>
                <dd className="mt-2 mr-16 text-base text-gray-500">
                  تتبع أسواق نيويورك ولندن وطوكيو وهونغ كونغ مع تحليل تأثيرها على المنطقة
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <BarChart3 className="h-6 w-6" />
                  </div>
                  <p className="mr-16 text-lg leading-6 font-medium text-gray-900">تنبؤات مدعومة بالذكاء الاصطناعي</p>
                </dt>
                <dd className="mt-2 mr-16 text-base text-gray-500">
                  خوارزميات متطورة لتحليل الاتجاهات والتنبؤ بحركة الأسواق
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <DollarSign className="h-6 w-6" />
                  </div>
                  <p className="mr-16 text-lg leading-6 font-medium text-gray-900">تحليل العملات والسلع</p>
                </dt>
                <dd className="mt-2 mr-16 text-base text-gray-500">
                  مراقبة أسعار النفط والذهب والعملات الرئيسية وتأثيرها على الأسواق المحلية
                </dd>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">ابدأ رحلتك الاستثمارية اليوم</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-blue-200">
            انضم إلى آلاف المستثمرين الذين يثقون بتحليلاتنا لاتخاذ قرارات استثمارية مدروسة
          </p>
          <Link
            href="/markets/local"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 sm:w-auto"
          >
            ابدأ الآن
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">الأسواق</h3>
              <ul className="mt-4 space-y-4">
                <li><Link href="/markets/local" className="text-base text-gray-300 hover:text-white">الأسواق المحلية</Link></li>
                <li><Link href="/markets/global" className="text-base text-gray-300 hover:text-white">الأسواق العالمية</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">التحليلات</h3>
              <ul className="mt-4 space-y-4">
                <li><Link href="/predictions" className="text-base text-gray-300 hover:text-white">التنبؤات</Link></li>
                <li><Link href="/sources" className="text-base text-gray-300 hover:text-white">مصادر البيانات</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8">
            <p className="text-base text-gray-400 xl:text-center">
              &copy; 2025 خليج التحليلات. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}