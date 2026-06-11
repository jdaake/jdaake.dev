import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Reveal from '@/components/motion/Reveal';

export const metadata = {
  title: 'Photography — Jordan Daake',
  description:
    'Photography portfolio featuring portraits, fitness, and lifestyle imagery.',
};

const services = [
  {
    no: '01',
    title: 'Portraits',
    body: 'Headshots, personal branding, creative portraits.',
  },
  {
    no: '02',
    title: 'Fitness',
    body: 'Physique photos, gym content, competition shots.',
  },
  {
    no: '03',
    title: 'Events',
    body: 'Competitions, shows, special occasions.',
  },
];

export default function Photography() {
  return (
    <>
      <Navigation />

      <main>
        {/* Hero */}
        <section className='max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-16 lg:pt-24 lg:pb-20'>
          <p className='label text-ink-2 rise rise-1'>
            Appendix — Behind the Lens
          </p>

          <h1 className='display text-[15vw] lg:text-[9.5rem] mt-6 rise rise-2'>
            Photo
            <br />
            Graphy<span className='text-red'>.</span>
          </h1>

          <p className='serif-body text-xl leading-relaxed mt-10 max-w-xl rise rise-3'>
            Capturing authentic moments and powerful imagery. Specializing in
            portraits, fitness, and lifestyle photography.
          </p>

          <div className='mt-10 rise rise-4'>
            <a
              href='https://jdaakemedia.mypixieset.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='btn-ink'
            >
              View Galleries on Pixieset ↗
            </a>
          </div>
        </section>

        {/* Services */}
        <section className='border-t border-line bg-paper-2'>
          <div className='max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28'>
            <Reveal className='flex flex-wrap items-baseline gap-4 mb-12'>
              <h2 className='display text-5xl lg:text-7xl'>Available For</h2>
              <span className='leaders hidden sm:block' />
              <p className='label text-ink-2'>Three formats</p>
            </Reveal>

            <div className='grid md:grid-cols-3 border-t border-l border-line'>
              {services.map((service, i) => (
                <Reveal
                  key={service.no}
                  delay={i * 100}
                  className='border-r border-b border-line bg-paper p-8 lg:p-10'
                >
                  <p className='label text-red mb-6'>{service.no}</p>
                  <h3 className='display text-3xl mb-4'>{service.title}</h3>
                  <p className='serif-body text-ink-2'>{service.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className='bg-ink text-paper border-t border-line'>
          <div className='max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-28'>
            <Reveal>
              <p className='display text-5xl sm:text-6xl lg:text-8xl max-w-4xl'>
                Let's <span className='text-red'>shoot.</span>
              </p>
            </Reveal>
            <Reveal delay={150}>
              <p className='serif-body text-paper/70 max-w-xl mt-8'>
                Interested in booking a session? Reach out to discuss your
                vision.
              </p>
            </Reveal>
            <Reveal delay={250} className='mt-10'>
              <a
                href='https://instagram.com/jdaake.media'
                target='_blank'
                rel='noopener noreferrer'
                className='btn-paper'
              >
                Contact on Instagram ↗
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
