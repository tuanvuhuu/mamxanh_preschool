import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HomeHero from '@/components/sections/home/HomeHero';
import ProgramsPreview from '@/components/sections/home/ProgramsPreview';
import Values from '@/components/sections/Values';
import Stats from '@/components/sections/Stats';
import Testimonials from '@/components/sections/home/Testimonials';
import LatestNews from '@/components/sections/home/LatestNews';
import CTA from '@/components/sections/CTA';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HomeHero />
        <ProgramsPreview />
        <Values />
        <Stats />
        <Testimonials />
        <LatestNews />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
