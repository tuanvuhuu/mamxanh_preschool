import Link from 'next/link';

export default function IntroStory() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-page grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Media */}
        <div className="relative aspect-square max-w-md mx-auto w-full">
          <div
            className="absolute top-0 left-0 w-4/5 aspect-[4/5] rounded-[2rem] rounded-br-[120px] shadow-warm"
            style={{
              backgroundImage:
                'radial-gradient(circle at 30% 20%, rgba(255,255,255,.35), transparent 50%), linear-gradient(135deg, #FFA84A, #F58220)',
            }}
          >
            <span className="absolute bottom-5 left-5 bg-white text-orange-500 px-4 py-1.5 rounded-full font-bold text-sm shadow-soft">
              10+ năm kinh nghiệm
            </span>
          </div>

          <div
            className="absolute bottom-0 right-0 w-1/2 aspect-square rounded-full border-[8px] border-cream shadow-leaf"
            style={{
              backgroundImage:
                'radial-gradient(circle at 30% 20%, rgba(255,255,255,.4), transparent 50%), linear-gradient(135deg, #8BC34A, #2E7D32)',
            }}
          />

          {/* Rotating sticker badge */}
          <span className="absolute -top-5 -right-5 animate-spin-slow">
            <svg viewBox="0 0 120 120" width="100" height="100">
              <defs>
                <path id="circlePath" d="M 60,60 m -45,0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0" />
              </defs>
              <circle cx="60" cy="60" r="55" fill="#FFF8E1" stroke="#F58220" strokeWidth="2" strokeDasharray="4 4" />
              <text fontFamily="Quicksand" fontSize="11" fontWeight="700" fill="#2E7D32">
                <textPath href="#circlePath">MẦM XANH · PRESCHOOL · ESL · SINCE 2014 ·</textPath>
              </text>
              <text x="60" y="65" textAnchor="middle" fontSize="22" fontFamily="Baloo 2" fontWeight="800" fill="#F58220">
                MX
              </text>
            </svg>
          </span>
        </div>

        {/* Text */}
        <div>
          <p className="eyebrow">Câu chuyện của chúng tôi</p>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold">
            Mỗi đứa trẻ là một mầm cây — chúng tôi là người làm vườn
          </h2>
          <p className="mt-4 text-ink-500">
            Mầm Xanh Preschool ra đời với niềm tin rằng tuổi thơ là khoảng thời gian
            quý giá nhất để gieo những hạt mầm tử tế, tò mò và yêu thương. Trong môi
            trường song ngữ Việt – Anh, các bé được phát triển toàn diện qua chương
            trình ESL chuẩn quốc tế kết hợp giá trị văn hoá Việt.
          </p>
          <p className="mt-3 text-ink-500">
            Hơn 10 năm đồng hành, chúng tôi tự hào đã chắp cánh cho hàng nghìn em nhỏ
            tự tin bước vào thế giới rộng lớn — với trái tim ấm áp và đôi mắt biết
            mơ ước.
          </p>

          <ul className="mt-6 space-y-3">
            {[
              ['#F58220', 'Lớp học nhỏ — chăm sóc cá nhân hoá'],
              ['#4CAF50', 'Giáo viên bản ngữ + chuyên gia tâm lý'],
              ['#FFC107', 'Cơ sở vật chất đạt chuẩn châu Âu'],
            ].map(([color, text]) => (
              <li key={text} className="flex items-center gap-3 font-semibold text-ink-700">
                <span className="w-3.5 h-3.5 rounded-full shrink-0" style={{ background: color }} />
                {text}
              </li>
            ))}
          </ul>

          <Link href="#" className="btn btn-primary mt-7">
            Tìm hiểu thêm
          </Link>
        </div>
      </div>
    </section>
  );
}
