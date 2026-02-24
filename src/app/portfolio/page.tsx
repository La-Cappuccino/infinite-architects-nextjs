"use client";

import { useState } from "react";
import PortfolioCard from "@/components/ui/PortfolioCard";
import { FadeUp, AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";

const projects = [
  {
    id: "private-villa-emirates-hills",
    title: "Private Villa Emirates Hills",
    category: "Architecture & Interior Design",
    location: "Dubai",
    image: "/images/portfolio/project-01.jpg",
    featured: true,
    description: "Luxurious contemporary villa showcasing seamless indoor-outdoor living with premium finishes.",
    year: "2024",
    type: "architecture",
  },
  {
    id: "modular-hotel-concept",
    title: "Modular Hotel Concept",
    category: "Architecture & Interior Design",
    location: "Saudi Arabia",
    image: "/images/portfolio/project-02.jpg",
    description: "Innovative modular design approach for sustainable hospitality architecture.",
    year: "2024",
    type: "architecture",
  },
  {
    id: "private-villa-emirates-hills-2",
    title: "Private Villa Emirates Hills II",
    category: "Interior Design",
    location: "Dubai",
    image: "/images/portfolio/project-03.webp",
    description: "Elegant interior spaces combining modern minimalism with Arabian luxury.",
    year: "2023",
    type: "interior",
  },
  {
    id: "urban-hotel-dubai",
    title: "Urban Hotel",
    category: "Interior Design",
    location: "Dubai",
    image: "/images/portfolio/project-04.jpg",
    featured: true,
    description: "Contemporary hotel interiors designed for the modern traveler.",
    year: "2023",
    type: "interior",
  },
  {
    id: "private-villa-district-one",
    title: "Private Villa District One",
    category: "Architecture & Interior Design",
    location: "Dubai",
    image: "/images/portfolio/project-05.webp",
    description: "Award-winning residential design featuring sustainable architecture principles.",
    year: "2023",
    type: "architecture",
  },
  {
    id: "private-villa-nad-al-sheba",
    title: "Private Villa Nad Al Sheba",
    category: "Architecture & Interior Design",
    location: "Dubai",
    image: "/images/portfolio/project-06.jpg",
    description: "Modern villa design with traditional Middle Eastern influences.",
    year: "2022",
    type: "architecture",
  },
  {
    id: "private-villa-dubai-hills",
    title: "Private Villa Dubai Hills",
    category: "Interior Design",
    location: "Dubai",
    image: "/images/portfolio/project-07.jpg",
    featured: true,
    description: "Award-winning interior design featuring bespoke furniture and lighting solutions.",
    year: "2022",
    type: "interior",
  },
  {
    id: "tamoka-restaurant",
    title: "Tamoka Restaurant Concept",
    category: "Architecture & Interior Design Competition",
    location: "Concept",
    image: "/images/portfolio/project-08.jpg",
    description: "Competition-winning restaurant design merging culture with contemporary dining.",
    year: "2022",
    type: "concept",
  },
  {
    id: "private-villa-jumeirah-golf",
    title: "Private Villa Jumeirah Golf",
    category: "Architecture & Interior Design",
    location: "Dubai",
    image: "/images/portfolio/project-09.jpg",
    description: "Golf course villa with panoramic views and entertainment spaces.",
    year: "2021",
    type: "architecture",
  },
  {
    id: "al-bahya-palm-resort",
    title: "Al Bahya Palm Resort",
    category: "Architecture & Interior Design",
    location: "Abu Dhabi",
    image: "/images/portfolio/project-10.jpg",
    description: "Luxury resort complex inspired by traditional Arabian architecture.",
    year: "2021",
    type: "architecture",
  },
  {
    id: "private-villa-refurbishment",
    title: "Private Villa Refurbishment",
    category: "Interior Design",
    location: "Emirates Hills, Dubai",
    image: "/images/portfolio/project-11.jpg",
    description: "Complete renovation of luxury villa interiors with modern amenities.",
    year: "2021",
    type: "interior",
  },
  {
    id: "creek-park-boutique",
    title: "Creek Park Boutique Hotel",
    category: "Architecture & Interior Design",
    location: "Dubai",
    image: "/images/portfolio/project-12.jpg",
    description: "Boutique hotel and serviced apartments with contemporary urban design.",
    year: "2020",
    type: "architecture",
  },
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "architecture", label: "Architecture" },
  { id: "interior", label: "Interior Design" },
  { id: "concept", label: "Concepts" },
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = projects.filter((project) =>
    activeFilter === "all" ? true : project.type === activeFilter
  );

  return (
    <div className="min-h-screen bg-infinite-gray-950 pt-24 pb-16">
      {/* Hero Section */}
      <section className="container-90 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <FadeUp>
            <h1 className="font-display font-extralight text-display-md text-white mb-6">
              Our <span className="text-infinite-green-500">Portfolio</span>
            </h1>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="text-body-lg text-white/70 max-w-2xl mx-auto">
              Discover our award-winning projects spanning luxury residential,
              commercial spaces, and innovative architectural concepts across the Middle East.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Filter Navigation */}
      <section className="container-90 mb-12">
        <FadeUp delay={400}>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeFilter === category.id ? "primary" : "outline"}
                onClick={() => setActiveFilter(category.id)}
                className="mb-2"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </FadeUp>
      </section>

      {/* Portfolio Grid */}
      <section className="container-90">
        {/* Featured Projects - Bento Style */}
        {activeFilter === "all" && (
          <div className="mb-16">
            <FadeUp delay={600}>
              <h2 className="font-display font-light text-heading-lg text-white mb-8 text-center">
                Featured Projects
              </h2>
            </FadeUp>
            <div className="grid-bento mb-8">
              {projects
                .filter((project) => project.featured)
                .map((project, index) => (
                  <AnimatedSection
                    key={project.id}
                    delay={700 + index * 100}
                    animation="scale-in"
                  >
                    <PortfolioCard
                      title={project.title}
                      category={project.category}
                      image={project.image}
                      href={`/portfolio/${project.id}`}
                      description={project.description}
                      featured={true}
                    />
                  </AnimatedSection>
                ))}
            </div>
          </div>
        )}

        {/* All Projects Grid */}
        <div>
          {activeFilter === "all" && (
            <FadeUp delay={800}>
              <h2 className="font-display font-light text-heading-lg text-white mb-8 text-center">
                All Projects
              </h2>
            </FadeUp>
          )}
          
          <div className="portfolio-grid-spaced">
            {filteredProjects.map((project, index) => (
              <AnimatedSection
                key={project.id}
                delay={activeFilter === "all" ? 900 + index * 50 : index * 100}
                animation="fade-up"
              >
                <PortfolioCard
                  title={project.title}
                  category={project.category}
                  image={project.image}
                  href={`/portfolio/${project.id}`}
                  description={project.description}
                  featured={false}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-90 py-16 text-center">
        <FadeUp delay={1000}>
          <div className="glass-card p-8 md:p-12 rounded-3xl max-w-4xl mx-auto">
            <h2 className="font-display font-light text-heading-lg text-white mb-4">
              Ready to create your dream space?
            </h2>
            <p className="text-body-md text-white/70 mb-8 max-w-2xl mx-auto">
              Let's discuss your vision and bring your architectural dreams to life with our award-winning design team.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" size="lg" asChild>
                <a href="/contact-us">Start Your Project</a>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <a href="/about">Learn About Us</a>
              </Button>
            </div>
          </div>
        </FadeUp>
      </section>
    </div>
  );
}