'use client';

import { useState } from 'react';
import { Loader2, Mail, CheckCircle2, AlertTriangle } from 'lucide-react';

type SubscriptionFormProps = {
  planOptions: string[];
};

type FormState = {
  fullName: string;
  email: string;
  company: string;
  plan: string;
};

export default function SubscriptionForm({ planOptions }: SubscriptionFormProps) {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    email: '',
    company: '',
    plan: planOptions[0] ?? '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState<string>('');

  const handleChange = (field: keyof FormState, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const payload = await response.json();
      if (!response.ok) {
        throw new Error(payload?.error ?? 'تعذر إرسال الطلب، يرجى المحاولة مرة أخرى.');
      }

      setStatus('success');
      setMessage('تم استلام طلب الاشتراك بنجاح! سنتواصل معك خلال 24 ساعة عمل.');
      setFormData({
        fullName: '',
        email: '',
        company: '',
        plan: planOptions[0] ?? '',
      });
    } catch (error) {
      setStatus('error');
      setMessage(
        error instanceof Error
          ? error.message
          : 'تعذر إرسال الطلب، يرجى التحقق من الاتصال بالشبكة وإعادة المحاولة.'
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/10 border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl backdrop-blur"
    >
      <div className="flex items-center gap-3 mb-8 text-white">
        <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
          <Mail className="w-6 h-6 text-gold-200" />
        </div>
        <div>
          <p className="text-sm text-white/70">اشترك الآن</p>
          <h3 className="text-2xl font-bold">نخبة العملاء تبدأ من هنا</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-neutral-900">
        <div>
          <label className="block text-sm font-semibold text-white/80 mb-2">الاسم الكامل</label>
          <input
            type="text"
            placeholder="مثال: خالد العتيبي"
            value={formData.fullName}
            onChange={(event) => handleChange('fullName', event.target.value)}
            className="w-full rounded-xl border border-white/20 bg-white/90 px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-gulf-300"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-white/80 mb-2">البريد الإلكتروني</label>
          <input
            type="email"
            placeholder="you@company.com"
            value={formData.email}
            onChange={(event) => handleChange('email', event.target.value)}
            className="w-full rounded-xl border border-white/20 bg-white/90 px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-gulf-300"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-white/80 mb-2">اسم الشركة</label>
          <input
            type="text"
            placeholder="اسم الشركة أو الصندوق"
            value={formData.company}
            onChange={(event) => handleChange('company', event.target.value)}
            className="w-full rounded-xl border border-white/20 bg-white/90 px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-gulf-300"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-white/80 mb-2">الباقة المطلوبة</label>
          <select
            value={formData.plan}
            onChange={(event) => handleChange('plan', event.target.value)}
            className="w-full rounded-xl border border-white/20 bg-white/90 px-4 py-3 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-gulf-300"
          >
            {planOptions.map((plan) => (
              <option key={plan} value={plan}>
                {plan}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-white py-4 text-lg font-semibold text-gulf-700 shadow-xl transition hover:-translate-y-0.5 hover:shadow-2xl disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'loading' ? (
          <span className="flex items-center gap-2">
            <Loader2 className="h-5 w-5 animate-spin" />
            جارٍ إرسال الطلب...
          </span>
        ) : (
          'اشترك وابدأ التجربة'
        )}
      </button>

      {message && (
        <div
          className={`mt-4 flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium ${
            status === 'success' ? 'bg-emerald-500/10 text-emerald-100' : 'bg-rose-500/10 text-rose-100'
          }`}
        >
          {status === 'success' ? (
            <CheckCircle2 className="h-5 w-5" />
          ) : (
            <AlertTriangle className="h-5 w-5" />
          )}
          <span>{message}</span>
        </div>
      )}
    </form>
  );
}
