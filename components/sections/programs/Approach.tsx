import SectionHead from '@/components/ui/SectionHead';

const APPROACH = [
  {
    title: 'Montessori',
    desc: 'Trẻ tự chọn hoạt động, học qua thao tác với giáo cụ chuyên biệt theo nhịp độ riêng.',
    color: '#F58220', bg: '#FFF4EA',
    icon: <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />,
  },
  {
    title: 'Reggio Emilia',
    desc: 'Đặt trẻ làm trung tâm, khuyến khích biểu đạt qua 100 ngôn ngữ – vẽ, nặn, âm nhạc, kịch.',
    color: '#4CAF50', bg: '#E8F5E9',
    icon: <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>,
  },
  {
    title: 'STEAM',
    desc: 'Khoa học – Công nghệ – Kỹ thuật – Nghệ thuật – Toán học, học qua dự án và thí nghiệm vui.',
    color: '#42A5F5', bg: '#E3F2FD',
    icon: <><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></>,
  },
  {
    title: 'ESL Cambridge',
    desc: 'Khung tham chiếu Cambridge YLE với giáo viên bản ngữ, tài liệu nhập khẩu, hoạt động nhập vai.',
    color: '#AB47BC', bg: '#F3E5F5',
    icon: <path d="M4 19.5A2.5 2.5 0 016.5 17H20V5H6.5A2.5 2.5 0 004 7.5v12zM20 17v3H6.5a2.5 2.5 0 010-5H20" />,
  },
];

export default function Approach() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-page">
        <SectionHead
          eyebrow="Phương pháp giáo dục"
          title="Tinh hoa giáo dục thế giới — Tâm hồn Việt"
          lead="Mầm Xanh không bám cứng một phương pháp duy nhất. Chúng tôi chắt lọc, kết hợp linh hoạt để phù hợp với từng đứa trẻ."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {APPROACH.map((a) => (
            <div
              key={a.title}
              className="relative bg-white rounded-4xl p-7 border-2 border-leaf-100 hover:-translate-y-1 hover:shadow-warm transition-all"
            >
              <div
                className="w-14 h-14 rounded-2xl grid place-items-center mb-4"
                style={{ background: a.bg, color: a.color }}
              >
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {a.icon}
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: a.color }}>{a.title}</h3>
              <p className="text-sm text-ink-500 leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
