import Navigation from '@/components/Navigation';
import Image from 'next/image';

export const metadata = {
  title: 'About | Jordan Daake',
  description: 'The full picture - engineer, athlete, collector, family man.',
};

export default function About() {
  const sneakerHighlights = [
    'Air Jordan 1 Chicago (1985)',
    'Air Jordan 3 Black Cement',
    'Air Jordan 4 Bred',
    'Air Jordan 11 Concord',
    'Air Jordan 1 Royal',
    'Air Jordan 5 Fire Red',
  ];

  return (
    <>
      <Navigation />

      <main className='pt-20'>
        {/* Hero */}
        <section className='py-24 lg:py-32'>
          <div className='max-w-7xl mx-auto px-6 lg:px-8'>
            <div className='grid lg:grid-cols-2 gap-12 items-center'>
              <div>
                <h1 className='font-display text-6xl md:text-7xl tracking-wide text-white mb-6'>
                  ABOUT <span className='gold-text'>ME</span>
                </h1>
                <p className='text-white/70 text-lg leading-relaxed'>
                  I'm Jordan - a software engineer by trade, competitive
                  bodybuilder by passion, and a firm believer that excellence in
                  one area feeds excellence in others. I approach everything I
                  do with the same philosophy: show up consistently, pay
                  attention to details, and never stop improving.
                </p>
              </div>

              {/* Photo placeholder */}
              <div className='relative'>
                <div className='aspect-[4/5] bg-dark-800 rounded-lg border border-dark-700 flex items-center justify-center'>
                  <span className='text-white/30'>Photo</span>
                </div>
                {/* Decorative element */}
                <div className='absolute -bottom-4 -right-4 w-full h-full border-2 border-gold-500/20 rounded-lg -z-10' />
              </div>
            </div>
          </div>
        </section>

        {/* The Journey */}
        <section className='py-24 lg:py-32 bg-dark-800/30'>
          <div className='max-w-4xl mx-auto px-6 lg:px-8'>
            <h2 className='font-display text-4xl tracking-wide text-white mb-8'>
              THE <span className='gold-text'>JOURNEY</span>
            </h2>
            <div className='space-y-6 text-white/70 leading-relaxed'>
              <p>
                I didn't start in tech. I started in sales, grinding it out and
                learning how to communicate, solve problems, and handle
                pressure. But I always had a pull toward building things,
                understanding how systems work, and the satisfaction of creating
                something from nothing.
              </p>
              <p>
                So I made the leap into software engineering - and never looked
                back. I've worked at companies like NBC Sports Next, built
                healthcare systems that actually help people, earned AWS
                certifications, and developed a real love for cloud architecture
                and clean code.
              </p>
              <p>
                Before any of that, I played basketball at the NAIA level. The
                discipline, the competition, the team dynamics - all of that
                shaped how I approach everything today. When basketball ended,
                bodybuilding filled that competitive void.
              </p>
            </div>
          </div>
        </section>

        {/* Bodybuilding */}
        <section className='py-24 lg:py-32'>
          <div className='max-w-7xl mx-auto px-6 lg:px-8'>
            <div className='grid lg:grid-cols-2 gap-12 items-center'>
              {/* Photo grid */}
              <div className='grid grid-cols-2 gap-4'>
                <div className='aspect-[3/4] bg-dark-800 rounded-lg overflow-hidden'>
                  <Image
                    src='/images/favorite.jpg'
                    alt='Jordan Daake stage shot'
                    width={400}
                    height={533}
                    className='w-full h-full object-cover'
                  />
                </div>
                <div className='aspect-[3/4] bg-dark-800 rounded-lg overflow-hidden mt-8'>
                  <Image
                    src='/images/rear_double.jpg'
                    alt='Jordan Daake rear double bicep pose'
                    width={400}
                    height={533}
                    className='w-full h-full object-cover'
                  />
                </div>
              </div>

              <div>
                <h2 className='font-display text-4xl tracking-wide text-white mb-6'>
                  BODY<span className='gold-text'>BUILDING</span>
                </h2>
                <div className='space-y-4 text-white/70 leading-relaxed'>
                  <p>
                    Classic Physique competitor. 6'3", competing at the 239 lb
                    cap. Multiple top-5 finishes at national-level shows.
                    Currently preparing for Master's Nationals in July 2025 with
                    one goal: earn my IFBB Pro card.
                  </p>
                  <p>
                    This sport has taught me more about discipline, patience,
                    and process than anything else. There are no shortcuts. You
                    show up every day, do the work, trust the process, and let
                    the results come.
                  </p>
                  <p>
                    That mindset translates directly to engineering - and to
                    life.
                  </p>
                </div>

                {/* Stats */}
                <div className='grid grid-cols-3 gap-4 mt-8'>
                  <div className='text-center p-4 bg-dark-800/50 rounded-lg'>
                    <div className='font-display text-2xl text-gold-500'>
                      6'3"
                    </div>
                    <div className='text-white/50 text-xs uppercase tracking-wider'>
                      Height
                    </div>
                  </div>
                  <div className='text-center p-4 bg-dark-800/50 rounded-lg'>
                    <div className='font-display text-2xl text-gold-500'>
                      239
                    </div>
                    <div className='text-white/50 text-xs uppercase tracking-wider'>
                      Weight Cap
                    </div>
                  </div>
                  <div className='text-center p-4 bg-dark-800/50 rounded-lg'>
                    <div className='font-display text-2xl text-gold-500'>
                      TOP 5
                    </div>
                    <div className='text-white/50 text-xs uppercase tracking-wider'>
                      Nationals
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className='py-24 lg:py-32 bg-dark-800/30'>
          <div className='max-w-4xl mx-auto px-6 lg:px-8'>
            <h2 className='font-display text-4xl tracking-wide text-white mb-8'>
              STOIC <span className='gold-text'>PHILOSOPHY</span>
            </h2>
            <div className='space-y-6 text-white/70 leading-relaxed'>
              <p>
                Stoicism isn't about suppressing emotions or being indifferent -
                it's about focusing your energy on what you can control and
                accepting what you can't. It's about showing up with intention,
                doing your best work, and letting go of attachment to outcomes.
              </p>
              <p>
                In competition, I can't control the judges. I can control my
                prep, my posing, my mindset. In engineering, I can't control if
                a project gets cancelled. I can control the quality of my code
                and how I show up every day.
              </p>
              <p>
                This framework has helped me navigate setbacks, stay grounded
                during wins, and maintain perspective through all of it.
              </p>
            </div>

            {/* Quote */}
            <div className='mt-12 p-8 border-l-2 border-gold-500/50 bg-dark-800/30'>
              <p className='text-white/80 text-lg italic mb-4'>
                "The impediment to action advances action. What stands in the
                way becomes the way."
              </p>
              <p className='text-gold-500 text-sm'>— Marcus Aurelius</p>
            </div>
          </div>
        </section>

        {/* Sneaker Collection */}
        <section className='py-24 lg:py-32'>
          <div className='max-w-7xl mx-auto px-6 lg:px-8'>
            <div className='grid lg:grid-cols-2 gap-12 items-center'>
              <div>
                <h2 className='font-display text-4xl tracking-wide text-white mb-6'>
                  THE <span className='gold-text'>COLLECTION</span>
                </h2>
                <p className='text-white/70 leading-relaxed mb-6'>
                  80+ pairs of Jordans and counting. It started as a kid who
                  couldn't afford them, turned into an adult who could, and
                  became a genuine appreciation for the design, the history, and
                  the culture.
                </p>
                <p className='text-white/70 leading-relaxed mb-8'>
                  I'm drawn to the OG colorways - the ones that started it all.
                  There's something about owning a piece of sneaker history that
                  never gets old.
                </p>

                {/* Highlight pairs */}
                <div>
                  <h3 className='text-white/50 text-sm uppercase tracking-wider mb-4'>
                    Some Favorites
                  </h3>
                  <div className='flex flex-wrap gap-2'>
                    {sneakerHighlights.map((shoe) => (
                      <span
                        key={shoe}
                        className='px-3 py-1 bg-gold-500/10 border border-gold-500/20 rounded text-gold-500/80 text-sm'
                      >
                        {shoe}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sneaker photo grid */}
              <div className='grid grid-cols-3 gap-3'>
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className='aspect-square bg-dark-800 rounded-lg border border-dark-700 flex items-center justify-center'
                  >
                    <span className='text-white/20 text-xs'>Sneaker</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Family */}
        <section className='py-24 lg:py-32 bg-dark-800/30'>
          <div className='max-w-4xl mx-auto px-6 lg:px-8 text-center'>
            <h2 className='font-display text-4xl tracking-wide text-white mb-6'>
              WHAT <span className='gold-text'>MATTERS</span>
            </h2>

            {/* Family photo */}
            <div className='max-w-md mx-auto mb-8'>
              <div className='rounded-lg overflow-hidden'>
                <Image
                  src='/images/family.jpg'
                  alt='Jordan Daake with family'
                  width={600}
                  height={450}
                  className='w-full h-auto'
                />
              </div>
            </div>

            <p className='text-white/70 leading-relaxed max-w-2xl mx-auto'>
              At the end of the day, family comes first. Everything else - the
              career, the competition, the collections - is built on the
              foundation they provide. They're my why.
            </p>
          </div>
        </section>

        {/* Connect */}
        <section className='py-24 lg:py-32'>
          <div className='max-w-4xl mx-auto px-6 lg:px-8 text-center'>
            <h2 className='font-display text-4xl tracking-wide text-white mb-6'>
              LET'S <span className='gold-text'>CONNECT</span>
            </h2>
            <p className='text-white/60 mb-8'>
              Whether it's about engineering, bodybuilding, sneakers, or just
              life - I'm always down to connect.
            </p>
            <div className='flex flex-wrap items-center justify-center gap-4'>
              <a
                href='https://linkedin.com/in/jdaake'
                target='_blank'
                rel='noopener noreferrer'
                className='btn-outline'
              >
                LinkedIn
              </a>
              <a
                href='https://instagram.com/j.daake'
                target='_blank'
                rel='noopener noreferrer'
                className='btn-outline'
              >
                Instagram
              </a>
              <a
                href='https://github.com/jdaake'
                target='_blank'
                rel='noopener noreferrer'
                className='btn-outline'
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
