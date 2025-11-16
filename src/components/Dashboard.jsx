// ملف Dashboard.jsx
import React from 'react';
import { Line, Doughnut } from 'react-chartjs-2';

// كروت مؤشرات الأداء
const KPIs = [
  { label: "إجمالي المبيعات (الشهر)", value: "SAR 45,500" },
  { label: "العملاء الجدد", value: "120" },
  { label: "نسبة النمو", value: "18%" },
  { label: "الطلبات اليوم", value: "36" }
];

// بيانات رسم بياني إجمالي المبيعات
const salesData = {
  labels: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو'],
  datasets: [
    {
      label: 'المبيعات الشهرية',
      data: [8500, 12000, 9500, 11000, 14500],
      fill: false,
      backgroundColor: '#2077FF',
      borderColor: '#2077FF',
    },
  ],
};

// توزيع المبيعات حسب الفئات
const productsData = {
  labels: ['أحذية', 'حقائب', 'أكسسوارات', 'ملابس'],
  datasets: [
    {
      label: 'التوزيع',
      data: [34, 21, 28, 17],
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#2ECC40'
      ],
    },
  ],
};

export default function Dashboard() {
  return (
    <div>
      <h2>لوحة المعلومات الرئيسية</h2>
      {/* مؤشرات الأداء */}
      <div style={{display:'flex', gap:'20px', marginBottom:'30px'}}>
        {KPIs.map((kpi, i) => (
          <div key={i} style={{border:'1px solid #ddd', borderRadius:'8px', padding:'20px', minWidth:'150px'}}>
            <h4>{kpi.label}</h4>
            <p style={{fontSize:'1.4em', fontWeight:'bold'}}>{kpi.value}</p>
          </div>
        ))}
      </div>
      
      {/* رسم بياني لمسار المبيعات */}
      <div style={{maxWidth:'500px', marginBottom:'40px'}}>
        <Line data={salesData} />
      </div>

      {/* رسم بياني توزيع المنتجات */}
      <div style={{maxWidth:'350px'}}>
        <Doughnut data={productsData} />
      </div>

      {/* مثال جدول تفاصيل العمليات */}
      <div style={{marginTop:'40px'}}>
        <h4>جدول الطلبات اليوم</h4>
        <table style={{width:'100%', borderCollapse:'collapse'}}>
          <thead>
            <tr>
              <th>رقم الطلب</th>
              <th>المنتج</th>
              <th>العميل</th>
              <th>القيمة (ريال)</th>
              <th>التاريخ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#2041</td>
              <td>حذاء رياضي</td>
              <td>سارة القحطاني</td>
              <td>420</td>
              <td>2025-11-12</td>
            </tr>
            <tr>
              <td>#2042</td>
              <td>حقيبة يد</td>
              <td>خالد العتيبي</td>
              <td>380</td>
              <td>2025-11-12</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}