import SectionHead from '@/components/ui/SectionHead';

const SCHEDULE = [
  { time: '07:30 – 08:15', name: 'Đón bé & Ăn sáng',           color: '#F58220', emoji: '🌅' },
  { time: '08:30 – 09:00', name: 'Vận động buổi sáng',         color: '#FFC107', emoji: '🤸' },
  { time: '09:00 – 10:00', name: 'Tiếng Anh cùng cô bản ngữ',  color: '#42A5F5', emoji: '🗣️' },
  { time: '10:00 – 10:30', name: 'Bữa phụ & Thư giãn',         color: '#FFB7C5', emoji: '🍎' },
  { time: '10:30 – 11:30', name: 'Hoạt động STEAM / Dự án',    color: '#4CAF50', emoji: '🔬' },
  { time: '11:30 – 12:30', name: 'Bữa trưa',                   color: '#FF8A65', emoji: '🍱' },
  { time: '12:30 – 14:30', name: 'Giấc ngủ trưa',              color: '#AB47BC', emoji: '😴' },
  { time: '14:30 – 15:00', name: 'Bữa xế',                     color: '#FFD54F', emoji: '🥛' },
  { time: '15:00 – 16:00', name: 'Nghệ thuật / Âm nhạc',       color: '#EF5350', emoji: '🎨' },
  { time: '16:00 – 17:00', name: 'Sân chơi ngoài trời',        color: '#66BB6A', emoji: '🌳' },
  { time: '17:00 – 17:30', name: 'Trả bé về với gia đình',     color: '#F58220', emoji: '👋' },
];

export default function Schedule() {
  return (
    <section className="py-16 md:py-24 bg-leaf-50">
      <div className="container-page">
        <SectionHead
          eyebrow="Một ngày ở Mầm Xanh"
          title="Lịch sinh hoạt mẫu"
          lead="Một ngày được thiết kế cân bằng giữa học – chơi – nghỉ – ăn, theo đồng hồ sinh học của trẻ."
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline vertical line */}
          <span className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-300 via-leaf-400 to-orange-300 md:-translate-x-1/2" />

          <ul className="space-y-4">
            {SCHEDULE.map((s, i) => {
              const right = i % 2 === 0;
              return (
                <li
                  key={s.time}
                  className={`relative md:grid md:grid-cols-2 md:gap-12 ${
                    right ? '' : 'md:[&>*:first-child]:order-2'
                  }`}
                >
                  <div className={`pl-16 md:pl-0 ${right ? 'md:text-right md:pr-10' : 'md:pl-10'}`}>
                    <div className="bg-white rounded-3xl p-5 shadow-soft hover:shadow-warm hover:-translate-y-0.5 transition-all inline-block">
                      <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: s.color }}>
                        {s.time}
                      </p>
                      <p className="font-bold text-ink-900">{s.name}</p>
                    </div>
                  </div>
                  {/* Dot */}
                  <span
                    className="absolute left-[20px] md:left-1/2 top-4 w-5 h-5 rounded-full border-4 border-cream md:-translate-x-1/2 z-10"
                    style={{ background: s.color }}
                  />
                  {/* Emoji bubble (mobile inline, desktop other side) */}
                  <span
                    className={`absolute left-0 top-2 md:relative md:top-auto text-3xl ${
                      right ? 'md:text-left md:pl-10' : 'md:text-right md:pr-10'
                    }`}
                  >
                    {s.emoji}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        <p className="text-center text-sm text-ink-500 mt-10 max-w-xl mx-auto">
          * Lịch sinh hoạt linh hoạt theo độ tuổi. Lớp Nhà trẻ có thêm 1 giấc ngủ ngắn buổi sáng. Lớp Tiền tiểu học có thêm tiết học kỹ năng tự học buổi chiều.
        </p>
      </div>
    </section>
  );
}
