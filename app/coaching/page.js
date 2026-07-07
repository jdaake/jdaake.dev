import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Reveal from '@/components/motion/Reveal';
import CountUp from '@/components/motion/CountUp';

export const metadata = {
  title: 'Posing Coaching — Jordan Daake',
  description:
    'IFBB Pro posing coach helping athletes present their best physique on stage.',
};

const stats = [
  { value: '10', suffix: '+', label: 'Years Competing' },
  { value: 'IFBB', suffix: '', label: 'Pro Card, 2026' },
  { value: "6'3\"", suffix: '', label: 'Classic Physique' },
];

const services = [
  {
    no: '01',
    title: 'Virtual Sessions',
    body: `One-on-one video sessions where we work through your mandatory
      poses, transitions, and stage presence. Real-time feedback and
      corrections.`,
    includes: ['Live video coaching', 'Pose-by-pose breakdown', 'Recording for review'],
  },
  {
    no: '02',
    title: 'Video Critique',
    body: `Send me your posing videos and I'll provide detailed written and
      video feedback on what's working and what needs work.`,
    includes: ['Detailed analysis', 'Priority improvements', 'Follow-up support'],
  },
];

export default function Coaching() {
  return (
    <>
      <Navigation />

      <main>
        {/* Hero */}
        <section className='max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-16 lg:pt-24 lg:pb-20'>
          <p className='label text-ink-2 rise rise-1'>
            Section 02 — The Stage
          </p>

          <div className='grid lg:grid-cols-12 gap-10 items-end'>
            <div className='lg:col-span-7'>
              <h1 className='display text-[15vw] lg:text-[9.5rem] mt-6 rise rise-2'>
                Posing
                <br />
                Coach <span className='text-red'>✶</span>
              </h1>

              <p className='serif-body text-xl leading-relaxed mt-10 max-w-xl rise rise-3'>
                Your physique tells a story —{' '}
                <em className='text-red'>make sure the judges hear it.</em> I
                help bodybuilders present their best on stage through refined
                posing and stage presence.
              </p>

              <div className='mt-10 rise rise-4'>
                <a href='#booking' className='btn-ink'>
                  Book a Session →
                </a>
              </div>
            </div>

            {/* Stage photo */}
            <div className='lg:col-span-5 rise rise-4'>
              <div className='print-photo border border-line'>
                <Image
                  src='/images/jdaake_posing.PNG'
                  alt='Jordan Daake posing on stage'
                  width={600}
                  height={800}
                  priority
                  className='w-full h-auto'
                />
              </div>
              <p className='label text-ink-2 mt-3'>
                Fig. 1 — Front double bicep, national stage
              </p>
            </div>
          </div>
        </section>

        {/* Scorecard strip */}
        <div className='border-y border-line bg-ink text-paper'>
          <div className='max-w-7xl mx-auto grid sm:grid-cols-3'>
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`px-6 lg:px-10 py-8 text-center sm:text-left ${
                  i > 0 ? 'sm:border-l border-line-light' : ''
                }`}
              >
                <CountUp
                  value={stat.value + stat.suffix}
                  className='display text-5xl text-paper'
                />
                <p className='label text-paper/50 mt-2'>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Story */}
        <section className='max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-20 lg:pt-28 lg:pb-28'>
          <div className='grid lg:grid-cols-12 gap-10'>
            <Reveal className='lg:col-span-4'>
              <h2 className='display text-5xl lg:text-6xl'>
                Why I<br />
                Coach
              </h2>
            </Reveal>

            <Reveal delay={120} className='lg:col-span-7 lg:col-start-6'>
              <div className='space-y-6 serif-body drop-cap'>
                <p>
                  I've been a competitive bodybuilder for over a decade. I've
                  stood on national stages, earned multiple top-5 finishes, and
                  learned what separates good physiques from winning
                  presentations.
                </p>
                <p>
                  The truth is, posing can make or break your placing. I've
                  seen athletes with incredible builds place lower than they
                  should because they couldn't present it. And I've seen
                  disciplined posers punch above their weight class.
                </p>
                <p>
                  In July 2026 I earned my IFBB Pro card, winning the Masters
                  35+ Classic Physique class at NPC Universe. I coach because I
                  want to share what got me there — the details that took me
                  years to figure out.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Services */}
        <section className='border-t border-line bg-paper-2'>
          <div className='max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28'>
            <Reveal className='flex flex-wrap items-baseline gap-4 mb-12'>
              <h2 className='display text-5xl lg:text-7xl'>The Offer</h2>
              <span className='leaders hidden sm:block' />
              <p className='label text-ink-2'>Two formats</p>
            </Reveal>

            <div className='grid md:grid-cols-2 border-t border-l border-line'>
              {services.map((service, i) => (
                <Reveal
                  key={service.no}
                  delay={i * 120}
                  className='border-r border-b border-line bg-paper p-8 lg:p-12'
                >
                  <p className='label text-red mb-6'>{service.no}</p>
                  <h3 className='display text-4xl mb-5'>{service.title}</h3>
                  <p className='serif-body text-ink-2 mb-8'>{service.body}</p>
                  <ul className='space-y-3'>
                    {service.includes.map((item) => (
                      <li key={item} className='label flex items-center gap-3'>
                        <span className='text-red'>✶</span> {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Booking */}
        <section id='booking' className='bg-ink text-paper border-t border-line'>
          <div className='max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32'>
            <Reveal>
              <p className='label text-red mb-8'>Booking</p>
            </Reveal>

            <Reveal delay={100}>
              <p className='display text-5xl sm:text-6xl lg:text-8xl max-w-4xl'>
                Ready to own
                <span className='text-red'> the stage?</span>
              </p>
            </Reveal>

            <Reveal delay={200}>
              <p className='serif-body text-paper/70 max-w-xl mt-8'>
                DM me on Instagram with your division, show date, and goals —
                we'll figure out the right format and get you scheduled.
              </p>
            </Reveal>

            <Reveal delay={300} className='mt-10'>
              <a
                href='https://instagram.com/j.daake'
                target='_blank'
                rel='noopener noreferrer'
                className='btn-paper'
              >
                DM on Instagram ↗
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
