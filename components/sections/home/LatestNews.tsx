import Link from 'next/link';
import SectionHead from '@/components/ui/SectionHead';
import { NEWS } from '@/lib/news';

export default function LatestNews() {
  const items = NEWS.slice(0, 3);
  return (
    <section className="py-16 md:py-24">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <SectionHead
            eyebrow="Tin tức & Sự kiện"
            title="Mầm Xanh hôm nay"
            align="left"
            className="mb-0"
          />
          <Link href="/news" className="btn btn-leaf !py-2 !px-5 text-sm">
            Xem tất cả →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((post) => (
            <article
              key={post.slug}
              className="group bg-white rounded-4xl overflow-hidden shadow-soft hover:shadow-warm hover:-translate-y-1 transition-all"
            >
              <div
                className="aspect-[5/3] relative"
                style={{ background: post.gradient }}
              >
                <span className="absolute top-4 left-4 bg-white/95 text-orange-500 font-bold text-xs px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>
              <div className="p-6">
                <p className="text-xs text-ink-500 mb-2">{post.date}</p>
                <h3 className="text-lg font-bold mb-2 group-hover:text-orange-500 transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-ink-500 leading-relaxed line-clamp-3">{post.excerpt}</p>
                <Link
                  href={`/news/${post.slug}`}
                  className="inline-block mt-3 text-orange-500 font-bold text-sm hover:translate-x-1 transition-transform"
                >
                  Đọc tiếp →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
