import Link from 'next/link';
import { ArrowLeft, Database, Shield, CheckCircle, Globe, Building2, TrendingUp } from 'lucide-react';
import { dataSources, economicDataSources, commodityDataSources, dataQualityStandards, dataValidationProcess } from '../../data/sources';

export default function Sources() {
  const getReliabilityIcon = (reliability: string) => {
    if (reliability === 'عالية جداً') return <Shield className="h-5 w-5 text-green-600" />;
    if (reliability === 'عالية') return <CheckCircle className="h-5 w-5 text-blue-600" />;
    return <CheckCircle className="h-5 w-5 text-yellow-600" />;
  };

  const getTypeIcon = (type: string) => {
    if (type.includes('بورصة')) return <TrendingUp className="h-5 w-5 text-blue-500" />;
    if (type.includes('حكومي')) return <Building2 className="h-5 w-5 text-green-500" />;
    return <Globe className="h-5 w-5 text-purple-500" />;
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
              <h1 className="text-2xl font-bold text-gray-900">مصادر البيانات</h1>
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overview */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg p-6 text-white">
            <div className="flex items-center mb-4">
              <Database className="h-8 w-8 ml-3" />
              <h2 className="text-2xl font-bold">مصادر البيانات المعتمدة</h2>
            </div>
            <p className="text-blue-100 mb-4">
              نعتمد على مجموعة واسعة من المصادر الموثوقة لضمان دقة وشمولية التحليلات المقدمة
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <h3 className="font-medium mb-2">مصادر البيانات</h3>
                <p className="text-2xl font-bold">{dataSources.length}+</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <h3 className="font-medium mb-2">تحديث البيانات</h3>
                <p className="text-2xl font-bold">لحظي</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <h3 className="font-medium mb-2">التغطية</h3>
                <p className="text-2xl font-bold">عالمية</p>
              </div>
            </div>
          </div>
        </div>

        {/* Primary Data Sources */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">المصادر الأساسية للبيانات المالية</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dataSources.map((source, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0 ml-3">
                      {getTypeIcon(source.type)}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">{source.name}</h3>
                      <p className="text-sm text-gray-500">{source.type}</p>
                    </div>
                    <div className="flex-shrink-0">
                      {getReliabilityIcon(source.reliability)}
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-4">{source.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">أنواع البيانات:</h4>
                    <div className="flex flex-wrap gap-1">
                      {source.dataTypes.map((dataType, idx) => (
                        <span key={idx} className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                          {dataType}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-sm">
                    <div>
                      <span className="text-gray-500">التحديث: </span>
                      <span className="font-medium">{source.updateFrequency}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">الموثوقية: </span>
                      <span className="font-medium">{source.reliability}</span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <span className="text-gray-500 text-sm">التغطية: </span>
                    <span className="text-sm font-medium">{source.coverage}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Economic Data Sources */}
          <div>
            <div className="bg-white shadow rounded-lg">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">مصادر البيانات الاقتصادية</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {economicDataSources.map((source, index) => (
                    <div key={index} className="border-l-4 border-green-400 pl-4">
                      <h4 className="font-medium text-gray-900">{source.name}</h4>
                      <p className="text-sm text-gray-600 mb-2">{source.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {source.dataTypes.map((dataType, idx) => (
                          <span key={idx} className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                            {dataType}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Commodity Data Sources */}
          <div>
            <div className="bg-white shadow rounded-lg">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">مصادر بيانات السلع والطاقة</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {commodityDataSources.map((source, index) => (
                    <div key={index} className="border-l-4 border-yellow-400 pl-4">
                      <h4 className="font-medium text-gray-900">{source.name}</h4>
                      <p className="text-sm text-gray-600 mb-2">{source.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {source.dataTypes.map((dataType, idx) => (
                          <span key={idx} className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                            {dataType}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Data Quality Standards */}
        <div className="mt-8">
          <div className="bg-white shadow rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">معايير جودة البيانات</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(dataQualityStandards).map(([key, value]) => (
                  <div key={key} className="flex items-start">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-green-500" />
                    </div>
                    <div className="mr-3">
                      <h4 className="text-sm font-medium text-gray-900">
                        {key === 'accuracy' && 'الدقة'}
                        {key === 'timeliness' && 'التوقيت'}
                        {key === 'completeness' && 'الاكتمال'}
                        {key === 'consistency' && 'الثبات'}
                        {key === 'reliability' && 'الموثوقية'}
                      </h4>
                      <p className="text-sm text-gray-600">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Data Validation Process */}
        <div className="mt-8">
          <div className="bg-white shadow rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">عملية التحقق من البيانات</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {dataValidationProcess.map((step, index) => (
                  <div key={index} className="flex items-center">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">
                      {index + 1}
                    </div>
                    <p className="mr-4 text-sm text-gray-700">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* API Information */}
        <div className="mt-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-medium text-blue-900 mb-4">
              معلومات تقنية حول جمع البيانات
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-blue-800 mb-2">التقنيات المستخدمة</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• REST APIs للبيانات اللحظية</li>
                  <li>• WebSocket للتحديثات المباشرة</li>
                  <li>• FTP/SFTP لنقل البيانات المجمعة</li>
                  <li>• قواعد بيانات متقدمة للتخزين</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-blue-800 mb-2">ضمانات الأمان</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• تشفير البيانات أثناء النقل والتخزين</li>
                  <li>• مصادقة متعددة العوامل</li>
                  <li>• مراقبة مستمرة للأمان</li>
                  <li>• نسخ احتياطية منتظمة</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <div className="flex items-start">
              <Shield className="h-6 w-6 text-yellow-500 mt-1 ml-3" />
              <div>
                <h3 className="text-lg font-medium text-yellow-800 mb-2">إخلاء مسؤولية</h3>
                <p className="text-yellow-700 text-sm">
                  بينما نسعى لضمان دقة وحداثة البيانات المستخدمة، فإن البيانات المالية قد تتأخر أو تحتوي على أخطاء.
                  نحن غير مسؤولين عن أي قرارات استثمارية تُتخذ بناءً على البيانات المقدمة. يُنصح دائماً بالتحقق من البيانات
                  من مصادر متعددة والتشاور مع مستشار مالي مؤهل.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}