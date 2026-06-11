import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import IntroStory from '@/components/sections/IntroStory';
import Pillars from '@/components/sections/Pillars';
import Values from '@/components/sections/Values';
import Stats from '@/components/sections/Stats';
import CTA from '@/components/sections/CTA';

export const metadata = {
  title: 'Giới thiệu — Mầm Xanh Preschool',
  description: 'Câu chuyện, sứ mệnh, tầm nhìn và giá trị cốt lõi của trường mầm non song ngữ Mầm Xanh.',
};

export default function IntroducePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <IntroStory />
        <Pillars />
        <Values />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
