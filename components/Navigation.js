'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Engineering', href: '/engineering', no: '01' },
  { name: 'Coaching', href: '/coaching', no: '02' },
  { name: 'About', href: '/about', no: '03' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className='sticky top-0 z-50 bg-paper border-b border-line'>
      <nav className='max-w-7xl mx-auto px-6 lg:px-10'>
        <div className='flex items-stretch justify-between h-16'>
          {/* Wordmark */}
          <Link
            href='/'
            className='flex items-center gap-3 group'
            onClick={() => setIsOpen(false)}
          >
            <span className='w-2.5 h-2.5 bg-red group-hover:rotate-45 transition-transform duration-300' />
            <span className='display text-2xl tracking-tight'>
              Jordan Daake
            </span>
          </Link>

          {/* Desktop links */}
          <div className='hidden md:flex items-stretch'>
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`label flex items-center gap-2 px-6 border-l border-line transition-colors duration-200 ${
                    active
                      ? 'bg-ink text-paper'
                      : 'text-ink hover:bg-paper-2'
                  }`}
                >
                  <span className={active ? 'text-red' : 'text-ink-2'}>
                    {item.no}
                  </span>
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden flex items-center px-2 -mr-2'
            aria-label='Toggle menu'
            aria-expanded={isOpen}
          >
            <span className='label'>{isOpen ? 'Close' : 'Menu'}</span>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-72 border-t border-line' : 'max-h-0'
        }`}
      >
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={() => setIsOpen(false)}
            className='flex items-baseline gap-4 px-6 py-4 border-b border-line last:border-b-0 hover:bg-paper-2 transition-colors'
          >
            <span className='label text-red'>{item.no}</span>
            <span className='display text-2xl'>{item.name}</span>
          </Link>
        ))}
      </div>
    </header>
  );
}
