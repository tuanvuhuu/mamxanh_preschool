import Link from 'next/link';
import SectionHead from '@/components/ui/SectionHead';

type Group = {
  slug: string;
  name: string;
  age: string;
  desc: string;
  color: string;
  bg: string;
  emoji: string;
};

const GROUPS: Group[] = [
  { slug: 'dew',        name: 'Dew',        age: '18 – 24 tháng', desc: 'Làm quen môi trường lớp học qua các giác quan và vận động thô.', color: '#EF5350', bg: '#FFEBEE', emoji: '💧' },
  { slug: 'cloud',      name: 'Cloud',      age: '2 – 3 tuổi',    desc: 'Phát triển ngôn ngữ, tự lập trong sinh hoạt và làm quen tiếng Anh.', color: '#F58220', bg: '#FFF4EA', emoji: '☁️' },
  { slug: 'mountain',   name: 'Mountain',   age: '3 – 4 tuổi',    desc: 'Tư duy logic qua STEAM, học tiếng Anh với giáo viên bản ngữ.',     color: '#FFC107', bg: '#FFF8E1', emoji: '⛰️' },
  { slug: 'leaf',       name: 'Leaf',       age: '4 – 5 tuổi',    desc: 'Phát triển sáng tạo, kỹ năng xã hội và đọc – viết tiếng Anh.',    color: '#4CAF50', bg: '#E8F5E9', emoji: '🍃' },
  { slug: 'river',      name: 'River',      age: '5 – 6 tuổi',    desc: 'Sẵn sàng vào lớp 1 với nền tảng Toán – Việt – Anh vững chắc.',    color: '#42A5F5', bg: '#E3F2FD', emoji: '🌊' },
];

export default function ProgramsPreview() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="container-page">
        <SectionHead
          eyebrow="Chương trình theo độ tuổi"
          title="5 lớp học – 5 mùa lớn lên"
          lead="Mỗi độ tuổi là một giai đoạn vàng, và chúng tôi thiết kế chương trình riêng để chăm sóc từng giai đoạn ấy."
        />

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {GROUPS.map((g) => (
            <Link
              key={g.slug}
              href={`/programs#${g.slug}`}
              className="group relative bg-white rounded-3xl p-5 md:p-6 border-2 border-transparent shadow-soft hover:shadow-warm hover:-translate-y-1 transition-all overflow-hidden"
              style={{ ['--c' as string]: g.color } as React.CSSProperties}
            >
              <div
                className="w-14 h-14 rounded-2xl grid place-items-center text-3xl mb-4"
                style={{ background: g.bg }}
              >
                {g.emoji}
              </div>
              <p className="text-xs font-bold uppercase tracking-wide" style={{ color: g.color }}>
                {g.age}
              </p>
              <h3 className="text-xl font-bold mt-1 mb-2">{g.name}</h3>
              <p className="text-sm text-ink-500 leading-relaxed">{g.desc}</p>
              <span
                className="absolute bottom-0 left-0 right-0 h-1 transition-all group-hover:h-2"
                style={{ background: g.color }}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
