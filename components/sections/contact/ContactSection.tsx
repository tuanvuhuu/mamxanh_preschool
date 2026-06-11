'use client';

import { useState } from 'react';

const INFO = [
  { icon: '📞', label: 'Hotline tuyển sinh', value: '1900 0000', href: 'tel:19000000', color: '#F58220' },
  { icon: '✉️', label: 'Email', value: 'hello@mamxanh.edu.vn', href: 'mailto:hello@mamxanh.edu.vn', color: '#4CAF50' },
  { icon: '🕐', label: 'Giờ làm việc', value: 'T2 – T7: 7:00 – 18:00', color: '#42A5F5' },
  { icon: '💬', label: 'Zalo OA', value: 'Mầm Xanh Preschool', href: '#', color: '#AB47BC' },
];

export default function ContactSection() {
  const [sent, setSent] = useState(false);

  return (
    <section className="py-16 md:py-24">
      <div className="container-page grid lg:grid-cols-2 gap-10 lg:gap-16">
        {/* Info */}
        <div>
          <p className="eyebrow">Liên hệ</p>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold">
            Mầm Xanh luôn ở đây <br /> để lắng nghe gia đình
          </h2>
          <p className="mt-3 text-ink-500 text-lg">
            Dù là câu hỏi nhỏ về thực đơn hay băn khoăn lớn về việc cho con học song ngữ —
            chúng tôi sẵn lòng trò chuyện cùng bạn.
          </p>

          <ul className="mt-8 space-y-4">
            {INFO.map((item) => (
              <li
                key={item.label}
                className="flex items-center gap-4 bg-white rounded-3xl p-4 shadow-soft hover:shadow-warm hover:-translate-y-0.5 transition-all"
              >
                <span
                  className="w-12 h-12 rounded-2xl grid place-items-center text-2xl"
                  style={{ background: `${item.color}1A`, color: item.color }}
                >
                  {item.icon}
                </span>
                <div>
                  <p className="text-xs text-ink-500 uppercase tracking-wider">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="font-bold text-ink-900 hover:text-orange-500">
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-bold text-ink-900">{item.value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Form */}
        <div className="bg-white rounded-4xl p-6 md:p-10 shadow-warm">
          {sent ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 rounded-full bg-leaf-100 text-leaf-700 grid place-items-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold text-leaf-700 mb-2">Đã gửi! 💌</h3>
              <p className="text-ink-500">Cảm ơn bạn đã liên hệ. Mầm Xanh sẽ phản hồi sớm nhất.</p>
              <button onClick={() => setSent(false)} className="btn btn-leaf mt-6">
                Gửi tin nhắn khác
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="space-y-5"
            >
              <h3 className="text-2xl font-extrabold mb-1">Gửi tin nhắn cho chúng tôi</h3>
              <p className="text-sm text-ink-500 mb-4">Mầm Xanh phản hồi trong vòng 24 giờ.</p>

              <Field label="Họ tên" name="name" required />
              <Field label="Số điện thoại" name="phone" type="tel" required />
              <Field label="Email" name="email" type="email" />

              <div>
                <label className="block text-sm font-bold text-ink-700 mb-1.5">Nội dung tin nhắn</label>
                <textarea
                  rows={5}
                  required
                  placeholder="Hãy chia sẻ điều bạn muốn hỏi…"
                  className="w-full rounded-2xl border-2 border-leaf-100 px-4 py-3 focus:border-orange-400 outline-none transition-colors"
                />
              </div>

              <button type="submit" className="btn btn-primary w-full justify-center">
                Gửi tin nhắn ✨
              </button>
            </form>
          )}
        </div>
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
