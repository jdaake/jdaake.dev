import Link from 'next/link';

const socials = [
  { name: 'LinkedIn', href: 'https://linkedin.com/in/jdaake' },
  { name: 'GitHub', href: 'https://github.com/jdaake' },
  { name: 'Instagram', href: 'https://instagram.com/j.daake' },
];

export default function Footer() {
  return (
    <footer className='bg-ink text-paper'>
      <div className='max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-10'>
        <p className='display text-[18vw] md:text-[10rem] leading-none text-paper select-none'>
          Daake
        </p>

        <div className='mt-10 pt-8 border-t border-line-light grid md:grid-cols-3 gap-8'>
          {/* Index */}
          <div>
            <p className='label text-paper/40 mb-4'>Index</p>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/engineering'
                  className='label text-paper/80 hover:text-red transition-colors'
                >
                  01 — Engineering
                </Link>
              </li>
              <li>
                <Link
                  href='/coaching'
                  className='label text-paper/80 hover:text-red transition-colors'
                >
                  02 — Coaching
                </Link>
              </li>
              <li>
                <Link
                  href='/about'
                  className='label text-paper/80 hover:text-red transition-colors'
                >
                  03 — About
                </Link>
              </li>
            </ul>
          </div>

          {/* Elsewhere */}
          <div>
            <p className='label text-paper/40 mb-4'>Elsewhere</p>
            <ul className='space-y-2'>
              {socials.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='label text-paper/80 hover:text-red transition-colors'
                  >
                    {s.name} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Colophon */}
          <div>
            <p className='label text-paper/40 mb-4'>Colophon</p>
            <p className='font-mono text-xs leading-relaxed text-paper/60'>
              Set in Big Shoulders, Newsreader & IBM Plex Mono.
              <br />
              Built with Next.js. Fueled by chicken and rice.
            </p>
          </div>
        </div>

        <div className='mt-10 pt-6 border-t border-line-light flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2'>
          <p className='label text-paper/40'>
            © {new Date().getFullYear()} Jordan Daake
          </p>
          <p className='label text-paper/40'>
            Discipline is the whole program <span className='text-red'>✶</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
