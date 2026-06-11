const VALUES = [
  { emoji: '🌱', title: 'Tử tế',    color: '#4CAF50', body: 'Yêu thương là gốc rễ — dạy trẻ biết quan tâm bản thân, bạn bè và thế giới xung quanh.' },
  { emoji: '☀️', title: 'Tò mò',    color: '#F58220', body: 'Khơi gợi câu hỏi "vì sao" — biến mọi khoảnh khắc thành cơ hội học tập đầy hứng khởi.' },
  { emoji: '❤️', title: 'Can đảm',  color: '#EF5350', body: 'Dám thử, dám sai, dám đứng lên — nền móng của sự tự tin và bản lĩnh sau này.' },
  { emoji: '🌊', title: 'Sáng tạo', color: '#42A5F5', body: 'Mỗi bé là một nghệ sĩ — chúng tôi cho các em không gian để biến ý tưởng thành hiện thực.' },
  { emoji: '🤝', title: 'Kết nối',  color: '#AB47BC', body: 'Học cách lắng nghe, chia sẻ và hợp tác — kỹ năng quan trọng nhất cho thế kỷ 21.' },
];

export default function Values() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-page">
        <header className="text-center max-w-2xl mx-auto mb-12">
          <p className="eyebrow">5 giá trị Mầm Xanh</p>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold">Những điều chúng tôi tin</h2>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {VALUES.map((v) => (
            <div
              key={v.title}
              className="relative bg-white rounded-3xl p-6 text-center border-2 border-leaf-100 transition-all duration-200 hover:-translate-y-1.5 hover:shadow-warm overflow-hidden group"
              style={{ ['--c' as string]: v.color } as React.CSSProperties}
            >
              <span
                className="absolute top-0 left-0 right-0 h-1"
                style={{ background: v.color }}
              />
              <span className="block text-4xl mb-2 drop-shadow-sm">{v.emoji}</span>
              <h4 className="text-lg font-bold mb-1" style={{ color: v.color }}>
                {v.title}
              </h4>
              <p className="text-sm text-ink-500 leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
