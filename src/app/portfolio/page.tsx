"use client";

import Image from "next/image";
import PageLayout from "@/components/PageLayout";

const projects = [
  {
    title: "Private Villa Emirates Hills, Dubai",
    category: "ARCHITECTURE & INTERIOR DESIGN",
    image: "/images/portfolio/project-01.jpg",
  },
  {
    title: "Modular Hotel Concept, Saudi Arabia",
    category: "ARCHITECTURE & INTERIOR DESIGN",
    image: "/images/portfolio/project-02.jpg",
  },
  {
    title: "Private Villa Emirates Hills, Dubai",
    category: "INTERIOR DESIGN",
    image: "/images/portfolio/project-03.webp",
  },
  {
    title: "Urban Hotel, Dubai",
    category: "INTERIOR DESIGN",
    image: "/images/portfolio/project-04.jpg",
  },
  {
    title: "Private Villa District One, Dubai",
    category: "ARCHITECTURE & INTERIOR DESIGN",
    image: "/images/portfolio/project-05.webp",
  },
  {
    title: "Private Villa Nad Al Sheba, Dubai",
    category: "ARCHITECTURE & INTERIOR DESIGN",
    image: "/images/portfolio/project-06.jpg",
  },
  {
    title: "Private Villa Dubai Hills - Award Winning",
    category: "INTERIOR DESIGN",
    image: "/images/portfolio/project-07.jpg",
  },
  {
    title: "Tamoka Restaurant Concept",
    category: "ARCHITECTURE & INTERIOR DESIGN",
    image: "/images/portfolio/project-08.jpg",
  },
  {
    title: "Private Villa, Jumeirah Golf Estates, Dubai",
    category: "ARCHITECTURE & INTERIOR DESIGN",
    image: "/images/portfolio/project-09.jpg",
  },
  {
    title: "Al Bahya Palm Resort, Abu Dhabi",
    category: "ARCHITECTURE & INTERIOR DESIGN",
    image: "/images/portfolio/project-10.jpg",
  },
  {
    title: "Private Villa Refurbishment Emirates Hills, Dubai",
    category: "INTERIOR DESIGN",
    image: "/images/portfolio/project-11.jpg",
  },
  {
    title: "Creek Park Boutique Hotel & Serviced Apartments",
    category: "ARCHITECTURE & INTERIOR DESIGN",
    image: "/images/portfolio/project-12.jpg",
  },
];

export default function PortfolioPage() {
  return (
    <PageLayout>
      <div style={{ backgroundColor: "#000000" }}>
        {/* Portfolio Grid - 3 Columns, No Gaps */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "0",
          }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              style={{
                position: "relative",
                aspectRatio: "4/3",
                overflow: "hidden",
                cursor: "pointer",
              }}
              className="portfolio-item"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                style={{
                  objectFit: "cover",
                  filter: "grayscale(100%)",
                  transition: "filter 0.3s ease, transform 0.3s ease",
                }}
                sizes="33vw"
              />

              {/* Overlay with title */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  padding: "15px",
                  zIndex: 2,
                }}
              >
                <h3
                  style={{
                    fontFamily: '"neue-haas-grotesk-display", sans-serif',
                    fontSize: "15px",
                    fontWeight: 300,
                    color: "#FFFFFF",
                    marginBottom: "5px",
                  }}
                >
                  {project.title}
                </h3>
                <span
                  style={{
                    fontFamily: '"neue-haas-grotesk-display", sans-serif',
                    fontSize: "11px",
                    fontWeight: 400,
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    color: "#80AE50",
                  }}
                >
                  {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Hover effect styles */}
        <style jsx global>{`
          .portfolio-item:hover img {
            filter: grayscale(0%) !important;
            transform: scale(1.05);
          }
        `}</style>
      </div>
    </PageLayout>
  );
}
