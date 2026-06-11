import Link from 'next/link';
import Image from 'next/image';

const Sun = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} aria-hidden>
    <circle cx="50" cy="50" r="20" fill="#FFD54F" />
    {[...Array(8)].map((_, i) => (
      <rect
        key={i}
        x="48" y="8" width="4" height="14" rx="2" fill="#FFD54F"
        transform={`rotate(${i * 45} 50 50)`}
      />
    ))}
  </svg>
);

const Cloud = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 200 80" className={className} style={style} aria-hidden>
    <path fill="#fff" d="M40 60c-15 0-25-10-25-22s11-21 24-20c4-12 16-18 28-15 8-9 22-9 30-2 14-1 26 9 26 22 0 13-11 23-25 23H40z" />
  </svg>
);

const Sparkle = ({ className, style, color = '#FFC107' }: { className?: string; style?: React.CSSProperties; color?: string }) => (
  <svg viewBox="-12 -12 24 24" className={className} style={style} aria-hidden>
    <path d="M 0 -10 L 2 -3 L 9 0 L 2 3 L 0 10 L -2 3 L -9 0 L -2 -3 Z" fill={color} />
  </svg>
);

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFE7CC] via-cream to-[#F1F8E9]" />
        <Sun className="absolute top-10 right-[14%] w-24 animate-spin-slow" />
        <Cloud className="absolute top-[22%] left-[8%] w-32 md:w-44 animate-float opacity-90" />
        <Cloud className="absolute top-[60%] right-[8%] w-24 md:w-32 animate-float opacity-90" style={{ animationDelay: '-6s' }} />
        <Sparkle className="absolute top-[40%] left-[14%] w-6" color="#FFA84A" />
        <Sparkle className="absolute top-[24%] right-[26%] w-5" />
        <div className="absolute left-0 right-0 bottom-0 h-20 bg-[radial-gradient(ellipse_at_15%_100%,#A5D6A7_0%,transparent_60%),radial-gradient(ellipse_at_85%_100%,#66BB6A_0%,transparent_60%),#DCEDC8]" />
      </div>

      <div className="container-page relative z-10 grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center">
        {/* Text */}
        <div className="text-center lg:text-left">
          <p className="inline-block bg-white/90 text-orange-500 font-bold uppercase tracking-[0.16em] text-xs px-4 py-1.5 rounded-full shadow-soft">
            🌱 Trường mầm non song ngữ ESL
          </p>

          <h1 className="mt-5 text-4xl md:text-6xl font-extrabold leading-[1.05]">
            Nơi ươm mầm <br />
            <span className="text-gradient-brand">những ước mơ xanh</span>
          </h1>

          <p className="mt-5 text-lg text-ink-700 max-w-xl mx-auto lg:mx-0">
            Mầm Xanh Preschool — môi trường song ngữ Việt – Anh chuẩn quốc tế,
            nơi mỗi bé từ 18 tháng đến 5 tuổi được khám phá, kết nối và toả sáng
            theo cách riêng của mình.
          </p>

          <div className="mt-7 flex flex-wrap gap-3 justify-center lg:justify-start">
            <Link href="/admissions" className="btn btn-primary">
              Đăng ký tham quan ✨
            </Link>
            <Link href="/programs" className="btn btn-leaf">
              Khám phá chương trình
            </Link>
          </div>

          <div className="mt-8 flex items-center gap-3 justify-center lg:justify-start">
            <div className="flex -space-x-2">
              {['#F58220', '#4CAF50', '#FFC107', '#42A5F5'].map((c) => (
                <span
                  key={c}
                  className="w-9 h-9 rounded-full border-2 border-white shadow-soft"
                  style={{ background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,.4), transparent 50%), ${c}` }}
                />
              ))}
            </div>
            <p className="text-sm text-ink-500">
              <strong className="text-leaf-700">1500+ phụ huynh</strong> đã đặt niềm tin
            </p>
          </div>
        </div>

        {/* Illustration */}
        <div className="relative aspect-square max-w-md w-full mx-auto">
          <div className="absolute inset-4 rounded-full bg-gradient-to-br from-white to-leaf-50 shadow-warm" />
          <div className="absolute inset-0 grid place-items-center">
            <div className="relative w-[80%] aspect-square animate-float">
              <Image src="/logo.png" alt="Mầm Xanh Preschool" fill priority style={{ objectFit: 'contain' }} />
            </div>
          </div>
          <Sparkle className="absolute top-6 right-10 w-7 animate-spin-slow" />
          <Sparkle className="absolute bottom-12 left-6 w-6 animate-spin-slow" color="#F58220" style={{ animationDirection: 'reverse' }} />
          <Sparkle className="absolute top-1/2 -right-2 w-5 animate-spin-slow" color="#4CAF50" />
        </div>
      </div>
    </section>
  );
}
