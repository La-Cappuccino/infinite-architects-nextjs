"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-in" | "slide-up" | "scale-in" | "blur-in" | "reveal";
  delay?: number;
  threshold?: number;
  triggerOnce?: boolean;
  disabled?: boolean;
}

export function AnimatedSection({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  threshold = 0.1,
  triggerOnce = true,
  disabled = false,
}: AnimatedSectionProps) {
  const [isInView, setIsInView] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (disabled) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!triggerOnce || !hasTriggered)) {
          setTimeout(() => {
            setIsInView(true);
            setHasTriggered(true);
          }, delay);
        } else if (!triggerOnce && !entry.isIntersecting) {
          setIsInView(false);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay, threshold, triggerOnce, hasTriggered, disabled]);

  // Respect reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setIsInView(true);
    }
  }, []);

  const getAnimationClasses = () => {
    const baseClasses = "transition-all duration-1000 ease-out";
    
    if (disabled || isInView) {
      return `${baseClasses} opacity-100 transform-none`;
    }

    switch (animation) {
      case "fade-up":
        return `${baseClasses} opacity-0 translate-y-8`;
      case "fade-in":
        return `${baseClasses} opacity-0`;
      case "slide-up":
        return `${baseClasses} opacity-0 translate-y-12`;
      case "scale-in":
        return `${baseClasses} opacity-0 scale-95`;
      case "blur-in":
        return `${baseClasses} opacity-0 blur-sm`;
      case "reveal":
        return `${baseClasses} opacity-0 translate-y-12 scale-95`;
      default:
        return `${baseClasses} opacity-0 translate-y-8`;
    }
  };

  return (
    <div
      ref={ref}
      className={cn(getAnimationClasses(), className)}
      style={{ 
        transitionDelay: isInView ? `${delay}ms` : "0ms",
      }}
    >
      {children}
    </div>
  );
}

// Convenience components for common use cases
export function FadeUp({ children, className, delay = 0, ...props }: Omit<AnimatedSectionProps, "animation">) {
  return (
    <AnimatedSection animation="fade-up" delay={delay} className={className} {...props}>
      {children}
    </AnimatedSection>
  );
}

export function FadeIn({ children, className, delay = 0, ...props }: Omit<AnimatedSectionProps, "animation">) {
  return (
    <AnimatedSection animation="fade-in" delay={delay} className={className} {...props}>
      {children}
    </AnimatedSection>
  );
}

export function ScaleIn({ children, className, delay = 0, ...props }: Omit<AnimatedSectionProps, "animation">) {
  return (
    <AnimatedSection animation="scale-in" delay={delay} className={className} {...props}>
      {children}
    </AnimatedSection>
  );
}

export function Reveal({ children, className, delay = 0, ...props }: Omit<AnimatedSectionProps, "animation">) {
  return (
    <AnimatedSection animation="reveal" delay={delay} className={className} {...props}>
      {children}
    </AnimatedSection>
  );
}