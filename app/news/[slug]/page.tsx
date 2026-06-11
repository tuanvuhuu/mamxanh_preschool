import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { NEWS } from '@/lib/news';

export function generateStaticParams() {
  return NEWS.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = NEWS.find((p) => p.slug === params.slug);
  return {
    title: `${post?.title} — Mầm Xanh Preschool`,
    description: post?.excerpt,
  };
}

export default function NewsDetailPage({ params }: { params: { slug: string } }) {
  const post = NEWS.find((p) => p.slug === params.slug);
  const related = NEWS.filter((p) => p.slug !== params.slug).slice(0, 3);

  if (!post) return <div className="py-40 text-center">Bài viết không tìm thấy</div>;

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative py-12 md:py-16">
          <div
            className="absolute inset-0"
            style={{ background: post.gradient }}
          />
          <div className="container-page relative text-white">
            <Link href="/news" className="inline-block mb-4 opacity-90 hover:opacity-100">
              ← Quay lại
            </Link>
            <span className="inline-block bg-white/20 text-white font-bold text-xs px-3 py-1 rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{post.title}</h1>
            <p className="text-white/90">{post.date}</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16">
          <div className="container-page max-w-3xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-ink-700 mb-6 leading-relaxed">
                {post.excerpt}
              </p>

              <div className="bg-leaf-50 rounded-4xl p-8 my-10 border-l-4 border-leaf-600">
                <p className="text-lg font-semibold text-ink-900">
                  Đây là nội dung chi tiết của bài viết &quot;{post.title}&quot;.
                  Phần nội dung chính sẽ được cập nhật với hình ảnh, video và thông tin đầy đủ từ đội ngũ Mầm Xanh.
                </p>
              </div>

              <p className="text-ink-700 leading-relaxed mb-4">
                Mầm Xanh cam kết chia sẻ thông tin giáo dục chất lượng, kiến thức nuôi dạy con và những hoạt động ý nghĩa tại trường.
                Hãy theo dõi các bài viết tiếp theo để cập nhật những tin tức mới nhất.
              </p>
            </div>

            {/* Share */}
            <div className="mt-12 pt-8 border-t border-leaf-100">
              <p className="text-sm text-ink-500 mb-4">Chia sẻ bài viết:</p>
              <div className="flex gap-3">
                {[
                  { name: 'Facebook', icon: '👍' },
                  { name: 'Zalo', icon: '💬' },
                  { name: 'Copy link', icon: '🔗' },
                ].map((s) => (
                  <button
                    key={s.name}
                    className="px-4 py-2 rounded-full bg-leaf-50 hover:bg-leaf-100 text-sm font-semibold transition-all"
                  >
                    {s.icon} {s.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="py-12 md:py-16 bg-cream">
          <div className="container-page">
            <h2 className="text-3xl font-extrabold mb-10">Bài viết liên quan</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/news/${p.slug}`}
                  className="group bg-white rounded-4xl overflow-hidden shadow-soft hover:shadow-warm hover:-translate-y-1 transition-all"
                >
                  <div className="aspect-[5/3] relative" style={{ background: p.gradient }} />
                  <div className="p-6">
                    <p className="text-xs text-ink-500 mb-2">{p.date}</p>
                    <h3 className="text-lg font-bold group-hover:text-orange-500 transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-sm text-ink-500 line-clamp-2 mt-2">{p.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
