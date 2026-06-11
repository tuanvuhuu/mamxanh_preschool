import Link from 'next/link';
import Logo from '@/components/ui/Logo';

const QUICK: Array<[string, string]> = [
  ['Trang chủ', '/'],
  ['Giới thiệu', '/introduce'],
  ['Chương trình', '/programs'],
  ['Tuyển sinh', '/admissions'],
  ['Tin tức', '/news'],
  ['Đội ngũ giáo viên', '/teachers'],
  ['Cơ sở vật chất', '/facilities'],
  ['Chính sách', '/policies'],
  ['Liên hệ', '/contact'],
];

const PROGRAMS: Array<[string, string]> = [
  ['Dew (18 – 24 tháng)',  '/programs#dew'],
  ['Cloud (2 – 3 tuổi)',   '/programs#cloud'],
  ['Mountain (3 – 4 tuổi)','/programs#mountain'],
  ['Leaf (4 – 5 tuổi)',    '/programs#leaf'],
  ['River (5 – 6 tuổi)',   '/programs#river'],
];

const Leaf = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} aria-hidden>
    <path d="M10 90 C 30 20, 70 20, 90 10 C 80 60, 50 90, 10 90 Z" fill="currentColor" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#2E3D1A] to-[#1F2A14] text-leaf-100 pt-16 mt-0 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-25" aria-hidden>
        <Leaf className="absolute -top-16 -right-16 w-64 text-leaf-700 rotate-[140deg]" />
        <Leaf className="absolute bottom-16 -left-12 w-48 text-leaf-800 -rotate-[30deg]" />
      </div>

      <div className="container-page relative grid gap-10 md:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Logo variant="light" />
          <p className="mt-5 text-sm leading-relaxed text-leaf-100/80">
            Trường mầm non song ngữ chuẩn quốc tế — nơi ươm mầm những ước mơ xanh
            cho thế hệ tương lai.
          </p>

          <div className="mt-6">
            <p className="text-white font-bold text-sm mb-3">Kết nối với chúng tôi</p>
            <div className="flex gap-2">
              <SocialIcon name="facebook" />
              <SocialIcon name="youtube" />
              <SocialIcon name="instagram" />
              <SocialIcon name="tiktok" />
            </div>
          </div>
        </div>

        <FooterCol title="Liên kết nhanh" items={QUICK} />
        <FooterCol title="Chương trình" items={PROGRAMS} />

        <div>
          <FooterColTitle>Liên hệ</FooterColTitle>
          <address className="not-italic text-sm leading-relaxed space-y-2">
            <p><strong className="text-white">Mầm Xanh Preschool</strong></p>
            <p>123 Đường Hoa Sữa, Quận 7,<br />TP. Hồ Chí Minh</p>
            <p>📞 <a href="tel:19000000" className="text-sunny font-semibold">1900 0000</a></p>
            <p>✉️ <a href="mailto:hello@mamxanh.edu.vn" className="text-sunny font-semibold">hello@mamxanh.edu.vn</a></p>
          </address>
        </div>
      </div>

      <div className="relative mt-12 py-5 border-t border-white/10 text-xs">
        <div className="container-page flex flex-col md:flex-row justify-between items-center gap-3 text-leaf-100/70 text-center md:text-left">
          <p>Copyright © 2026 <strong className="text-white">MẦM XANH PRESCHOOL</strong> · All Rights Reserved.</p>
          <p>Thiết kế bởi <a href="#" className="text-sunny">Mầm Xanh Team</a></p>
        </div>
      </div>
    </footer>
  );
}

function FooterColTitle({ children }: { children: React.ReactNode }) {
  return (
    <h5 className="relative text-white text-base font-bold mb-5 pb-2.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-7 after:h-[3px] after:bg-sunny after:rounded">
      {children}
    </h5>
  );
}

function FooterCol({ title, items }: { title: string; items: Array<[string, string]> }) {
  return (
    <div>
      <FooterColTitle>{title}</FooterColTitle>
      <ul className="space-y-2">
        {items.map(([label, href]) => (
          <li key={label}>
            <Link
              href={href}
              className="text-sm text-leaf-100/85 hover:text-sunny-light hover:pl-1 inline-block transition-all"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({ name }: { name: 'facebook' | 'youtube' | 'instagram' | 'tiktok' }) {
  const paths: Record<string, React.ReactNode> = {
    facebook: <path d="M13.5 21v-7.5h2.5l.4-3H13.5V8.6c0-.9.3-1.5 1.5-1.5H17V4.4c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5v2.6H7.5v3h2.5V21h3.5z" />,
    youtube:  <path d="M21.6 7.2c-.2-1-1-1.8-2-2C17.8 5 12 5 12 5s-5.8 0-7.6.2c-1 .2-1.8 1-2 2C2 9 2 12 2 12s0 3 .4 4.8c.2 1 1 1.8 2 2C6.2 19 12 19 12 19s5.8 0 7.6-.2c1-.2 1.8-1 2-2 .4-1.8.4-4.8.4-4.8s0-3-.4-4.8zM10 15V9l5 3-5 3z" />,
    tiktok:   <path d="M16 3v3a4 4 0 0 0 4 4v3a7 7 0 0 1-4-1.3V16a5 5 0 1 1-5-5v3a2 2 0 1 0 2 2V3h3z" />,
    instagram: (
      <g fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </g>
    ),
  };
  const hoverClass: Record<string, string> = {
    facebook:  'hover:bg-[#1877F2]',
    youtube:   'hover:bg-[#FF0000]',
    instagram: 'hover:bg-gradient-to-br hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF]',
    tiktok:    'hover:bg-black',
  };
  return (
    <a
      href="#"
      aria-label={name}
      className={`w-9 h-9 rounded-full grid place-items-center bg-white/10 text-white transition-all hover:-translate-y-0.5 ${hoverClass[name]}`}
    >
      <svg viewBox="0 0 24 24" width="18" height="18" fill={name === 'instagram' ? 'none' : 'currentColor'}>
        {paths[name]}
      </svg>
    </a>
  );
}
