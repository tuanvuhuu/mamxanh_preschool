import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import SectionHead from '@/components/ui/SectionHead';
import CTA from '@/components/sections/CTA';

const FACILITIES = [
  { icon: '🎓', title: 'Phòng học hiện đại', desc: 'Phòng học khách (30m²), được thiết kế theo thông tư 22 của Bộ GD&ĐT, thoáng đãng, ánh sáng tự nhiên, an toàn 100%.' },
  { icon: '🛏️', title: 'Phòng ngủ thoải mái', desc: '1 phòng ngủ riêng, 20 chiếc giường layui bằng gỗ tự nhiên, drap cotton 100%, được khử trùng hằng ngày.' },
  { icon: '🍽️', title: 'Bếp tiêu chuẩn châu Âu', desc: 'Bếp công nghiệp, đủ thiết bị hiện đại. Đầu bếp công nghiệp, thực đơn được dinh dưỡng sư phê duyệt hàng tháng.' },
  { icon: '🚽', title: 'Vệ sinh sạch sẽ', desc: '4 phòng vệ sinh, mỗi phòng 2 nhà vệ sinh cho bé, được khử trùng 3 lần/ngày bằng thuốc an toàn.' },
  { icon: '⚽', title: 'Sân chơi ngoài trời', desc: 'Sân chơi 200m² với cỏ nhân tạo, khung leo, bập bênh, cầu trượt an toàn theo tiêu chuẩn quốc tế.' },
  { icon: '🔐', title: 'Hệ thống an ninh', desc: 'Camera 24/7 tại mọi phòng, hệ thống kiểm soát ra vào bằng thẻ RFID, bảo vệ chuyên nghiệp.' },
  { icon: '🌡️', title: 'Điều hòa thông minh', desc: 'Hệ thống điều hòa tập trung, luôn duy trì 24°C - 26°C, máy lọc không khí HEPA cao cấp.' },
  { icon: '📚', title: 'Thư viện sách', desc: '1000+ cuốn sách song ngữ Việt - Anh cho trẻ, khu đọc sách yên tĩnh và thoải mái.' },
  { icon: '🎭', title: 'Phòng sáng tạo', desc: 'Phòng STEAM 50m² với đầy đủ công cụ, vật liệu, bàn làm việc nhân đôi cho các dự án sáng tạo.' },
];

export const metadata = {
  title: 'Cơ sở vật chất — Mầm Xanh Preschool',
  description: 'Tour cơ sở Mầm Xanh — phòng học hiện đại, sân chơi an toàn, bếp chuẩn châu Âu, hệ thống an ninh 24/7.',
};

export default function FacilitiesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Cơ sở vật chất"
          title="Ngôi nhà thứ hai của bé"
          subtitle="Chuẩn quốc tế, an toàn, hiện đại — môi trường lý tưởng để bé khám phá và phát triển."
          breadcrumb="Cơ sở vật chất"
        />

        <section className="py-16 md:py-24">
          <div className="container-page">
            <SectionHead
              eyebrow="Tour cơ sở"
              title="Không gian được thiết kế tỉ mỉ"
              lead="Mỗi góc của Mầm Xanh đều tính toán kỹ lưỡng để tạo ra môi trường học tập an toàn, vui vẻ và khích lệ phát triển."
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {FACILITIES.map((f) => (
                <div
                  key={f.title}
                  className="bg-white rounded-4xl p-7 shadow-soft hover:shadow-warm hover:-translate-y-1 transition-all"
                >
                  <span className="text-5xl mb-4 block">{f.icon}</span>
                  <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                  <p className="text-sm text-ink-500 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-leaf-50">
          <div className="container-page max-w-3xl">
            <h2 className="text-3xl font-extrabold mb-6">Công tác vệ sinh & an toàn</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-leaf-700 mb-2">🦠 Tiêu chuẩn sạch sẽ</h3>
                <p className="text-ink-700">
                  Phòng học được vệ sinh sâu 2 lần/ngày (sáng & chiều). Đồ chơi được khử trùng UV mỗi cuối tuần.
                  Drap giường thay mới hằng ngày. Nhân viên tư vấn y tế hàng tuần kiểm tra vệ sinh.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-leaf-700 mb-2">🚨 Quy trình tách li bệnh</h3>
                <p className="text-ink-700">
                  Bé có dấu hiệu bệnh sẽ được tách riêng vào phòng cách ly, thông báo phụ huynh ngay.
                  Y tá Mầm Xanh giám sát sức khỏe liên tục cho đến khi phụ huynh đón.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-leaf-700 mb-2">🏥 Phòng y tế cấp cứu</h3>
                <p className="text-ink-700">
                  Trang bị đầy đủ: tủ thuốc, máy đo nhiệt độ, máy hô hấp. Nhân viên y tế có bằng sơ cứp.
                  Liên kết với 3 bệnh viện gần nhất để cấp cứu nhanh chóng nếu cần.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-leaf-700 mb-2">🔒 An toàn thực phẩm</h3>
                <p className="text-ink-700">
                  Tất cả thực phẩm được kiểm định chất lượng, có hóa đơn / chứng chỉ. Bếp được giám sát bởi
                  dinh dưỡng sư, thực đơn đa dạng, cân bằng, tránh allergen phổ biến.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
