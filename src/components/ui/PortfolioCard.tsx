"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface PortfolioCardProps {
  title: string;
  subtitle?: string;
  category: string;
  image: string;
  href?: string;
  description?: string;
  featured?: boolean;
  size?: "small" | "medium" | "large";
  className?: string;
}

export default function PortfolioCard({
  title,
  subtitle,
  category,
  image,
  href,
  description,
  featured = false,
  size = "small",
  className,
}: PortfolioCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Dynamic aspect ratio based on size
  const getAspectRatio = () => {
    switch (size) {
      case "large":
        return "aspect-square"; // 1:1 for 2x2 grid
      case "medium":
        return "aspect-[1/2]"; // 1:2 for 1x2 grid
      case "small":
      default:
        return "aspect-square"; // 1:1 for 1x1 grid
    }
  };

  // Dynamic text sizes based on card size
  const getTypographySizes = () => {
    switch (size) {
      case "large":
        return {
          title: "text-heading-lg lg:text-heading-xl",
          subtitle: "text-body-md",
          category: "text-sm",
          description: "text-body-md",
        };
      case "medium":
        return {
          title: "text-heading-md lg:text-heading-lg",
          subtitle: "text-body-sm",
          category: "text-xs",
          description: "text-body-sm",
        };
      case "small":
      default:
        return {
          title: "text-heading-sm lg:text-heading-md",
          subtitle: "text-caption lg:text-body-sm",
          category: "text-xs",
          description: "text-body-sm",
        };
    }
  };

  const typography = getTypographySizes();

  const CardContent = () => (
    <div 
      className={cn(
        "group relative w-full h-full overflow-hidden bg-infinite-gray-900 rounded-2xl",
        "transition-all duration-500 ease-out",
        "hover:shadow-green-lg",
        getAspectRatio(),
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative w-full h-full overflow-hidden rounded-2xl">
        {/* Blur Placeholder */}
        <div 
          className={cn(
            "absolute inset-0 bg-gradient-to-br from-infinite-gray-800 to-infinite-gray-900",
            "transition-opacity duration-500",
            imageLoaded ? "opacity-0" : "opacity-100"
          )}
        >
          <div className="w-full h-full bg-infinite-gray-800 animate-pulse rounded-2xl" />
        </div>

        {/* Main Image */}
        <Image
          src={image}
          alt={title}
          fill
          className={cn(
            "object-cover transition-all duration-700 ease-out",
            "image-reveal", // Uses CSS utility for grayscale → color effect
            imageLoaded ? "opacity-100" : "opacity-0"
          )}
          onLoad={() => setImageLoaded(true)}
          sizes={
            size === "large" 
              ? "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
              : size === "medium"
              ? "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          }
          priority={featured}
        />

        {/* Gradient Overlay */}
        <div 
          className={cn(
            "absolute inset-0 bg-gradient-to-t",
            "from-black/90 via-black/30 to-transparent",
            "transition-all duration-500",
            isHovered ? "from-black/70 via-black/20 to-transparent" : ""
          )}
        />

        {/* Glass overlay for hover state */}
        <div 
          className={cn(
            "absolute inset-0 glass-card-green rounded-2xl",
            "transition-all duration-500 ease-out",
            isHovered ? "opacity-20" : "opacity-0"
          )}
        />
      </div>

      {/* Content Overlay */}
      <div 
        className={cn(
          "absolute inset-0 p-6 flex flex-col justify-end text-white z-10",
          size === "large" ? "p-8" : "p-6"
        )}
      >
        {/* Category Badge */}
        <div 
          className={cn(
            "inline-flex items-center px-3 py-1.5 mb-4 font-display font-normal uppercase tracking-wider",
            "glass-card-green rounded-full border border-infinite-green-500/20",
            "text-infinite-green-500 transition-all duration-300",
            "transform translate-y-4 group-hover:translate-y-0 opacity-80 group-hover:opacity-100",
            typography.category,
            size === "large" ? "mb-6" : "mb-4"
          )}
        >
          {category}
        </div>

        {/* Title & Subtitle */}
        <div className="mb-3">
          <h3 
            className={cn(
              "font-display font-light leading-tight",
              "transition-all duration-300",
              "transform translate-y-2 group-hover:translate-y-0",
              typography.title
            )}
          >
            {title}
          </h3>
          {subtitle && (
            <p 
              className={cn(
                "text-infinite-gray-300 mt-1 font-light",
                "transition-all duration-300",
                "transform translate-y-2 group-hover:translate-y-0",
                typography.subtitle
              )}
            >
              {subtitle}
            </p>
          )}
        </div>

        {/* Description (if provided and card is large enough) */}
        {description && size !== "small" && (
          <p 
            className={cn(
              "text-white/80 line-clamp-3 transition-all duration-300 mb-4",
              "transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100",
              typography.description,
              size === "medium" ? "line-clamp-2" : "line-clamp-3"
            )}
          >
            {description}
          </p>
        )}

        {/* View Project Indicator */}
        <div 
          className={cn(
            "flex items-center font-display font-normal uppercase tracking-wider",
            "text-white/60 group-hover:text-infinite-green-500 transition-all duration-300",
            "transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100",
            typography.category
          )}
        >
          <span className="mr-2">View Project</span>
          <svg 
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M17 8l4 4m0 0l-4 4m4-4H3" 
            />
          </svg>
        </div>
      </div>

      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-4 left-4 z-20">
          <div className="glass-card-green px-3 py-1.5 rounded-full border border-infinite-green-500/30">
            <span className="text-xs font-display font-medium uppercase tracking-wider text-infinite-green-500">
              Featured
            </span>
          </div>
        </div>
      )}

      {/* Magnetic Effect Indicator */}
      <div 
        className={cn(
          "absolute top-4 right-4 w-10 h-10 border border-white/20 rounded-full z-20",
          "flex items-center justify-center transition-all duration-300",
          "transform scale-0 group-hover:scale-100 rotate-45 group-hover:rotate-0",
          "glass-card backdrop-blur-sm"
        )}
      >
        <svg 
          className="w-5 h-5 text-white" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M8 12l4 4 4-4M12 16V4" 
          />
        </svg>
      </div>
    </div>
  );

  // If href is provided, wrap in Link, otherwise just return the card
  if (href) {
    return (
      <Link href={href} className="block w-full h-full">
        <CardContent />
      </Link>
    );
  }

  return <CardContent />;
}