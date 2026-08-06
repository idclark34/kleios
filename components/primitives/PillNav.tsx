'use client';
import { useEffect, useState } from 'react';
import { APP_STORE_URL } from './AppStoreBadge';

export function PillNav() {
  const [split, setSplit] = useState(false);

  useEffect(() => {
    function onScroll() {
      setSplit(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed top-4 inset-x-0 z-50 pointer-events-none">
      <div
        className={`mx-auto flex items-center transition-all duration-500 ease-out ${
          split ? 'max-w-[calc(100%-32px)] justify-between' : 'max-w-[380px] justify-between gap-3'
        }`}
      >
        <a
          href="#top"
          className="pointer-events-auto bg-cream/95 backdrop-blur-sm shadow-[0_8px_24px_rgba(28,22,18,0.14)] rounded-full px-5 py-2.5 font-serif text-[16px] tracking-[3px] text-ink no-underline"
        >
          KLEIOS
        </a>
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto bg-ink text-cream shadow-[0_8px_24px_rgba(28,22,18,0.22)] rounded-full px-5 py-2.5 font-sans font-semibold text-[12px] tracking-[1.5px] no-underline"
        >
          DOWNLOAD
        </a>
      </div>
    </div>
  );
}
