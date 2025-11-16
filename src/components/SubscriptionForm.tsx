'use client';

import React, { useState } from 'react';
import { Brain, Check, Crown, Star, Shield, Phone, Mail, MessageCircle } from 'lucide-react';

interface SubscriptionFormProps {
  selectedPlan?: string;
}

const SubscriptionForm: React.FC<SubscriptionFormProps> = ({ selectedPlan = 'professional' }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    planId: selectedPlan,
    paymentMethod: 'card'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // محاكاة إرسال البيانات
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('تم إرسال طلب الاشتراك بنجاح! سيتم التواصل معك خلال 24 ساعة.');
    setIsSubmitting(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-tr from-emerald-400 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <Crown className="h-3 w-3 text-white" />
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            الإدارة المالية الذكية
          </h1>
          <p className="text-xl text-gray-300 mb-8">Smart Financial Management</p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            انضم إلى آلاف المستثمرين الذين يثقون في تحليلاتنا المدعومة بالذكاء الاصطناعي
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* نموذج الاشتراك */}
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Shield className="h-6 w-6 text-emerald-400 mr-3" />
              اشترك الآن
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2 font-medium">الاسم الكامل</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="أدخل اسمك الكامل"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-medium">البريد الإلكتروني</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="email@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-medium">رقم الجوال</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="+966 5X XXX XXXX"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-medium">الشركة (اختياري)</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="اسم الشركة أو المؤسسة"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-medium">الباقة المختارة</label>
                <select
                  name="planId"
                  value={formData.planId}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="basic">الباقة الأساسية - 299 ريال</option>
                  <option value="professional">الباقة الاحترافية - 699 ريال</option>
                  <option value="enterprise">باقة المؤسسات - 1499 ريال</option>
                  <option value="vip">الباقة الذهبية VIP - 2999 ريال</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-medium">طريقة الدفع</label>
                <select
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="card">فيزا / ماستركارد</option>
                  <option value="applepay">Apple Pay</option>
                  <option value="stcpay">STC Pay</option>
                  <option value="bank">تحويل بنكي</option>
                </select>
              </div>

              <div className="bg-emerald-500/20 border border-emerald-500/50 rounded-xl p-4">
                <p className="text-emerald-300 text-sm flex items-center">
                  <Check className="h-4 w-4 mr-2" />
                  تجربة مجانية لمدة 14 يوم
                </p>
                <p className="text-emerald-300 text-sm flex items-center mt-1">
                  <Check className="h-4 w-4 mr-2" />
                  إلغاء في أي وقت بدون التزام
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-2xl"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    جاري المعالجة...
                  </div>
                ) : (
                  'اشترك الآن'
                )}
              </button>
            </form>
          </div>

          {/* المميزات والضمانات */}
          <div className="space-y-8">
            {/* ضمانات الخدمة */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <Shield className="h-6 w-6 text-emerald-400 mr-3" />
                ضمانات الخدمة
              </h3>
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <Check className="h-5 w-5 text-emerald-400 mr-3" />
                  ضمان استرداد المال خلال 30 يوم
                </div>
                <div className="flex items-center text-gray-300">
                  <Check className="h-5 w-5 text-emerald-400 mr-3" />
                  دعم فني 24/7 باللغة العربية
                </div>
                <div className="flex items-center text-gray-300">
                  <Check className="h-5 w-5 text-emerald-400 mr-3" />
                  تحديثات مجانية للمنصة والمميزات
                </div>
                <div className="flex items-center text-gray-300">
                  <Check className="h-5 w-5 text-emerald-400 mr-3" />
                  حماية البيانات والخصوصية
                </div>
              </div>
            </div>

            {/* تقييمات العملاء */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <Star className="h-6 w-6 text-yellow-400 mr-3" />
                تقييمات العملاء
              </h3>
              <div className="space-y-4">
                <div className="border-b border-white/10 pb-4">
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">
                    "منصة ممتازة ساعدتني في تحقيق عوائد استثمارية رائعة"
                  </p>
                  <p className="text-gray-500 text-xs mt-1">- أحمد المالكي، مدير استثمار</p>
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">
                    "دقة التنبؤات والتحليلات تفوق 90%، أنصح بها بشدة"
                  </p>
                  <p className="text-gray-500 text-xs mt-1">- فاطمة العتيبي، مستثمرة</p>
                </div>
              </div>
            </div>

            {/* معلومات الاتصال */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <MessageCircle className="h-6 w-6 text-blue-400 mr-3" />
                تواصل معنا
              </h3>
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <Phone className="h-5 w-5 text-emerald-400 mr-3" />
                  +966 11 123 4567
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="h-5 w-5 text-emerald-400 mr-3" />
                  info@smartfinancial.sa
                </div>
                <div className="flex items-center text-gray-300">
                  <MessageCircle className="h-5 w-5 text-emerald-400 mr-3" />
                  دردشة مباشرة متاحة 24/7
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionForm;