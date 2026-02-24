"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

interface TeamMember {
  name: string;
  role?: string;
  image: string;
  bio: string;
  social?: {
    linkedin?: string;
    instagram?: string;
    email?: string;
  };
}

interface TeamCardProps {
  member: TeamMember;
  variant?: "founder" | "staff";
  className?: string;
  delay?: number;
}

export function TeamCard({ 
  member, 
  variant = "staff", 
  className,
  delay = 0 
}: TeamCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <AnimatedSection
      animation="scale-in"
      delay={delay}
      className={cn("group", className)}
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl bg-infinite-gray-900/50 backdrop-blur-sm border border-infinite-gray-800/30 transition-all duration-500 ease-out",
          "hover:border-infinite-green-500/50 hover:bg-infinite-gray-850/50 hover:scale-105 hover:shadow-green-lg",
          variant === "founder" ? "aspect-[3/4]" : "aspect-[3/4]"
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Container */}
        <div className="relative aspect-[3/4] overflow-hidden">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className={cn(
              "object-cover transition-all duration-700 ease-out",
              "filter grayscale group-hover:grayscale-0 group-hover:scale-110"
            )}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          
          {/* Glass Overlay */}
          <div className={cn(
            "absolute inset-0 bg-gradient-to-t from-infinite-gray-950/90 via-infinite-gray-950/20 to-transparent",
            "transition-all duration-500",
            isHovered && "from-infinite-gray-950/95 via-infinite-gray-950/40"
          )} />
          
          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col justify-end p-6">
            {/* Name */}
            <h3 className={cn(
              "font-display font-light text-infinite-green-500 mb-2 transition-all duration-300",
              variant === "founder" ? "text-2xl" : "text-xl"
            )}>
              {member.name}
            </h3>
            
            {/* Role (if provided) */}
            {member.role && (
              <p className="text-white/70 text-sm font-light mb-3 tracking-wide">
                {member.role}
              </p>
            )}
            
            {/* Bio - appears on hover */}
            <div className={cn(
              "transition-all duration-500 ease-out",
              isHovered 
                ? "opacity-100 translate-y-0 max-h-32" 
                : "opacity-0 translate-y-4 max-h-0"
            )}>
              <p className={cn(
                "text-white/80 leading-relaxed overflow-hidden",
                variant === "founder" ? "text-sm" : "text-xs"
              )}>
                {member.bio}
              </p>
            </div>
            
            {/* Social Links - appears on hover */}
            {member.social && (
              <div className={cn(
                "flex gap-3 mt-4 transition-all duration-500 ease-out",
                isHovered 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-4"
              )}>
                {member.social.linkedin && (
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-infinite-green-500 hover:border-infinite-green-500/50 transition-all duration-300"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                )}
                {member.social.instagram && (
                  <a
                    href={member.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-infinite-green-500 hover:border-infinite-green-500/50 transition-all duration-300"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                )}
                {member.social.email && (
                  <a
                    href={`mailto:${member.social.email}`}
                    className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-infinite-green-500 hover:border-infinite-green-500/50 transition-all duration-300"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.909L12 11.71l9.455-7.889h.909A1.636 1.636 0 0 1 24 5.457z"/>
                    </svg>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}