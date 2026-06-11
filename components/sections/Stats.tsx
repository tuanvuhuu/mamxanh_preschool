'use client';

import { useEffect, useRef, useState } from 'react';

const STATS: Array<{ value: number; suffix: string; label: string }> = [
  { value: 10,   suffix: '+', label: 'Năm kinh nghiệm' },
  { value: 1500, suffix: '+', label: 'Học sinh tốt nghiệp' },
  { value: 40,   suffix: '+', label: 'Giáo viên tâm huyết' },
  { value: 98,   suffix: '%', label: 'Phụ huynh hài lòng' },
];

export default function Stats() {
  return (
    <section className="py-14 bg-gradient-to-br from-orange-400 via-orange-500 to-leaf-700 text-white">
      <div className="container-page grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {STATS.map((s) => (
          <Counter key={s.label} {...s} />
        ))}
      </div>
    </section>
  );
}

function Counter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const step = Math.max(1, Math.floor(value / 40));
            let curr = 0;
            const tick = () => {
              curr = Math.min(value, curr + step);
              setCurrent(curr);
              if (curr < value) requestAnimationFrame(tick);
            };
            tick();
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref}>
      <strong className="block font-display font-extrabold text-4xl md:text-5xl text-sunny-light leading-none">
        {current}
        <span className="text-white">{suffix}</span>
      </strong>
      <p className="mt-2 font-semibold opacity-90">{label}</p>
    </div>
  );
}
