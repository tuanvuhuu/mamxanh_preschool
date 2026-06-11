import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import Process from '@/components/sections/admissions/Process';
import Fees from '@/components/sections/admissions/Fees';
import RegistrationForm from '@/components/sections/admissions/RegistrationForm';
import FAQ from '@/components/sections/admissions/FAQ';
import CTA from '@/components/sections/CTA';

export const metadata = {
  title: 'Tuyển sinh — Mầm Xanh Preschool',
  description: 'Quy trình tuyển sinh, học phí và đăng ký tham quan trường mầm non song ngữ Mầm Xanh năm học 2026-2027.',
};

export default function AdmissionsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Tuyển sinh 2026 – 2027"
          title="Cùng Mầm Xanh bắt đầu hành trình"
          subtitle="Quy trình minh bạch, chính sách linh hoạt, và một buổi học trải nghiệm hoàn toàn miễn phí."
          breadcrumb="Tuyển sinh"
        />
        <Process />
        <Fees />
        <RegistrationForm />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
