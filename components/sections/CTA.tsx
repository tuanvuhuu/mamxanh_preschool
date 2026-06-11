import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-16 md:py-20">
      <div
        className="container-page rounded-5xl px-8 py-12 md:py-14 text-white relative overflow-hidden"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(255,213,79,.35), transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(255,168,74,.35), transparent 50%),
            linear-gradient(135deg, #2E7D32 0%, #1B5E20 100%)
          `,
        }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h2 className="text-white text-3xl md:text-4xl font-extrabold mb-2">
              Sẵn sàng để con bắt đầu hành trình xanh?
            </h2>
            <p className="opacity-90">
              Đặt lịch tham quan cơ sở và trải nghiệm một buổi học miễn phí cùng các bé Mầm Xanh.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="#" className="btn btn-light">Đăng ký tham quan</Link>
            <Link href="#" className="btn btn-outline-light">Gọi 1900 0000</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
