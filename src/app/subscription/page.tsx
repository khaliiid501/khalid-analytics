'use client';

import React from 'react';
import { Brain, Check, Crown } from 'lucide-react';
import Link from 'next/link';

const plans = [
  {
    id: 'basic',
    name: 'الباقة الأساسية',
    nameEn: 'Basic Plan',
    price: 299,
    originalPrice: 399,
    currency: 'ريال',
    period: 'شهرياً',
    discount: '25%',
    description: 'مثالية للمستثمرين المبتدئين والأفراد',
    features: [
      'تحليل الأسواق المحلية (السعودية والخليج)',
      'تنبؤات أسبوعية بالذكاء الاصطناعي',
      'متابعة 50 سهم وصندوق',
      'تقارير شهرية مبسطة',
      'دعم عبر البريد الإلكتروني'
    ],
    bestFor: 'المستثمرون الأفراد والمبتدئين'
  },
  {
    id: 'professional',
    name: 'الباقة الاحترافية',
    nameEn: 'Professional Plan',
    price: 699,
    originalPrice: 899,
    currency: 'ريال',
    period: 'شهرياً',
    discount: '22%',
    description: 'للمحترفين والمؤسسات المتوسطة',
    features: [
      'جميع مميزات الباقة الأساسية',
      'تحليل الأسواق العالمية',
      'تنبؤات يومية متقدمة',
      'متابعة غير محدودة للأسهم',
      'دعم هاتفي ودردشة مباشرة'
    ],
    bestFor: 'مدراء المحافظ وشركات الوساطة',
    popular: true,
    badge: 'الأكثر شعبية'
  },
  {
    id: 'enterprise',
    name: 'باقة المؤسسات',
    nameEn: 'Enterprise Plan',
    price: 1499,
    originalPrice: 1999,
    currency: 'ريال',
    period: 'شهرياً',
    discount: '25%',
    description: 'للمؤسسات الكبيرة وصناديق الاستثمار',
    features: [
      'جميع مميزات الباقة الاحترافية',
      'تحليل مخصص للمؤسسة',
      'استشارات مع خبراء',
      'مدير حساب مخصص',
      'دعم فني متقدم 24/7'
    ],
    bestFor: 'المؤسسات الكبيرة وصناديق الاستثمار'
  },
  {
    id: 'vip',
    name: 'الباقة الذهبية VIP',
    nameEn: 'VIP Golden Plan',
    price: 2999,
    originalPrice: 3999,
    currency: 'ريال',
    period: 'شهرياً',
    discount: '25%',
    description: 'للمستثمرين الأثرياء والعائلات الاستثمارية',
    features: [
      'جميع مميزات باقة المؤسسات',
      'مستشار شخصي مخصص',
      'اجتماعات مع خبراء الاستثمار',
      'إدارة محافظ VIP',
      'خدمات حصرية'
    ],
    bestFor: 'المستثمرين الأثرياء',
    badge: 'حصري'
  }
];

export default function SubscriptionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-tr from-emerald-400 via-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-2xl">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <Crown className="h-2.5 w-2.5 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  الإدارة المالية الذكية
                </h1>
                <p className="text-sm text-gray-400">Smart Financial Management</p>
              </div>
            </Link>
            
            <nav className="hidden md:flex space-x-6 rtl:space-x-reverse">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">الرئيسية</Link>
              <Link href="/predictions" className="text-gray-300 hover:text-white transition-colors">التنبؤات</Link>
              <Link href="/sources" className="text-gray-300 hover:text-white transition-colors">المصادر</Link>
              <span className="text-emerald-400 font-semibold">الاشتراكات</span>
            </nav>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
            اختر الباقة المناسبة لك
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            استثمر بذكاء مع أحدث تقنيات الذكاء الاصطناعي والتحليلات المتقدمة للأسواق المحلية والعالمية
          </p>
          
          {/* إحصائيات سريعة */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20">
              <div className="text-2xl font-bold text-emerald-400">94.2%</div>
              <div className="text-sm text-gray-300">دقة التنبؤات</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20">
              <div className="text-2xl font-bold text-blue-400">10K+</div>
              <div className="text-sm text-gray-300">مستثمر نشط</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20">
              <div className="text-2xl font-bold text-purple-400">24/7</div>
              <div className="text-sm text-gray-300">دعم فني</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20">
              <div className="text-2xl font-bold text-yellow-400">5⭐</div>
              <div className="text-sm text-gray-300">تقييم العملاء</div>
            </div>
          </div>
        </div>

        {/* خطط الأسعار */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
          {plans.map((plan) => (
            <div 
              key={plan.id} 
              className={`relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                plan.popular 
                  ? 'border-emerald-500/50 shadow-2xl shadow-emerald-500/20 scale-105' 
                  : 'border-white/20'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className={`px-4 py-1 text-xs font-bold rounded-full ${
                    plan.id === 'vip' 
                      ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white'
                      : 'bg-gradient-to-r from-emerald-500 to-blue-500 text-white'
                  }`}>
                    {plan.badge}
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-400 mb-4">{plan.nameEn}</p>
                
                <div className="mb-4">
                  {plan.originalPrice && (
                    <div className="text-gray-500 line-through text-lg">
                      {plan.originalPrice} {plan.currency}
                    </div>
                  )}
                  <div className="text-4xl font-bold text-white">
                    {plan.price}
                    <span className="text-lg text-gray-400 mr-2">{plan.currency}</span>
                  </div>
                  <div className="text-sm text-gray-400">{plan.period}</div>
                  {plan.discount && (
                    <div className="text-emerald-400 font-semibold">
                      وفر {plan.discount}
                    </div>
                  )}
                </div>
                
                <p className="text-gray-300 text-sm">{plan.description}</p>
              </div>

              <div className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start">
                    <Check className="h-5 w-5 text-emerald-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Link 
                href="/subscription-form"
                className={`block w-full text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  plan.id === 'vip'
                    ? 'bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white shadow-lg'
                    : plan.popular
                      ? 'bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white shadow-lg'
                      : 'bg-white/20 hover:bg-white/30 text-white border border-white/30'
                }`}
              >
                {plan.id === 'vip' ? 'اشتراك VIP' : 'اختر الباقة'}
              </Link>

              <div className="text-center mt-4">
                <p className="text-xs text-gray-500">{plan.bestFor}</p>
              </div>
            </div>
          ))}
        </div>

        {/* معلومات الخدمة */}
        <div className="bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-3xl p-8 border border-emerald-500/30 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">
            ابدأ تجربتك المجانية اليوم
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            احصل على 14 يوماً تجربة مجانية كاملة مع جميع المميزات. 
            بدون التزام - إلغاء في أي وقت
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-2xl mx-auto text-sm">
            <div className="flex items-center justify-center text-emerald-300">
              <Check className="h-4 w-4 mr-2" />
              بدون رسوم إعداد
            </div>
            <div className="flex items-center justify-center text-emerald-300">
              <Check className="h-4 w-4 mr-2" />
              إلغاء في أي وقت
            </div>
            <div className="flex items-center justify-center text-emerald-300">
              <Check className="h-4 w-4 mr-2" />
              دعم 24/7
            </div>
            <div className="flex items-center justify-center text-emerald-300">
              <Check className="h-4 w-4 mr-2" />
              ضمان الاسترداد
            </div>
          </div>
          
          <Link 
            href="/subscription-form"
            className="inline-block bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-2xl"
          >
            ابدأ التجربة المجانية الآن
          </Link>
        </div>
      </div>
    </div>
  );
}