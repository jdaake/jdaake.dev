'use client';

import { useEffect, useRef } from 'react';

/**
 * The programme star. Rotates as the page scrolls — a printer's
 * ornament that responds to the reader.
 */
export default function SpinStar({ className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let raf = null;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        el.style.transform = `rotate(${window.scrollY * 0.18}deg)`;
        raf = null;
      });
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <span ref={ref} className={`inline-block will-change-transform ${className}`}>
      ✶
    </span>
  );
}
