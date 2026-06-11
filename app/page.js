import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import KineticTitle from '@/components/motion/KineticTitle';
import SpinStar from '@/components/motion/SpinStar';
import Reveal from '@/components/motion/Reveal';
import CountUp from '@/components/motion/CountUp';

const marqueeItems = [
  'Software Engineer',
  'Posing Coach',
  'Classic Physique',
  'Cloud Architecture',
  'National Competitor',
  'AWS Certified',
];

const index = [
  {
    no: '01',
    title: 'Engineering',
    href: '/engineering',
    blurb:
      'Cloud systems in healthcare tech — .NET, AWS, and AI-powered automation.',
  },
  {
    no: '02',
    title: 'Posing Coach',
    href: '/coaching',
    blurb:
      'Stage presentation for competitive bodybuilders, from a national-level competitor.',
  },
  {
    no: '03',
    title: 'About',
    href: '/about',
    blurb: 'Former college athlete. Stoic by practice. Family man first.',
  },
];

const facts = [
  { value: "6'3\"", label: 'Classic Physique' },
  { value: 'Top 5', label: 'National Placings' },
  { value: '2', label: 'AWS Certifications' },
  { value: "July '26", label: "Master's Nationals" },
];

export default function Home() {
  return (
    <>
      <Navigation />

      <main>
        {/* Hero */}
        <section className='max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-12 lg:pt-24 lg:pb-20'>
          <div className='flex items-baseline justify-between rise rise-1'>
            <p className='label text-ink-2'>The Programme — Vol. 2026</p>
            <p className='label text-ink-2 hidden sm:block'>jdaake.dev</p>
          </div>

          <div className='relative mt-8'>
            <KineticTitle
              lines={['Jordan', 'Daake']}
              className='display text-[19vw] lg:text-[11.5rem]'
            />
            <SpinStar className='absolute bottom-[0.05em] right-0 lg:right-[8%] text-red display text-[14vw] lg:text-[8rem] leading-none' />
          </div>

          <div className='mt-10 grid lg:grid-cols-12 gap-8 items-end'>
            <p className='lg:col-span-6 serif-body text-xl lg:text-2xl leading-snug rise rise-4'>
              Builds scalable software by day.{' '}
              <em className='text-red'>Coaches athletes to own the stage</em>{' '}
              by night. Same discipline, two arenas.
            </p>

            <div className='lg:col-span-6 flex flex-wrap gap-3 lg:justify-end rise rise-5'>
              <Link href='/engineering' className='btn-ink'>
                The Work →
              </Link>
              <Link href='/coaching' className='btn-ghost'>
                The Coaching →
              </Link>
            </div>
          </div>
        </section>

        {/* Marquee band */}
        <div className='bg-red text-paper py-3 border-y border-ink overflow-hidden rise rise-5'>
          <div className='marquee'>
            <div className='marquee-track'>
              {[0, 1].map((copy) => (
                <span key={copy} aria-hidden={copy === 1} className='flex'>
                  {marqueeItems.map((item) => (
                    <span
                      key={item}
                      className='label text-paper flex items-center'
                    >
                      <span className='px-6'>{item}</span>
                      <span>✶</span>
                    </span>
                  ))}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Index */}
        <section className='max-w-7xl mx-auto px-6 lg:px-10 pt-20 lg:pt-28 pb-24 lg:pb-32'>
          <Reveal className='flex flex-wrap items-baseline gap-4 mb-10'>
            <h2 className='display text-5xl lg:text-7xl'>The Program</h2>
            <span className='leaders hidden sm:block' />
            <p className='label text-ink-2'>Table of Contents</p>
          </Reveal>

          <div>
            {index.map((item, i) => (
              <Reveal key={item.no} delay={i * 120}>
                <Link href={item.href} className='index-row group'>
                  <div className='grid grid-cols-12 items-center gap-4 py-8 lg:py-10 px-2'>
                    <span className='label text-red col-span-2 sm:col-span-1'>
                      {item.no}
                    </span>
                    <span className='display text-4xl sm:text-5xl lg:text-6xl col-span-9 sm:col-span-5'>
                      {item.title}
                    </span>
                    <span className='hidden sm:block serif-body text-ink-2 col-span-5'>
                      {item.blurb}
                    </span>
                    <span className='index-arrow display text-3xl lg:text-4xl col-span-1 text-right'>
                      →
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Ink manifesto */}
        <section className='bg-ink text-paper'>
          <div className='max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32'>
            <Reveal>
              <p className='label text-red mb-8'>More Than Code</p>
            </Reveal>

            <Reveal delay={100}>
              <p className='display text-4xl sm:text-5xl lg:text-7xl max-w-5xl'>
                Show up. Do the work.{' '}
                <span className='text-red'>Trust the process.</span> Let the
                results come.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <p className='serif-body text-paper/70 max-w-2xl mt-10'>
                Competitive Classic Physique bodybuilder. Former college
                basketball player. Sneaker collector. Guided by Stoic
                philosophy. The same philosophy runs through everything —
                shipped code and stage-ready physiques alike.
              </p>
            </Reveal>

            {/* Scorecard */}
            <Reveal delay={250}>
              <div className='mt-16 grid grid-cols-2 lg:grid-cols-4 border-t border-l border-line-light'>
                {facts.map((fact) => (
                  <div
                    key={fact.label}
                    className='border-r border-b border-line-light p-6 lg:p-8'
                  >
                    <CountUp
                      value={fact.value}
                      className='display text-4xl lg:text-5xl text-paper'
                    />
                    <p className='label text-paper/50 mt-2'>{fact.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={300}>
              <Link href='/about' className='btn-paper mt-12'>
                Get to Know Me →
              </Link>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
