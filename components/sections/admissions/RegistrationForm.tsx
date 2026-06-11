'use client';

import { useState } from 'react';
import SectionHead from '@/components/ui/SectionHead';

export default function RegistrationForm() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Demo: in production, POST tới API route /api/admissions
    setSubmitted(true);
  };

  return (
    <section id="register" className="py-16 md:py-24 bg-leaf-50 scroll-mt-24">
      <div className="container-page max-w-3xl">
        <SectionHead
          eyebrow="Đăng ký tham quan"
          title="Để Mầm Xanh chào đón bé"
          lead="Điền thông tin dưới đây, đội ngũ tuyển sinh sẽ liên hệ trong 24h."
        />

        {submitted ? (
          <div className="bg-white rounded-4xl p-10 text-center shadow-warm">
            <div className="w-16 h-16 rounded-full bg-leaf-100 text-leaf-700 grid place-items-center mx-auto mb-4">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-extrabold text-leaf-700 mb-2">Cảm ơn gia đình! 🌱</h3>
            <p className="text-ink-500">
              Mầm Xanh đã nhận được thông tin. Đội ngũ tuyển sinh sẽ gọi bạn trong vòng 24 giờ.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="btn btn-leaf mt-6"
            >
              Đăng ký phụ huynh khác
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="bg-white rounded-4xl p-6 md:p-10 shadow-warm grid sm:grid-cols-2 gap-5">
            <Field label="Họ tên phụ huynh" name="parentName" required />
            <Field label="Số điện thoại" name="phone" type="tel" required />
            <Field label="Email" name="email" type="email" />
            <Field label="Tên bé" name="childName" required />
            <Field label="Ngày sinh của bé" name="dob" type="date" required />
            <Select label="Lớp quan tâm" name="class" options={['Nhà trẻ (18-24 tháng)', 'Mầm (2-3 tuổi)', 'Chồi (3-4 tuổi)', 'Lá (4-5 tuổi)', 'Tiền tiểu học (5-6 tuổi)']} required />

            <div className="sm:col-span-2">
              <label className="block text-sm font-bold text-ink-700 mb-1.5">Lời nhắn cho Mầm Xanh</label>
              <textarea
                name="message"
                rows={4}
                placeholder="Gia đình muốn chia sẻ điều gì về bé? (sở thích, tính cách, dị ứng thực phẩm,…)"
                className="w-full rounded-2xl border-2 border-leaf-100 px-4 py-3 focus:border-orange-400 outline-none transition-colors"
              />
            </div>

            <label className="sm:col-span-2 flex items-start gap-2 text-sm text-ink-700">
              <input type="checkbox" required className="mt-1 w-4 h-4 accent-orange-400" />
              <span>
                Tôi đồng ý cho Mầm Xanh sử dụng thông tin trên để liên hệ tư vấn tuyển sinh.
              </span>
            </label>

            <button type="submit" className="sm:col-span-2 btn btn-primary justify-center text-base">
              Gửi đăng ký ✨
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function Field({
  label, name, type = 'text', required,
}: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-sm font-bold text-ink-700 mb-1.5" htmlFor={name}>
        {label} {required && <span className="text-orange-500">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-2xl border-2 border-leaf-100 px-4 py-3 focus:border-orange-400 outline-none transition-colors"
      />
    </div>
  );
}

function Select({
  label, name, options, required,
}: { label: string; name: string; options: string[]; required?: boolean }) {
  return (
    <div>
      <label className="block text-sm font-bold text-ink-700 mb-1.5" htmlFor={name}>
        {label} {required && <span className="text-orange-500">*</span>}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        defaultValue=""
        className="w-full rounded-2xl border-2 border-leaf-100 px-4 py-3 focus:border-orange-400 outline-none transition-colors bg-white"
      >
        <option value="" disabled>-- Chọn --</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}
