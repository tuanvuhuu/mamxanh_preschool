import Link from 'next/link';

type Pillar = {
  key: string;
  title: string;
  body: React.ReactNode;
  iconBg: string;
  iconColor: string;
  icon: React.ReactNode;
  featured?: boolean;
};

const PILLARS: Pillar[] = [
  {
    key: 'goal',
    title: 'Mục tiêu',
    iconBg: '#FFE2C7',
    iconColor: '#E36B11',
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </>
    ),
    body: (
      <>
        Phát triển toàn diện <strong>5 lĩnh vực</strong>: thể chất, ngôn ngữ, nhận thức,
        thẩm mỹ và tình cảm – kỹ năng xã hội. Mỗi bé tốt nghiệp Mầm Xanh đều tự tin
        giao tiếp tiếng Anh và sẵn sàng cho tiểu học.
      </>
    ),
  },
  {
    key: 'mission',
    title: 'Sứ mệnh',
    iconBg: '#DCEDC8',
    iconColor: '#388E3C',
    featured: true,
    icon: <path d="M12 2L15 8l6 1-4.5 4 1 6L12 16l-5.5 3 1-6L3 9l6-1z" />,
    body: (
      <>
        Kiến tạo một <strong>ngôi nhà thứ hai</strong> ấm áp, nơi mỗi đứa trẻ được
        lắng nghe, được khám phá và được là chính mình. Đồng hành cùng phụ huynh
        nuôi dạy những công dân nhỏ tử tế và bản lĩnh toàn cầu.
      </>
    ),
  },
  {
    key: 'vision',
    title: 'Tầm nhìn',
    iconBg: '#FFF8E1',
    iconColor: '#F9A825',
    icon: (
      <>
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
    body: (
      <>
        Trở thành <strong>hệ thống mầm non song ngữ hàng đầu Việt Nam</strong> đến
        năm 2030 — nơi giáo dục sớm gặp gỡ công nghệ, văn hoá bản địa hoà cùng tinh
        hoa quốc tế, để mỗi mầm xanh đều có cơ hội vươn cao.
      </>
    ),
  },
];

const LeafBg = ({ className, fill }: { className?: string; fill: string }) => (
  <svg viewBox="0 0 100 100" className={className} aria-hidden>
    <path d="M10 90 C 30 20, 70 20, 90 10 C 80 60, 50 90, 10 90 Z" fill={fill} />
  </svg>
);

export default function Pillars() {
  return (
    <section className="relative py-16 md:py-24 bg-leaf-50 overflow-hidden">
      <LeafBg className="absolute -top-10 -left-14 w-56 -rotate-[30deg] opacity-60" fill="#C5E1A5" />
      <LeafBg className="absolute -bottom-20 -right-20 w-72 rotate-[150deg] opacity-60" fill="#FFE2C7" />

      <div className="container-page relative">
        <header className="text-center max-w-2xl mx-auto mb-12">
          <p className="eyebrow">Giá trị cốt lõi</p>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold">
            Mục tiêu · Sứ mệnh · Tầm nhìn
          </h2>
          <p className="mt-3 text-ink-500 text-lg">
            Ba ngọn hải đăng dẫn lối mọi hoạt động giáo dục tại Mầm Xanh — để mỗi
            ngày đến trường thực sự là một ngày vui.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {PILLARS.map((p) => (
            <article
              key={p.key}
              className={`relative bg-white rounded-4xl p-8 text-center border border-leaf-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-warm ${
                p.featured
                  ? 'md:-translate-y-3 shadow-warm bg-gradient-to-b from-white to-leaf-50 hover:md:-translate-y-5'
                  : 'shadow-soft'
              }`}
            >
              <div
                className="w-18 h-18 mx-auto mb-5 rounded-full grid place-items-center"
                style={{ background: p.iconBg, color: p.iconColor, width: 72, height: 72 }}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="32"
                  height="32"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {p.icon}
                </svg>
              </div>
              <h3 className={`text-2xl font-bold mb-3 ${p.featured ? 'text-leaf-800' : 'text-leaf-700'}`}>
                {p.title}
              </h3>
              <p className="text-ink-500 mb-5">{p.body}</p>
              <Link
                href="#"
                className="inline-block font-bold text-orange-500 border-b-2 border-transparent hover:border-sunny hover:translate-x-1 transition-all"
              >
                Chi tiết →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
