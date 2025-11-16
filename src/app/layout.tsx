import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Khalid Analytics',
  description: 'منصة تحليلات عقارية مدعومة بالذكاء الاصطناعي',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="font-arabic bg-slate-50 text-gray-900 antialiased">
        {children}
      </body>
    </html>
  )
}
