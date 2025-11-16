'use client';

import React, { useState } from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  Activity, 
  Target, 
  Brain,
  Globe,
  Crown,
  BarChart3,
  PieChart,
  Rocket,
  Star,
  DollarSign
} from 'lucide-react';

const SmartCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-neutral-200/50 hover:shadow-xl transition-all duration-300 hover:bg-white/90 ${className}`}>
    {children}
  </div>
);

export default function AnalyticsPage() {
  // بيانات تحليلية محلية
  const marketData = [
    { title: 'مؤشر تاسي', value: '11,485', change: '+2.3%', color: 'green' },
    { title: 'أرامكو', value: '28.45 ريال', change: '+1.8%', color: 'blue' },
    { title: 'الذهب', value: '$2,685', change: '+0.5%', color: 'gold' },
    { title: 'النفط برنت', value: '$92.50', change: '+3.2%', color: 'green' },
    { title: 'الدولار/ريال', value: '3.750', change: '+0.1%', color: 'blue' }
  ];

  const opportunities = [
    {
      name: 'أرامكو السعودية',
      sector: 'الطاقة والبتروكيماويات',
      potential: '+25.8%',
      confidence: 89,
      score: 94,
      price: 28.45,
      target: 35.80
    },
    {
      name: 'شركة الاتصالات السعودية',
      sector: 'الاتصالات والتقنية',
      potential: '+32.5%',
      confidence: 82,
      score: 88,
      price: 124.50,
      target: 165.00
    },
    {
      name: 'صندوق نيوم للاستثمار',
      sector: 'المدن المستقبلية',
      potential: '+52.0%',
      confidence: 74,
      score: 91,
      price: 18.75,
      target: 28.50
    }
  ];

  const economicIndicators = [
    { title: 'نمو الناتج المحلي', value: '4.8%', icon: <TrendingUp className="w-5 h-5 text-emerald-600" /> },
    { title: 'نمو القطاع غير النفطي', value: '6.2%', icon: <BarChart3 className="w-5 h-5 text-gulf-600" /> },
    { title: 'تقدم رؤية 2030', value: '68%', icon: <Target className="w-5 h-5 text-gold-600" /> },
    { title: 'الاحتياطيات الأجنبية', value: '$445B', icon: <DollarSign className="w-5 h-5 text-purple-600" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-25 via-gulf-50/30 to-gold-50/20">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-neutral-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-gulf-600 via-emerald-600 to-gold-600 rounded-lg flex items-center justify-center">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-gulf-600 via-emerald-600 to-gold-600 bg-clip-text text-transparent">الإدارة المالية الذكية</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-sm text-neutral-600 flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              مباشر - Q1 2025
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Real-time Market Overview */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <BarChart3 className="w-6 h-6 text-emerald-600" />
            <h2 className="text-2xl font-bold text-neutral-900">مؤشرات السوق المباشرة</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
            {marketData.map((item, index) => (
              <SmartCard key={index} className={`
                ${item.color === 'green' ? 'border-emerald-200 bg-emerald-50' : ''}
                ${item.color === 'blue' ? 'border-gulf-200 bg-gulf-50' : ''}
                ${item.color === 'gold' ? 'border-gold-200 bg-gold-50' : ''}
              `}>
                <div className="text-sm font-medium mb-2">{item.title}</div>
                <div className="text-2xl font-bold mb-1">{item.value}</div>
                <div className="text-sm flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  {item.change}
                </div>
              </SmartCard>
            ))}
          </div>
        </div>

        {/* Investment Opportunities */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Rocket className="w-6 h-6 text-gulf-600" />
            <h2 className="text-2xl font-bold text-neutral-900">أفضل الفرص الاستثمارية لعام 2025</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {opportunities.map((opportunity, index) => (
              <SmartCard key={index} className="relative overflow-hidden">
                <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-emerald-500 to-gulf-600"></div>
                
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-lg text-neutral-900">{opportunity.name}</h3>
                    <p className="text-sm text-neutral-600">{opportunity.sector}</p>
                  </div>
                  <div className="text-left">
                    <div className="text-2xl font-bold text-emerald-700">{opportunity.potential}</div>
                    <div className="text-sm text-neutral-600">عائد متوقع</div>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-neutral-600">السعر الحالي</span>
                    <span className="font-semibold">{opportunity.price} ريال</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-neutral-600">الهدف</span>
                    <span className="font-semibold text-emerald-700">{opportunity.target} ريال</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-neutral-600">الثقة</span>
                    <span className="font-semibold">{opportunity.confidence}%</span>
                  </div>
                </div>

                <div className="mt-3">
                  <div className="text-xs text-neutral-600 mb-1">مؤشر الأداء:</div>
                  <div className="w-full bg-neutral-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-emerald-500 to-gulf-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${Math.min(opportunity.score, 100)}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-neutral-600 mt-1">{opportunity.score}/100</div>
                </div>
              </SmartCard>
            ))}
          </div>
        </div>

        {/* Economic Context */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Globe className="w-6 h-6 text-emerald-600" />
            <h2 className="text-2xl font-bold text-neutral-900">السياق الاقتصادي السعودي Q1 2025</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {economicIndicators.map((indicator, index) => (
              <SmartCard key={index} className="text-center">
                <div className="flex justify-center mb-3">
                  {indicator.icon}
                </div>
                <div className="text-3xl font-bold text-neutral-900 mb-1">{indicator.value}</div>
                <div className="text-sm text-neutral-600">{indicator.title}</div>
              </SmartCard>
            ))}
          </div>

          <SmartCard className="mt-6">
            <h3 className="font-bold text-neutral-900 mb-4 flex items-center gap-2">
              <Star className="w-5 h-5 text-gold-600" />
              الاتجاهات الاقتصادية الرئيسية
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-3 bg-emerald-50 rounded-lg">
                <TrendingUp className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                <span className="text-neutral-700 text-sm">نمو القطاع غير النفطي بأسرع معدل منذ 2019</span>
              </div>
              <div className="flex items-start gap-3 p-3 bg-gulf-50 rounded-lg">
                <Globe className="w-4 h-4 text-gulf-600 mt-1 flex-shrink-0" />
                <span className="text-neutral-700 text-sm">زيادة الاستثمار الأجنبي المباشر بنسبة 35%</span>
              </div>
              <div className="flex items-start gap-3 p-3 bg-gold-50 rounded-lg">
                <Target className="w-4 h-4 text-gold-600 mt-1 flex-shrink-0" />
                <span className="text-neutral-700 text-sm">نمو قطاع السياحة والترفيه بنسبة 28%</span>
              </div>
              <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                <Brain className="w-4 h-4 text-purple-600 mt-1 flex-shrink-0" />
                <span className="text-neutral-700 text-sm">تحسن مؤشر سهولة الأعمال إلى المرتبة 18 عالمياً</span>
              </div>
            </div>
          </SmartCard>
        </div>
      </div>
    </div>
  );
}