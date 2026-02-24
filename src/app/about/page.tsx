"use client";

import Image from "next/image";
import { FadeUp, ScaleIn, Reveal } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const values = [
  {
    title: "we are...",
    content: "a boutique architecture and interior design firm made up of vibrant individuals passionate about design and the possibilities it unlocks to improve the lives of those within our society. Our core values are creativity, integrity, humility and accountability."
  },
  {
    title: "we believe...",
    content: "through our design, Infinite is committed to enriching the lives of people by creating built environs moulded through conceptual innovation, attention to detail, technical excellence, appropriate functionality, social awareness and environmental responsibility. We believe we have a responsibility to ensure that each of our projects enrich those who experience them and their surroundings culturally, economically and socially."
  },
  {
    title: "we work...",
    content: "through a trust based collaborative approach between our clients and interdisciplinary consultants. We nurture our professional relationships but remain fluid and in so doing, encourage creativity, evolution, development and maturation. We are committed to our design but encourage research and discovery to allow it to flourish. Through this we aim to create buildings and interior spaces that excite both the senses and the intellect."
  }
];

const awards = [
  {
    title: "Design Excellence Award",
    year: "2023",
    organization: "Dubai Design Week",
    category: "Hospitality Architecture"
  },
  {
    title: "Innovation in Sustainability",
    year: "2022", 
    organization: "Middle East Architecture Awards",
    category: "Green Building Design"
  },
  {
    title: "Best Interior Design",
    year: "2021",
    organization: "Commercial Design Awards",
    category: "Luxury Hospitality"
  },
  {
    title: "Regional Recognition",
    year: "2020",
    organization: "Gulf Design Awards",
    category: "Outstanding Project"
  }
];

const milestones = [
  { year: "1998", event: "Founded in Dubai by Russell and Helen" },
  { year: "2005", event: "First major hospitality project completed" },
  { year: "2010", event: "International expansion to Europe and Africa" },
  { year: "2015", event: "50+ luxury projects delivered" },
  { year: "2020", event: "Sustainable design initiatives launched" },
  { year: "2024", event: "25+ years of design excellence" }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-infinite-gray-950 pt-fluid-lg pb-fluid-xl">
      {/* Hero Section */}
      <section className="container mx-auto px-fluid-sm">
        <div className="text-center mb-fluid-lg">
          <FadeUp delay={200}>
            <h1 className="font-display font-extralight text-display-lg text-white mb-8">
              <span className="text-infinite-green-500">About</span> Infinite
            </h1>
          </FadeUp>
          <FadeUp delay={400}>
            <p className="text-heading-sm text-infinite-gray-400 max-w-3xl mx-auto leading-relaxed">
              Crafting exceptional spaces through innovative design, sustainable practices, 
              and unwavering commitment to architectural excellence.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto px-fluid-sm mb-fluid-xl">
        <div className="grid lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <ScaleIn key={value.title} delay={200 + index * 100}>
              <div className="glass-panel p-8 rounded-2xl border border-glass-border-green hover:bg-infinite-gray-850/30 transition-all duration-500 group h-full">
                <div className="h-full flex flex-col">
                  <h3 className="text-infinite-green-500 font-display font-medium text-heading-md mb-6 group-hover:scale-105 transition-transform duration-300">
                    {value.title}
                  </h3>
                  <p className="text-infinite-gray-300 text-body-md leading-relaxed flex-1">
                    {value.content}
                  </p>
                  <div className="mt-6 h-1 bg-gradient-to-r from-infinite-green-500 to-transparent opacity-70 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              </div>
            </ScaleIn>
          ))}
        </div>
      </section>

      {/* Founders Section */}
      <section className="container mx-auto px-fluid-sm mb-fluid-xl">
        <Reveal delay={300}>
          <h2 className="font-display font-light text-heading-xl text-white text-center mb-fluid-md">
            Meet Our <span className="text-infinite-green-500">Founders</span>
          </h2>
        </Reveal>
        
        {/* Founder Images - Side by Side */}
        <div className="grid md:grid-cols-2 gap-0 mb-12 max-w-6xl mx-auto">
          <ScaleIn delay={400}>
            <div className="relative aspect-square overflow-hidden group">
              <Image
                src="/images/team/russell.jpg"
                alt="Russell, Co-founder and Principal Architect of Infinite Architects, in professional headshot"
                fill
                className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-infinite-gray-950/60 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-infinite-green-500 font-display font-light text-2xl">Russell</h3>
                <p className="text-white/80 text-sm">Co-founder & Principal Architect</p>
              </div>
            </div>
          </ScaleIn>
          
          <ScaleIn delay={500}>
            <div className="relative aspect-square overflow-hidden group">
              <Image
                src="/images/team/helen.jpg"
                alt="Helen, Co-founder and Principal Interior Designer of Infinite Architects, in professional headshot"
                fill
                className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-infinite-gray-950/60 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-infinite-green-500 font-display font-light text-2xl">Helen</h3>
                <p className="text-white/80 text-sm">Co-founder & Principal Designer</p>
              </div>
            </div>
          </ScaleIn>
        </div>

        {/* Green Accent Line */}
        <div className="w-full h-1 bg-gradient-to-r from-transparent via-infinite-green-500 to-transparent max-w-4xl mx-auto mb-12" />

        {/* Founder Bios */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <FadeUp delay={600}>
            <div className="space-y-6">
              <h3 className="text-infinite-green-500 font-display font-light text-2xl">Russell</h3>
              <div className="space-y-4 text-infinite-gray-300 text-body-md leading-relaxed">
                <p>
                  Has always been inspired by the combination of the tangible and the intangible, 
                  a fascination that continues to this day. It was therefore almost inevitable 
                  that his chosen career would be Architecture.
                </p>
                <p>
                  With his 25 years&apos; experience he has delivered a wide range of landmark and 
                  award winning projects ranging from industrial, residential, retail, commercial 
                  and high end hospitality for clients from Africa, Asia, Europe and the Middle East.
                </p>
                <p>
                  Russell&apos;s passion is sailing and he has taken part in many world class races 
                  including &lsquo;Fastnet&rsquo;, &lsquo;Cowes Regatta&rsquo;, Cape Town to Rio and Cape Town to St. Helena.
                </p>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={700}>
            <div className="space-y-6">
              <h3 className="text-infinite-green-500 font-display font-light text-2xl">Helen</h3>
              <div className="space-y-4 text-infinite-gray-300 text-body-md leading-relaxed">
                <p>
                  Has always had a passion for design. With a Scottish RAF pilot Father and 
                  Swedish Mother, she grew up moving around the world, living in the UK, 
                  America & The Sultanate of Oman, finally settling in Dubai in 1998.
                </p>
                <p>
                  She has accumulated over 25 years&apos; experience in the Hospitality Design industry. 
                  During this time, she has earned a reputation as a dynamic, multi-disciplined 
                  award-winning designer.
                </p>
                <p>
                  Her work has given her an insight into diverse cultures of the world and a 
                  love of travel that inspires her creativity. Helen believes that being sensitive 
                  to the Client&apos;s needs, matched with an impeccable eye for detail wins every time.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="container mx-auto px-fluid-sm mb-fluid-xl">
        <Reveal delay={400}>
          <h2 className="font-display font-light text-heading-xl text-white text-center mb-fluid-md">
            Our <span className="text-infinite-green-500">Journey</span>
          </h2>
        </Reveal>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-infinite-green-500 via-infinite-green-500/50 to-transparent transform -translate-x-1/2" />
            
            {milestones.map((milestone, index) => (
              <FadeUp key={milestone.year} delay={500 + index * 100}>
                <div className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 w-4 h-4 bg-infinite-green-500 rounded-full shadow-green transform -translate-x-1/2 z-10" />
                  
                  {/* Content */}
                  <div className={`w-full md:w-1/2 px-8 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                    <div className={`glass-panel p-6 rounded-xl border border-glass-border-green ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="text-infinite-green-500 font-display font-medium text-xl mb-2">{milestone.year}</div>
                      <div className="text-infinite-gray-300 text-body-md">{milestone.event}</div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="container mx-auto px-fluid-sm mb-fluid-xl">
        <Reveal delay={500}>
          <h2 className="font-display font-light text-heading-xl text-white text-center mb-fluid-md">
            Awards & <span className="text-infinite-green-500">Recognition</span>
          </h2>
        </Reveal>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {awards.map((award, index) => (
            <ScaleIn key={`${award.title}-${award.year}`} delay={600 + index * 100}>
              <div className="glass-panel p-6 rounded-xl border border-glass-border-green hover:border-infinite-green-500/50 transition-all duration-500 group h-full">
                <div className="text-infinite-green-500 font-display font-medium text-lg mb-3 group-hover:scale-105 transition-transform duration-300">
                  {award.year}
                </div>
                <h3 className="text-white font-display font-light text-body-lg mb-2">
                  {award.title}
                </h3>
                <div className="text-infinite-gray-400 text-body-sm mb-2">
                  {award.organization}
                </div>
                <div className="text-infinite-gray-500 text-body-sm">
                  {award.category}
                </div>
                <div className="mt-4 h-px bg-gradient-to-r from-infinite-green-500 to-transparent opacity-70 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </ScaleIn>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-fluid-sm text-center">
        <FadeUp delay={700}>
          <div className="glass-panel p-12 rounded-3xl border border-glass-border-green max-w-4xl mx-auto">
            <h2 className="font-display font-light text-heading-lg text-white mb-6">
              Ready to Start Your <span className="text-infinite-green-500">Project?</span>
            </h2>
            <p className="text-infinite-gray-300 text-body-lg mb-8 max-w-2xl mx-auto">
              Let&apos;s collaborate to create exceptional spaces that inspire and transform. 
              Our team is ready to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="primary" 
                size="lg"
                className="hover:scale-105 transition-transform"
              >
                <Link href="/contact-us" className="flex items-center gap-2">
                  Start Your Project
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </FadeUp>
      </section>
    </div>
  );
}