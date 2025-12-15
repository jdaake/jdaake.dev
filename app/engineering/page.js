import Navigation from '@/components/Navigation';
import Link from 'next/link';

export const metadata = {
  title: 'Engineering | Jordan Daake',
  description:
    'Software Engineer specializing in cloud architecture, healthcare tech, and AI-powered systems.',
};

export default function Engineering() {
  return (
    <>
      <Navigation />

      <main className='pt-20'>
        {/* Hero */}
        <section className='py-24 lg:py-32'>
          <div className='max-w-7xl mx-auto px-6 lg:px-8'>
            <div className='max-w-3xl'>
              <h1 className='font-display text-6xl md:text-7xl lg:text-8xl tracking-wide text-white mb-6'>
                SOFTWARE <span className='gold-text'>ENGINEER</span>
              </h1>
              <p className='text-white/60 text-xl leading-relaxed mb-8'>
                Building scalable cloud solutions in healthcare and beyond.
                Specializing in .NET, AWS/Azure, and AI-powered automation
                systems.
              </p>
              <div className='flex flex-wrap gap-3'>
                {[
                  'C#/.NET',
                  'AWS',
                  'Azure',
                  'TypeScript',
                  'Python',
                  'SQL',
                  'Angular',
                  'LLM/AI',
                  'Cloud Architecture',
                  'Healthcare Tech',
                  'FinTech',
                ].map((skill) => (
                  <span
                    key={skill}
                    className='px-4 py-2 bg-dark-800 border border-dark-700 rounded text-white/70 text-sm'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className='py-16 bg-dark-800/30'>
          <div className='max-w-7xl mx-auto px-6 lg:px-8'>
            <div className='flex flex-wrap items-center gap-8'>
              <span className='text-white/50 text-sm uppercase tracking-wider'>
                Certified
              </span>
              <div className='flex flex-wrap gap-6'>
                <div className='flex items-center gap-2 text-white/70'>
                  <div className='w-8 h-8 bg-gold-500/20 rounded flex items-center justify-center'>
                    <span className='text-gold-500 text-xs font-bold'>AWS</span>
                  </div>
                  Solutions Architect
                </div>
                <div className='flex items-center gap-2 text-white/70'>
                  <div className='w-8 h-8 bg-gold-500/20 rounded flex items-center justify-center'>
                    <span className='text-gold-500 text-xs font-bold'>AWS</span>
                  </div>
                  Developer Associate
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className='py-24 lg:py-32'>
          <div className='max-w-7xl mx-auto px-6 lg:px-8'>
            <h2 className='font-display text-4xl tracking-wide text-white mb-12'>
              RECENT <span className='gold-text'>WORK</span>
            </h2>

            <div className='space-y-8'>
              {/* Invene */}
              <div className='card p-8'>
                <div className='flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6'>
                  <div>
                    <h3 className='font-display text-2xl text-white mb-1'>
                      INVENE
                    </h3>
                    <p className='text-gold-500'>Software Engineer</p>
                  </div>
                  <span className='text-white/50 text-sm'>
                    August 2025 - Present
                  </span>
                </div>
                <p className='text-white/70 leading-relaxed mb-6'>
                  Building IRIS, a medication refill automation system that
                  processes prescription refill requests through AI-powered
                  validation workflows. The system integrates with multiple
                  healthcare APIs including Athena Health EHR and FDB drug
                  database.
                </p>
                <div className='flex flex-wrap gap-2'>
                  {[
                    'C#/.NET',
                    'Azure OpenAI',
                    'Multi-Agent LLM',
                    'Athena Health API',
                    'SQL Server',
                  ].map((tech) => (
                    <span
                      key={tech}
                      className='px-3 py-1 bg-gold-500/10 border border-gold-500/20 rounded text-gold-500/80 text-xs'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Orion */}
              <div className='card p-8'>
                <div className='flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6'>
                  <div>
                    <h3 className='font-display text-2xl text-white mb-1'>
                      ORION
                    </h3>
                    <p className='text-gold-500'>
                      Software Engineer | Software Developer II | Security &
                      Performance Engineer | SQL Developer
                    </p>
                  </div>
                  <span className='text-white/50 text-sm'>
                    September 2023 - May 2025 | September 2018 - March 2022
                  </span>
                </div>
                <p className='text-white/70 leading-relaxed mb-6'>
                  Built and maintained enterprise software solutions using .NET
                  and Angular. Worked with AWS cloud infrastructure and SQL
                  databases, with monitoring through DataDog.
                </p>
                <div className='flex flex-wrap gap-2'>
                  {['C#/.NET', 'Angular', 'AWS', 'SQL', 'DataDog'].map(
                    (tech) => (
                      <span
                        key={tech}
                        className='px-3 py-1 bg-gold-500/10 border border-gold-500/20 rounded text-gold-500/80 text-xs'
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* NBC */}
              <div className='card p-8'>
                <div className='flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6'>
                  <div>
                    <h3 className='font-display text-2xl text-white mb-1'>
                      NBC SPORTS NEXT
                    </h3>
                    <p className='text-gold-500'>Software Engineer</p>
                  </div>
                  <span className='text-white/50 text-sm'>
                    March 2022 - August 2024
                  </span>
                </div>
                <p className='text-white/70 leading-relaxed mb-6'>
                  Developed features for sports technology platforms serving
                  millions of users. Built and maintained a TypeScript library
                  for customer data tracking. Architected cloud solutions on
                  AWS.
                </p>
                <div className='flex flex-wrap gap-2'>
                  {['Angular', 'TypeScript', 'AWS', 'Ruby'].map((tech) => (
                    <span
                      key={tech}
                      className='px-3 py-1 bg-gold-500/10 border border-gold-500/20 rounded text-gold-500/80 text-xs'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className='py-24 lg:py-32 bg-dark-800/30'>
          <div className='max-w-4xl mx-auto px-6 lg:px-8 text-center'>
            <h2 className='font-display text-4xl tracking-wide text-white mb-6'>
              LET'S <span className='gold-text'>CONNECT</span>
            </h2>
            <p className='text-white/60 mb-8'>
              Open to discussing new opportunities, interesting projects, or
              just talking tech.
            </p>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
              <a
                href='https://linkedin.com/in/jdaake'
                target='_blank'
                rel='noopener noreferrer'
                className='btn-primary'
              >
                Connect on LinkedIn
              </a>
              <a href='/resume/resume.pdf' download className='btn-outline'>
                Download Resume
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
