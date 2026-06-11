import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import SectionHead from '@/components/ui/SectionHead';
import CTA from '@/components/sections/CTA';

const TEACHERS = [
  { name: 'Cô Hoa', role: 'Lead Teacher — Cloud class', bio: '10 năm kinh nghiệm, chuỉnh giáo dục sớm, kỹ năng ngoại giao tuyệt vời', avatar: '👩‍🏫', color: '#F58220' },
  { name: 'Ms. Sarah', role: 'Native English Teacher', bio: 'Từ Australia, chuyên dạy Phonics và Cambridge, yêu thích kể chuyện', avatar: '🌍', color: '#42A5F5' },
  { name: 'Cô Linh', role: 'Lead Teacher — Leaf class', bio: 'Chứng chỉ Montessori, am hiểu tâm lý trẻ, tạo môi trường yêu thương', avatar: '💚', color: '#4CAF50' },
  { name: 'Cô Minh', role: 'Music & Arts Teacher', bio: 'Giáo viên âm nhạc cạp 3, kích thích sáng tạo qua nghệ thuật', avatar: '🎨', color: '#FFD54F' },
  { name: 'Ms. Emily', role: 'Native English Teacher', bio: 'Từ Canada, đặc biệt giỏi STEAM education, năng lượng tích cực', avatar: '🌟', color: '#AB47BC' },
  { name: 'Cô Lan', role: 'Care Assistant — Dew class', bio: 'Chuyên sư phạm trẻ nhỏ, tâm huyết, kiên nhẫn với từng bé', avatar: '💕', color: '#FFB7C5' },
];

export const metadata = {
  title: 'Đội ngũ giáo viên — Mầm Xanh Preschool',
  description: 'Gặp gỡ các cô giáo tâm huyết, đạo tạo quốc tế, yêu thương và tận tâm với từng đứa trẻ tại Mầm Xanh.',
};

export default function TeachersPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Đội ngũ Mầm Xanh"
          title="Những cô yêu thương con hơn chính mình"
          subtitle="Mỗi cô giáo tại Mầm Xanh đều có tâm huyết, chứng chỉ quốc tế và tình yêu với trẻ em."
          breadcrumb="Đội ngũ"
        />

        <section className="py-16 md:py-24">
          <div className="container-page">
            <SectionHead
              eyebrow="Hơn 40 cô giáo"
              title="Các cô tâm huyết, tâm lý học, ngoại ngữ"
              align="left"
              className="mb-12"
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TEACHERS.map((t) => (
                <div
                  key={t.name}
                  className="bg-white rounded-4xl overflow-hidden shadow-soft hover:shadow-warm hover:-translate-y-1 transition-all"
                >
                  <div
                    className="aspect-[3/2] grid place-items-center text-7xl"
                    style={{ background: `${t.color}15` }}
                  >
                    {t.avatar}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{t.name}</h3>
                    <p className="text-sm font-semibold mb-3" style={{ color: t.color }}>
                      {t.role}
                    </p>
                    <p className="text-sm text-ink-500 leading-relaxed">{t.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-leaf-50">
          <div className="container-page max-w-3xl">
            <h2 className="text-3xl font-extrabold mb-6">Tiêu chuẩn tuyển dụng Mầm Xanh</h2>
            <ul className="space-y-4">
              {[
                'Tối thiểu 3 năm kinh nghiệm giáo dục sớm hoặc tâm lý trẻ em',
                'Chứng chỉ đại học trở lên (Sư phạm, Tâm lý, Giáo dục…)',
                'Tiếng Anh B1+ hoặc bằng cấp ngoại ngữ',
                'Đạo tạo về Montessori, Reggio Emilia hoặc STEAM là ưu tiên',
                'Tính cách: kiên nhẫn, tờ mở, yêu thương, có khiếu hạnh động',
                'Cam kết phát triển chuyên môn liên tục qua workshop, seminar',
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-ink-700">
                  <span className="text-leaf-600 font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
