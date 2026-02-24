"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: Array<{
    href: string;
    label: string;
  }>;
}

const socialLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com/infinitearchitects",
    icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/infinite-architects",
    icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
  }
];

export default function MobileNav({ isOpen, onClose, navItems }: MobileNavProps) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.position = "static";
      document.body.style.width = "auto";
    }

    return () => {
      document.body.style.overflow = "unset";
      document.body.style.position = "static";
      document.body.style.width = "auto";
    };
  }, [isOpen]);

  // Set mounted state for animation
  useEffect(() => {
    if (isOpen) {
      // Use requestAnimationFrame to avoid setState during render
      requestAnimationFrame(() => setMounted(true));
    } else {
      const timeout = setTimeout(() => setMounted(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!mounted && !isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-black/70 backdrop-blur-md transition-all duration-500",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Mobile Navigation Panel - Fullscreen */}
      <nav
        className={cn(
          "fixed inset-0 z-[70] bg-infinite-gray-950/95 backdrop-blur-2xl border-l border-white/5",
          "transform transition-all duration-700 ease-out",
          "flex flex-col",
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        )}
        aria-label="Mobile navigation"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 lg:p-8 border-b border-white/5">
          <Link href="/" onClick={onClose} className="transition-transform duration-300 hover:scale-105">
            <Image
              src="/images/logo-white.png"
              alt="Infinite Architects"
              width={140}
              height={83}
              className="h-auto w-auto max-w-[120px]"
            />
          </Link>
          
          <button
            onClick={onClose}
            className="p-3 text-white/70 hover:text-white hover:bg-white/5 transition-all duration-300 rounded-xl touch-manipulation"
            aria-label="Close navigation"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 flex flex-col justify-center px-6 lg:px-8">
          <div className="space-y-1">
            {navItems.map((item, index) => {
              const isActive = pathname === item.href;
              
              return (
                <div
                  key={item.href}
                  className={cn(
                    "transform transition-all duration-700 ease-out",
                    isOpen ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
                  )}
                  style={{
                    transitionDelay: isOpen ? `${100 + index * 100}ms` : "0ms",
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={cn(
                      "group flex items-center px-6 py-4 text-2xl lg:text-3xl font-display font-extralight",
                      "transition-all duration-300 rounded-2xl touch-manipulation",
                      "min-h-[60px] lg:min-h-[70px]", // Touch-friendly sizing
                      isActive
                        ? "text-infinite-green-500 bg-infinite-green-500/5 border border-infinite-green-500/10"
                        : "text-white/90 hover:text-white hover:bg-white/3"
                    )}
                  >
                    {/* Active indicator */}
                    <div
                      className={cn(
                        "w-2 h-2 rounded-full mr-6 transition-all duration-300",
                        isActive
                          ? "bg-infinite-green-500 scale-100"
                          : "bg-white/20 scale-0 group-hover:scale-100 group-hover:bg-infinite-green-500/50"
                      )}
                    />
                    
                    <span className="flex-1 uppercase tracking-wider">
                      {item.label}
                    </span>

                    {/* Arrow icon */}
                    <svg
                      className={cn(
                        "w-6 h-6 transition-all duration-300",
                        isActive
                          ? "text-infinite-green-500 opacity-100 translate-x-0"
                          : "text-white/50 opacity-0 group-hover:opacity-100 group-hover:translate-x-1"
                      )}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer with social links */}
        <div className="p-6 lg:p-8 border-t border-white/5">
          <div
            className={cn(
              "transform transition-all duration-700 ease-out",
              isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}
            style={{
              transitionDelay: isOpen ? "800ms" : "0ms",
            }}
          >
            {/* CTA */}
            <div className="text-center mb-6">
              <p className="text-sm text-white/50 font-light mb-4">
                Ready to create something extraordinary?
              </p>
              <Link
                href="/contact-us"
                onClick={onClose}
                className={cn(
                  "inline-flex items-center justify-center px-6 py-3 min-h-[44px]",
                  "text-sm font-display font-light uppercase tracking-wider",
                  "text-infinite-green-500 border border-infinite-green-500/30 rounded-xl",
                  "hover:bg-infinite-green-500 hover:text-black",
                  "transition-all duration-300 touch-manipulation"
                )}
              >
                Get in Touch
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "p-3 text-white/50 hover:text-infinite-green-500",
                    "hover:bg-white/5 transition-all duration-300 rounded-xl touch-manipulation",
                    "min-w-[44px] min-h-[44px] flex items-center justify-center"
                  )}
                  aria-label={social.name}
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}