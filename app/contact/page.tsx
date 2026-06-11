import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import ContactSection from '@/components/sections/contact/ContactSection';
import Campuses from '@/components/sections/contact/Campuses';
import CTA from '@/components/sections/CTA';

export const metadata = {
  title: 'Liên hệ — Mầm Xanh Preschool',
  description: 'Liên hệ trường mầm non song ngữ Mầm Xanh — hotline, email, Zalo OA và địa chỉ 3 cơ sở tại TP.HCM.',
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Liên hệ"
          title="Mầm Xanh chào đón gia đình"
          subtitle="Mọi câu hỏi đều được lắng nghe — gọi điện, nhắn tin Zalo, gửi email hay ghé thăm trực tiếp."
          breadcrumb="Liên hệ"
        />
        <ContactSection />
        <Campuses />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
