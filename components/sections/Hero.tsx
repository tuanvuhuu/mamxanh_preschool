import Link from 'next/link';

const Cloud = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 80" className={className} aria-hidden>
    <path
      fill="#fff"
      d="M40 60c-15 0-25-10-25-22s11-21 24-20c4-12 16-18 28-15 8-9 22-9 30-2 14-1 26 9 26 22 0 13-11 23-25 23H40z"
    />
  </svg>
);

const Flower = ({ className, petal, center }: { className?: string; petal: string; center: string }) => (
  <svg viewBox="0 0 100 100" className={className} aria-hidden>
    <circle cx="50" cy="22" r="14" fill={petal} />
    <circle cx="78" cy="50" r="14" fill={petal} />
    <circle cx="50" cy="78" r="14" fill={petal} />
    <circle cx="22" cy="50" r="14" fill={petal} />
    <circle cx="50" cy="50" r="12" fill={center} />
  </svg>
);

const Leaf = ({ className, fill }: { className?: string; fill: string }) => (
  <svg viewBox="0 0 100 100" className={className} aria-hidden>
    <path d="M10 90 C 30 20, 70 20, 90 10 C 80 60, 50 90, 10 90 Z" fill={fill} />
  </svg>
);

export default function Hero() {
  return (
    <section className="relative overflow-hidden text-center py-20 md:py-28">
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFE7CC] via-cream to-[#F1F8E9]" />

        <Cloud className="absolute top-[8%] left-[6%] w-32 md:w-44 animate-float opacity-90" />
        <Cloud className="absolute top-[20%] right-[10%] w-24 md:w-32 animate-float opacity-90" style={{ animationDelay: '-7s' } as React.CSSProperties} />

        <Flower
          className="absolute top-[18%] left-[12%] w-16 md:w-20 animate-spin-slow"
          petal="#FFB7C5"
          center="#FFD54F"
        />
        <Flower
          className="absolute bottom-[24%] right-[14%] w-14 md:w-16 animate-spin-slow"
          petal="#FFE082"
          center="#FF8A65"
        />

        <Leaf className="absolute bottom-[12%] left-[4%] w-20 md:w-28 -rotate-[25deg] drop-shadow" fill="#A5D6A7" />
        <Leaf className="absolute top-[12%] right-[5%] w-16 md:w-24 rotate-[35deg] drop-shadow" fill="#8BC34A" />

        <div className="absolute left-0 right-0 bottom-0 h-16 bg-[radial-gradient(ellipse_at_20%_100%,#A5D6A7_0%,transparent_60%),radial-gradient(ellipse_at_80%_100%,#66BB6A_0%,transparent_60%),#DCEDC8]" />
      </div>

      <div className="container-page relative z-10 max-w-3xl mx-auto">
        <p className="inline-block bg-white/90 text-orange-500 font-bold uppercase tracking-[0.16em] text-xs px-4 py-1.5 rounded-full shadow-soft">
          Về chúng tôi
        </p>

        <h1 className="mt-5 text-4xl md:text-6xl font-extrabold text-gradient-brand">
          Giới thiệu Mầm Xanh
        </h1>

        <p className="mt-4 text-base md:text-lg text-ink-700 max-w-2xl mx-auto">
          Nơi ươm mầm những ước mơ xanh — đồng hành cùng trẻ trong những năm
          tháng đầu đời với chương trình song ngữ ESL chuẩn quốc tế.
        </p>

        <div className="mt-6 inline-flex items-center gap-2 bg-white px-5 py-2 rounded-full text-sm text-ink-500 shadow-soft">
          <Link href="/" className="text-leaf-700 font-semibold">Trang chủ</Link>
          <span className="text-ink-300">›</span>
          <span>Giới thiệu</span>
        </div>
      </div>
    </section>
  );
}
