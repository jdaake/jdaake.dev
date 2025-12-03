import Navigation from '@/components/Navigation';
import Image from 'next/image';
import CalendlyEmbed from '@/components/CalendlyEmbed';

export const metadata = {
  title: 'Posing Coaching | Jordan Daake',
  description:
    'Bodybuilding posing coach helping athletes present their best physique on stage.',
};

export default function Coaching() {
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
                  POSING <span className='gold-text'>COACH</span>
                </h1>
                <p className='text-white/60 text-xl leading-relaxed mb-8'>
                  Your physique tells a story. Make sure the judges hear it. I
                  help bodybuilders present their best on stage through refined
                  posing and stage presence.
                </p>
                <a href='#booking' className='btn-primary'>
                  Book a Session
                </a>
              </div>

              {/* Logo */}
              <div className='flex justify-center lg:justify-end'>
                <div className='relative w-80 h-80'>
                  <Image
                    src='/images/jdaake-posing-logo.png'
                    alt='JDaake Posing'
                    fill
                    className='object-contain'
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Credibility */}
        <section className='py-16 bg-dark-800/30'>
          <div className='max-w-7xl mx-auto px-6 lg:px-8'>
            <div className='grid sm:grid-cols-3 gap-8 text-center'>
              <div>
                <div className='font-display text-4xl text-gold-500 mb-2'>
                  10+
                </div>
                <div className='text-white/60'>Years Competing</div>
              </div>
              <div>
                <div className='font-display text-4xl text-gold-500 mb-2'>
                  TOP 5
                </div>
                <div className='text-white/60'>National Placings</div>
              </div>
              <div>
                <div className='font-display text-4xl text-gold-500 mb-2'>
                  6'3"
                </div>
                <div className='text-white/60'>Classic Physique</div>
              </div>
            </div>
          </div>
        </section>

        {/* Photo */}
        <section className='pt-24 pb-12 lg:pt-32 lg:pb-16'>
          <div className='max-w-4xl mx-auto px-6 lg:px-8 flex justify-center'>
            <div className='rounded-lg overflow-hidden bg-dark-800'>
              <Image
                src='/images/jdaake_posing.png'
                alt='Jordan Daake posing on stage'
                width={600}
                height={800}
                className='w-auto h-auto max-h-[700px]'
              />
            </div>
          </div>
        </section>

        {/* My Story */}
        <section className='py-12 lg:py-16'>
          <div className='max-w-4xl mx-auto px-6 lg:px-8'>
            <h2 className='font-display text-4xl tracking-wide text-white mb-8'>
              MY <span className='gold-text'>STORY</span>
            </h2>
            <div className='space-y-6 text-white/70 leading-relaxed'>
              <p>
                I've been a competitive classic physique bodybuilder for over a
                decade. I've stood on national stages, earned multiple top-5
                finishes, and learned what separates good physiques from winning
                presentations.
              </p>
              <p>
                The truth is, posing can make or break your placing. I've seen
                athletes with incredible builds place lower than they should
                because they couldn't present it. And I've seen disciplined
                posers punch above their weight class.
              </p>
              <p>
                Currently preparing for Master's Nationals 2026 with plans to
                earn my IFBB Pro card. I coach because I want to share what I've
                learned - the details that took me years to figure out.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className='py-24 lg:py-32 bg-dark-800/30'>
          <div className='max-w-7xl mx-auto px-6 lg:px-8'>
            <h2 className='font-display text-4xl tracking-wide text-white mb-12 text-center'>
              WHAT I <span className='gold-text'>OFFER</span>
            </h2>

            <div className='grid md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
              <div className='card p-8'>
                <h3 className='font-display text-2xl text-white mb-4'>
                  VIRTUAL SESSIONS
                </h3>
                <p className='text-white/60 mb-6'>
                  One-on-one video sessions where we work through your mandatory
                  poses, transitions, and stage presence. Real-time feedback and
                  corrections.
                </p>
                <ul className='space-y-2 text-white/70 text-sm'>
                  <li className='flex items-center gap-2'>
                    <span className='text-gold-500'>✓</span> Live video coaching
                  </li>
                  <li className='flex items-center gap-2'>
                    <span className='text-gold-500'>✓</span> Pose-by-pose
                    breakdown
                  </li>
                  <li className='flex items-center gap-2'>
                    <span className='text-gold-500'>✓</span> Recording for
                    review
                  </li>
                </ul>
              </div>

              <div className='card p-8'>
                <h3 className='font-display text-2xl text-white mb-4'>
                  VIDEO CRITIQUE
                </h3>
                <p className='text-white/60 mb-6'>
                  Send me your posing videos and I'll provide detailed written
                  and video feedback on what's working and what needs work.
                </p>
                <ul className='space-y-2 text-white/70 text-sm'>
                  <li className='flex items-center gap-2'>
                    <span className='text-gold-500'>✓</span> Detailed analysis
                  </li>
                  <li className='flex items-center gap-2'>
                    <span className='text-gold-500'>✓</span> Priority
                    improvements
                  </li>
                  <li className='flex items-center gap-2'>
                    <span className='text-gold-500'>✓</span> Follow-up support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Booking */}
        <section id='booking' className='py-24 lg:py-32'>
          <div className='max-w-4xl mx-auto px-6 lg:px-8'>
            <h2 className='font-display text-4xl tracking-wide text-white mb-8 text-center'>
              BOOK A <span className='gold-text'>SESSION</span>
            </h2>
            <p className='text-white/60 text-center mb-12 max-w-2xl mx-auto'>
              Ready to take your posing to the next level? Book a session below
              or reach out on Instagram to discuss your goals.
            </p>

            {/* Calendly Embed */}
            <div className='card overflow-hidden'>
              <CalendlyEmbed url='https://calendly.com/jdaake-coaching/30min' />
            </div>
          </div>
        </section>

        {/* Contact Alternative */}
        <section className='py-16 bg-dark-800/30'>
          <div className='max-w-4xl mx-auto px-6 lg:px-8 text-center'>
            <p className='text-white/60 mb-4'>Prefer to chat first?</p>
            <a
              href='https://instagram.com/j.daake'
              target='_blank'
              rel='noopener noreferrer'
              className='btn-outline'
            >
              DM on Instagram
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
