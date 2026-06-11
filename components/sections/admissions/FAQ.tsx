'use client';

import { useState } from 'react';
import SectionHead from '@/components/ui/SectionHead';

const QA = [
  {
    q: 'Bé cần biết tiếng Anh trước khi nhập học không?',
    a: 'Hoàn toàn không. Chương trình ESL được thiết kế cho bé bắt đầu từ con số 0. Chúng tôi tập trung vào việc khơi gợi tình yêu với ngôn ngữ qua bài hát, câu chuyện và trò chơi.',
  },
  {
    q: 'Mầm Xanh có nhận bé chưa cai sữa / chưa cai tã không?',
    a: 'Có. Lớp Nhà trẻ (18-24 tháng) nhận cả các bé đang trong giai đoạn này. Cô giáo sẽ phối hợp cùng gia đình để hỗ trợ bé cai dần một cách thoải mái.',
  },
  {
    q: 'Học phí có bao gồm các khoản nào? Có phụ thu không?',
    a: 'Học phí công bố đã bao gồm: tiền học, ăn 3 bữa chính + 2 bữa phụ, đồng phục, học liệu, các hoạt động ngoại khoá trong trường. Phụ thu chỉ phát sinh khi gia đình đăng ký các dịch vụ tự chọn như đưa đón, học thứ 7.',
  },
  {
    q: 'Bé bị dị ứng / chế độ ăn đặc biệt thì sao?',
    a: 'Bếp Mầm Xanh có chuyên gia dinh dưỡng. Phụ huynh thông báo dị ứng / chế độ ăn riêng khi nhập học, chúng tôi sẽ chuẩn bị thực đơn riêng cho bé.',
  },
  {
    q: 'Một lớp có bao nhiêu bé? Có bao nhiêu cô?',
    a: 'Tuỳ độ tuổi, sĩ số từ 12 đến 20 bé. Tỉ lệ giáo viên: Nhà trẻ 1:4, Mầm 1:6, Chồi 1:8, Lá 1:10, Tiền tiểu học 1:12. Mỗi lớp luôn có ít nhất 2 cô bản địa + 1 cô bản ngữ.',
  },
  {
    q: 'Phụ huynh có thể quan sát bé học không?',
    a: 'Có. Mỗi lớp có camera live truy cập 24/7 qua app dành riêng cho phụ huynh. Ngoài ra, tháng 1 lần Mầm Xanh tổ chức Open Day để gia đình vào lớp cùng bé.',
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24">
      <div className="container-page max-w-3xl">
        <SectionHead
          eyebrow="Câu hỏi thường gặp"
          title="Phụ huynh thường hỏi gì?"
          lead="Nếu chưa thấy câu trả lời cho thắc mắc của bạn, hãy gọi hotline 1900 0000."
        />

        <div className="space-y-3">
          {QA.map((item, i) => {
            const open = openIdx === i;
            return (
              <div
                key={item.q}
                className={`bg-white rounded-3xl border-2 transition-all overflow-hidden ${
                  open ? 'border-orange-300 shadow-warm' : 'border-leaf-100'
                }`}
              >
                <button
                  onClick={() => setOpenIdx(open ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left"
                  aria-expanded={open}
                >
                  <span className="font-bold text-ink-900">{item.q}</span>
                  <span
                    className={`shrink-0 w-8 h-8 rounded-full grid place-items-center transition-all ${
                      open ? 'bg-orange-400 text-white rotate-45' : 'bg-leaf-100 text-leaf-700'
                    }`}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 md:px-6 pb-6 text-ink-500 leading-relaxed">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
