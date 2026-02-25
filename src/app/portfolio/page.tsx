"use client";

import Image from "next/image";
import PageLayout from "@/components/PageLayout";

const projects = [
  {
    title: "Contemporary Villa, Kampala",
    category: "ARCHITECTURE & INTERIOR DESIGN",
    image: "/images/portfolio/project-01.jpg",
  },
  {
    title: "Modern Residence, Kampala",
    category: "ARCHITECTURE",
    image: "/images/portfolio/project-02.jpg",
  },
  {
    title: "Private Villa Design",
    category: "ARCHITECTURE & INTERIOR DESIGN",
    image: "/images/portfolio/project-03.jpg",
  },
  {
    title: "Contemporary Home",
    category: "ARCHITECTURE",
    image: "/images/portfolio/project-04.jpg",
  },
  {
    title: "Villa with Balcony, Kampala",
    category: "ARCHITECTURE & INTERIOR DESIGN",
    image: "/images/portfolio/project-05.jpg",
  },
  {
    title: "Residential Estate",
    category: "ARCHITECTURE",
    image: "/images/portfolio/project-06.jpg",
  },
  {
    title: "Tropical Garden Estate",
    category: "ARCHITECTURE & LANDSCAPING",
    image: "/images/portfolio/project-07.jpg",
  },
  {
    title: "Interior Living Space",
    category: "INTERIOR DESIGN",
    image: "/images/portfolio/project-08.jpg",
  },
  {
    title: "Modern Interior",
    category: "INTERIOR DESIGN",
    image: "/images/portfolio/project-09.jpg",
  },
  {
    title: "Contemporary Kitchen",
    category: "INTERIOR DESIGN",
    image: "/images/portfolio/project-10.jpg",
  },
  {
    title: "Custom Cabinetry",
    category: "FURNITURE & INTERIOR",
    image: "/images/portfolio/project-11.jpg",
  },
  {
    title: "Bedroom Suite",
    category: "INTERIOR DESIGN",
    image: "/images/portfolio/project-12.jpg",
  },
  {
    title: "Living Room Design",
    category: "INTERIOR DESIGN & REMODELING",
    image: "/images/portfolio/project-13.jpg",
  },
  {
    title: "Dining Area",
    category: "INTERIOR DESIGN",
    image: "/images/portfolio/project-14.jpg",
  },
  {
    title: "Private Estate Entry",
    category: "ARCHITECTURE",
    image: "/images/portfolio/project-15.jpg",
  },
  {
    title: "Outdoor Living",
    category: "ARCHITECTURE & LANDSCAPING",
    image: "/images/portfolio/project-16.jpg",
  },
  {
    title: "Villa Terrace",
    category: "ARCHITECTURE",
    image: "/images/portfolio/project-17.jpg",
  },
  {
    title: "Modern Living Space",
    category: "INTERIOR DESIGN",
    image: "/images/portfolio/project-18.jpg",
  },
  {
    title: "Bathroom Suite",
    category: "INTERIOR DESIGN",
    image: "/images/portfolio/project-19.jpg",
  },
  {
    title: "Master Bathroom",
    category: "INTERIOR DESIGN",
    image: "/images/portfolio/project-20.jpg",
  },
  {
    title: "Custom Furniture",
    category: "FURNITURE",
    image: "/images/portfolio/project-21.jpg",
  },
  {
    title: "Home Office",
    category: "INTERIOR DESIGN",
    image: "/images/portfolio/project-22.jpg",
  },
  {
    title: "Entertainment Area",
    category: "INTERIOR DESIGN",
    image: "/images/portfolio/project-23.jpg",
  },
  {
    title: "Exterior Landscaping",
    category: "LANDSCAPING",
    image: "/images/portfolio/project-24.jpg",
  },
  {
    title: "Luxury Walk-in Closet",
    category: "INTERIOR DESIGN & FURNITURE",
    image: "/images/portfolio/project-25.jpg",
  },
  {
    title: "Storage Solutions",
    category: "INTERIOR DESIGN & FURNITURE",
    image: "/images/portfolio/project-26.jpg",
  },
  {
    title: "Wardrobe Design",
    category: "FURNITURE",
    image: "/images/portfolio/project-27.jpg",
  },
  {
    title: "Outdoor Patio",
    category: "ARCHITECTURE & LANDSCAPING",
    image: "/images/portfolio/project-28.jpg",
  },
  {
    title: "Pool Area",
    category: "ARCHITECTURE & LANDSCAPING",
    image: "/images/portfolio/project-29.jpg",
  },
  {
    title: "Guest Suite",
    category: "INTERIOR DESIGN",
    image: "/images/portfolio/project-30.jpg",
  },
  {
    title: "Villa Interior",
    category: "INTERIOR DESIGN",
    image: "/images/portfolio/project-31.jpg",
  },
  {
    title: "Aerial View Estate",
    category: "ARCHITECTURE",
    image: "/images/portfolio/project-32.jpg",
  },
  {
    title: "Garden Pathway",
    category: "LANDSCAPING",
    image: "/images/portfolio/project-33.jpg",
  },
  {
    title: "Entrance Design",
    category: "ARCHITECTURE",
    image: "/images/portfolio/project-34.jpg",
  },
  {
    title: "Residential Complex",
    category: "ARCHITECTURE",
    image: "/images/portfolio/project-35.jpg",
  },
  {
    title: "Villa Facade",
    category: "ARCHITECTURE",
    image: "/images/portfolio/project-36.jpg",
  },
  {
    title: "Outdoor Seating",
    category: "LANDSCAPING",
    image: "/images/portfolio/project-37.jpg",
  },
  {
    title: "Garden Feature",
    category: "LANDSCAPING",
    image: "/images/portfolio/project-38.jpg",
  },
  {
    title: "Estate Gardens",
    category: "LANDSCAPING",
    image: "/images/portfolio/project-39.jpg",
  },
  {
    title: "Driveway Design",
    category: "ARCHITECTURE & LANDSCAPING",
    image: "/images/portfolio/project-40.jpg",
  },
  {
    title: "Property Entrance",
    category: "ARCHITECTURE",
    image: "/images/portfolio/project-41.jpg",
  },
];

export default function PortfolioPage() {
  return (
    <PageLayout>
      <div style={{ backgroundColor: "#000000" }}>
        {/* Page Header */}
        <div style={{ textAlign: "center", padding: "50px 20px 40px" }}>
          <h1
            style={{
              fontFamily: '"neue-haas-grotesk-display", sans-serif',
              fontSize: "14px",
              fontWeight: 400,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.5)",
              marginBottom: "15px",
            }}
          >
            Our Work
          </h1>
          <p
            style={{
              fontFamily: '"neue-haas-grotesk-display", sans-serif',
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 200,
              color: "#FFFFFF",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Recent Projects (2025)
          </p>
        </div>

        {/* Portfolio Grid - Responsive: 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="portfolio-grid">
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
                  transition: "filter 0.5s ease, transform 0.5s ease",
                }}
                sizes="33vw"
              />

              {/* Gradient overlay for text readability */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "50%",
                  background: "linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)",
                  zIndex: 1,
                  pointerEvents: "none",
                }}
              />

              {/* Overlay with title */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  padding: "20px",
                  zIndex: 2,
                }}
              >
                <h3
                  style={{
                    fontFamily: '"neue-haas-grotesk-display", sans-serif',
                    fontSize: "clamp(16px, 2.5vw, 20px)",
                    fontWeight: 400,
                    color: "#FFFFFF",
                    marginBottom: "8px",
                    lineHeight: 1.3,
                    textShadow: "0 2px 8px rgba(0,0,0,0.5)",
                  }}
                >
                  {project.title}
                </h3>
                <span
                  style={{
                    fontFamily: '"neue-haas-grotesk-display", sans-serif',
                    fontSize: "clamp(10px, 1.5vw, 13px)",
                    fontWeight: 500,
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    color: "#80AE50",
                    textShadow: "0 1px 4px rgba(0,0,0,0.8)",
                  }}
                >
                  {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Responsive and hover styles */}
        <style jsx global>{`
          .portfolio-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2px;
          }
          @media (min-width: 640px) {
            .portfolio-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media (min-width: 1024px) {
            .portfolio-grid {
              grid-template-columns: repeat(3, 1fr);
              gap: 0;
            }
          }
          .portfolio-item img {
            transition: filter 0.5s ease, transform 0.5s ease !important;
          }
          .portfolio-item:hover img {
            filter: grayscale(0%) !important;
            transform: scale(1.02);
          }
        `}</style>
      </div>
    </PageLayout>
  );
}
