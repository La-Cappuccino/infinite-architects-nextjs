"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { FadeUp, Reveal } from "@/components/ui/AnimatedSection";
import Link from "next/link";

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Animation delay for content
    const timer = setTimeout(() => setIsLoaded(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero-section">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('/images/hero/infinite-designers-001.webp')`,
        }}
      />

      {/* Modern gradient overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Main Title */}
        <Reveal delay={0}>
          <h1 className="font-display font-extralight text-display-lg text-white mb-6 leading-none">
            Award Winning
            <br />
            <span className="text-gradient">Design Studio</span>
          </h1>
        </Reveal>

        {/* Subtitle */}
        <FadeUp delay={400}>
          <p className="text-body-lg text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            Creating extraordinary architectural experiences that inspire, 
            transform, and endure. Where innovation meets timeless elegance.
          </p>
        </FadeUp>

        {/* CTA Buttons */}
        <FadeUp delay={600}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Button 
              variant="primary" 
              size="lg" 
              className="min-w-[200px]"
              asChild
            >
              <Link href="/portfolio">
                View Our Work
              </Link>
            </Button>
            
            <Button 
              variant="glass" 
              size="lg" 
              className="min-w-[200px]"
              asChild
            >
              <Link href="/contact-us">
                Start Your Project
              </Link>
            </Button>
          </div>
        </FadeUp>

        {/* Scroll indicator */}
        <FadeUp delay={1000}>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </FadeUp>
      </div>

      {/* Achievement badges */}
      <div className="absolute bottom-8 right-8 hidden lg:block">
        <FadeUp delay={1200}>
          <div className="glass-card p-4 rounded-xl">
            <div className="text-center">
              <div className="text-2xl font-display font-light text-infinite-green-500 mb-1">
                50+
              </div>
              <div className="text-xs text-white/70 uppercase tracking-wider">
                Award Winning Projects
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
