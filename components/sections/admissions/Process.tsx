import SectionHead from '@/components/ui/SectionHead';

const STEPS = [
  { n: '01', title: 'Đăng ký tham quan', desc: 'Gửi thông tin online hoặc gọi hotline. Mầm Xanh sẽ liên hệ trong vòng 24h để hẹn lịch.', color: '#F58220' },
  { n: '02', title: 'Tham quan & Trải nghiệm', desc: 'Phụ huynh và bé đến trường, tham quan cơ sở, gặp gỡ giáo viên và trải nghiệm 1 buổi học miễn phí.', color: '#FFC107' },
  { n: '03', title: 'Tư vấn & Đánh giá', desc: 'Đội ngũ chuyên môn đánh giá bé qua trò chơi, tư vấn lộ trình học phù hợp với gia đình.', color: '#4CAF50' },
  { n: '04', title: 'Nhập học & Đồng hành', desc: 'Hoàn tất hồ sơ, bé nhập học với 1 tuần thích nghi có phụ huynh đi cùng theo nhu cầu.', color: '#42A5F5' },
];

export default function Process() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-page">
        <SectionHead
          eyebrow="Quy trình tuyển sinh"
          title="4 bước để bé trở thành Mầm Xanh"
          lead="Đơn giản, minh bạch, không áp lực — chúng tôi muốn cả gia đình cùng cảm thấy thoải mái trước khi quyết định."
        />

        <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {STEPS.map((s, i) => (
            <li
              key={s.n}
              className="relative bg-white rounded-4xl p-6 shadow-soft hover:shadow-warm hover:-translate-y-1 transition-all"
            >
              <span
                className="absolute -top-5 left-6 font-display font-extrabold text-4xl"
                style={{ color: s.color }}
              >
                {s.n}
              </span>
              <span
                className="absolute -top-2 right-6 w-3 h-3 rounded-full"
                style={{ background: s.color }}
              />
              <h3 className="mt-4 text-lg font-bold mb-2" style={{ color: s.color }}>{s.title}</h3>
              <p className="text-sm text-ink-500 leading-relaxed">{s.desc}</p>

              {i < STEPS.length - 1 && (
                <span
                  className="hidden lg:block absolute top-1/2 -right-3 w-6 h-1 rounded-full opacity-50"
                  style={{ background: s.color }}
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
