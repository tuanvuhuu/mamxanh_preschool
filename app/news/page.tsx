import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import NewsGrid from '@/components/sections/news/NewsGrid';
import CTA from '@/components/sections/CTA';

export const metadata = {
  title: 'Tin tức & Sự kiện — Mầm Xanh Preschool',
  description: 'Tin tức, sự kiện, hoạt động và kiến thức nuôi dạy con từ trường mầm non song ngữ Mầm Xanh.',
};

export default function NewsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Tin tức & Sự kiện"
          title="Mầm Xanh kể bạn nghe"
          subtitle="Hoạt động, sự kiện, kiến thức nuôi dạy con và những câu chuyện đáng yêu mỗi ngày từ Mầm Xanh."
          breadcrumb="Tin tức"
        />
        <NewsGrid />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
