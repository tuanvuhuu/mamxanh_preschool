import type { Metadata } from 'next';
import { Baloo_2, Quicksand } from 'next/font/google';
import './globals.css';

const display = Baloo_2({
  subsets: ['latin', 'vietnamese'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

const body = Quicksand({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Mầm Xanh Preschool — Trường mầm non song ngữ ESL',
  description:
    'Mầm Xanh Preschool — Nơi ươm mầm những ước mơ xanh. Trường mầm non song ngữ chuẩn quốc tế với chương trình ESL cho trẻ từ 18 tháng – 5 tuổi.',
  icons: { icon: '/logo.png' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
