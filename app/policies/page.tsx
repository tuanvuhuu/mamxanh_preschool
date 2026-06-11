import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import SectionHead from '@/components/ui/SectionHead';
import CTA from '@/components/sections/CTA';

const POLICIES = [
  {
    title: 'Chính sách tuyển sinh',
    items: [
      'Tuyển sinh từ tháng 3 cho năm học bắt đầu tháng 9.',
      'Bé phải đủ độ tuổi theo quy định tại thời điểm nhập học.',
      'Không yêu cầu bé phải biết tiếng Anh trước khi nhập học.',
      'Ưu tiên cho bé có anh/chị đã học tại trường (giảm 5%).',
    ],
  },
  {
    title: 'Chính sách hóa đơn & thanh toán',
    items: [
      'Thanh toán hàng tháng vào ngày 1 mỗi tháng.',
      'Chấp nhận chuyển khoản, tiền mặt, thẻ tín dụng.',
      'Hóa đơn được lập theo quy định pháp luật, gửi email hàng tháng.',
      'Miễn phí nếu bé được miễn giảm học phí (theo quy định).',
    ],
  },
  {
    title: 'Chính sách nghỉ phép & điều chỉnh học phí',
    items: [
      'Bé được phép nghỉ tối đa 30 ngày/năm học mà vẫn giữ chỗ.',
      'Nếu nghỉ quá 30 ngày phải hoàn trả học phí những ngày vượt quá.',
      'Nghỉ dài hạn (>90 ngày) bé sẽ bị xóa khỏi danh sách & mất chỗ.',
      'Bệnh lâu dài (có giấy xác nhận từ bác sĩ) được xem xét riêng.',
    ],
  },
  {
    title: 'Chính sách phát triển con em',
    items: [
      'Báo cáo phát triển hàng tuần qua app (hoạt động, ăn, ngủ, cảm xúc).',
      'Gặp riêng giáo viên 1 lần/tháng để trao đổi về tiến độ học tập.',
      'Sách liên lạc hàng ngày để phụ huynh theo dõi tâm trạng bé.',
      'Tham gia các sự kiện trường (Open Day, lễ kỉ niệm, trưng bày dự án).',
    ],
  },
  {
    title: 'Chính sách kỷ luật & hành vi',
    items: [
      'Không có hình phạt thể xác. Mầm Xanh dùng phương pháp hướng dẫn tích cực.',
      'Nếu bé có hành vi thường xuyên tiêu cực, phụ huynh sẽ được thông báo & họp bàn cách hỗ trợ.',
      'Bé sẽ bị đuổi học chỉ khi hành vi nguy hiểm cho bản thân hoặc người khác.',
      'Mầm Xanh cam kết lắng nghe & giải quyết vấn đề cùng gia đình.',
    ],
  },
  {
    title: 'Chính sách bảo vệ dữ liệu cá nhân',
    items: [
      'Tất cả thông tin cá nhân của bé & phụ huynh được bảo mật theo pháp luật.',
      'Hình ảnh, video bé chỉ được dùng nội bộ & trang web của trường, không chia sẻ công khai.',
      'Phụ huynh có quyền từ chối camera/hình ảnh bất cứ lúc nào.',
      'Mầm Xanh không bán bạn thông tin cho bên thứ ba.',
    ],
  },
];

export const metadata = {
  title: 'Chính sách & Điều khoản — Mầm Xanh Preschool',
  description: 'Chính sách tuyển sinh, thanh toán, kỷ luật, bảo vệ dữ liệu và các quy định của trường mầm non Mầm Xanh.',
};

export default function PoliciesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Chính sách & Quy định"
          title="Minh bạch, công bằng, lợi cho bé"
          subtitle="Tất cả chính sách của Mầm Xanh được xây dựng với mục tiêu bảo vệ quyền lợi của bé và sự tin tưởng của gia đình."
          breadcrumb="Chính sách"
        />

        <section className="py-16 md:py-24">
          <div className="container-page max-w-4xl">
            <div className="space-y-12">
              {POLICIES.map((p) => (
                <div key={p.title}>
                  <h2 className="text-2xl font-extrabold mb-5" style={{ color: '#2E7D32' }}>
                    {p.title}
                  </h2>
                  <ul className="space-y-3">
                    {p.items.map((item, i) => (
                      <li key={i} className="flex gap-3 text-ink-700">
                        <span className="text-leaf-600 font-bold shrink-0">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-leaf-50">
          <div className="container-page max-w-3xl">
            <h2 className="text-3xl font-extrabold mb-6">Câu hỏi về chính sách?</h2>
            <p className="text-lg text-ink-700 mb-6">
              Nếu bạn có bất kỳ câu hỏi nào về chính sách của Mầm Xanh, vui lòng liên hệ trực tiếp với đội ngũ tuyển sinh.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:19000000" className="btn btn-primary">
                📞 Gọi hotline
              </a>
              <a href="mailto:hello@mamxanh.edu.vn" className="btn btn-leaf">
                ✉️ Gửi email
              </a>
              <a href="/contact" className="btn btn-outline-light bg-leaf-600 text-white border-leaf-600 hover:bg-leaf-700">
                💬 Chat với chúng tôi
              </a>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
