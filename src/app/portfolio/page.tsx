"use client";

import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: "private-villa-emirates-hills",
    title: "Private Villa Emirates Hills, Dubai",
    category: "ARCHITECTURE & INTERIOR DESIGN",
    image: "/images/portfolio/project-01.jpg",
  },
  {
    id: "modular-hotel-concept",
    title: "Modular Hotel Concept, Saudi Arabia",
    category: "ARCHITECTURE & INTERIOR DESIGN",
    image: "/images/portfolio/project-02.jpg",
  },
  {
    id: "private-villa-emirates-hills-2",
    title: "Private Villa Emirates Hills, Dubai",
    category: "INTERIOR DESIGN",
    image: "/images/portfolio/project-03.webp",
  },
  {
    id: "urban-hotel-dubai",
    title: "Urban Hotel, Dubai",
    category: "INTERIOR DESIGN",
    image: "/images/portfolio/project-04.jpg",
  },
  {
    id: "stairs-detail",
    title: "",
    category: "",
    image: "/images/portfolio/project-02.jpg",
    hidden: true,
  },
  {
    id: "private-villa-district-one",
    title: "Private Villa District One, Dubai",
    category: "ARCHITECTURE & INTERIOR DESIGN",
    image: "/images/portfolio/project-05.webp",
  },
  {
    id: "private-villa-nad-al-sheba",
    title: "Private Villa Nad Al Sheba, Dubai",
    category: "ARCHITECTURE & INTERIOR DESIGN",
    image: "/images/portfolio/project-06.jpg",
  },
  {
    id: "private-villa-dubai-hills",
    title: "Private Villa Dubai Hills - Award Winning",
    category: "INTERIOR DESIGN",
    image: "/images/portfolio/project-07.jpg",
  },
  {
    id: "tamoka-restaurant",
    title: "Tamoka Restaurant Concept",
    category: "ARCHITECTURE & INTERIOR DESIGN COMPETITION",
    image: "/images/portfolio/project-08.jpg",
  },
  {
    id: "private-villa-jumeirah-golf",
    title: "Private Villa, Jumeirah Golf Estates, Dubai",
    category: "ARCHITECTURE & INTERIOR DESIGN",
    image: "/images/portfolio/project-09.jpg",
  },
  {
    id: "al-bahya-palm-resort",
    title: "Al Bahya Palm Resort, Abu Dhabi",
    category: "ARCHITECTURE & INTERIOR DESIGN",
    image: "/images/portfolio/project-10.jpg",
  },
  {
    id: "private-villa-refurbishment",
    title: "Private Villa Refurbishment Emirates Hills, Dubai",
    category: "INTERIOR DESIGN",
    image: "/images/portfolio/project-11.jpg",
  },
  {
    id: "creek-park-boutique",
    title: "Creek Park Boutique Hotel & Serviced Apartments",
    category: "ARCHITECTURE & INTERIOR DESIGN",
    image: "/images/portfolio/project-12.jpg",
  },
];

export default function PortfolioPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#000000",
        paddingTop: "80px",
      }}
    >
      {/* Portfolio Grid - No gaps, 3 columns */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "0",
        }}
      >
        {projects
          .filter((p) => !p.hidden)
          .map((project) => (
            <Link
              key={project.id}
              href={`/portfolio/${project.id}`}
              style={{
                position: "relative",
                aspectRatio: "1/1",
                display: "block",
                overflow: "hidden",
              }}
            >
              {/* Project Image */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                style={{
                  objectFit: "cover",
                  filter: "grayscale(100%)",
                  transition: "filter 0.5s ease, transform 0.5s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = "grayscale(0%)";
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = "grayscale(100%)";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              />

              {/* Dark Overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundColor: "rgba(0,0,0,0.4)",
                  transition: "background-color 0.5s ease",
                }}
              />

              {/* Content */}
              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  left: "20px",
                  right: "20px",
                  zIndex: 10,
                }}
              >
                <h3
                  style={{
                    fontFamily: '"neue-haas-grotesk-display", sans-serif',
                    fontSize: "16px",
                    fontWeight: 400,
                    color: "#FFFFFF",
                    margin: "0 0 5px 0",
                    lineHeight: 1.3,
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    fontFamily: '"neue-haas-grotesk-display", sans-serif',
                    fontSize: "11px",
                    fontWeight: 400,
                    color: "#80AE50",
                    margin: 0,
                    letterSpacing: "0.5px",
                  }}
                >
                  {project.category}
                </p>
              </div>

              {/* Hover Border */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  border: "2px solid transparent",
                  transition: "border-color 0.3s ease",
                  pointerEvents: "none",
                }}
                className="hover-border"
              />
            </Link>
          ))}
      </div>

      {/* Add hover styles via CSS */}
      <style jsx global>{`
        a:hover .hover-border {
          border-color: #80ae50 !important;
        }
        a:hover > div:nth-child(2) {
          background-color: rgba(0, 0, 0, 0.2) !important;
        }
        @media (max-width: 1024px) {
          div[style*="gridTemplateColumns: repeat(3"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 767px) {
          div[style*="gridTemplateColumns: repeat(3"],
          div[style*="gridTemplateColumns: repeat(2"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
