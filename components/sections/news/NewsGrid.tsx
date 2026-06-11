'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { NEWS, type NewsPost } from '@/lib/news';

const CATEGORIES = ['Tất cả', 'Sự kiện', 'Hoạt động', 'Kiến thức', 'Thông báo'] as const;

export default function NewsGrid() {
  const [active, setActive] = useState<typeof CATEGORIES[number]>('Tất cả');

  const filtered = useMemo(
    () => (active === 'Tất cả' ? NEWS : NEWS.filter((n) => n.category === active)),
    [active]
  );

  return (
    <section className="py-16 md:py-24">
      <div className="container-page">
        {/* Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-5 py-2 rounded-full font-semibold text-sm transition-all ${
                active === c
                  ? 'bg-orange-400 text-white shadow-warm'
                  : 'bg-leaf-50 text-ink-700 hover:bg-leaf-100'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Featured */}
        {filtered[0] && <FeaturedCard post={filtered[0]} />}

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filtered.slice(1).map((post) => (
            <NewsCard key={post.slug} post={post} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-ink-500 py-12">Chưa có bài viết trong mục này.</p>
        )}
      </div>
    </section>
  );
}

function FeaturedCard({ post }: { post: NewsPost }) {
  return (
    <article className="grid md:grid-cols-2 gap-6 lg:gap-10 bg-white rounded-4xl overflow-hidden shadow-soft hover:shadow-warm transition-all">
      <div className="relative aspect-[5/3] md:aspect-auto min-h-[260px]" style={{ background: post.gradient }}>
        <span className="absolute top-5 left-5 bg-white/95 text-orange-500 font-bold text-xs px-3 py-1 rounded-full">
          {post.category}
        </span>
      </div>
      <div className="p-6 md:p-10 flex flex-col justify-center">
        <p className="text-xs text-ink-500 mb-2">{post.date}</p>
        <h2 className="text-2xl md:text-3xl font-extrabold mb-3 leading-tight">{post.title}</h2>
        <p className="text-ink-500 leading-relaxed mb-5">{post.excerpt}</p>
        <Link href={`/news/${post.slug}`} className="btn btn-primary self-start !py-2 !px-5 text-sm">
          Đọc bài viết →
        </Link>
      </div>
    </article>
  );
}

function NewsCard({ post }: { post: NewsPost }) {
  return (
    <article className="group bg-white rounded-4xl overflow-hidden shadow-soft hover:shadow-warm hover:-translate-y-1 transition-all">
      <div className="aspect-[5/3] relative" style={{ background: post.gradient }}>
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
  );
}
