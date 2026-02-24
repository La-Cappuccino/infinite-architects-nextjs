"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/Button";

const footerLinks = [
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/team", label: "Our Team" },
      { href: "/portfolio", label: "Portfolio" },
      { href: "/media-room", label: "Media Room" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "/services/architecture", label: "Architecture" },
      { href: "/services/interior-design", label: "Interior Design" },
      { href: "/services/planning", label: "Planning" },
      { href: "/services/consulting", label: "Consulting" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy-policy", label: "Privacy Policy" },
      { href: "/terms-of-service", label: "Terms of Service" },
      { href: "/cookies", label: "Cookie Policy" },
    ],
  },
];

const socialLinks = [
  {
    href: "https://instagram.com/infinite.architects",
    label: "Instagram",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.070-4.85.070-3.204 0-3.584-.012-4.849-.070-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    href: "https://linkedin.com/company/infinite-architects",
    label: "LinkedIn",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-infinite-gray-950 border-t border-white/5 relative overflow-hidden">
      {/* Main footer content */}
      <div className="container-90 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Logo and description */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6 hover-magnetic">
              <Image
                src="/images/logo-white.png"
                alt="Infinite Architects"
                width={180}
                height={107}
                className="h-auto max-w-[150px] lg:max-w-[180px]"
              />
            </Link>
            
            <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-md">
              Award-winning architecture and design studio creating extraordinary 
              spaces that inspire and transform. Combining innovation with timeless elegance.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  className="p-2 text-white/60 hover:text-infinite-green-500 transition-colors duration-200 hover-magnetic"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links sections */}
          {footerLinks.map((section) => (
            <div key={section.title} className="lg:col-span-2">
              <h3 className="font-display font-light text-white text-sm uppercase tracking-wider mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-infinite-green-500 text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CTA section */}
          <div className="lg:col-span-4">
            <h3 className="font-display font-light text-white text-lg mb-4">
              Ready to create something extraordinary?
            </h3>
            <p className="text-white/70 text-sm mb-6">
              Let&apos;s discuss your vision and bring your architectural dreams to life.
            </p>
            <Button variant="primary" size="lg" asChild>
              <Link href="/contact-us">
                Start Your Project
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-90 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <p className="text-white/50 text-xs font-display uppercase tracking-wider">
              © {currentYear} Infinite Architects. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6">
              <Link
                href="/privacy-policy"
                className="text-white/50 hover:text-infinite-green-500 text-xs font-display uppercase tracking-wider transition-colors duration-200"
              >
                Privacy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-white/50 hover:text-infinite-green-500 text-xs font-display uppercase tracking-wider transition-colors duration-200"
              >
                Terms
              </Link>
              <Link
                href="/cookies"
                className="text-white/50 hover:text-infinite-green-500 text-xs font-display uppercase tracking-wider transition-colors duration-200"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
