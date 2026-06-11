'use client';

import { useEffect, useState } from 'react';

/**
 * Kinetic typography: each line clips up from behind an invisible
 * baseline, letters staggering like a printing press laying type.
 *
 * `lines` is an array of strings (or arrays of {text, className} spans).
 */
export default function KineticTitle({ lines, className = '', letterStagger = 28 }) {
  const [ready, setReady] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setReduced(true);
    }
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  let letterIndex = 0;

  return (
    <h1 className={className} aria-label={lines.map(lineText).join(' ')}>
      {lines.map((line, li) => {
        const spans = Array.isArray(line) ? line : [{ text: line }];
        return (
          <span key={li} className='block overflow-hidden'>
            {spans.map((span, si) => (
              <span key={si} className={span.className || ''} aria-hidden='true'>
                {[...span.text].map((ch, ci) => {
                  const d = letterIndex++ * letterStagger;
                  return (
                    <span
                      key={ci}
                      className='inline-block'
                      style={
                        reduced
                          ? undefined
                          : {
                              transform: ready
                                ? 'translateY(0)'
                                : 'translateY(110%)',
                              transition: `transform 0.9s cubic-bezier(0.22, 1, 0.36, 1) ${d}ms`,
                            }
                      }
                    >
                      {ch === ' ' ? ' ' : ch}
                    </span>
                  );
                })}
              </span>
            ))}
          </span>
        );
      })}
    </h1>
  );
}

function lineText(line) {
  return Array.isArray(line) ? line.map((s) => s.text).join('') : line;
}
