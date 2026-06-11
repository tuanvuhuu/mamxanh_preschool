export type NewsPost = {
  slug: string;
  category: 'Sự kiện' | 'Hoạt động' | 'Kiến thức' | 'Thông báo';
  date: string;
  title: string;
  excerpt: string;
  gradient: string;
};

export const NEWS: NewsPost[] = [
  {
    slug: 'le-hoi-mua-xuan-2026',
    category: 'Sự kiện',
    date: '08/06/2026',
    title: 'Lễ hội Mùa Xuân 2026 – Khi mầm xanh khoe sắc',
    excerpt: 'Ngày hội thường niên của Mầm Xanh năm nay mang chủ đề "Vườn cổ tích", quy tụ hơn 300 gia đình cùng tham gia các hoạt động trải nghiệm.',
    gradient: 'linear-gradient(135deg,#FFA84A,#F58220)',
  },
  {
    slug: 'phuong-phap-reggio-emilia',
    category: 'Kiến thức',
    date: '02/06/2026',
    title: 'Reggio Emilia – Khi đứa trẻ là trung tâm của giáo dục',
    excerpt: 'Khám phá triết lý giáo dục đặt trẻ làm trung tâm đang được Mầm Xanh áp dụng kết hợp linh hoạt cùng chương trình ESL.',
    gradient: 'linear-gradient(135deg,#8BC34A,#2E7D32)',
  },
  {
    slug: 'workshop-cha-me-thau-hieu-con',
    category: 'Hoạt động',
    date: '28/05/2026',
    title: 'Workshop "Thấu hiểu con" – Hành trình lắng nghe',
    excerpt: 'Buổi chia sẻ cùng TS. Nguyễn Phương Linh về kỹ năng lắng nghe phi bạo lực dành cho phụ huynh có con từ 2-5 tuổi.',
    gradient: 'linear-gradient(135deg,#FFD54F,#FF8A65)',
  },
  {
    slug: 'tuyen-sinh-nam-hoc-2026-2027',
    category: 'Thông báo',
    date: '20/05/2026',
    title: 'Tuyển sinh năm học 2026 – 2027 chính thức mở',
    excerpt: 'Mầm Xanh Preschool công bố chính sách tuyển sinh năm học mới với nhiều ưu đãi cho 100 phụ huynh đăng ký sớm.',
    gradient: 'linear-gradient(135deg,#FFB7C5,#EF5350)',
  },
  {
    slug: 'goc-vuon-mam-xanh',
    category: 'Hoạt động',
    date: '15/05/2026',
    title: 'Góc vườn Mầm Xanh – Khi bé là nông dân tí hon',
    excerpt: 'Mỗi tuần các bé Lá có 2 buổi học ngoài trời, tự tay gieo hạt, chăm cây và thu hoạch rau sạch mang về nhà.',
    gradient: 'linear-gradient(135deg,#A5D6A7,#4CAF50)',
  },
  {
    slug: 'esl-cho-tre-mam-non-co-can-thiet',
    category: 'Kiến thức',
    date: '08/05/2026',
    title: 'ESL cho trẻ mầm non: Có cần thiết không?',
    excerpt: 'Nghiên cứu mới nhất cho thấy giai đoạn 0-6 tuổi là "cửa sổ vàng" để tiếp thu ngôn ngữ thứ hai một cách tự nhiên.',
    gradient: 'linear-gradient(135deg,#42A5F5,#1976D2)',
  },
];
