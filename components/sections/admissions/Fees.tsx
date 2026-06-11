import Link from 'next/link';
import SectionHead from '@/components/ui/SectionHead';

type Plan = {
  name: string;
  price: string;
  unit: string;
  desc: string;
  features: string[];
  color: string;
  bg: string;
  featured?: boolean;
};

const PLANS: Plan[] = [
  {
    name: 'Bán trú Cơ bản',
    price: '6.500.000',
    unit: 'đ / tháng',
    desc: 'Chương trình mầm non song ngữ tiêu chuẩn cho bé 18 tháng – 5 tuổi.',
    color: '#F58220', bg: '#FFF4EA',
    features: [
      'Học từ T2 – T6, 07:30 – 17:00',
      'Tiếng Anh 60 – 90 phút/ngày',
      '3 bữa chính + 2 bữa phụ',
      'Báo cáo tuần qua app',
    ],
  },
  {
    name: 'Bán trú Cambridge',
    price: '8.900.000',
    unit: 'đ / tháng',
    desc: 'Chuẩn Cambridge YLE với giáo viên bản ngữ toàn thời gian.',
    color: '#4CAF50', bg: '#E8F5E9',
    featured: true,
    features: [
      'Mọi quyền lợi gói Cơ bản',
      'Giáo viên bản ngữ 120 – 150 phút/ngày',
      'Lộ trình thi YLE Starters/Movers',
      'CLB STEAM 1 buổi/tuần',
      'Kayak / Bơi 1 buổi/tuần',
    ],
  },
  {
    name: 'Toàn thời gian Plus',
    price: '11.500.000',
    unit: 'đ / tháng',
    desc: 'Lựa chọn linh hoạt cho gia đình bận rộn với dịch vụ trông trẻ kéo dài.',
    color: '#42A5F5', bg: '#E3F2FD',
    features: [
      'Mọi quyền lợi gói Cambridge',
      'Đến sớm 6:30 / về muộn 19:00',
      'Học T7 theo nhu cầu',
      'Đưa đón tận nhà (nội thành Q.7)',
    ],
  },
];

export default function Fees() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="container-page">
        <SectionHead
          eyebrow="Học phí 2026 – 2027"
          title="Đầu tư xứng đáng cho 6 năm đầu đời"
          lead="3 gói linh hoạt theo nhu cầu gia đình. Không phí ẩn — không phụ thu phát sinh."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {PLANS.map((p) => (
            <article
              key={p.name}
              className={`relative bg-white rounded-4xl p-7 shadow-soft transition-all hover:-translate-y-1 ${
                p.featured ? 'md:-translate-y-3 shadow-warm border-2' : 'border border-leaf-100'
              }`}
              style={p.featured ? { borderColor: p.color } : undefined}
            >
              {p.featured && (
                <span
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-extrabold text-white"
                  style={{ background: p.color }}
                >
                  ⭐ Phổ biến nhất
                </span>
              )}

              <p
                className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4"
                style={{ background: p.bg, color: p.color }}
              >
                {p.name}
              </p>

              <p className="font-display font-extrabold text-4xl" style={{ color: p.color }}>
                {p.price}<span className="text-base text-ink-500 font-bold ml-1">{p.unit}</span>
              </p>
              <p className="text-sm text-ink-500 mt-2 mb-5 leading-relaxed">{p.desc}</p>

              <ul className="space-y-2.5 mb-6">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-ink-700">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={p.color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href="#register"
                className={`btn w-full justify-center ${p.featured ? 'btn-primary' : 'btn-leaf'}`}
              >
                Đăng ký gói này
              </Link>
            </article>
          ))}
        </div>

        <p className="text-center text-sm text-ink-500 mt-8">
          🎁 <strong>Ưu đãi:</strong> Giảm 10% học phí 3 tháng đầu cho 100 phụ huynh đăng ký sớm trước 30/07/2026.
        </p>
      </div>
    </section>
  );
}
