import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Reveal from '@/components/motion/Reveal';
import CountUp from '@/components/motion/CountUp';

export const metadata = {
  title: 'About — Jordan Daake',
  description: 'The full picture — engineer, athlete, Stoic, family man.',
};

export default function About() {
  return (
    <>
      <Navigation />

      <main>
        {/* Hero */}
        <section className='max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-16 lg:pt-24 lg:pb-24'>
          <p className='label text-ink-2 rise rise-1'>
            Section 03 — The Person
          </p>

          <div className='grid lg:grid-cols-12 gap-10 mt-6 items-start'>
            <div className='lg:col-span-7'>
              <h1 className='display text-[15vw] lg:text-[9.5rem] rise rise-2'>
                The Full
                <br />
                Picture<span className='text-red'>.</span>
              </h1>

              <p className='serif-body text-xl leading-relaxed mt-10 max-w-xl rise rise-3'>
                I'm Jordan — a software engineer by trade, competitive
                bodybuilder by passion, and a firm believer that excellence in
                one area feeds excellence in others. I approach everything the
                same way: <em className='text-red'>show up consistently, pay
                attention to details, never stop improving.</em>
              </p>
            </div>

            <div className='lg:col-span-5 lg:col-start-8 rise rise-4'>
              <div className='print-photo border border-line'>
                <Image
                  src='/images/headshot2.JPG'
                  alt='Jordan Daake headshot'
                  width={500}
                  height={625}
                  priority
                  className='w-full h-auto object-cover'
                />
              </div>
              <p className='label text-ink-2 mt-3'>
                Fig. 1 — The author, off-season
              </p>
            </div>
          </div>
        </section>

        {/* The Journey */}
        <section className='border-t border-line bg-paper-2'>
          <div className='max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28'>
            <div className='grid lg:grid-cols-12 gap-10'>
              <Reveal className='lg:col-span-4'>
                <h2 className='display text-5xl lg:text-6xl'>
                  The
                  <br />
                  Journey
                </h2>
              </Reveal>

              <Reveal delay={120} className='lg:col-span-7 lg:col-start-6'>
                <div className='space-y-6 serif-body drop-cap'>
                  <p>
                    I didn't start in tech. I started in sales, grinding it out
                    and learning how to communicate, solve problems, and handle
                    pressure. But I always had a pull toward building things,
                    understanding how systems work, and the satisfaction of
                    creating something from nothing.
                  </p>
                  <p>
                    So I made the leap into software engineering — and never
                    looked back. I've worked at companies like NBC Sports Next,
                    built healthcare systems that actually help people, earned
                    AWS certifications, and developed a real love for cloud
                    architecture and clean code.
                  </p>
                  <p>
                    Before any of that, I played basketball at the NAIA level.
                    The discipline, the competition, the team dynamics — all of
                    that shaped how I approach everything today. When
                    basketball ended, bodybuilding filled that competitive
                    void.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Bodybuilding */}
        <section className='border-t border-line'>
          <div className='max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28'>
            <div className='grid lg:grid-cols-12 gap-10 items-start'>
              {/* Photos */}
              <Reveal className='lg:col-span-5'>
                <div className='grid grid-cols-2 gap-4'>
                  <div className='print-photo border border-line'>
                    <Image
                      src='/images/favorite.jpg'
                      alt='Jordan Daake stage shot'
                      width={400}
                      height={600}
                      className='w-full h-auto'
                    />
                  </div>
                  <div className='print-photo border border-line mt-10'>
                    <Image
                      src='/images/rear_double.JPG'
                      alt='Jordan Daake rear double bicep pose'
                      width={400}
                      height={600}
                      className='w-full h-auto'
                    />
                  </div>
                </div>
                <p className='label text-ink-2 mt-3'>
                  Fig. 2 & 3 — National stage, Classic Physique
                </p>
              </Reveal>

              <div className='lg:col-span-6 lg:col-start-7'>
                <Reveal>
                  <h2 className='display text-5xl lg:text-6xl mb-8'>
                    Body
                    <br />
                    Building
                  </h2>
                </Reveal>

                <Reveal delay={120}>
                  <div className='space-y-6 serif-body'>
                    <p>
                      Classic Physique competitor. 6'3", competing at the 239
                      lb cap. Multiple top-5 finishes at national-level shows.
                      Currently preparing for Master's Nationals in July 2026
                      with one goal: earn my IFBB Pro card.
                    </p>
                    <p>
                      This sport has taught me more about discipline, patience,
                      and process than anything else. There are no shortcuts.
                      You show up every day, do the work, trust the process,
                      and let the results come.
                    </p>
                    <p>
                      That mindset translates directly to engineering — and to
                      life.
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={200}>
                  <div className='mt-10 grid grid-cols-3 border-t border-l border-line'>
                    {[
                      { value: "6'3\"", label: 'Height' },
                      { value: '239', label: 'Weight Cap' },
                      { value: 'Top 5', label: 'Nationals' },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className='border-r border-b border-line p-5'
                      >
                        <CountUp
                          value={stat.value}
                          className='display text-3xl lg:text-4xl text-red'
                        />
                        <p className='label text-ink-2 mt-2'>{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy — ink pull-quote section */}
        <section className='bg-ink text-paper'>
          <div className='max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32'>
            <Reveal>
              <p className='label text-red mb-10'>The Operating System</p>
            </Reveal>

            <Reveal delay={100}>
              <blockquote className='display text-4xl sm:text-5xl lg:text-7xl max-w-5xl'>
                “The impediment to action advances action.{' '}
                <span className='text-red'>
                  What stands in the way becomes the way.
                </span>”
              </blockquote>
            </Reveal>

            <Reveal delay={200}>
              <p className='label text-paper/50 mt-8'>— Marcus Aurelius</p>
            </Reveal>

            <Reveal delay={250}>
              <div className='grid lg:grid-cols-2 gap-8 mt-16 max-w-4xl'>
                <p className='serif-body text-paper/70'>
                  Stoicism isn't about suppressing emotions or being
                  indifferent — it's about focusing your energy on what you can
                  control and accepting what you can't. Showing up with
                  intention, doing your best work, and letting go of attachment
                  to outcomes.
                </p>
                <p className='serif-body text-paper/70'>
                  In competition, I can't control the judges — I can control my
                  prep, my posing, my mindset. In engineering, I can't control
                  whether a project gets cancelled — I can control the quality
                  of my code and how I show up every day.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Family */}
        <section className='border-t border-line'>
          <div className='max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28'>
            <div className='grid lg:grid-cols-12 gap-10 items-center'>
              <Reveal className='lg:col-span-6'>
                <div className='print-photo border border-line'>
                  <Image
                    src='/images/family.jpg'
                    alt='Jordan Daake with family'
                    width={800}
                    height={600}
                    className='w-full h-auto object-cover'
                  />
                </div>
                <p className='label text-ink-2 mt-3'>Fig. 4 — The why</p>
              </Reveal>

              <div className='lg:col-span-5 lg:col-start-8'>
                <Reveal>
                  <h2 className='display text-5xl lg:text-6xl mb-8'>
                    What
                    <br />
                    Matters
                  </h2>
                </Reveal>
                <Reveal delay={120}>
                  <p className='serif-body'>
                    At the end of the day, family comes first. Everything else
                    — the career, the competition, the collections — is built
                    on the foundation they provide.{' '}
                    <em className='text-red'>They're my why.</em>
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Connect */}
        <section className='border-t border-line bg-paper-2'>
          <div className='max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-24'>
            <Reveal className='flex flex-wrap items-baseline gap-4 mb-10'>
              <h2 className='display text-5xl lg:text-7xl'>Say Hello</h2>
              <span className='leaders hidden sm:block' />
              <p className='label text-ink-2'>No agenda required</p>
            </Reveal>

            <Reveal delay={100}>
              <p className='serif-body text-ink-2 max-w-xl mb-10'>
                Whether it's engineering, bodybuilding, sneakers, or just life
                — I'm always down to connect.
              </p>
            </Reveal>

            <Reveal delay={150} className='flex flex-wrap gap-3'>
              <a
                href='https://linkedin.com/in/jdaake'
                target='_blank'
                rel='noopener noreferrer'
                className='btn-ghost'
              >
                LinkedIn ↗
              </a>
              <a
                href='https://instagram.com/j.daake'
                target='_blank'
                rel='noopener noreferrer'
                className='btn-ghost'
              >
                Instagram ↗
              </a>
              <a
                href='https://github.com/jdaake'
                target='_blank'
                rel='noopener noreferrer'
                className='btn-ghost'
              >
                GitHub ↗
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
