import Link from 'next/link';

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  breadcrumb: string;
};

const Cloud = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 200 80" className={className} style={style} aria-hidden>
    <path
      fill="#fff"
      d="M40 60c-15 0-25-10-25-22s11-21 24-20c4-12 16-18 28-15 8-9 22-9 30-2 14-1 26 9 26 22 0 13-11 23-25 23H40z"
    />
  </svg>
);

const Leaf = ({ className, fill }: { className?: string; fill: string }) => (
  <svg viewBox="0 0 100 100" className={className} aria-hidden>
    <path d="M10 90 C 30 20, 70 20, 90 10 C 80 60, 50 90, 10 90 Z" fill={fill} />
  </svg>
);

export default function PageHero({ eyebrow, title, subtitle, breadcrumb }: Props) {
  return (
    <section className="relative overflow-hidden text-center py-16 md:py-20">
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFE7CC] via-cream to-[#F1F8E9]" />
        <Cloud className="absolute top-[15%] left-[8%] w-28 md:w-36 animate-float opacity-90" />
        <Cloud className="absolute top-[25%] right-[10%] w-20 md:w-28 animate-float opacity-90" style={{ animationDelay: '-7s' }} />
        <Leaf className="absolute bottom-[10%] left-[5%] w-16 md:w-24 -rotate-[25deg]" fill="#A5D6A7" />
        <Leaf className="absolute top-[14%] right-[6%] w-14 md:w-20 rotate-[35deg]" fill="#8BC34A" />
        <div className="absolute left-0 right-0 bottom-0 h-12 bg-[radial-gradient(ellipse_at_20%_100%,#A5D6A7_0%,transparent_60%),radial-gradient(ellipse_at_80%_100%,#66BB6A_0%,transparent_60%),#DCEDC8]" />
      </div>

      <div className="container-page relative z-10 max-w-3xl mx-auto">
        <p className="inline-block bg-white/90 text-orange-500 font-bold uppercase tracking-[0.16em] text-xs px-4 py-1.5 rounded-full shadow-soft">
          {eyebrow}
        </p>
        <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-gradient-brand">{title}</h1>
        {subtitle && <p className="mt-3 text-ink-700 max-w-2xl mx-auto">{subtitle}</p>}
        <div className="mt-5 inline-flex items-center gap-2 bg-white px-5 py-2 rounded-full text-sm text-ink-500 shadow-soft">
          <Link href="/" className="text-leaf-700 font-semibold">Trang chủ</Link>
          <span className="text-ink-300">›</span>
          <span>{breadcrumb}</span>
        </div>
      </div>
    </section>
  );
}
