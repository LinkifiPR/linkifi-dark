const navItems = ['SEO Digital PR', 'Authority PR', 'Case Studies', 'Blog', 'Team', 'Press Badge Maker', 'Contact'];

export default function Home() {
  return (
    <main className="grid-overlay min-h-screen">
      <div className="mx-auto max-w-7xl px-4 pb-24 pt-6 sm:px-6 lg:px-10">
        <header className="sticky top-4 z-50 mb-14 rounded-2xl border border-white/10 bg-black/55 px-4 py-3 backdrop-blur sm:px-6">
          <div className="flex items-center justify-between gap-5">
            <p className="text-sm font-semibold tracking-wide text-white">Linkifi</p>
            <nav aria-label="Primary" className="hidden flex-wrap items-center justify-end gap-5 md:flex">
              {navItems.map((item) => (
                <a key={item} href="#" className="text-xs text-zinc-400 transition hover:text-white">
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </header>

        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-950 to-black px-6 pb-10 pt-12 sm:px-10">
          <div className="absolute right-10 top-8 h-44 w-44 rounded-full bg-accent/20 blur-3xl" />
          <p className="text-sm text-zinc-300">Linkifi - Effortless PR Link Building, Exceptional Results</p>
          <div className="mt-6 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="max-w-3xl">
              <p className="mb-4 text-sm text-zinc-400">Avatar</p>
              <p className="mb-2 text-sm text-zinc-300">Hi there! Have a question? We&apos;re here to help.</p>
              <p className="mb-5 text-2xl font-semibold text-accent">50</p>
              <h1 className="text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                Building the Most Powerful Links on the Planet
                <br />
                Effortless PR
                <br />
                Exceptional Results.
              </h1>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-400">
                We control the narrative and directly pitch stories to journalists. Get your brand featured on the world&apos;s largest publications to supercharge your SEO.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-glow">Get Started</button>
                <button className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-zinc-200">View Case Studies</button>
              </div>
            </div>
            <aside className="card space-y-5">
              <p className="text-sm text-zinc-300">Hey, just checking in — how&apos;s the campaign coming along?</p>
              <p className="text-sm text-zinc-300">
                The campaign is going great. Some big links already! Take a look at these placements:
              </p>
              <ul className="space-y-2 text-sm text-zinc-200">
                {['nytimes.com', 'forbes.com', 'healthline.com', 'zdnet.com'].map((site) => (
                  <li key={site} className="pill w-full justify-between">
                    {site}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-zinc-300">Linkifi</p>
              <p className="text-xl">😲🥳🥳🥳</p>
              <p className="text-sm text-zinc-400">I&apos;ve yet to meet anyone who is as good with this sort of link-building...</p>
            </aside>
          </div>
        </section>

        <section className="mt-12 card">
          <p className="text-sm text-zinc-400">Organic Traffic</p>
          <p className="mt-2 text-4xl font-semibold text-accent">+245%</p>
          <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-zinc-300 sm:grid-cols-4">
            {['Forbes', 'healthline', 'BBC', 'The Guardian', 'Daily Express', 'WSJ', 'realtor.com', 'HubSpot'].map((item) => (
              <span key={item} className="pill justify-center">
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-16 space-y-6">
          <p className="text-sm text-zinc-400">We work with brands focused on growth</p>
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {[
              'VirtualStaging.com',
              'Wealth of Geeks',
              'SweatBlock',
              'Rudis Wrestling',
              'Netify',
              'US Therapy Rooms',
              'VirtualStaging.com',
              'Wealth of Geeks',
              'SweatBlock',
              'Rudis Wrestling',
              'Netify',
              'US Therapy Rooms'
            ].map((brand, index) => (
              <div key={`${brand}-${index}`} className="pill justify-center py-2">
                {brand}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 grid gap-8 lg:grid-cols-2">
          <div className="card">
            <h2 className="text-3xl font-semibold text-white">Where others scatter links — we strategically strike.</h2>
            <p className="mt-4 text-sm leading-7 text-zinc-400">
              In a landscape where strategic precision is key, we focus on digital PR, the only white-hat method left for boosting SERP visibility. Each link is carefully placed in the right publication for maximum impact, not just scattered.
            </p>
            <button className="mt-6 rounded-full border border-accent/60 px-5 py-2 text-sm font-semibold text-accent">See how it works</button>
          </div>
          <div className="card grid grid-cols-2 gap-3 text-sm text-zinc-300 sm:grid-cols-4">
            {['The New York Times', 'Forbes', 'The Guardian', 'healthline', 'BBC', 'HubSpot', 'ELLE', 'MensHealth'].map((pub) => (
              <span key={pub} className="pill justify-center text-center">
                {pub}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">Trusted by Industry Leaders</p>
          <h2 className="mt-2 text-3xl font-semibold text-white">What our clients say.</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <article className="card space-y-3">
              <p className="text-2xl text-zinc-400">&quot;</p>
              <p className="font-semibold">Charles Floate</p>
              <p className="text-zinc-300">Charles Floate</p>
              <p className="text-zinc-400">charlesfloate.com</p>
              <p className="text-sm text-zinc-300">
                &quot;I&apos;ve been working with Linkifi for close to 4 months now; Chris and his team have been one of the few services in the world that have consistently got me high-level PR links without charging extortionate rates.&quot;
              </p>
              <p className="text-amber-300">★★★★★</p>
              <p className="text-sm text-zinc-400">Verified Client</p>
            </article>
            <article className="card space-y-3">
              <p className="text-2xl text-zinc-400">&quot;</p>
              <p className="font-semibold">Jon Dykstra</p>
              <p className="text-zinc-300">Jon Dykstra</p>
              <p className="text-zinc-400">fatstacksblog.com</p>
              <p className="text-sm text-zinc-300">
                &quot;Not only is the outcome excellent, but the process of working with Linkifi is excellent. I&apos;ve yet to meet anyone who is as good at working with this sort of link-building.&quot;
              </p>
              <p className="text-amber-300">★★★★★</p>
              <p className="text-sm text-zinc-400">Verified Client</p>
            </article>
          </div>
        </section>

        <section className="mt-20 space-y-8">
          <div>
            <p className="text-sm text-zinc-400">Our stress-free process</p>
            <h2 className="mt-1 text-3xl font-semibold text-white">So, how exactly does this work?</h2>
          </div>
          <div className="grid gap-6">
            <article className="card space-y-4">
              <p className="text-sm text-zinc-400">Linkifi</p>
              <h3 className="text-xl font-semibold">You choose your package.</h3>
              <p className="text-sm leading-7 text-zinc-400">
                It starts with strategy. Are you aiming for a pure SEO play built on the most authoritative links available, or do you want a broader Authority PR approach that strengthens brand credibility and expands visibility across search, media, and AI platforms? We design a plan around that decision so every placement supports your bigger commercial goals.
              </p>
            </article>
            <article className="card space-y-4">
              <h3 className="text-xl font-semibold">We pitch journalists.</h3>
              <p className="text-sm leading-7 text-zinc-400">
                Based on your goals, we craft a digital PR strategy that amplifies your marketing efforts, delivering campaigns with measurable impact. By staying ahead of trends and expertly pitching to journalists, we position you as the go-to expert, ensuring your voice is heard in all the right places.
              </p>
              <div className="grid gap-3 rounded-2xl border border-white/10 bg-black/35 p-4">
                <p className="text-sm text-zinc-300">I would like to speak to CEOs in fintech regarding resilient business models when it comes to rising delinquency.</p>
                <p className="pill w-fit">Draft Pitch</p>
                <p className="text-sm text-zinc-300">We&apos;re currently putting a whitepaper together on this exact subject. Might be worth a chat. Take a look.</p>
                <p className="font-medium text-white">Fintech Resilience in Small Business Lending</p>
                <ul className="space-y-2 text-sm">
                  <li className="pill w-full justify-between"><span>Fintech</span><span>HuffPost — Resilient Business Models</span><span className="text-accent">ACCEPTED</span></li>
                  <li className="pill w-full justify-between"><span>Motoring</span><span>New York Times — EV &amp; second-hand market</span><span className="text-accent">ACCEPTED</span></li>
                  <li className="pill w-full justify-between"><span>Health</span><span>Healthline — Healthy Sleep New Research</span><span className="text-accent">ACCEPTED</span></li>
                </ul>
              </div>
            </article>
            <article className="card space-y-4">
              <h3 className="text-xl font-semibold">We monitor pitches and report to you.</h3>
              <p className="text-sm leading-7 text-zinc-400">
                Every link we secure is instantly added to your report in real-time - exciting, isn&apos;t it? Get ready to make room on your homepage&apos;s press-badge section, because we&apos;re about to fill it with all the juicy links we land for you!
              </p>
            </article>
          </div>
        </section>

        <section className="mt-20 space-y-6">
          <h2 className="text-3xl font-semibold text-white">Our Packages.</h2>
          <p className="text-zinc-400">Choose SEO Digital PR for ranking-focused performance, or Authority PR for broader authority and visibility across search and AI platforms.</p>
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="card space-y-4">
              <p className="text-sm text-zinc-400">Performance-Led Package</p>
              <h3 className="text-2xl font-semibold">SEO Digital PR</h3>
              <p className="text-sm text-accent">Best for Google Rankings</p>
              <p className="text-sm leading-7 text-zinc-400">
                We identify credible experts and position them strategically around the right topics. We secure editorially earned quotes in major publications where links cannot be bought. This builds algorithmic authority, stronger E-E-A-T signals, and direct SEO impact.
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-zinc-300">
                {[
                  'Editorially earned',
                  'Major publications',
                  'E-E-A-T signals',
                  'Direct SEO impact',
                  'Expert positioning strategy',
                  'Inbound media request monitoring',
                  'Tier-one publication placements',
                  'Algorithmic authority link signals'
                ].map((item) => (
                  <span key={item} className="pill">
                    {item}
                  </span>
                ))}
              </div>
              <button className="rounded-full border border-accent/60 px-5 py-2 text-sm font-semibold text-accent">View SEO Digital PR</button>
            </article>
            <article className="card space-y-4">
              <p className="text-sm text-zinc-400">Brand Authority Package</p>
              <h3 className="text-2xl font-semibold">Authority PR</h3>
              <p className="text-sm text-accent">Best for Visibility</p>
              <p className="text-sm leading-7 text-zinc-400">
                Authority PR is broader than SEO links alone. It is narrative driven and built to strengthen brand authority, credibility, and media presence. It expands visibility across search and AI platforms while reinforcing commercial trust.
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-zinc-300">
                {[
                  'Brand authority',
                  'Media presence',
                  'Search visibility',
                  'AI visibility',
                  'Founder media positioning',
                  'Bylined features and profiles',
                  'Podcasts and speaking placements',
                  'Authority narrative campaigns'
                ].map((item) => (
                  <span key={item} className="pill">
                    {item}
                  </span>
                ))}
              </div>
              <button className="rounded-full border border-accent/60 px-5 py-2 text-sm font-semibold text-accent">View Authority PR</button>
            </article>
          </div>
        </section>

        <section className="mt-20 space-y-5">
          <h2 className="text-3xl font-semibold text-white">Testimonials.</h2>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              ['Daniel Glazer', 'UK Therapy Rooms', 'Co-Founder'],
              ['Joy Aumann', 'LUXURYSOCALREALTY', 'Co-Founder'],
              ['Amanda Leemis', 'Hollydog LLC', 'Editor-In-Chief']
            ].map(([name, company, role]) => (
              <article key={name} className="card space-y-1">
                <p className="font-medium text-white">{name}</p>
                <p className="text-sm text-zinc-300">{company}</p>
                <p className="text-sm text-zinc-400">{role}</p>
              </article>
            ))}
          </div>
          <button className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white">Book a Call With Us</button>
        </section>

        <section className="mt-20 space-y-6">
          <div>
            <p className="text-sm text-zinc-400">We&apos;re proud of our results</p>
            <h2 className="text-3xl font-semibold text-white">Our work.</h2>
            <p className="mt-3 max-w-3xl text-sm text-zinc-400">
              Three recent campaigns that show what disciplined digital PR looks like when every placement is built to create measurable commercial impact.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            <article className="card space-y-3">
              <p className="text-sm text-zinc-400">Cosmetic Dentistry</p>
              <p className="text-sm text-zinc-400">Audience Reach</p>
              <p className="text-4xl font-semibold text-accent">13.7M</p>
              <div className="flex flex-wrap gap-2 text-xs text-zinc-300">
                {['6 premium features', 'DR 85 average', 'Clinical expert positioning'].map((item) => (
                  <span key={item} className="pill">
                    {item}
                  </span>
                ))}
              </div>
              <p className="text-xs uppercase tracking-widest text-zinc-500">Case Study 01</p>
              <p className="font-semibold text-white">6 Major Features + 13.7M Audience Reach for NYC Cosmetic Dentist</p>
              <p className="text-sm text-zinc-400">
                We turned specialist clinical expertise into national editorial coverage, giving Lux Smiles NYC the kind of authority, trust, and visibility that compounds across both search and brand demand.
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-zinc-300">
                {['6 premium features', 'DR 85 average', 'Clinical expert positioning'].map((item) => (
                  <span key={`${item}-a`} className="pill">
                    {item}
                  </span>
                ))}
              </div>
              <button className="text-sm font-semibold text-accent">Read case study</button>
            </article>

            <article className="card space-y-3">
              <p className="text-sm text-zinc-400">Therapy Rooms</p>
              <p className="text-sm text-zinc-400">Google Position</p>
              <p className="text-4xl font-semibold text-accent">#1</p>
              <div className="flex flex-wrap gap-2 text-xs text-zinc-300">
                {['Doubled organic traffic', 'Higher-intent rankings', 'Sustained authority growth'].map((item) => (
                  <span key={item} className="pill">
                    {item}
                  </span>
                ))}
              </div>
              <p className="text-xs uppercase tracking-widest text-zinc-500">Case Study 02</p>
              <p className="font-semibold text-white">Digital PR Gets #1 Spot on Google for Therapy Room Directory Website</p>
              <p className="text-sm text-zinc-400">
                For US Therapy Rooms, we ran a focused campaign built around commercially relevant search demand. The result was stronger rankings, better traffic quality, and a meaningful lift in discoverability.
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-zinc-300">
                {['Doubled organic traffic', 'Higher-intent rankings', 'Sustained authority growth'].map((item) => (
                  <span key={`${item}-b`} className="pill">
                    {item}
                  </span>
                ))}
              </div>
              <button className="text-sm font-semibold text-accent">Read case study</button>
            </article>

            <article className="card space-y-3">
              <p className="text-sm text-zinc-400">Legal Services</p>
              <p className="text-sm text-zinc-400">Premium Features</p>
              <p className="text-4xl font-semibold text-accent">59</p>
              <div className="flex flex-wrap gap-2 text-xs text-zinc-300">
                {['National media presence', 'Authority-led trust signals', 'Broader branded visibility'].map((item) => (
                  <span key={item} className="pill">
                    {item}
                  </span>
                ))}
              </div>
              <p className="text-xs uppercase tracking-widest text-zinc-500">Case Study 03</p>
              <p className="font-semibold text-white">59 Premium Features and National Recognition for Texas Law Firm</p>
              <p className="text-sm text-zinc-400">
                We built a national visibility layer for a Texas legal brand, turning credibility into wide editorial recognition across competitive legal and business publications where trust is decisive.
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-zinc-300">
                {['National media presence', 'Authority-led trust signals', 'Broader branded visibility'].map((item) => (
                  <span key={`${item}-c`} className="pill">
                    {item}
                  </span>
                ))}
              </div>
              <button className="text-sm font-semibold text-accent">Read case study</button>
            </article>
          </div>
          <button className="rounded-full border border-white/15 px-5 py-2 text-sm text-zinc-200">Read more case studies</button>
        </section>

        <section className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ['8+', 'International Speaking Events'],
            ['15,000+', 'Tier-1 Premium Coverage Built for Clients'],
            ['$17,000,000+', 'Revenue Generated for Clients'],
            ['150+', 'Podcasts']
          ].map(([metric, label]) => (
            <article key={label} className="card">
              <p className="text-3xl font-semibold text-accent">{metric}</p>
              <p className="mt-2 text-sm text-zinc-400">{label}</p>
            </article>
          ))}
        </section>

        <section className="mt-20 space-y-6">
          <div>
            <p className="text-sm text-zinc-400">Public proof</p>
            <h2 className="text-3xl font-semibold text-white">What our clients have to say.</h2>
            <p className="mt-3 max-w-3xl text-sm text-zinc-400">
              Real public feedback from founders, operators, and site owners who have seen the results in their traffic, rankings, and authority.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ['Client Praise', '@NicheSiteLady'],
              ['Operator Review', '@FatStacksBlog'],
              ['Campaign Proof', '@UKCarlBroadbent'],
              ['Results Signal', '@nichejason'],
              ['Ranking Win', '@jakezward'],
              ['Public Endorsement', '@NicheSiteSiry'],
              ['Founder Feedback', '@patientpublish'],
              ['Traffic Lift', '@jakezward'],
              ['Client Result', '@NinaClapperton']
            ].map(([title, handle]) => (
              <article key={`${title}-${handle}`} className="card space-y-3">
                <p className="text-sm font-semibold text-white">{title}</p>
                <p className="text-sm text-zinc-300">{handle}</p>
                <p className="text-sm text-zinc-400">View post by {handle}</p>
                <button className="rounded-full border border-white/15 px-4 py-1 text-xs text-zinc-300">Open on X</button>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-20 card space-y-5 text-center">
          <p className="text-sm text-zinc-400">Ready when you are</p>
          <h2 className="text-3xl font-semibold text-white">Ready to build powerful links?</h2>
          <p className="mx-auto max-w-3xl text-sm text-zinc-400">
            If you want authoritative coverage that improves rankings, strengthens trust, and compounds across search, media, and AI visibility, this is the next step.
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-xs text-zinc-300">
            {['Tier-one placements', 'Editorially earned', 'Commercially focused'].map((item) => (
              <span key={item} className="pill">
                {item}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <button className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white">Get Started</button>
            <button className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-zinc-200">Contact Us</button>
          </div>
        </section>
      </div>

      <footer className="border-t border-white/10 bg-black/70">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:px-10">
          <div className="space-y-4">
            <p className="text-lg font-semibold text-white">Linkifi</p>
            <p className="text-sm text-zinc-400">Authority-led Digital PR</p>
            <p className="max-w-sm text-sm text-zinc-500">
              Built for companies that need authoritative links, stronger brand signals, and visible commercial outcomes across search and media.
            </p>
            <div className="flex items-center gap-2 text-xs text-zinc-300">
              <span className="pill">Editorial placements</span>
              <span className="pill">SEO authority</span>
              <span className="pill">X</span>
            </div>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold text-white">Services</p>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>SEO Digital PR</li>
              <li>Authority PR</li>
              <li>Press Badge Maker</li>
            </ul>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold text-white">Explore</p>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>Case Studies</li>
              <li>Blog</li>
              <li>Team</li>
              <li>Market Movers Podcast</li>
            </ul>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold text-white">Company</p>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 px-4 py-6 text-center text-sm text-zinc-500">
          <p>© 2024 Linkifi. All rights reserved.</p>
          <p className="mt-2 text-zinc-600">Built to turn digital PR into measurable authority.</p>
        </div>
      </footer>
    </main>
  );
}
