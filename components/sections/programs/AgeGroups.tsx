import SectionHead from '@/components/ui/SectionHead';

type Group = {
  slug: string;
  name: string;
  age: string;
  ratio: string;
  english: string;
  desc: string;
  skills: string[];
  color: string;
  bg: string;
  emoji: string;
};

const GROUPS: Group[] = [
  {
    slug: 'dew', name: 'Dew', age: '18 – 24 tháng', ratio: '1 cô : 4 bé', english: '30 phút/ngày', emoji: '💧', color: '#EF5350', bg: '#FFEBEE',
    desc: 'Giai đoạn quan trọng để gắn bó an toàn. Các bé được làm quen với nhịp sinh hoạt mới qua các giác quan, vận động và âm nhạc.',
    skills: ['Vận động thô (bò, đi, leo)', 'Cảm thụ âm nhạc', 'Tự xúc ăn, uống nước', 'Ngôn ngữ: 50 từ tiếng Việt + chào hỏi tiếng Anh'],
  },
  {
    slug: 'cloud', name: 'Cloud', age: '2 – 3 tuổi', ratio: '1 cô : 6 bé', english: '60 phút/ngày', emoji: '☁️', color: '#F58220', bg: '#FFF4EA',
    desc: 'Bùng nổ ngôn ngữ và tính tự lập. Bé bắt đầu chơi cùng bạn, nói câu dài và làm quen với chữ cái, con số qua trò chơi.',
    skills: ['Tự đi vệ sinh, tự mặc quần áo đơn giản', 'Nhận biết màu, hình khối', 'Nói câu 3-5 từ tiếng Anh', 'Kỹ năng chờ đợi, chia sẻ'],
  },
  {
    slug: 'mountain', name: 'Mountain', age: '3 – 4 tuổi', ratio: '1 cô : 8 bé', english: '90 phút/ngày', emoji: '⛰️', color: '#FFC107', bg: '#FFF8E1',
    desc: 'Tư duy logic và sáng tạo phát triển mạnh. Học qua dự án STEAM, kể chuyện, và bắt đầu khám phá Toán – Việt – Anh có hệ thống.',
    skills: ['Đếm 1-20, nhận diện 29 chữ cái', 'Vẽ người, kể chuyện theo tranh', 'Hội thoại tiếng Anh đơn giản', 'Hoà nhập nhóm 4-6 bạn'],
  },
  {
    slug: 'leaf', name: 'Leaf', age: '4 – 5 tuổi', ratio: '1 cô : 10 bé', english: '120 phút/ngày', emoji: '🍃', color: '#4CAF50', bg: '#E8F5E9',
    desc: 'Giai đoạn vàng cho ngôn ngữ thứ hai. Bé tham gia thuyết trình, sân khấu hoá, đọc sách song ngữ và làm chủ cảm xúc.',
    skills: ['Đọc – viết các từ đơn tiếng Việt', 'Đếm – cộng – trừ trong phạm vi 10', 'Cambridge Pre-A1 Starters', 'Thuyết trình 2-3 phút'],
  },
  {
    slug: 'river', name: 'River', age: '5 – 6 tuổi', ratio: '1 cô : 12 bé', english: '150 phút/ngày', emoji: '🌊', color: '#42A5F5', bg: '#E3F2FD',
    desc: 'Chuẩn bị toàn diện cho lớp 1: kỹ năng học thuật, kỹ năng xã hội, sức bền tâm lý và tình yêu với việc học.',
    skills: ['Đọc thông – viết thạo tiếng Việt', 'Toán tư duy đến số 100', 'Cambridge YLE Starters (mục tiêu 13/15 khiên)', 'Tự quản lý cặp sách, lịch học'],
  },
];

export default function AgeGroups() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="container-page">
        <SectionHead
          eyebrow="5 lớp theo độ tuổi"
          title="Mỗi mùa một chương trình riêng"
          lead="Tỉ lệ giáo viên / học sinh thấp đảm bảo mỗi bé được quan tâm cá nhân hoá."
        />

        <div className="space-y-6">
          {GROUPS.map((g, i) => (
            <article
              key={g.slug}
              id={g.slug}
              className="bg-white rounded-4xl p-6 md:p-8 shadow-soft hover:shadow-warm transition-all grid md:grid-cols-[260px_1fr] gap-6 md:gap-10 items-center scroll-mt-24"
            >
              {/* Avatar block */}
              <div
                className="relative rounded-3xl aspect-square grid place-items-center text-7xl shadow-inner"
                style={{ background: g.bg }}
              >
                <span>{g.emoji}</span>
                <span
                  className="absolute -top-3 -right-3 bg-white rounded-full px-3 py-1 text-xs font-extrabold shadow-soft"
                  style={{ color: g.color }}
                >
                  #{String(i + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Content */}
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <p
                    className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full"
                    style={{ background: g.bg, color: g.color }}
                  >
                    {g.age}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-extrabold" style={{ color: g.color }}>
                    Lớp {g.name}
                  </h3>
                </div>
                <p className="text-ink-500 mb-4 leading-relaxed">{g.desc}</p>

                <div className="grid sm:grid-cols-2 gap-3 mb-4">
                  <Stat label="Tỉ lệ giáo viên" value={g.ratio} color={g.color} />
                  <Stat label="Tiếng Anh" value={g.english} color={g.color} />
                </div>

                <ul className="grid sm:grid-cols-2 gap-2">
                  {g.skills.map((s) => (
                    <li key={s} className="flex items-start gap-2 text-sm text-ink-700">
                      <span className="mt-1 w-2 h-2 rounded-full shrink-0" style={{ background: g.color }} />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="flex items-center gap-3 bg-leaf-50 rounded-2xl px-4 py-2.5">
      <span className="w-1.5 h-8 rounded-full" style={{ background: color }} />
      <div>
        <p className="text-[11px] text-ink-500 uppercase tracking-wider">{label}</p>
        <p className="font-bold text-ink-900 text-sm">{value}</p>
      </div>
    </div>
  );
}
