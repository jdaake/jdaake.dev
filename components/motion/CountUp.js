'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Animated stat. Numeric portions of `value` count up from zero when
 * scrolled into view; non-numeric text (quotes, ×, apostrophes) stays put.
 * e.g. value="6'3\"" animates 6 then 3; value="Top 5" animates the 5.
 */
export default function CountUp({ value, duration = 1200, className = '' }) {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setProgress(1);
      return;
    }

    let raf = null;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now) => {
          const t = Math.min((now - start) / duration, 1);
          // ease-out-quart
          setProgress(1 - Math.pow(1 - t, 4));
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [duration]);

  const parts = String(value).split(/(\d+)/);

  return (
    <span ref={ref} className={className}>
      {parts.map((part, i) =>
        /^\d+$/.test(part) ? (
          <span key={i}>{Math.round(Number(part) * progress)}</span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </span>
  );
}
