"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import MobileNav from "./MobileNav";

const navItems = [
  { href: "/", label: "Welcome" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/team", label: "Team" },
  { href: "/media-room", label: "Media Room" },
  { href: "/contact-us", label: "Contact Us" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  // Handle scroll effects with direction awareness
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY.current;
      
      // Update glass effect
      setScrolled(currentScrollY > 50);
      
      // Show/hide header based on scroll direction
      if (currentScrollY < 100) {
        // Always show near top
        setHeaderVisible(true);
      } else if (scrollingDown && currentScrollY > 150) {
        // Hide when scrolling down past threshold
        setHeaderVisible(false);
      } else if (!scrollingDown) {
        // Show when scrolling up
        setHeaderVisible(true);
      }
      
      lastScrollY.current = currentScrollY;
    };

    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    return () => window.removeEventListener("scroll", throttledScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
          // Glass effect when scrolled
          scrolled 
            ? "glass-panel" 
            : "bg-transparent",
          // Show/hide based on scroll direction
          headerVisible 
            ? "translate-y-0" 
            : "-translate-y-full"
        )}
      >
        <div className="container mx-auto px-6 lg:px-8 flex items-center justify-between py-4 lg:py-6">
          {/* Logo */}
          <Link 
            href="/" 
            className="z-10 group transition-transform duration-300 hover:scale-105"
            aria-label="Infinite Architects - Home"
          >
            <Image
              src="/images/logo-white.png"
              alt="Infinite Architects"
              width={200}
              height={119}
              priority
              className="h-auto w-auto max-w-[100px] md:max-w-[140px] lg:max-w-[180px] transition-all duration-300 group-hover:brightness-110"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main navigation">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "group relative px-4 py-3 font-display font-light text-sm uppercase tracking-wider transition-all duration-300 rounded-lg",
                    "hover:bg-white/5 hover:backdrop-blur-sm",
                    isActive
                      ? "text-accent bg-[var(--glass-light)]"
                      : "text-white/90 hover:text-white"
                  )}
                >
                  <span className="relative z-10">{item.label}</span>
                  
                  {/* Active indicator */}
                  <span
                    className={cn(
                      "absolute bottom-1 left-1/2 h-0.5 transition-all duration-300 rounded-full",
                      "-translate-x-1/2",
                      isActive 
                        ? "w-6 opacity-100" 
                        : "w-0 opacity-0 group-hover:w-4 group-hover:opacity-70"
                    )}
                    style={{ backgroundColor: 'var(--color-green)' }}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "lg:hidden relative z-10 flex flex-col justify-center w-10 h-10 transition-all duration-300",
              "focus:outline-none focus:ring-2 focus:ring-[var(--color-green)]/50 focus:ring-offset-2 focus:ring-offset-transparent rounded-lg",
              "hover:bg-white/5 hover:scale-105"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            <span
              className={cn(
                "block h-0.5 w-6 bg-white transition-all duration-300 origin-center mx-auto",
                mobileMenuOpen && "rotate-45 translate-y-1.5"
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-6 bg-white transition-all duration-300 my-1.5 mx-auto",
                mobileMenuOpen && "opacity-0 scale-0"
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-6 bg-white transition-all duration-300 origin-center mx-auto",
                mobileMenuOpen && "-rotate-45 -translate-y-1.5"
              )}
            />
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navItems={navItems}
      />
    </>
  );
}
