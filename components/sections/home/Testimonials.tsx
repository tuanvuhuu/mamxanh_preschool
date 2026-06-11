import SectionHead from '@/components/ui/SectionHead';

const QUOTES = [
  {
    name: 'Chị Minh Trang',
    role: 'Phụ huynh bé Bảo An – Lớp Chồi',
    quote: 'Con đi học về thường líu lo kể chuyện bằng cả tiếng Việt lẫn tiếng Anh, mà điều khiến mình vui nhất là con biết quan tâm đến em, đến bạn. Mầm Xanh thực sự là ngôi nhà thứ hai của con.',
    color: '#F58220',
    bg: '#FFF4EA',
  },
  {
    name: 'Anh Trung Hiếu',
    role: 'Phụ huynh bé Khôi Nguyên – Lớp Lá',
    quote: 'Mình từng lo lắng khi cho con học song ngữ sớm, nhưng các cô ở Mầm Xanh có cách dạy rất tự nhiên. Sau 2 năm, con không chỉ nói tốt tiếng Anh mà còn rất tự tin trình bày trước đám đông.',
    color: '#4CAF50',
    bg: '#E8F5E9',
  },
  {
    name: 'Chị Thu Hà',
    role: 'Phụ huynh bé Sunny – Lớp Mầm',
    quote: 'Điều mình ấn tượng là báo cáo hằng tuần của giáo viên – chi tiết đến từng bữa ăn, giấc ngủ, cảm xúc của con. Cảm giác con được chăm sóc như ở nhà.',
    color: '#42A5F5',
    bg: '#E3F2FD',
  },
];

const QuoteMark = ({ className, color }: { className?: string; color: string }) => (
  <svg viewBox="0 0 32 32" className={className} fill={color} aria-hidden>
    <path d="M10 22H4l4-12h4l-2 12zm14 0h-6l4-12h4l-2 12z" />
  </svg>
);

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-leaf-50">
      <div className="container-page">
        <SectionHead
          eyebrow="Phụ huynh nói gì"
          title="Những lời gửi gắm yêu thương"
          lead="Niềm vui lớn nhất của Mầm Xanh là sự tin tưởng từ các gia đình."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {QUOTES.map((q) => (
            <article
              key={q.name}
              className="relative bg-white rounded-4xl p-7 shadow-soft hover:shadow-warm hover:-translate-y-1 transition-all"
            >
              <QuoteMark className="w-10 h-10 mb-3" color={q.color} />
              <p className="text-ink-700 leading-relaxed mb-5 italic">&quot;{q.quote}&quot;</p>
              <div className="flex items-center gap-3 pt-4 border-t border-leaf-100">
                <span
                  className="w-12 h-12 rounded-full grid place-items-center font-display font-extrabold text-lg"
                  style={{ background: q.bg, color: q.color }}
                >
                  {q.name.split(' ').slice(-1)[0][0]}
                </span>
                <div>
                  <p className="font-bold text-ink-900">{q.name}</p>
                  <p className="text-xs text-ink-500">{q.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
