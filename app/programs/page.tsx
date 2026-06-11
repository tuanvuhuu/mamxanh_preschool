import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import Approach from '@/components/sections/programs/Approach';
import AgeGroups from '@/components/sections/programs/AgeGroups';
import Schedule from '@/components/sections/programs/Schedule';
import CTA from '@/components/sections/CTA';

export const metadata = {
  title: 'Chương trình học — Mầm Xanh Preschool',
  description: 'Chương trình song ngữ ESL chuẩn Cambridge kết hợp Montessori – Reggio Emilia – STEAM cho trẻ từ 18 tháng đến 5 tuổi.',
};

export default function ProgramsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Chương trình học"
          title="Chương trình giáo dục Mầm Xanh"
          subtitle="Song ngữ Việt – Anh chuẩn Cambridge, kết hợp tinh hoa Montessori, Reggio Emilia và STEAM."
          breadcrumb="Chương trình học"
        />
        <Approach />
        <AgeGroups />
        <Schedule />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
