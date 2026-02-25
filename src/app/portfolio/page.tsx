"use client";

import Image from "next/image";
import PageLayout from "@/components/PageLayout";

const projects = [
  {
    title: "Contemporary Office Villa, Kampala",
    category: "ARCHITECTURE & INTERIOR DESIGN",
    image: "/images/portfolio/project-01.jpg",
  },
  {
    title: "Modern Residence Exterior, Kampala",
    category: "ARCHITECTURE",
    image: "/images/portfolio/project-02.jpg",
  },
  {
    title: "Private Villa, Kampala",
    category: "ARCHITECTURE & INTERIOR DESIGN",
    image: "/images/portfolio/project-03.jpg",
  },
  {
    title: "Contemporary Home Design",
    category: "ARCHITECTURE",
    image: "/images/portfolio/project-04.jpg",
  },
  {
    title: "Modern Villa with Balcony, Kampala",
    category: "ARCHITECTURE & INTERIOR DESIGN",
    image: "/images/portfolio/project-05.jpg",
  },
  {
    title: "Residential Estate, Kampala",
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
    title: "Modern Interior Design",
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
    category: "FURNITURE & INTERIOR DESIGN",
    image: "/images/portfolio/project-11.jpg",
  },
  {
    title: "Bedroom Suite Design",
    category: "INTERIOR DESIGN",
    image: "/images/portfolio/project-12.jpg",
  },
  {
    title: "Living Room Remodel",
    category: "INTERIOR DESIGN & REMODELING",
    image: "/images/portfolio/project-13.jpg",
  },
  {
    title: "Dining Area Design",
    category: "INTERIOR DESIGN",
    image: "/images/portfolio/project-14.jpg",
  },
  {
    title: "Private Estate Entry, Kampala",
    category: "ARCHITECTURE",
    image: "/images/portfolio/project-15.jpg",
  },
  {
    title: "Outdoor Living Space",
    category: "ARCHITECTURE & LANDSCAPING",
    image: "/images/portfolio/project-16.jpg",
  },
  {
    title: "Villa Terrace Design",
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
    title: "Custom Furniture Design",
    category: "FURNITURE",
    image: "/images/portfolio/project-21.jpg",
  },
  {
    title: "Home Office Space",
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
    title: "Custom Storage Solutions",
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
    title: "Pool Area Design",
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
    title: "Aerial View Estate, Kampala",
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
    title: "Residential Complex, Kampala",
    category: "ARCHITECTURE",
    image: "/images/portfolio/project-35.jpg",
  },
  {
    title: "Villa Facade",
    category: "ARCHITECTURE",
    image: "/images/portfolio/project-36.jpg",
  },
  {
    title: "Outdoor Seating Area",
    category: "LANDSCAPING",
    image: "/images/portfolio/project-37.jpg",
  },
  {
    title: "Garden Feature",
    category: "LANDSCAPING",
    image: "/images/portfolio/project-38.jpg",
  },
  {
    title: "Estate Gardens, Kampala",
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
                  transition: "filter 0.5s ease, transform 0.5s ease",
                }}
                sizes="33vw"
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
                    fontSize: "18px",
                    fontWeight: 300,
                    color: "#FFFFFF",
                    marginBottom: "8px",
                  }}
                >
                  {project.title}
                </h3>
                <span
                  style={{
                    fontFamily: '"neue-haas-grotesk-display", sans-serif',
                    fontSize: "12px",
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
