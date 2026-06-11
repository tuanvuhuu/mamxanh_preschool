# Mầm Xanh Preschool

Trang giới thiệu trường mầm non song ngữ Mầm Xanh — Next.js 14 + Tailwind CSS.

## Cài đặt

```bash
npm install
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) — `/` và `/introduce` cùng hiển thị trang giới thiệu.

## Cấu trúc thư mục

```
mamxanh_preschool/
├── app/                       # Next.js App Router
│   ├── layout.tsx             # Root layout + font Baloo 2 / Quicksand
│   ├── page.tsx               # Trang chủ (render trang giới thiệu)
│   ├── introduce/page.tsx     # /introduce (alias)
│   └── globals.css            # Tailwind + utilities
├── components/
│   ├── layout/
│   │   ├── Header.tsx         # Sticky nav + mobile menu
│   │   └── Footer.tsx         # 4 cột + socials
│   ├── sections/
│   │   ├── Hero.tsx           # Hero với mây/hoa/lá animation
│   │   ├── IntroStory.tsx     # Câu chuyện + ảnh + badge xoay
│   │   ├── Pillars.tsx        # Mục tiêu · Sứ mệnh · Tầm nhìn
│   │   ├── Values.tsx         # 5 giá trị cốt lõi
│   │   ├── Stats.tsx          # Số liệu (counter animation)
│   │   └── CTA.tsx            # Banner kêu gọi hành động
│   └── ui/
│       └── Logo.tsx           # Logo component (dark/light)
├── public/
│   └── logo.svg               # Logo Mầm Xanh (thay bằng logo.png nếu có)
├── tailwind.config.ts         # Palette brand: orange + leaf + sunny
├── next.config.mjs
├── tsconfig.json
└── package.json
```

## Palette thương hiệu

| Token        | Hex       | Dùng cho                          |
|--------------|-----------|-----------------------------------|
| `orange-400` | `#F58220` | Primary — vòng C cam, bàn tay     |
| `orange-300` | `#FFA84A` | Highlight, gradient cam           |
| `leaf-600`   | `#4CAF50` | Secondary — mầm cây               |
| `leaf-800`   | `#2E7D32` | Deep green, gradient kết thúc     |
| `leaf-400`   | `#8BC34A` | Mầm sáng                          |
| `sunny`      | `#FFC107` | Sparkle vàng                      |
| `cream`      | `#FFFBF5` | Nền chính                         |

## Thay logo

Thay `public/logo.svg` bằng file `logo.png` của bạn rồi sửa 1 dòng trong `components/ui/Logo.tsx`:

```tsx
<Image src="/logo.png" ... />
```
