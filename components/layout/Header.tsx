'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '@/components/ui/Logo';
import { NAV } from '@/lib/nav';

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md border-b border-orange-100">
      <div className="container-page flex items-center gap-6 py-3 relative">
        <Logo />

        <nav className="hidden lg:block ml-auto">
          <ul className="flex gap-7">
            {NAV.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={`relative font-semibold py-1 transition-colors hover:text-orange-500 ${
                      active ? 'text-orange-500' : 'text-ink-700'
                    }`}
                  >
                    {item.label}
                    {active && (
                      <span className="absolute left-1/2 -translate-x-1/2 -bottom-0.5 w-5 h-[3px] bg-sunny rounded-full" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <Link href="/admissions" className="hidden lg:inline-flex btn btn-primary text-sm !py-2 !px-5">
          Đăng ký tham quan
        </Link>

        <button
          aria-label="Mở menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden ml-auto flex flex-col gap-[5px] p-2"
        >
          <span className={`block w-6 h-[3px] bg-leaf-700 rounded transition-transform ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-[3px] bg-leaf-700 rounded transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-[3px] bg-leaf-700 rounded transition-transform ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>

        {open && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-warm">
            <ul className="flex flex-col">
              {NAV.map((item) => {
                const active = isActive(item.href);
                return (
                  <li key={item.label} className="border-b border-leaf-50 last:border-none">
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`block px-5 py-3 font-semibold ${
                        active ? 'text-orange-500' : 'text-ink-700'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
              <li className="p-4">
                <Link href="/admissions" className="btn btn-primary w-full justify-center">
                  Đăng ký tham quan
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
