import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
          {/* Background gradient */}
          <div className='absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-900 to-dark-800' />

          {/* Decorative elements */}
          <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl' />
          <div className='absolute bottom-1/4 right-1/4 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl' />

          {/* Content */}
          <div className='relative z-10 text-center px-6 max-w-5xl mx-auto'>
            {/* Name */}
            <h1 className='font-display text-7xl sm:text-8xl md:text-9xl tracking-wide mb-4 opacity-0 animate-fade-in'>
              <span className='text-white'>JORDAN</span>
              <span className='gold-text'> DAAKE</span>
            </h1>

            {/* Tagline */}
            <p className='font-body text-lg sm:text-xl text-white/60 tracking-widest uppercase mb-12 opacity-0 animate-slide-up animate-delay-200'>
              Engineer <span className='text-gold-500 mx-3'>•</span>
              Coach <span className='text-gold-500 mx-3'>•</span>
              Creator
            </p>

            {/* Brief intro */}
            <p className='font-body text-white/70 text-lg max-w-2xl mx-auto mb-12 leading-relaxed opacity-0 animate-slide-up animate-delay-300'>
              Building scalable software by day. Helping athletes own the stage
              by night. Capturing moments in between.
            </p>

            {/* CTA Buttons */}
            <div className='flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-slide-up animate-delay-400'>
              <Link href='/engineering' className='btn-primary'>
                View My Work
              </Link>
              <Link href='/about' className='btn-outline'>
                Get To Know Me
              </Link>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className='absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animate-delay-500'>
            <div className='flex flex-col items-center gap-2 text-white/40'>
              <span className='text-xs tracking-widest uppercase'>Explore</span>
              <div className='w-px h-12 bg-gradient-to-b from-gold-500/50 to-transparent' />
            </div>
          </div>
        </section>

        {/* Three Pillars Section */}
        <section className='relative py-24 lg:py-32 bg-dark-800/30'>
          <div className='max-w-7xl mx-auto px-6 lg:px-8'>
            {/* Section header */}
            <div className='text-center mb-16'>
              <h2 className='font-display text-4xl md:text-5xl tracking-wide text-white mb-4'>
                WHAT I <span className='gold-text'>DO</span>
              </h2>
              <p className='text-white/50 max-w-xl mx-auto'>
                Three disciplines, one philosophy: pursue excellence through
                discipline, continuous learning, and attention to detail.
              </p>
            </div>

            {/* Cards Grid */}
            <div className='grid md:grid-cols-3 gap-6 lg:gap-8'>
              {/* Engineering Card */}
              <Link href='/engineering' className='group'>
                <div className='card card-hover p-8 h-full flex flex-col'>
                  {/* Icon */}
                  <div className='w-14 h-14 rounded-lg bg-gold-500/10 flex items-center justify-center mb-6 group-hover:bg-gold-500/20 transition-colors'>
                    <svg
                      className='w-7 h-7 text-gold-500'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={1.5}
                        d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
                      />
                    </svg>
                  </div>

                  <h3 className='font-display text-2xl tracking-wide text-white mb-3'>
                    ENGINEERING
                  </h3>

                  <p className='text-white/60 mb-6 flex-grow'>
                    Building scalable cloud solutions in healthcare tech.
                    Specializing in .NET, AWS/Azure, and AI-powered automation
                    systems.
                  </p>

                  <div className='flex items-center text-gold-500 text-sm font-medium group-hover:gap-3 gap-2 transition-all'>
                    View Portfolio
                    <svg
                      className='w-4 h-4'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M17 8l4 4m0 0l-4 4m4-4H3'
                      />
                    </svg>
                  </div>
                </div>
              </Link>

              {/* Coaching Card */}
              <Link href='/coaching' className='group'>
                <div className='card card-hover p-8 h-full flex flex-col'>
                  {/* Icon */}
                  <div className='w-14 h-14 rounded-lg bg-gold-500/10 flex items-center justify-center mb-6 group-hover:bg-gold-500/20 transition-colors'>
                    <svg
                      className='w-7 h-7 text-gold-500'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={1.5}
                        d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                      />
                    </svg>
                  </div>

                  <h3 className='font-display text-2xl tracking-wide text-white mb-3'>
                    POSING COACH
                  </h3>

                  <p className='text-white/60 mb-6 flex-grow'>
                    Helping bodybuilders present their best physique on stage.
                    National-level competitor sharing what I've learned.
                  </p>

                  <div className='flex items-center text-gold-500 text-sm font-medium group-hover:gap-3 gap-2 transition-all'>
                    Work With Me
                    <svg
                      className='w-4 h-4'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M17 8l4 4m0 0l-4 4m4-4H3'
                      />
                    </svg>
                  </div>
                </div>
              </Link>

              {/* Photography Card */}
              <Link href='/photography' className='group'>
                <div className='card card-hover p-8 h-full flex flex-col'>
                  {/* Icon */}
                  <div className='w-14 h-14 rounded-lg bg-gold-500/10 flex items-center justify-center mb-6 group-hover:bg-gold-500/20 transition-colors'>
                    <svg
                      className='w-7 h-7 text-gold-500'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={1.5}
                        d='M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z'
                      />
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={1.5}
                        d='M15 13a3 3 0 11-6 0 3 3 0 016 0z'
                      />
                    </svg>
                  </div>

                  <h3 className='font-display text-2xl tracking-wide text-white mb-3'>
                    PHOTOGRAPHY
                  </h3>

                  <p className='text-white/60 mb-6 flex-grow'>
                    Capturing authentic moments and powerful imagery. Available
                    for portraits, fitness, and event photography.
                  </p>

                  <div className='flex items-center text-gold-500 text-sm font-medium group-hover:gap-3 gap-2 transition-all'>
                    See The Work
                    <svg
                      className='w-4 h-4'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M17 8l4 4m0 0l-4 4m4-4H3'
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* About Teaser */}
        <section className='py-24 lg:py-32'>
          <div className='max-w-4xl mx-auto px-6 lg:px-8 text-center'>
            <h2 className='font-display text-4xl md:text-5xl tracking-wide text-white mb-8'>
              MORE THAN <span className='gold-text'>CODE</span>
            </h2>

            <p className='text-white/70 text-lg leading-relaxed mb-8'>
              Competitive classic physique bodybuilder. Sneaker collector.
              Former college basketball player. Guided by Stoic philosophy.
              Family man first.
            </p>

            <Link href='/about' className='btn-outline'>
              Learn More About Me
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className='border-t border-dark-800/50 py-12'>
          <div className='max-w-7xl mx-auto px-6 lg:px-8'>
            <div className='flex flex-col md:flex-row items-center justify-between gap-6'>
              <div className='font-display text-xl tracking-wider text-white/50'>
                JDAAKE
              </div>

              {/* Social Links */}
              <div className='flex items-center gap-6'>
                <a
                  href='https://linkedin.com/in/jdaake'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-white/50 hover:text-gold-500 transition-colors'
                  aria-label='LinkedIn'
                >
                  <svg
                    className='w-5 h-5'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
                  </svg>
                </a>
                <a
                  href='https://github.com/jdaake'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-white/50 hover:text-gold-500 transition-colors'
                  aria-label='GitHub'
                >
                  <svg
                    className='w-5 h-5'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                  </svg>
                </a>
                <a
                  href='https://instagram.com/jdaake'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-white/50 hover:text-gold-500 transition-colors'
                  aria-label='Instagram'
                >
                  <svg
                    className='w-5 h-5'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
                  </svg>
                </a>
              </div>

              <div className='text-white/30 text-sm'>
                © {new Date().getFullYear()} Jordan Daake
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
