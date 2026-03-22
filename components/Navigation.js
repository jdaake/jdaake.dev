'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Engineering', href: '/engineering' },
    { name: 'Coaching', href: '/coaching' },
    // { name: 'Photography', href: '/photography' },
    { name: 'About', href: '/about' },
  ];

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-dark-900/80 backdrop-blur-md border-b border-dark-800/50'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        <div className='flex items-center justify-between h-20'>
          {/* Logo */}
          <Link
            href='/'
            className='font-display text-2xl tracking-wider text-white hover:text-gold-500 transition-colors'
          >
            JDAAKE
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className='nav-link font-body text-sm tracking-wide uppercase'
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden text-white p-2'
            aria-label='Toggle menu'
          >
            <div className='w-6 h-5 relative flex flex-col justify-between'>
              <span
                className={`w-full h-0.5 bg-current transform transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`w-full h-0.5 bg-current transition-all duration-300 ${
                  isOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`w-full h-0.5 bg-current transform transition-all duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-64 border-t border-dark-800/50' : 'max-h-0'
        }`}
      >
        <div className='px-6 py-4 space-y-4 bg-dark-900/95'>
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className='block text-white/70 hover:text-gold-500 font-body text-sm tracking-wide uppercase transition-colors'
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
