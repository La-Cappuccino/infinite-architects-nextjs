"use client";

import { TeamCard } from "@/components/TeamCard";
import { AnimatedSection, FadeUp, Reveal } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const founders = [
  {
    name: "Russell",
    role: "Co-founder & Principal Architect",
    image: "/images/team/russell.jpg",
    bio: "has always been inspired by the combination of the tangible and the intangible, a fascination that continues to this day. With 25+ years of experience, he has delivered landmark and award-winning projects across Africa, Asia, Europe and the Middle East. Russell's passion for sailing has taken him to world-class races including Fastnet and Cowes Regatta.",
    social: {
      email: "russell@infinitedesigners.co",
      linkedin: "https://linkedin.com/in/russell-infinite"
    }
  },
  {
    name: "Helen", 
    role: "Co-founder & Principal Designer",
    image: "/images/team/helen.jpg",
    bio: "has always had a passion for design. Born to a Scottish RAF pilot father and Swedish mother, she grew up moving around the world before settling in Dubai in 1998. With 25+ years in hospitality design, Helen has earned a reputation as a dynamic, award-winning designer with an impeccable eye for detail and cultural sensitivity.",
    social: {
      email: "helen@infinitedesigners.co",
      linkedin: "https://linkedin.com/in/helen-infinite"
    }
  },
];

const teamMembers = [
  {
    name: "Joshua",
    role: "Senior Architect",
    image: "/images/team/joshua.jpg",
    bio: "inspired by spectacular built landscapes while traveling, Joshua pursued architecture and became a licensed architect and BIM practitioner. He brings technical expertise and innovative solutions to every project, ensuring designs are both beautiful and structurally sound.",
    social: {
      linkedin: "https://linkedin.com/in/joshua-infinite"
    }
  },
  {
    name: "Anoop",
    role: "Design Director", 
    image: "/images/team/anoop.jpg",
    bio: "originally from India, Anoop has lived and worked in Paris, Thailand and Dubai, immersing himself in diverse cultures. With over 25 years in hospitality design, he brings a unique global perspective to create culturally rich and contextually appropriate designs.",
    social: {
      linkedin: "https://linkedin.com/in/anoop-infinite"
    }
  },
  {
    name: "Farha",
    role: "Interior Design Lead",
    image: "/images/team/farha.jpg", 
    bio: "a confident, competent, and imaginative interior designer with 12 years of extensive experience in high-end hospitality and luxury residential projects. Her keen attention to detail and creative vision ensure every space tells a unique story.",
    social: {
      linkedin: "https://linkedin.com/in/farha-infinite"
    }
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-infinite-gray-950 pt-fluid-lg pb-fluid-xl">
      {/* Hero Section */}
      <section className="container mx-auto px-fluid-sm">
        <div className="text-center mb-fluid-lg">
          <FadeUp delay={200}>
            <h1 className="font-display font-extralight text-display-lg text-white mb-6">
              Meet the <span className="text-infinite-green-500">Team</span>
            </h1>
          </FadeUp>
          <FadeUp delay={400}>
            <p className="text-heading-sm text-infinite-gray-400 max-w-3xl mx-auto leading-relaxed">
              A collective of passionate designers, architects, and visionaries 
              dedicated to crafting exceptional spaces that inspire and transform.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Founders Section */}
      <section className="container mx-auto px-fluid-sm mb-fluid-xl">
        <Reveal delay={300}>
          <h2 className="font-display font-light text-heading-xl text-white text-center mb-fluid-md">
            Our <span className="text-infinite-green-500">Founders</span>
          </h2>
        </Reveal>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {founders.map((founder, index) => (
            <TeamCard
              key={founder.name}
              member={founder}
              variant="founder"
              delay={400 + index * 100}
            />
          ))}
        </div>
      </section>

      {/* Green Accent Line */}
      <div className="container mx-auto px-fluid-sm mb-fluid-lg">
        <AnimatedSection animation="scale-in" delay={600}>
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-infinite-green-500 to-transparent max-w-4xl mx-auto" />
        </AnimatedSection>
      </div>

      {/* Team Members Section */}
      <section className="container mx-auto px-fluid-sm mb-fluid-xl">
        <Reveal delay={500}>
          <h2 className="font-display font-light text-heading-xl text-white text-center mb-fluid-md">
            Our <span className="text-infinite-green-500">Team</span>
          </h2>
        </Reveal>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={member.name}
              member={member}
              variant="staff"
              delay={600 + index * 100}
            />
          ))}
        </div>
      </section>

      {/* Team Values Section */}
      <section className="container mx-auto px-fluid-sm mb-fluid-xl">
        <Reveal delay={700}>
          <h2 className="font-display font-light text-heading-xl text-white text-center mb-fluid-md">
            Our <span className="text-infinite-green-500">Culture</span>
          </h2>
        </Reveal>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <FadeUp delay={800}>
            <div className="glass-panel p-8 rounded-2xl border border-glass-border-green text-center h-full">
              <div className="w-16 h-16 bg-infinite-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-infinite-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-display font-medium text-heading-md text-infinite-green-500 mb-4">Innovation</h3>
              <p className="text-infinite-gray-300 text-body-md leading-relaxed">
                We push boundaries and explore new possibilities in every project, 
                combining cutting-edge technology with timeless design principles.
              </p>
            </div>
          </FadeUp>
          
          <FadeUp delay={900}>
            <div className="glass-panel p-8 rounded-2xl border border-glass-border-green text-center h-full">
              <div className="w-16 h-16 bg-infinite-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-infinite-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-display font-medium text-heading-md text-infinite-green-500 mb-4">Collaboration</h3>
              <p className="text-infinite-gray-300 text-body-md leading-relaxed">
                Our diverse team brings together different perspectives, cultures, 
                and expertise to create truly exceptional and inclusive designs.
              </p>
            </div>
          </FadeUp>
          
          <FadeUp delay={1000}>
            <div className="glass-panel p-8 rounded-2xl border border-glass-border-green text-center h-full">
              <div className="w-16 h-16 bg-infinite-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-infinite-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-display font-medium text-heading-md text-infinite-green-500 mb-4">Passion</h3>
              <p className="text-infinite-gray-300 text-body-md leading-relaxed">
                Every project is infused with our genuine love for design and 
                our commitment to creating spaces that positively impact lives.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-fluid-sm text-center">
        <FadeUp delay={1100}>
          <div className="glass-panel p-12 rounded-3xl border border-glass-border-green max-w-4xl mx-auto">
            <h2 className="font-display font-light text-heading-lg text-white mb-6">
              Join Our <span className="text-infinite-green-500">Journey</span>
            </h2>
            <p className="text-infinite-gray-300 text-body-lg mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion 
              for exceptional design and innovation. Let's create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="primary" 
                size="lg"
                className="hover:scale-105 transition-transform"
              >
                <Link href="/contact-us" className="flex items-center gap-2">
                  Get In Touch
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