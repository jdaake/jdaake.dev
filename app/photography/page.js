import Navigation from '@/components/Navigation'

export const metadata = {
  title: 'Photography | Jordan Daake',
  description: 'Photography portfolio featuring portraits, fitness, and lifestyle imagery.',
}

export default function Photography() {
  // Placeholder images - replace with actual photos
  const featuredImages = [
    { id: 1, aspect: 'portrait' },
    { id: 2, aspect: 'landscape' },
    { id: 3, aspect: 'portrait' },
    { id: 4, aspect: 'landscape' },
    { id: 5, aspect: 'portrait' },
    { id: 6, aspect: 'landscape' },
  ]

  return (
    <>
      <Navigation />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="font-display text-6xl md:text-7xl lg:text-8xl tracking-wide text-white mb-6">
                PHOTO<span className="gold-text">GRAPHY</span>
              </h1>
              <p className="text-white/60 text-xl leading-relaxed">
                Capturing authentic moments and powerful imagery. 
                Specializing in portraits, fitness, and lifestyle photography.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Preview */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {featuredImages.map((img) => (
                <div 
                  key={img.id}
                  className={`
                    relative overflow-hidden rounded-lg bg-dark-800 
                    ${img.aspect === 'portrait' ? 'aspect-[3/4]' : 'aspect-[4/3]'}
                    group cursor-pointer
                  `}
                >
                  {/* Placeholder - replace with actual images */}
                  <div className="absolute inset-0 flex items-center justify-center text-white/20">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gold-500/0 group-hover:bg-gold-500/10 transition-colors duration-300" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA to Pixieset */}
        <section className="py-24 lg:py-32">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-display text-4xl tracking-wide text-white mb-6">
              VIEW FULL <span className="gold-text">GALLERIES</span>
            </h2>
            <p className="text-white/60 mb-8 max-w-2xl mx-auto">
              Browse complete photo galleries from shoots, events, and projects 
              on my Pixieset page.
            </p>
            <a 
              href="https://jdaakemedia.mypixieset.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              View Galleries on Pixieset
            </a>
          </div>
        </section>

        {/* Services */}
        <section className="py-24 lg:py-32 bg-dark-800/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="font-display text-4xl tracking-wide text-white mb-12 text-center">
              AVAILABLE <span className="gold-text">FOR</span>
            </h2>
            
            <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gold-500/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl text-white mb-2">PORTRAITS</h3>
                <p className="text-white/60 text-sm">
                  Headshots, personal branding, creative portraits
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gold-500/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl text-white mb-2">FITNESS</h3>
                <p className="text-white/60 text-sm">
                  Physique photos, gym content, competition shots
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gold-500/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl text-white mb-2">EVENTS</h3>
                <p className="text-white/60 text-sm">
                  Competitions, shows, special occasions
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-24 lg:py-32">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-display text-4xl tracking-wide text-white mb-6">
              LET'S <span className="gold-text">SHOOT</span>
            </h2>
            <p className="text-white/60 mb-8">
              Interested in booking a session? Reach out to discuss your vision.
            </p>
            <a 
              href="https://instagram.com/jdaake" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Contact on Instagram
            </a>
          </div>
        </section>
      </main>
    </>
  )
}
