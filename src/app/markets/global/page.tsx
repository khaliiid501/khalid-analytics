import Link from 'next/link';
import { TrendingUp, TrendingDown, ArrowLeft, Globe } from 'lucide-react';

export default function GlobalMarkets() {
  const globalIndices = [
    { symbol: 'S&P 500', name: 'ستاندرد آند بورز 500', price: 4567.89, change: -15.67, changePercent: -0.34, exchange: 'NYSE' },
    { symbol: 'NASDAQ', name: 'ناسداك المركب', price: 14234.56, change: -45.23, changePercent: -0.32, exchange: 'NASDAQ' },
    { symbol: 'DOW', name: 'داو جونز', price: 34567.12, change: 89.45, changePercent: 0.26, exchange: 'NYSE' },
    { symbol: 'FTSE 100', name: 'فايننشال تايمز 100', price: 7856.34, change: 23.45, changePercent: 0.30, exchange: 'LSE' },
    { symbol: 'DAX', name: 'داكس الألماني', price: 15678.90, change: -34.56, changePercent: -0.22, exchange: 'XETRA' },
    { symbol: 'NIKKEI', name: 'نيكاي 225', price: 32456.78, change: 156.89, changePercent: 0.49, exchange: 'TSE' },
  ];

  const majorStocks = [
    { symbol: 'AAPL', name: 'أبل', price: 189.25, change: -2.15, changePercent: -1.12, sector: 'التكنولوجيا' },
    { symbol: 'MSFT', name: 'مايكروسوفت', price: 378.90, change: 4.50, changePercent: 1.20, sector: 'التكنولوجيا' },
    { symbol: 'GOOGL', name: 'جوجل', price: 142.68, change: -1.89, changePercent: -1.31, sector: 'التكنولوجيا' },
    { symbol: 'AMZN', name: 'أمازون', price: 145.75, change: 2.34, changePercent: 1.63, sector: 'التجارة الإلكترونية' },
    { symbol: 'TSLA', name: 'تسلا', price: 234.56, change: -8.90, changePercent: -3.65, sector: 'السيارات' },
    { symbol: 'NVDA', name: 'إنفيديا', price: 456.78, change: 12.45, changePercent: 2.80, sector: 'أشباه الموصلات' },
  ];

  const currencies = [
    { pair: 'USD/SAR', name: 'الدولار/ريال', rate: 3.7501, change: 0.0002, changePercent: 0.01 },
    { pair: 'EUR/SAR', name: 'اليورو/ريال', rate: 4.0892, change: 0.0061, changePercent: 0.15 },
    { pair: 'GBP/SAR', name: 'الجنيه/ريال', rate: 4.7234, change: -0.0123, changePercent: -0.26 },
    { pair: 'JPY/SAR', name: 'الين/ريال', rate: 0.0251, change: 0.0001, changePercent: 0.40 },
  ];

  const commodities = [
    { name: 'النفط الخام (برنت)', price: 87.45, change: 1.80, changePercent: 2.10, unit: 'برميل' },
    { name: 'الذهب', price: 1945.30, change: -16.70, changePercent: -0.85, unit: 'أونصة' },
    { name: 'الفضة', price: 23.45, change: 0.34, changePercent: 1.47, unit: 'أونصة' },
    { name: 'النحاس', price: 3.89, change: -0.05, changePercent: -1.27, unit: 'رطل' },
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
              <h1 className="text-2xl font-bold text-gray-900">الأسواق العالمية</h1>
            </div>
            <div className="flex space-x-4 space-x-reverse">
              <Link href="/markets/local" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                الأسواق المحلية
              </Link>
              <Link href="/predictions" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                التنبؤات
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Global Indices */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">المؤشرات العالمية الرئيسية</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {globalIndices.map((index) => (
              <div key={index.symbol} className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{index.name}</h3>
                      <p className="text-sm text-gray-500">{index.symbol} - {index.exchange}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-semibold text-gray-900">
                        {index.price.toLocaleString()}
                      </p>
                      <div className={`flex items-center ${index.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {index.change >= 0 ? <TrendingUp className="h-4 w-4 ml-1" /> : <TrendingDown className="h-4 w-4 ml-1" />}
                        <span className="text-sm">
                          {index.change >= 0 ? '+' : ''}{index.change.toFixed(2)} ({index.changePercent >= 0 ? '+' : ''}{index.changePercent}%)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Major US Stocks */}
          <div>
            <div className="bg-white shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                  أسهم رئيسية من الأسواق الأمريكية
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
                      {majorStocks.map((stock) => (
                        <tr key={stock.symbol} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {stock.symbol}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {stock.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            ${stock.price.toFixed(2)}
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

          {/* Currencies & Commodities */}
          <div>
            {/* Currencies */}
            <div className="bg-white shadow rounded-lg mb-6">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                  أسعار العملات مقابل الريال
                </h3>
                <div className="space-y-3">
                  {currencies.map((currency) => (
                    <div key={currency.pair} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">{currency.name}</h4>
                        <p className="text-xs text-gray-500">{currency.pair}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold text-gray-900">{currency.rate.toFixed(4)}</p>
                        <div className={`flex items-center ${currency.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {currency.change >= 0 ? <TrendingUp className="h-3 w-3 ml-1" /> : <TrendingDown className="h-3 w-3 ml-1" />}
                          <span className="text-xs">
                            {currency.change >= 0 ? '+' : ''}{currency.change.toFixed(4)} ({currency.changePercent >= 0 ? '+' : ''}{currency.changePercent}%)
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Commodities */}
            <div className="bg-white shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                  أسعار السلع
                </h3>
                <div className="space-y-3">
                  {commodities.map((commodity, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">{commodity.name}</h4>
                        <p className="text-xs text-gray-500">سعر/{commodity.unit}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold text-gray-900">${commodity.price.toFixed(2)}</p>
                        <div className={`flex items-center ${commodity.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {commodity.change >= 0 ? <TrendingUp className="h-3 w-3 ml-1" /> : <TrendingDown className="h-3 w-3 ml-1" />}
                          <span className="text-xs">
                            {commodity.change >= 0 ? '+' : ''}{commodity.change.toFixed(2)} ({commodity.changePercent >= 0 ? '+' : ''}{commodity.changePercent}%)
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Market Analysis */}
        <div className="mt-8">
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                تحليل الأسواق العالمية
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center mb-2">
                    <Globe className="h-5 w-5 text-blue-500 ml-2" />
                    <h4 className="font-medium text-gray-900">الأسواق الأمريكية</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    تشهد الأسواق الأمريكية تقلبات متباينة وسط مخاوف من التضخم وتوقعات الفيدرالي الأمريكي.
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center mb-2">
                    <Globe className="h-5 w-5 text-green-500 ml-2" />
                    <h4 className="font-medium text-gray-900">الأسواق الأوروبية</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    تظهر الأسواق الأوروبية مرونة نسبية مدعومة بقطاع الطاقة وتحسن البيانات الاقتصادية.
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center mb-2">
                    <Globe className="h-5 w-5 text-purple-500 ml-2" />
                    <h4 className="font-medium text-gray-900">الأسواق الآسيوية</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    تواصل الأسواق الآسيوية أداءها الإيجابي مع تعافي الاقتصاد الصيني وقوة الأسواق اليابانية.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Market Impact on GCC */}
        <div className="mt-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-medium text-blue-900 mb-4">
              تأثير الأسواق العالمية على منطقة الخليج
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-blue-800 mb-2">التأثيرات الإيجابية</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• ارتفاع أسعار النفط يدعم أسواق المنطقة</li>
                  <li>• تدفق الاستثمارات الأجنبية</li>
                  <li>• نمو قطاع التكنولوجيا والابتكار</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-blue-800 mb-2">المخاطر المحتملة</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• تقلبات أسعار الفائدة العالمية</li>
                  <li>• تأثر أسعار السلع بالتوترات الجيوسياسية</li>
                  <li>• تذبذب العملات العالمية</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}