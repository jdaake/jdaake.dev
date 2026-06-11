import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Reveal from '@/components/motion/Reveal';

export const metadata = {
  title: 'Engineering — Jordan Daake',
  description:
    'Software engineer specializing in cloud architecture, healthcare tech, and AI-powered systems.',
};

const skills = [
  'C#/.NET',
  'AWS',
  'Azure',
  'TypeScript',
  'Python',
  'SQL',
  'Angular',
  'LLM/AI',
  'React Native',
  'Next.js',
  'Cloud Architecture',
  'Data Engineering',
  'Healthcare Tech',
  'FinTech',
];

const roles = [
  {
    no: '01',
    company: 'PhysiqueIQ.ai',
    title: 'Founder & Solo Engineer',
    dates: 'Mar 2026 — Present',
    body: `AI-powered physique analysis platform serving competitive bodybuilders
      (PhysiqueIQ) and general fitness athletes (ProgressIQ) on a shared engine.
      Solo-engineered the full stack: two Next.js web apps, two React Native
      mobile apps, specialized Lambda handlers for async workloads, and full AWS
      infrastructure via CDK. Production analysis runs on Anthropic Claude
      (Sonnet + Opus) with prompt caching and 8-tier RBAC; in parallel,
      fine-tuning a custom vision model — Arete — on Llama 3.2 Vision 11B with
      QLoRA on SageMaker, trained on 7,019 labeled competition photos across 11
      NPC divisions for domain-specific physique evaluation.`,
    stack: [
      'Next.js',
      'React Native',
      'TypeScript',
      'Python',
      'AWS CDK',
      'DynamoDB',
      'Lambda',
      'SageMaker',
      'Anthropic Claude',
      'Llama 3.2 Vision',
      'QLoRA',
      'Stripe',
      'Cognito',
    ],
  },
  {
    no: '02',
    company: 'Navitus Health Solutions',
    title: 'Senior Software Engineer',
    dates: 'Feb 2026 — Present',
    body: `Building event-driven ETL pipelines for pharmacy formulary data
      processing. Designing data ingestion, enrichment, and delivery systems
      that handle drug formulary data across the RxFlex integration platform.`,
    stack: [
      'C#/.NET',
      'AWS CDK',
      'EventBridge',
      'Lambda',
      'S3',
      'Aurora PostgreSQL',
      'Data Engineering',
    ],
  },
  {
    no: '03',
    company: 'Invene',
    title: 'Software Engineer',
    dates: 'Aug 2025 — Jan 2026',
    body: `Built IRIS, a medication refill automation system that processes
      prescription refill requests through AI-powered validation workflows.
      The system integrates with multiple healthcare APIs including Athena
      Health EHR and the FDB drug database.`,
    stack: [
      'C#/.NET',
      'Azure OpenAI',
      'Multi-Agent LLM',
      'Athena Health API',
      'SQL Server',
    ],
  },
  {
    no: '04',
    company: 'Orion',
    title: 'Software Engineer · Developer II · Security & Performance · SQL',
    dates: 'Sep 2023 — May 2025 · Sep 2018 — Mar 2022',
    body: `Built and maintained enterprise software solutions using .NET and
      Angular. Worked with AWS cloud infrastructure and SQL databases, with
      monitoring through DataDog.`,
    stack: ['C#/.NET', 'Angular', 'AWS', 'SQL', 'DataDog'],
  },
  {
    no: '05',
    company: 'NBC Sports Next',
    title: 'Software Engineer',
    dates: 'Mar 2022 — Aug 2024',
    body: `Developed features for sports technology platforms serving millions
      of users. Built and maintained a TypeScript library for customer data
      tracking. Architected cloud solutions on AWS.`,
    stack: ['Angular', 'TypeScript', 'AWS', 'Ruby'],
  },
];

export default function Engineering() {
  return (
    <>
      <Navigation />

      <main>
        {/* Hero */}
        <section className='max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-16 lg:pt-24 lg:pb-20'>
          <p className='label text-ink-2 rise rise-1'>
            Section 01 — The Day Job
          </p>

          <h1 className='display text-[15vw] lg:text-[9.5rem] mt-6 rise rise-2'>
            Software
            <br />
            Engineer<span className='text-red'>.</span>
          </h1>

          <div className='mt-10 grid lg:grid-cols-12 gap-8 rise rise-3'>
            <p className='lg:col-span-6 serif-body text-xl leading-relaxed'>
              Building scalable cloud solutions in healthcare and beyond.
              Specializing in .NET, AWS/Azure, and AI-powered automation
              systems.
            </p>

            <div className='lg:col-span-6'>
              <p className='label text-ink-2 mb-3'>Toolkit</p>
              <p className='font-mono text-xs leading-loose text-ink'>
                {skills.join('  ·  ')}
              </p>
            </div>
          </div>
        </section>

        {/* Certifications strip */}
        <div className='border-y border-line bg-paper-2'>
          <div className='max-w-7xl mx-auto px-6 lg:px-10 py-4 flex flex-wrap items-center gap-x-8 gap-y-2'>
            <span className='label text-red'>Certified ✶</span>
            <span className='label text-ink'>AWS Solutions Architect</span>
            <span className='label text-ink'>AWS Developer Associate</span>
          </div>
        </div>

        {/* Experience ledger */}
        <section className='max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-24 lg:pt-24 lg:pb-32'>
          <Reveal className='flex flex-wrap items-baseline gap-4 mb-12'>
            <h2 className='display text-5xl lg:text-7xl'>The Record</h2>
            <span className='leaders hidden sm:block' />
            <p className='label text-ink-2'>2018 — Present</p>
          </Reveal>

          <div className='rule-heavy'>
            {roles.map((role, i) => (
              <Reveal key={role.no} delay={i === 0 ? 0 : 80}>
                <article className='grid lg:grid-cols-12 gap-4 lg:gap-8 py-10 lg:py-12 border-b border-line'>
                  <div className='lg:col-span-1'>
                    <p className='label text-red'>{role.no}</p>
                  </div>

                  <div className='lg:col-span-4'>
                    <h3 className='display text-3xl lg:text-4xl'>
                      {role.company}
                    </h3>
                    <p className='font-mono text-xs text-ink-2 mt-2 leading-relaxed'>
                      {role.title}
                    </p>
                    <p className='label text-ink-2 mt-3'>{role.dates}</p>
                  </div>

                  <div className='lg:col-span-7'>
                    <p className='serif-body text-ink'>{role.body}</p>
                    <p className='font-mono text-[11px] leading-loose text-red mt-4'>
                      {role.stack.join(' / ')}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className='bg-ink text-paper'>
          <div className='max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-28'>
            <Reveal>
              <p className='display text-5xl sm:text-6xl lg:text-8xl max-w-4xl'>
                Let's build something
                <span className='text-red'> worth shipping.</span>
              </p>
            </Reveal>
            <Reveal delay={150}>
              <p className='serif-body text-paper/70 max-w-xl mt-8'>
                Open to discussing new opportunities, interesting projects, or
                just talking tech.
              </p>
            </Reveal>
            <Reveal delay={250} className='flex flex-wrap gap-3 mt-10'>
              <a
                href='https://linkedin.com/in/jdaake'
                target='_blank'
                rel='noopener noreferrer'
                className='btn-paper'
              >
                Connect on LinkedIn ↗
              </a>
              <a
                href='/resume/resume.pdf'
                download
                className='btn-paper'
              >
                Download Résumé ↓
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
