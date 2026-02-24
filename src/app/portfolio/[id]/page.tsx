"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AnimatedSection, FadeUp, ScaleIn } from "@/components/ui/AnimatedSection";
import PortfolioCard from "@/components/ui/PortfolioCard";
import { cn } from "@/lib/utils";

// Project data (in a real app, this would come from a database or CMS)
const projectsData: Record<string, any> = {
  "private-villa-emirates-hills": {
    id: "private-villa-emirates-hills",
    title: "Private Villa Emirates Hills",
    location: "Dubai, UAE",
    category: ["Architecture", "Interior Design"],
    year: "2024",
    area: "850 sqm",
    client: "Private Client",
    status: "Completed",
    description: "This contemporary villa represents the perfect fusion of modern architectural principles with luxurious interior design. Located in the prestigious Emirates Hills community, the project showcases clean lines, premium materials, and innovative spatial solutions that redefine luxury living in Dubai.",
    longDescription: "The Private Villa in Emirates Hills stands as a testament to contemporary luxury design in one of Dubai's most exclusive neighborhoods. This project challenged our team to create a residence that would seamlessly blend modern architectural language with the sophisticated lifestyle demands of our discerning clients.\n\nThe design philosophy centered around creating fluid indoor-outdoor living experiences, maximizing natural light, and incorporating sustainable design principles without compromising on luxury. Every detail, from the custom millwork to the carefully curated material palette, was designed to create a cohesive and timeless aesthetic.",
    features: [
      "Smart home automation system",
      "Sustainable energy solutions",
      "Custom millwork and built-ins",
      "Infinity pool with city views",
      "Private cinema and spa",
      "Wine cellar and tasting room"
    ],
    hero: "/images/portfolio/project-01.jpg",
    images: [
      "/images/portfolio/project-01.jpg",
      "/images/portfolio/project-02.jpg", 
      "/images/portfolio/project-03.webp",
      "/images/portfolio/project-04.jpg",
      "/images/portfolio/project-05.webp",
      "/images/portfolio/project-06.jpg",
    ],
    awards: [
      {
        title: "Best Residential Design 2024",
        organization: "Middle East Architecture Awards",
      },
      {
        title: "Interior Design Excellence",
        organization: "Gulf Design Awards",
      },
    ],
  },
  // Add more projects as needed...
};

// Related projects logic
const getRelatedProjects = (currentId: string) => {
  const allProjects = [
    {
      id: "modular-hotel-concept",
      title: "Modular Hotel Concept",
      subtitle: "Saudi Arabia",
      category: "Architecture & Interior Design",
      image: "/images/portfolio/project-02.jpg",
      size: "medium" as const,
    },
    {
      id: "private-villa-district-one",
      title: "Private Villa District One",
      subtitle: "Dubai",
      category: "Architecture & Interior Design",
      image: "/images/portfolio/project-05.webp",
      size: "small" as const,
    },
    {
      id: "private-villa-dubai-hills",
      title: "Award Winning Villa",
      subtitle: "Dubai Hills",
      category: "Interior Design",
      image: "/images/portfolio/project-07.jpg",
      size: "small" as const,
    },
  ];
  
  return allProjects.filter(project => project.id !== currentId).slice(0, 3);
};

interface ProjectPageProps {
  params: { id: string };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const [scrollY, setScrollY] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  
  const project = projectsData[params.id];
  
  // Handle scroll for parallax effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle project not found
  if (!project) {
    notFound();
  }

  const relatedProjects = getRelatedProjects(project.id);

  return (
    <div className="min-h-screen bg-infinite-gray-950">
      {/* Hero Section with Parallax */}
      <section 
        ref={heroRef}
        className="relative h-screen overflow-hidden"
      >
        {/* Parallax Background */}
        <div 
          className="absolute inset-0 will-change-transform"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <Image
            src={project.hero}
            alt={project.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-6 pb-20">
            <FadeUp delay={500}>
              <div className="max-w-4xl">
                {/* Breadcrumb */}
                <div className="mb-6">
                  <Link 
                    href="/portfolio" 
                    className="text-sm text-infinite-green-500 hover:text-white transition-colors duration-300"
                  >
                    ← Back to Portfolio
                  </Link>
                </div>

                {/* Project Info */}
                <div className="glass-panel p-8 rounded-2xl backdrop-blur-md">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.category.map((cat: string) => (
                      <span
                        key={cat}
                        className="px-3 py-1 text-xs font-display uppercase tracking-wider bg-infinite-green-500/20 text-infinite-green-500 rounded-full border border-infinite-green-500/30"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                  
                  <h1 className="text-display-md lg:text-display-lg font-light text-white mb-4">
                    {project.title}
                  </h1>
                  
                  <p className="text-heading-sm text-infinite-gray-300 mb-6">
                    {project.location} • {project.year}
                  </p>
                  
                  <p className="text-body-lg text-white/80 max-w-2xl">
                    {project.description}
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center text-white/60">
            <span className="text-xs font-display uppercase tracking-wider mb-2">
              Scroll
            </span>
            <div className="w-px h-12 bg-gradient-to-b from-infinite-green-500 to-transparent animate-pulse" />
          </div>
        </div>
      </section>

      {/* Project Details Section */}
      <section className="py-fluid-lg bg-infinite-gray-950">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Project Info */}
            <div className="lg:col-span-1">
              <AnimatedSection animation="fade-up" delay={200}>
                <div className="glass-card p-8 rounded-2xl sticky top-32">
                  <h2 className="text-heading-lg font-light text-white mb-8">
                    Project Details
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-display uppercase tracking-wider text-infinite-green-500 mb-2">
                        Location
                      </h3>
                      <p className="text-body-md text-white">{project.location}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-display uppercase tracking-wider text-infinite-green-500 mb-2">
                        Year
                      </h3>
                      <p className="text-body-md text-white">{project.year}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-display uppercase tracking-wider text-infinite-green-500 mb-2">
                        Area
                      </h3>
                      <p className="text-body-md text-white">{project.area}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-display uppercase tracking-wider text-infinite-green-500 mb-2">
                        Status
                      </h3>
                      <p className="text-body-md text-white">{project.status}</p>
                    </div>
                    
                    {project.features && (
                      <div>
                        <h3 className="text-sm font-display uppercase tracking-wider text-infinite-green-500 mb-4">
                          Key Features
                        </h3>
                        <ul className="space-y-2">
                          {project.features.map((feature: string, index: number) => (
                            <li key={index} className="text-body-sm text-white/80 flex items-start">
                              <span className="text-infinite-green-500 mr-2 mt-2 block w-1 h-1 rounded-full bg-current flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            </div>
            
            {/* Project Content */}
            <div className="lg:col-span-2">
              <AnimatedSection animation="fade-up" delay={400}>
                <div className="prose prose-invert prose-lg max-w-none">
                  <p className="text-body-lg text-white leading-relaxed whitespace-pre-line">
                    {project.longDescription}
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-fluid-lg">
        <div className="container mx-auto px-6">
          <AnimatedSection animation="fade-up" delay={200}>
            <h2 className="text-heading-xl font-light text-white mb-12 text-center">
              Project Gallery
            </h2>
          </AnimatedSection>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.images.map((image: string, index: number) => (
              <ScaleIn key={index} delay={100 * index}>
                <div 
                  className="relative aspect-[4/3] group cursor-pointer overflow-hidden rounded-2xl"
                  onClick={() => setActiveImageIndex(index)}
                >
                  <Image
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center">
                      <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <p className="text-sm font-display uppercase tracking-wide">View Larger</p>
                    </div>
                  </div>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section (if available) */}
      {project.awards && project.awards.length > 0 && (
        <section className="py-fluid-md bg-infinite-gray-900/50">
          <div className="container mx-auto px-6">
            <AnimatedSection animation="fade-up" delay={200}>
              <div className="text-center mb-12">
                <h2 className="text-heading-xl font-light text-white mb-4">
                  Awards & Recognition
                </h2>
                <p className="text-body-md text-muted max-w-2xl mx-auto">
                  This project has been recognized for its outstanding design excellence.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {project.awards.map((award: any, index: number) => (
                  <ScaleIn key={index} delay={200 * index}>
                    <div className="glass-card p-8 rounded-2xl text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-infinite-green-500/20 flex items-center justify-center">
                        <svg className="w-8 h-8 text-infinite-green-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      </div>
                      <h3 className="text-heading-sm font-medium text-white mb-2">
                        {award.title}
                      </h3>
                      <p className="text-body-sm text-muted">
                        {award.organization}
                      </p>
                    </div>
                  </ScaleIn>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Related Projects */}
      <section className="py-fluid-lg">
        <div className="container mx-auto px-6">
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="text-center mb-12">
              <h2 className="text-heading-xl font-light text-white mb-4">
                Related Projects
              </h2>
              <p className="text-body-md text-muted max-w-2xl mx-auto">
                Explore more of our architectural and interior design projects.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProjects.map((relatedProject, index) => (
              <ScaleIn key={relatedProject.id} delay={150 * index}>
                <PortfolioCard
                  title={relatedProject.title}
                  subtitle={relatedProject.subtitle}
                  category={relatedProject.category}
                  image={relatedProject.image}
                  href={`/portfolio/${relatedProject.id}`}
                  size={relatedProject.size}
                  className="hover-lift"
                />
              </ScaleIn>
            ))}
          </div>

          {/* View All Projects Link */}
          <div className="text-center mt-12">
            <AnimatedSection animation="fade-up" delay={600}>
              <Link
                href="/portfolio"
                className="btn-primary inline-flex items-center gap-3"
              >
                View All Projects
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
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
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}