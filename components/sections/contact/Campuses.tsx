import SectionHead from '@/components/ui/SectionHead';

const CAMPUSES = [
  {
    name: 'Cơ sở 1 — Phú Mỹ Hưng',
    address: '123 Đường Hoa Sữa, Phường Tân Phong, Quận 7, TP.HCM',
    phone: '028 5410 1234',
    hours: 'T2 – T7: 7:00 – 18:00',
    color: '#F58220',
    bg: 'linear-gradient(135deg, #FFA84A, #F58220)',
  },
  {
    name: 'Cơ sở 2 — Thảo Điền',
    address: '88 Đường Quốc Hương, Phường Thảo Điền, Quận 2, TP.HCM',
    phone: '028 5410 5678',
    hours: 'T2 – T7: 7:00 – 18:00',
    color: '#4CAF50',
    bg: 'linear-gradient(135deg, #8BC34A, #2E7D32)',
  },
  {
    name: 'Cơ sở 3 — Bình Thạnh',
    address: '256 Đường Điện Biên Phủ, Phường 25, Quận Bình Thạnh, TP.HCM',
    phone: '028 5410 9012',
    hours: 'T2 – T7: 7:00 – 18:00',
    color: '#42A5F5',
    bg: 'linear-gradient(135deg, #64B5F6, #1976D2)',
  },
];

export default function Campuses() {
  return (
    <section className="py-16 md:py-24 bg-leaf-50">
      <div className="container-page">
        <SectionHead
          eyebrow="3 cơ sở Mầm Xanh"
          title="Hệ thống cơ sở trên toàn TP.HCM"
          lead="Đến tham quan bất kỳ cơ sở nào gần nhà nhất — tất cả đều cùng một chương trình và tinh thần Mầm Xanh."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {CAMPUSES.map((c) => (
            <article
              key={c.name}
              className="group bg-white rounded-4xl overflow-hidden shadow-soft hover:shadow-warm hover:-translate-y-1 transition-all"
            >
              <div className="aspect-[5/3] relative grid place-items-center" style={{ background: c.bg }}>
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeOpacity=".5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-extrabold mb-3" style={{ color: c.color }}>{c.name}</h3>
                <ul className="space-y-2 text-sm">
                  <Row icon="📍" text={c.address} />
                  <Row icon="📞" text={c.phone} />
                  <Row icon="🕐" text={c.hours} />
                </ul>
                <a
                  href="#"
                  className="inline-block mt-4 font-bold text-sm hover:translate-x-1 transition-transform"
                  style={{ color: c.color }}
                >
                  Xem trên Google Maps →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Row({ icon, text }: { icon: string; text: string }) {
  return (
    <li className="flex items-start gap-2 text-ink-700">
      <span className="shrink-0">{icon}</span>
      <span>{text}</span>
    </li>
  );
}
