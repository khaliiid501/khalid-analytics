import Link from 'next/link';
import { TrendingUp, Globe, BarChart3, DollarSign, ArrowRight, Sparkles, Target, Shield, Brain, Star, CheckCircle2 } from 'lucide-react';
import SmartCard from '../components/ui/SmartCard';
import MarketIndicator from '../components/ui/MarketIndicator';
import SubscriptionForm from '../components/forms/SubscriptionForm';
import { pricingPlans } from '../data/pricingPlans';

export default function Home() {
  const marketData = [
    {
      title: 'السوق السعودي (TASI)',
      value: '11,247.52',
      change: 138.45,
      changePercent: 1.24,
      icon: <DollarSign className="h-6 w-6 text-emerald-600" />
    },
    {
      title: 'سوق أبوظبي (ADX)',
      value: '9,842.31',
      change: 84.72,
      changePercent: 0.87,
      icon: <TrendingUp className="h-6 w-6 text-gulf-600" />
    },
    {
      title: 'S&P 500',
      value: '4,567.89',
      change: -15.67,
      changePercent: -0.34,
      icon: <Globe className="h-6 w-6 text-neutral-600" />
    },
    {
      title: 'برنت الخام',
      value: '$87.45',
      change: 1.80,
      changePercent: 2.10,
      icon: <BarChart3 className="h-6 w-6 text-gold-600" />
    },
  ];

  const features = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'تحليل الأسواق المحلية',
      description: 'تابع أسواق السعودية والإمارات والكويت وقطر والبحرين وعمان مع تحليل متقدم للقطاعات والشركات',
      gradient: 'gulf'
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'مراقبة الأسواق العالمية',
      description: 'تتبع أسواق نيويورك ولندن وطوكيو وهونغ كونغ مع تحليل تأثيرها على المنطقة',
      gradient: 'success'
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: 'تنبؤات مدعومة بالذكاء الاصطناعي',
      description: 'خوارزميات متطورة لتحليل الاتجاهات والتنبؤ بحركة الأسواق',
      gradient: 'warning'
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: 'تحليل العملات والسلع',
      description: 'مراقبة أسعار النفط والذهب والعملات الرئيسية وتأثيرها على الأسواق المحلية',
      gradient: 'danger'
    },
  ];

  const stats = [
    { number: '82.5%', label: 'دقة التوقعات', icon: Target },
    { number: '10+', label: 'مصادر موثوقة', icon: Shield },
    { number: '24/7', label: 'مراقبة مستمرة', icon: Sparkles },
  ];

  const pricingHighlights = [
    { label: 'الجاهزية للإطلاق', value: '72 ساعة', description: 'تهيئة الرابط وربط النطاق المخصص' },
    { label: 'توفير التكاليف', value: 'حتى 35%', description: 'خطط مرنة تناسب مرحلة عملك' },
    { label: 'دعم استباقي', value: '24/7', description: 'فريق مراقبة لحظي للأسواق' },
  ];

  const subscriptionHighlights = [
    {
      title: 'ربط موثوق وجاهز للإطلاق',
      description: 'نقوم بإعداد النطاق المخصص، شهادات SSL، ومراقبة التوافر لضمان تجربة آمنة للعملاء.',
      icon: Shield,
    },
    {
      title: 'اقتراحات تسعير ديناميكية',
      description: 'نقارن توقعات الذكاء الاصطناعي بتكاليف التشغيل لنقدم تسعيرة تنافسية لكل قطاع.',
      icon: Star,
    },
    {
      title: 'اشتراكات شفافة',
      description: 'تحديثات أسبوعية عن الأداء وقنوات تواصل مباشرة مع فريق التحليل لمتابعة احتياجاتك.',
      icon: Sparkles,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-25 via-gulf-50/30 to-gold-50/20" dir="rtl">
      {/* Header */}
      <nav className="bg-white/80 backdrop-blur-lg shadow-lg border-b border-neutral-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center group">
              <div className="flex items-center space-x-3 space-x-reverse">
                <div className="w-12 h-12 bg-gradient-to-br from-gulf-600 via-emerald-600 to-gold-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Brain className="h-7 w-7 text-white drop-shadow-sm" />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-gulf-600 via-emerald-600 to-gold-600 bg-clip-text text-transparent">
                    الإدارة المالية الذكية
                  </h1>
                  <span className="text-xs text-neutral-600 font-medium">Smart Financial Management</span>
                </div>
              </div>
            </div>
            <div className="flex space-x-4 space-x-reverse">
              {[
                { href: '/markets/local', text: 'الأسواق المحلية' },
                { href: '/markets/global', text: 'الأسواق العالمية' },
                { href: '/currencies', text: 'العملات' },
                { href: '/commodities', text: 'السلع' },
                { href: '/investment-dashboard', text: 'لوحة التحكم' },
                { href: '/analytics', text: 'التحليلات المتقدمة' },
                { href: '/predictions', text: 'التنبؤات' },
                { href: '/subscription', text: 'الباقات والأسعار' },
                { href: '/subscription-form', text: 'الاشتراك' },
              ].map((link) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className="text-neutral-700 hover:text-gulf-600 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-gulf-50 hover:scale-105"
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-up">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 space-x-reverse">
                  <div className="h-2 w-2 bg-gulf-500 rounded-full animate-pulse-soft"></div>
                  <span className="text-gulf-600 font-medium text-sm uppercase tracking-wider">منصة الإدارة المالية الذكية</span>
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-neutral-900">الذكاء الاصطناعي</span>
                  <br />
                  <span className="bg-gradient-to-r from-gulf-600 via-emerald-600 to-gold-600 bg-clip-text text-transparent">للاستثمار الذكي</span>
                  <br />
                  <span className="text-neutral-700">رؤية 2025</span>
                </h1>
                <p className="text-xl text-neutral-600 leading-relaxed max-w-lg">
                  منصة متطورة للإدارة المالية الذكية والاستثمار المدروس، مع تحليلات متقدمة وتنبؤات دقيقة للسوق السعودي والخليجي
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/markets/local"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-gulf text-white font-semibold rounded-xl shadow-gulf hover:shadow-xl-colored transform hover:scale-105 transition-all duration-300"
                >
                  <span>ابدأ التحليل</span>
                  <ArrowRight className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  href="/predictions"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-gulf-700 font-semibold rounded-xl shadow-lg hover:shadow-xl border-2 border-gulf-100 hover:border-gulf-200 hover:bg-gulf-50 transition-all duration-300"
                >
                  عرض التنبؤات
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-neutral-200">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="mb-2">
                      <stat.icon className="h-8 w-8 text-gulf-500 mx-auto group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="text-2xl font-bold text-neutral-900">{stat.number}</div>
                    <div className="text-sm text-neutral-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Market Overview Cards */}
            <div className="grid grid-cols-2 gap-4 animate-scale-up">
              {marketData.map((market, index) => (
                <div key={index} className={`${index % 2 === 0 ? 'animate-float' : ''}`}>
                  <MarketIndicator
                    title={market.title}
                    value={market.value}
                    change={market.change}
                    changePercent={market.changePercent}
                    icon={market.icon}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">
              كل ما تحتاجه للاستثمار الذكي
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              تجمع منصتنا بين التحليل المتقدم والذكاء الاصطناعي لتقدم لك رؤى استثمارية دقيقة ومدروسة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <SmartCard 
                key={index} 
                gradient={feature.gradient as any}
                hover 
                size="lg"
                className={`animate-slide-up`}
              >
                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-white/90 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </SmartCard>
            ))}
          </div>
        </div>
      </section>

      {/* Top Investment Opportunities Section */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-gulf-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">
              أفضل الفرص الاستثمارية لعام 2025
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              فرص استثمارية مدروسة بناءً على التحليل المتقدم والمعطيات الاقتصادية الحقيقية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-neutral-200/50 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-neutral-900">أرامكو السعودية</h3>
                  <p className="text-neutral-600 text-sm">الطاقة والبتروكيماويات</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-emerald-700">+25.8%</div>
                  <div className="text-sm text-neutral-600">عائد متوقع</div>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-neutral-600">الثقة</span>
                  <span className="font-semibold">89%</span>
                </div>
                <div className="w-full bg-neutral-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-emerald-500 to-gulf-600 h-2 rounded-full" style={{width: '89%'}}></div>
                </div>
              </div>
              <p className="text-sm text-neutral-700">برنامج التوسع في البتروكيماويات واستثمار الطاقة المتجددة</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-neutral-200/50 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-neutral-900">شركة الاتصالات السعودية</h3>
                  <p className="text-neutral-600 text-sm">الاتصالات والتقنية</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-emerald-700">+32.5%</div>
                  <div className="text-sm text-neutral-600">عائد متوقع</div>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-neutral-600">الثقة</span>
                  <span className="font-semibold">82%</span>
                </div>
                <div className="w-full bg-neutral-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-emerald-500 to-gulf-600 h-2 rounded-full" style={{width: '82%'}}></div>
                </div>
              </div>
              <p className="text-sm text-neutral-700">قيادة تطوير 5G والذكاء الاصطناعي مع التوسع الإقليمي</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-neutral-200/50 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-neutral-900">صندوق نيوم للاستثمار</h3>
                  <p className="text-neutral-600 text-sm">المدن المستقبلية والتقنية</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-emerald-700">+52.0%</div>
                  <div className="text-sm text-neutral-600">عائد متوقع</div>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-neutral-600">الثقة</span>
                  <span className="font-semibold">74%</span>
                </div>
                <div className="w-full bg-neutral-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-emerald-500 to-gulf-600 h-2 rounded-full" style={{width: '74%'}}></div>
                </div>
              </div>
              <p className="text-sm text-neutral-700">أكبر مشروع مدن ذكية عالمياً مع استثمار 500 مليار دولار</p>
            </div>
          </div>

          <div className="text-center">
            <Link 
              href="/investment-dashboard" 
              className="inline-flex items-center px-8 py-4 bg-gradient-gulf text-white font-medium rounded-xl hover:opacity-90 transition-opacity shadow-lg"
            >
              <TrendingUp className="w-5 h-5 mr-2" />
              عرض جميع الفرص الاستثمارية
            </Link>
          </div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section className="py-20 bg-gradient-to-br from-gulf-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 space-x-reverse bg-gold-100 px-4 py-2 rounded-full mb-4">
              <Star className="w-4 h-4 text-gold-600" />
              <span className="text-gold-700 font-medium text-sm">ميزات متقدمة</span>
            </div>
            <h2 className="text-4xl font-bold text-gulf-800 mb-4">
              منصة الاستثمار العبقرية 🚀
            </h2>
            <p className="text-xl text-gulf-600 max-w-3xl mx-auto">
              أدوات متطورة وتحليل عميق للعملات والسلع مع استراتيجيات استثمارية ذكية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Currency Analysis */}
            <SmartCard className="text-center group hover:shadow-2xl">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <DollarSign className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gulf-800 mb-3">تحليل العملات المتقدم</h3>
              <p className="text-gulf-600 mb-6 leading-relaxed">
                تحليل شامل للعملات الرئيسية والرقمية مع توقعات الذكاء الاصطناعي والمؤشرات التقنية المتطورة
              </p>
              <div className="flex justify-center mb-6">
                <div className="flex space-x-2 space-x-reverse">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">USD/SAR</span>
                  <span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs">BTC/USD</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">EUR/SAR</span>
                </div>
              </div>
              <Link 
                href="/currencies" 
                className="inline-block w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                ابدأ التحليل
              </Link>
            </SmartCard>

            {/* Commodities Analysis */}
            <SmartCard className="text-center group hover:shadow-2xl">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gulf-800 mb-3">تحليل السلع العالمية</h3>
              <p className="text-gulf-600 mb-6 leading-relaxed">
                من النفط إلى الذهب، تحليل متطور للسلع الأساسية مع التركيز على تأثيرها على رؤية 2030
              </p>
              <div className="flex justify-center mb-6">
                <div className="flex space-x-2 space-x-reverse">
                  <span className="px-2 py-1 bg-amber-100 text-amber-700 rounded-full text-xs">النفط</span>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs">الذهب</span>
                  <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs">النحاس</span>
                </div>
              </div>
              <Link 
                href="/commodities" 
                className="inline-block w-full bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                اكتشف السلع
              </Link>
            </SmartCard>

            {/* Investment Dashboard */}
            <SmartCard className="text-center group hover:shadow-2xl">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gulf-800 mb-3">لوحة التحكم الذكية</h3>
              <p className="text-gulf-600 mb-6 leading-relaxed">
                إدارة متقدمة للمحفظة الاستثمارية مع استراتيجيات عبقرية وتنبيهات ذكية مدعومة بالذكاء الاصطناعي
              </p>
              <div className="flex justify-center mb-6">
                <div className="flex space-x-2 space-x-reverse">
                  <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">محفظة ذكية</span>
                  <span className="px-2 py-1 bg-pink-100 text-pink-700 rounded-full text-xs">تنبيهات فورية</span>
                  <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs">استراتيجيات</span>
                </div>
              </div>
              <Link 
                href="/investment-dashboard" 
                className="inline-block w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                إدارة المحفظة
              </Link>
            </SmartCard>
          </div>

          {/* Statistics Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-gulf-800 mb-2">500+</div>
              <p className="text-gulf-600 text-sm">زوج عملة</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gulf-800 mb-2">50+</div>
              <p className="text-gulf-600 text-sm">سلعة عالمية</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gulf-800 mb-2">24/7</div>
              <p className="text-gulf-600 text-sm">مراقبة مستمرة</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gulf-800 mb-2">95%</div>
              <p className="text-gulf-600 text-sm">دقة التنبؤات</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-gulf-600 mb-3">خطط جاهزة للإطلاق</p>
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">باقات تسعير مقترحة للعملاء</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              اختر الخطة المناسبة لمرحلة عملك. جميع الباقات تشمل ربط المنصة برابط موثوق، تشفير SSL، ومراقبة أداء مستمرة.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-3xl border p-8 shadow-lg transition hover:-translate-y-1 ${
                  plan.highlight
                    ? 'border-gulf-200 bg-gradient-to-b from-gulf-50 to-white'
                    : 'border-neutral-200 bg-white'
                }`}
              >
                {plan.badge && (
                  <span className="absolute -top-3 right-6 rounded-full bg-gulf-600 px-4 py-1 text-sm font-semibold text-white shadow-lg">
                    {plan.badge}
                  </span>
                )}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-gulf-600">{plan.description}</p>
                  <h3 className="mt-4 text-2xl font-bold text-neutral-900">{plan.name}</h3>
                </div>
                <div className="flex items-baseline gap-2 text-neutral-900">
                  <span className="text-5xl font-bold">
                    {plan.price.toLocaleString('ar-SA')}
                  </span>
                  <span className="text-lg text-neutral-500">
                    {plan.currency} / {plan.period}
                  </span>
                </div>

                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-neutral-700">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-6 text-sm text-neutral-500 border-t border-neutral-200 pt-4">
                  {plan.bestFor}
                </p>

                <Link
                  href="#subscribe"
                  className={`mt-8 block rounded-2xl px-6 py-4 text-center text-lg font-semibold transition ${
                    plan.highlight
                      ? 'bg-gradient-gulf text-white shadow-gulf hover:shadow-xl-colored'
                      : 'border border-neutral-200 text-gulf-700 hover:bg-gulf-50'
                  }`}
                >
                  اختر هذه الخطة
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingHighlights.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-neutral-200 bg-neutral-50/50 p-6 text-center"
              >
                <p className="text-sm font-semibold text-gulf-600">{item.label}</p>
                <p className="mt-2 text-3xl font-bold text-neutral-900">{item.value}</p>
                <p className="mt-1 text-sm text-neutral-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Section */}
      <section
        id="subscribe"
        className="relative overflow-hidden bg-gradient-to-br from-gulf-900 via-gulf-800 to-emerald-800 py-20 text-white"
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)',
            backgroundSize: '24px 24px',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <p className="text-sm font-semibold text-gold-200 mb-3">جاهزية كاملة للنشر</p>
                <h2 className="text-4xl font-bold leading-snug">
                  اربط منصتك برابط موثوق وابدأ بجمع الاشتراكات فوراً
                </h2>
                <p className="mt-4 text-white/80 text-lg leading-relaxed">
                  ننفذ جميع خطوات الإطلاق من تهيئة النطاق وحتى إعداد صفحات الاشتراك ونماذج الدفع،
                  مع لوحات مراقبة في الوقت الحقيقي لأداء حملاتك.
                </p>
              </div>

              <div className="space-y-6">
                {subscriptionHighlights.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-gold-200" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-3xl font-bold">99.95%</p>
                  <p className="text-sm text-white/70">الجاهزية مع شهادات SSL تلقائية</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">48 ساعة</p>
                  <p className="text-sm text-white/70">للإطلاق الأولي وربط النطاق</p>
                </div>
              </div>
            </div>

            <SubscriptionForm planOptions={pricingPlans.map((plan) => plan.name)} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-gulf"></div>
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-white">
            <h2 className="text-4xl lg:text-5xl font-bold">
              ابدأ رحلتك الاستثمارية اليوم
            </h2>
            <p className="text-xl text-gulf-100 max-w-2xl mx-auto leading-relaxed">
              انضم إلى آلاف المستثمرين الذين يثقون بتحليلاتنا لاتخاذ قرارات استثمارية مدروسة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/markets/local"
                className="group inline-flex items-center justify-center px-8 py-4 bg-white text-gulf-700 font-bold rounded-xl hover:bg-gulf-50 transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                <span>ابدأ الآن</span>
                <ArrowRight className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                href="/sources"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
              >
                تعرف على مصادرنا
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* قسم الاشتراك */}
      <section id="subscription" className="py-24 bg-gradient-to-br from-gulf-900 via-emerald-900 to-gold-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gold-400 via-emerald-400 to-gulf-400 bg-clip-text text-transparent mb-6">
              ابدأ رحلتك الاستثمارية اليوم
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              اختر الباقة التي تناسب احتياجاتك وابدأ في اتخاذ قرارات استثمارية ذكية
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 text-white">
              <div className="text-3xl font-bold text-emerald-400 mb-2">299</div>
              <div className="text-lg mb-4">ريال شهرياً</div>
              <h3 className="text-xl font-semibold mb-4">الباقة الأساسية</h3>
              <p className="text-gray-300 mb-6">للمستثمرين المبتدئين</p>
              <Link 
                href="/subscription"
                className="block w-full bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
              >
                اعرف المزيد
              </Link>
            </div>

            <div className="bg-gradient-to-br from-emerald-500/20 to-blue-500/20 backdrop-blur-xl rounded-3xl p-8 border-2 border-emerald-500/50 text-white transform scale-105">
              <div className="bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-4 inline-block">
                الأكثر شعبية
              </div>
              <div className="text-3xl font-bold text-emerald-400 mb-2">699</div>
              <div className="text-lg mb-4">ريال شهرياً</div>
              <h3 className="text-xl font-semibold mb-4">الباقة الاحترافية</h3>
              <p className="text-gray-300 mb-6">للمحترفين والشركات</p>
              <Link 
                href="/subscription"
                className="block w-full bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
              >
                ابدأ الآن
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 text-white">
              <div className="text-3xl font-bold text-gold-400 mb-2">2999</div>
              <div className="text-lg mb-4">ريال شهرياً</div>
              <h3 className="text-xl font-semibold mb-4">الباقة الذهبية VIP</h3>
              <p className="text-gray-300 mb-6">للمستثمرين الأثرياء</p>
              <Link 
                href="/subscription"
                className="block w-full bg-gradient-to-r from-gold-500 to-yellow-600 hover:from-gold-600 hover:to-yellow-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
              >
                تواصل معنا
              </Link>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">
              تجربة مجانية لمدة 14 يوم
            </h3>
            <p className="text-gray-300 mb-8">
              استمتع بجميع المميزات مجاناً لمدة أسبوعين كاملين. بدون التزام، إلغاء في أي وقت
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                href="/subscription-form"
                className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-2xl"
              >
                ابدأ التجربة المجانية
              </Link>
              <Link 
                href="/subscription"
                className="bg-white/20 hover:bg-white/30 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 border border-white/30"
              >
                مقارنة الباقات
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 space-x-reverse">
                <div className="w-8 h-8 bg-gradient-gulf rounded-lg flex items-center justify-center">
                  <BarChart3 className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">خليج التحليلات</h3>
              </div>
              <p className="text-neutral-400 leading-relaxed">
                مرجعيتك الموثوقة في تحليل الأسواق المالية والاستثمار الذكي
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-neutral-200">الأسواق</h4>
              <ul className="space-y-2 text-neutral-400">
                <li><Link href="/markets/local" className="hover:text-gulf-400 transition-colors duration-200">الأسواق المحلية</Link></li>
                <li><Link href="/markets/global" className="hover:text-gulf-400 transition-colors duration-200">الأسواق العالمية</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-neutral-200">التحليلات المتقدمة</h4>
              <ul className="space-y-2 text-neutral-400">
                <li><Link href="/currencies" className="hover:text-gulf-400 transition-colors duration-200">تحليل العملات</Link></li>
                <li><Link href="/commodities" className="hover:text-gulf-400 transition-colors duration-200">تحليل السلع</Link></li>
                <li><Link href="/investment-dashboard" className="hover:text-gulf-400 transition-colors duration-200">لوحة التحكم الذكية</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-neutral-200">التحليلات الأساسية</h4>
              <ul className="space-y-2 text-neutral-400">
                <li><Link href="/predictions" className="hover:text-gulf-400 transition-colors duration-200">التنبؤات</Link></li>
                <li><Link href="/sources" className="hover:text-gulf-400 transition-colors duration-200">مصادر البيانات</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-neutral-200">تواصل معنا</h4>
              <p className="text-neutral-400 text-sm">
                للاستفسارات والدعم التقني
              </p>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-neutral-400 text-sm">
              &copy; 2025 خليج التحليلات. جميع الحقوق محفوظة.
            </p>
            <p className="text-neutral-500 text-xs mt-2 sm:mt-0">
              مصنوع بـ ❤️ للمستثمر العربي
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
