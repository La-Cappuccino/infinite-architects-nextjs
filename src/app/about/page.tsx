"use client";

import { useEffect } from "react";
import Image from "next/image";
import PageLayout from "@/components/PageLayout";

export default function AboutPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-in, .fade-in-left, .fade-in-right").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <PageLayout>
      <div style={{ backgroundColor: "#000000" }}>
        {/* Hero Section */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "80vh",
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
              background: "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ textAlign: "center", padding: "0 20px" }}>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "12px",
                  fontWeight: 400,
                  letterSpacing: "6px",
                  textTransform: "uppercase",
                  color: "#80AE50",
                  marginBottom: "25px",
                }}
              >
                About Us
              </p>
              <h1
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(40px, 6vw, 72px)",
                  fontWeight: 300,
                  letterSpacing: "0.02em",
                  color: "#FFFFFF",
                  maxWidth: "900px",
                  lineHeight: 1.1,
                }}
              >
                We design inspired spaces shaped by your vision
              </h1>
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
        <section
          style={{
            padding: "120px 40px",
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "100px",
              alignItems: "center",
            }}
          >
            <div className="fade-in-left">
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "12px",
                  fontWeight: 400,
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                  color: "#80AE50",
                  marginBottom: "25px",
                }}
              >
                Our Philosophy
              </p>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(32px, 4vw, 48px)",
                  fontWeight: 300,
                  color: "#FFFFFF",
                  lineHeight: 1.2,
                  marginBottom: "30px",
                }}
              >
                Uniting architecture, function, and refined interior detail
              </h2>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "17px",
                  fontWeight: 300,
                  color: "rgba(255,255,255,0.7)",
                  lineHeight: 1.9,
                  marginBottom: "25px",
                }}
              >
                LivingEdge is a design-focused firm made up of passionate individuals committed to transforming spaces that improve the lives of those within our community.
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "17px",
                  fontWeight: 300,
                  color: "rgba(255,255,255,0.7)",
                  lineHeight: 1.9,
                }}
              >
                We work closely with builders, consultants, and other partners to make sure each project runs smoothly and the final build delivers well beyond our shared aspirations.
              </p>
            </div>

            <div
              className="fade-in-right"
              style={{
                position: "relative",
                aspectRatio: "4/5",
                overflow: "hidden",
              }}
            >
              <Image
                src="/images/portfolio/project-01.jpg"
                alt="LivingEdge Work"
                fill
                style={{ objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "-20px",
                  right: "-20px",
                  width: "40%",
                  aspectRatio: "1",
                  backgroundColor: "#80AE50",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "48px",
                    fontWeight: 300,
                    color: "#000000",
                  }}
                >
                  2025
                </span>
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "11px",
                    fontWeight: 400,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    color: "#000000",
                  }}
                >
                  Projects
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section
          style={{
            padding: "80px 40px 120px",
            backgroundColor: "rgba(255,255,255,0.02)",
          }}
        >
          <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
            <div
              className="fade-in"
              style={{ textAlign: "center", marginBottom: "80px" }}
            >
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "12px",
                  fontWeight: 400,
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                  color: "#80AE50",
                  marginBottom: "20px",
                }}
              >
                What We Offer
              </p>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(32px, 4vw, 48px)",
                  fontWeight: 300,
                  color: "#FFFFFF",
                }}
              >
                Our Services
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "30px",
              }}
            >
              {[
                { title: "Interior Design", num: "01", desc: "Creating beautiful, functional spaces that reflect your style and needs." },
                { title: "Construction", num: "02", desc: "Expert building services from foundation to finishing touches." },
                { title: "Furniture", num: "03", desc: "Custom furniture design and sourcing to complete your space." },
                { title: "Architectural", num: "04", desc: "Comprehensive architectural design for residential and commercial projects." },
                { title: "Remodeling", num: "05", desc: "Transforming existing spaces into modern, efficient environments." },
                { title: "Production", num: "06", desc: "Quality manufacturing and installation of interior elements." },
              ].map((service, i) => (
                <div
                  key={service.title}
                  className={`fade-in delay-${(i % 3) + 1}`}
                  style={{
                    padding: "40px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    transition: "all 0.4s ease",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#80AE50";
                    e.currentTarget.style.backgroundColor = "rgba(128,174,80,0.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                    e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "42px",
                      fontWeight: 300,
                      color: "rgba(128,174,80,0.3)",
                      display: "block",
                      marginBottom: "20px",
                    }}
                  >
                    {service.num}
                  </span>
                  <h3
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "20px",
                      fontWeight: 400,
                      color: "#FFFFFF",
                      marginBottom: "15px",
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "15px",
                      fontWeight: 300,
                      color: "rgba(255,255,255,0.6)",
                      lineHeight: 1.7,
                    }}
                  >
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section style={{ padding: "120px 40px", maxWidth: "1400px", margin: "0 auto" }}>
          <div
            className="fade-in"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              gap: "80px",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "12px",
                  fontWeight: 400,
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                  color: "#80AE50",
                  marginBottom: "25px",
                }}
              >
                Our Process
              </p>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(32px, 4vw, 48px)",
                  fontWeight: 300,
                  color: "#FFFFFF",
                  lineHeight: 1.2,
                }}
              >
                High-End experience of indoor outdoor Interiors
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "50px",
              }}
            >
              <div className="fade-in delay-1">
                <div
                  style={{
                    width: "50px",
                    height: "2px",
                    backgroundColor: "#80AE50",
                    marginBottom: "25px",
                  }}
                />
                <h3
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "18px",
                    fontWeight: 400,
                    color: "#FFFFFF",
                    marginBottom: "15px",
                  }}
                >
                  Kitchen
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "15px",
                    fontWeight: 300,
                    color: "rgba(255,255,255,0.6)",
                    lineHeight: 1.8,
                  }}
                >
                  We craft contemporary kitchen spaces focused on flow and efficiency. At every step, you remain informed, inspired, and fully involved.
                </p>
              </div>

              <div className="fade-in delay-2">
                <div
                  style={{
                    width: "50px",
                    height: "2px",
                    backgroundColor: "#80AE50",
                    marginBottom: "25px",
                  }}
                />
                <h3
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "18px",
                    fontWeight: 400,
                    color: "#FFFFFF",
                    marginBottom: "15px",
                  }}
                >
                  Simplicity
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "15px",
                    fontWeight: 300,
                    color: "rgba(255,255,255,0.6)",
                    lineHeight: 1.8,
                  }}
                >
                  We embrace clean lines and subtle textures to create interiors that feel calm, functional, and timeless.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
