"use client";

import Image from "next/image";
import PageLayout from "@/components/PageLayout";

const values = [
  {
    title: "About",
    text: "LivingEdge — Interior Design & Construction. We are a design-focused firm made up of passionate individuals committed to transforming spaces that improve the lives of those within our community.",
  },
  {
    title: "Services",
    list: ["Interior", "Design", "Production", "Furniture", "Architectural", "Remodeling"],
  },
  {
    title: "Process",
    text: "We work closely with builders, consultants, and other partners to make sure each project runs smoothly and the final build delivers well beyond our shared aspirations.",
  },
];

export default function AboutPage() {
  return (
    <PageLayout>
      <div style={{ backgroundColor: "#000000", paddingBottom: "100px" }}>
        {/* Hero Section */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "70vh",
            overflow: "hidden",
          }}
        >
          <Image
            src="/images/portfolio/project-05.jpg"
            alt="LivingEdge Project"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ textAlign: "center", padding: "0 20px" }}>
              <h1
                style={{
                  fontFamily: '"neue-haas-grotesk-display", sans-serif',
                  fontSize: "clamp(36px, 5vw, 72px)",
                  fontWeight: 200,
                  letterSpacing: "0.02em",
                  color: "#FFFFFF",
                  marginBottom: "20px",
                }}
              >
                We design inspired spaces shaped by your vision
              </h1>
              <p
                style={{
                  fontFamily: '"neue-haas-grotesk-display", sans-serif',
                  fontSize: "20px",
                  fontWeight: 300,
                  color: "rgba(255,255,255,0.8)",
                  maxWidth: "600px",
                  margin: "0 auto",
                }}
              >
                Uniting architecture, function, and refined interior detail
              </p>
            </div>
          </div>
        </div>

        {/* Values Grid - 3 Columns */}
        <div
          style={{
            maxWidth: "1200px",
            margin: "60px auto",
            padding: "0 40px",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "40px",
          }}
        >
          {values.map((value) => (
            <div key={value.title}>
              <h2
                style={{
                  fontFamily: '"neue-haas-grotesk-display", sans-serif',
                  fontSize: "14px",
                  fontWeight: 400,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.5)",
                  marginBottom: "20px",
                }}
              >
                {value.title}
              </h2>
              {value.text && (
                <p
                  style={{
                    fontFamily: '"neue-haas-grotesk-display", sans-serif',
                    fontSize: "19px",
                    fontWeight: 300,
                    color: "rgba(255,255,255,0.9)",
                    lineHeight: 1.8,
                  }}
                >
                  {value.text}
                </p>
              )}
              {value.list && (
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                  }}
                >
                  {value.list.map((item) => (
                    <li
                      key={item}
                      style={{
                        fontFamily: '"neue-haas-grotesk-display", sans-serif',
                        fontSize: "19px",
                        fontWeight: 300,
                        color: "#80AE50",
                        lineHeight: 2,
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Featured Projects Section */}
        <div style={{ maxWidth: "1200px", margin: "80px auto", padding: "0 40px" }}>
          <h2
            style={{
              fontFamily: '"neue-haas-grotesk-display", sans-serif',
              fontSize: "14px",
              fontWeight: 400,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.5)",
              marginBottom: "30px",
            }}
          >
            Our Recent Projects (2025)
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "20px",
            }}
          >
            {[
              "/images/portfolio/project-01.jpg",
              "/images/portfolio/project-07.jpg",
              "/images/portfolio/project-32.jpg",
            ].map((img, i) => (
              <div
                key={i}
                style={{
                  position: "relative",
                  aspectRatio: "4/3",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={img}
                  alt={`Project ${i + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* High-End Experience Section */}
        <div
          style={{
            maxWidth: "1200px",
            margin: "100px auto",
            padding: "0 40px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            alignItems: "center",
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: '"neue-haas-grotesk-display", sans-serif',
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 200,
                color: "#FFFFFF",
                lineHeight: 1.3,
                marginBottom: "30px",
              }}
            >
              High-End experience of indoor outdoor Interiors
            </h2>
          </div>
          <div>
            <div style={{ marginBottom: "40px" }}>
              <h3
                style={{
                  fontFamily: '"neue-haas-grotesk-display", sans-serif',
                  fontSize: "14px",
                  fontWeight: 400,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.5)",
                  marginBottom: "15px",
                }}
              >
                Kitchen
              </h3>
              <p
                style={{
                  fontFamily: '"neue-haas-grotesk-display", sans-serif',
                  fontSize: "19px",
                  fontWeight: 300,
                  color: "rgba(255,255,255,0.8)",
                  lineHeight: 1.8,
                }}
              >
                We craft contemporary kitchen spaces focused on flow and efficiency. At every step, you remain informed, inspired, and fully involved.
              </p>
            </div>
            <div>
              <h3
                style={{
                  fontFamily: '"neue-haas-grotesk-display", sans-serif',
                  fontSize: "14px",
                  fontWeight: 400,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.5)",
                  marginBottom: "15px",
                }}
              >
                Simplicity
              </h3>
              <p
                style={{
                  fontFamily: '"neue-haas-grotesk-display", sans-serif',
                  fontSize: "19px",
                  fontWeight: 300,
                  color: "rgba(255,255,255,0.8)",
                  lineHeight: 1.8,
                }}
              >
                We embrace clean lines and subtle textures to create interiors that feel calm, functional, and timeless.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
