export type PricingPlan = {
  id: string;
  name: string;
  nameEn: string;
  price: number;
  originalPrice?: number;
  currency: string;
  period: string;
  discount?: string;
  description: string;
  features: string[];
  limitations?: string[];
  bestFor: string;
  popular?: boolean;
  highlight?: boolean;
  badge?: string;
};

export type Testimonial = {
  name: string;
  position: string;
  company: string;
  text: string;
  rating: number;
};

export type ServiceInfo = {
  trialPeriod: number;
  setupFee: number;
  contractPeriod: string;
  paymentMethods: string[];
  support: {
    hours: string;
    languages: string[];
    channels: string[];
  };
  dataCenter: {
    location: string;
    backup: string;
    uptime: string;
    security: string;
  };
};

export const pricingPlans: PricingPlan[] = [
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
      'تطبيق الجوال الأساسي',
      'دعم عبر البريد الإلكتروني',
      'التحديثات اليومية للأسعار'
    ],
    limitations: [
      'لا يشمل الأسواق العالمية',
      'تحديث البيانات كل 4 ساعات',
      'تنبيهات محدودة (10 يومياً)'
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
      'تحليل الأسواق العالمية (أمريكا، أوروبا، آسيا)',
      'تنبؤات يومية متقدمة بالذكاء الاصطناعي',
      'متابعة غير محدودة للأسهم والصناديق',
      'تحليل فني متقدم مع مؤشرات احترافية',
      'تقارير أسبوعية مفصلة',
      'تنبيهات ذكية فورية',
      'تحليل المحافظ وتحسين الأداء',
      'واجهة برمجة التطبيقات (API)',
      'دعم هاتفي ودردشة مباشرة',
      'تحديث البيانات كل دقيقة',
      'تحليل المشاعر السوقية'
    ],
    limitations: [
      'محدود بـ 5 محافظ استثمارية',
      'تقارير مخصصة محدودة'
    ],
    bestFor: 'مدراء المحافظ وشركات الوساطة',
    popular: true,
    highlight: true,
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
      'تحليل مخصص لمتطلبات المؤسسة',
      'استشارات استثمارية مع خبراء',
      'تقارير مخصصة وتحليلات متقدمة',
      'محافظ استثمارية غير محدودة',
      'تكامل مع أنظمة إدارة المحافظ',
      'تدريب للفرق والموظفين',
      'مدير حساب مخصص',
      'دعم فني متقدم 24/7',
      'تحليل المخاطر المؤسسية',
      'تقارير الامتثال التنظيمي',
      'نسخة احتياطية للبيانات',
      'بيانات تاريخية شاملة (10 سنوات)',
      'ورش عمل شهرية'
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
      'مستشار استثماري شخصي مخصص',
      'اجتماعات شهرية مع خبراء الاستثمار',
      'تحليل مخصص للثروات الشخصية',
      'إدارة محافظ VIP',
      'تنبيهات حصرية للفرص الاستثمارية',
      'وصول لمعلومات حصرية قبل السوق',
      'تحليل الاستثمارات البديلة (عقارات، ذهب، فنون)',
      'تخطيط مالي للتقاعد والوراثة',
      'تقارير ضريبية متقدمة',
      'خدمات مصرفية استثمارية حصرية',
      'دعوات لفعاليات استثمارية VIP',
      'تطبيق VIP مخصص',
      'حماية متقدمة للبيانات والخصوصية'
    ],
    bestFor: 'المستثمرين الأثرياء والعائلات الاستثمارية',
    badge: 'حصري'
  }
];

export const serviceInfo: ServiceInfo = {
  trialPeriod: 14,
  setupFee: 0,
  contractPeriod: 'بدون التزام - إلغاء في أي وقت',
  paymentMethods: [
    'فيزا وماستركارد',
    'أبل باي وجوجل باي', 
    'التحويل البنكي',
    'STC Pay و urPay',
    'تقسيط على 6 أشهر (للباقات المدفوعة سنوياً)'
  ],
  support: {
    hours: '24/7',
    languages: ['العربية', 'English'],
    channels: ['هاتف', 'دردشة مباشرة', 'بريد إلكتروني', 'واتساب']
  },
  dataCenter: {
    location: 'الرياض، المملكة العربية السعودية',
    backup: 'نسخ احتياطية يومية',
    uptime: '99.9%',
    security: 'تشفير SSL 256-bit'
  }
};

export const testimonials: Testimonial[] = [
  {
    name: 'أحمد المالكي',
    position: 'مدير استثمار',
    company: 'شركة الراجحي المالية',
    text: 'منصة الإدارة المالية الذكية غيرت طريقة عملنا بشكل كامل. دقة التنبؤات تفوق 90% والتحليلات عميقة ومفيدة.',
    rating: 5
  },
  {
    name: 'فاطمة العتيبي',
    position: 'مستثمرة فردية',
    company: 'محفظة شخصية',
    text: 'استطعت تحقيق عوائد ممتازة بفضل التنبيهات الذكية والتحليلات المتقدمة. أنصح بها بشدة.',
    rating: 5
  },
  {
    name: 'خالد السعيد',
    position: 'الرئيس التنفيذي',
    company: 'مجموعة السعيد القابضة',
    text: 'الباقة الذهبية VIP تستحق كل ريال. الاستشارات الشخصية والتحليلات المخصصة لا تقدر بثمن.',
    rating: 5
  }
];
