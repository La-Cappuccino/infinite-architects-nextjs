"use client";

import Image from "next/image";
import PageLayout from "@/components/PageLayout";

const values = [
  {
    title: "we design...",
    text: "inspired spaces shaped by your vision, uniting architecture, function, and refined interior detail. We are a design-focused firm made up of passionate individuals committed to transforming spaces that improve the lives of those within our community. Our core values are creativity, integrity, quality, and client satisfaction.",
  },
  {
    title: "we believe...",
    text: "in creating built environments moulded through conceptual innovation, attention to detail, and technical excellence. We have a responsibility to ensure that each of our projects enrich those who experience them and their surroundings culturally, economically and socially. Every project is an opportunity to exceed expectations.",
  },
  {
    title: "we deliver...",
    text: "through a collaborative approach between our clients and partners. We work closely with builders, consultants, and specialists to ensure each project runs smoothly. From concept to completion, we craft contemporary spaces focused on flow, efficiency, and timeless elegance. At every step, you remain informed, inspired, and fully involved.",
  },
];

export default function AboutPage() {
  return (
    <PageLayout>
      <div style={{ backgroundColor: "#000000", paddingBottom: "80px" }}>
        {/* Page Title */}
        <div style={{ textAlign: "center", padding: "40px 0" }}>
          <h1
            style={{
              fontFamily: '"neue-haas-grotesk-display", sans-serif',
              fontSize: "64px",
              fontWeight: 200,
              letterSpacing: "0.02em",
              color: "#FFFFFF",
            }}
          >
            <span style={{ color: "#80AE50" }}>About</span> LivingEdge
          </h1>
        </div>

        {/* Values Grid - 3 Columns */}
        <div
          style={{
            maxWidth: "90%",
            margin: "0 auto 60px",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "0",
          }}
        >
          {values.map((value) => (
            <div
              key={value.title}
              style={{
                border: "1px solid rgba(255,255,255,0.2)",
                padding: "25px",
                backgroundColor: "transparent",
              }}
            >
              <p
                style={{
                  fontFamily: '"neue-haas-grotesk-display", sans-serif',
                  fontSize: "16px",
                  fontWeight: 100,
                  color: "rgba(255,255,255,0.8)",
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                <span style={{ color: "#80AE50" }}>{value.title}</span>{" "}
                {value.text}
              </p>
            </div>
          ))}
        </div>

        {/* Featured Image */}
        <div
          style={{
            maxWidth: "90%",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              position: "relative",
              aspectRatio: "16/9",
              overflow: "hidden",
            }}
          >
            <Image
              src="/images/portfolio/project-05.jpg"
              alt="LivingEdge Project"
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </div>

        {/* Green Divider */}
        <div
          style={{
            maxWidth: "90%",
            margin: "40px auto",
            height: "2px",
            backgroundColor: "#80AE50",
          }}
        />

        {/* Services Section */}
        <div
          style={{
            maxWidth: "90%",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontFamily: '"neue-haas-grotesk-display", sans-serif',
              fontSize: "32px",
              fontWeight: 300,
              color: "#80AE50",
              paddingBottom: "15px",
              marginBottom: "30px",
              borderBottom: "2px solid #80AE50",
            }}
          >
            Our Services
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "30px",
            }}
          >
            {[
              { title: "Interior Design", desc: "Creating beautiful, functional spaces that reflect your style and needs." },
              { title: "Construction", desc: "Expert building services from foundation to finishing touches." },
              { title: "Furniture", desc: "Custom furniture design and sourcing to complete your space." },
              { title: "Architectural", desc: "Comprehensive architectural design for residential and commercial projects." },
              { title: "Remodeling", desc: "Transforming existing spaces into modern, efficient environments." },
              { title: "Production", desc: "Quality manufacturing and installation of interior elements." },
            ].map((service) => (
              <div key={service.title}>
                <h3
                  style={{
                    fontFamily: '"neue-haas-grotesk-display", sans-serif',
                    fontSize: "18px",
                    fontWeight: 400,
                    color: "#FFFFFF",
                    marginBottom: "10px",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontFamily: '"neue-haas-grotesk-display", sans-serif',
                    fontSize: "14px",
                    fontWeight: 100,
                    color: "rgba(255,255,255,0.7)",
                    lineHeight: 1.6,
                  }}
                >
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
