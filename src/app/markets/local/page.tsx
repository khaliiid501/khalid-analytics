import Link from 'next/link';
import { TrendingUp, TrendingDown, ArrowLeft, DollarSign } from 'lucide-react';

export default function LocalMarkets() {
  const saudiStocks = [
    { symbol: 'SABIC', name: 'سابك', price: 94.50, change: 1.2, changePercent: 1.29 },
    { symbol: 'ARAMCO', name: 'أرامكو السعودية', price: 28.85, change: -0.15, changePercent: -0.52 },
    { symbol: 'RJHI', name: 'الراجحي', price: 185.20, change: 2.8, changePercent: 1.54 },
    { symbol: 'STC', name: 'الاتصالات السعودية', price: 41.60, change: 0.40, changePercent: 0.97 },
    { symbol: 'MAADEN', name: 'معادن', price: 56.70, change: -1.10, changePercent: -1.90 },
  ];

  const gulfMarkets = [
    { market: 'TASI', name: 'السوق السعودي', price: 11247.52, change: 138.45, changePercent: 1.24 },
    { market: 'ADX', name: 'سوق أبوظبي', price: 9842.31, change: 84.72, changePercent: 0.87 },
    { market: 'DFM', name: 'سوق دبي', price: 4156.89, change: -12.34, changePercent: -0.30 },
    { market: 'QE', name: 'بورصة قطر', price: 10543.67, change: 45.23, changePercent: 0.43 },
    { market: 'KSE', name: 'بورصة الكويت', price: 7891.23, change: 23.45, changePercent: 0.30 },
    { market: 'MSM', name: 'سوق مسقط', price: 4567.89, change: -8.90, changePercent: -0.19 },
  ];

  const sectors = [
    { name: 'البنوك', change: 1.45, companies: 12 },
    { name: 'البتروكيماويات', change: 0.89, companies: 8 },
    { name: 'الاتصالات', change: 1.23, companies: 6 },
    { name: 'التأمين', change: -0.34, companies: 15 },
    { name: 'العقار', change: 2.10, companies: 25 },
    { name: 'الرعاية الصحية', change: 0.67, companies: 7 },
  ];

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
              <h1 className="text-2xl font-bold text-gray-900">الأسواق المحلية</h1>
            </div>
            <div className="flex space-x-4 space-x-reverse">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Market Overview */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">نظرة عامة على أسواق الخليج</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gulfMarkets.map((market) => (
              <div key={market.market} className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{market.name}</h3>
                      <p className="text-sm text-gray-500">{market.market}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-semibold text-gray-900">
                        {market.price.toLocaleString()}
                      </p>
                      <div className={`flex items-center ${market.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {market.change >= 0 ? <TrendingUp className="h-4 w-4 ml-1" /> : <TrendingDown className="h-4 w-4 ml-1" />}
                        <span className="text-sm">
                          {market.change >= 0 ? '+' : ''}{market.change.toFixed(2)} ({market.changePercent >= 0 ? '+' : ''}{market.changePercent}%)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Saudi Stocks */}
          <div className="lg:col-span-2">
            <div className="bg-white shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                  أسهم مختارة من السوق السعودي
                </h3>
                <div className="overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          الرمز
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          الاسم
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          السعر
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          التغيير
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {saudiStocks.map((stock) => (
                        <tr key={stock.symbol} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {stock.symbol}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {stock.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {stock.price.toFixed(2)} ر.س
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <div className={`flex items-center ${stock.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                              {stock.change >= 0 ? <TrendingUp className="h-4 w-4 ml-1" /> : <TrendingDown className="h-4 w-4 ml-1" />}
                              <span>
                                {stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)} ({stock.changePercent >= 0 ? '+' : ''}{stock.changePercent}%)
                              </span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Sectors Performance */}
          <div className="lg:col-span-1">
            <div className="bg-white shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                  أداء القطاعات
                </h3>
                <div className="space-y-4">
                  {sectors.map((sector, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">{sector.name}</h4>
                        <p className="text-xs text-gray-500">{sector.companies} شركة</p>
                      </div>
                      <div className={`flex items-center ${sector.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {sector.change >= 0 ? <TrendingUp className="h-4 w-4 ml-1" /> : <TrendingDown className="h-4 w-4 ml-1" />}
                        <span className="text-sm font-medium">
                          {sector.change >= 0 ? '+' : ''}{sector.change}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Key Economic Indicators */}
            <div className="bg-white shadow rounded-lg mt-6">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                  مؤشرات اقتصادية مهمة
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">سعر النفط (برنت)</span>
                    <span className="text-sm font-medium text-green-600">$87.45 (+2.10%)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">الذهب (أونصة)</span>
                    <span className="text-sm font-medium text-red-600">$1,945.30 (-0.85%)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">الدولار/ريال</span>
                    <span className="text-sm font-medium text-gray-900">3.7501</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">اليورو/ريال</span>
                    <span className="text-sm font-medium text-green-600">4.0892 (+0.15%)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* News & Analysis */}
        <div className="mt-8">
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                أخبار وتحليلات السوق
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border-r pr-6">
                  <h4 className="font-medium text-gray-900 mb-2">تحليل السوق السعودي</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    يواصل مؤشر تاسي ارتفاعه المدعوم بأداء قطاع البنوك والبتروكيماويات، مع توقعات إيجابية لاستمرار الزخم.
                  </p>
                  <span className="text-xs text-blue-600">منذ 30 دقيقة</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">أداء أسواق الخليج</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    تسجل معظم أسواق الخليج أداءً إيجابياً اليوم مدفوعة بارتفاع أسعار النفط وتحسن الثقة الاستثمارية.
                  </p>
                  <span className="text-xs text-blue-600">منذ ساعة</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}