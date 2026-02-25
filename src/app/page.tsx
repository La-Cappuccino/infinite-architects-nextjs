"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [preloaderVisible, setPreloaderVisible] = useState(true);
  const [preloaderFading, setPreloaderFading] = useState(false);
  const [heroTextVisible, setHeroTextVisible] = useState(false);
  const sectionsRef = useRef<HTMLDivElement>(null);

  const heroImages = [
    "/images/portfolio/project-05.jpg",
    "/images/portfolio/project-01.jpg", 
    "/images/portfolio/project-07.jpg",
    "/images/portfolio/project-32.jpg",
  ];

  useEffect(() => {
    // Preloader timing
    const fadeTimer = setTimeout(() => setPreloaderFading(true), 1200);
    const removeTimer = setTimeout(() => {
      setPreloaderVisible(false);
      setHeroTextVisible(true);
    }, 2000);

    // Hero slideshow
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);

    // Scroll animations
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

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
      clearInterval(slideInterval);
      observer.disconnect();
    };
  }, [heroImages.length]);

  const skipPreloader = () => {
    setPreloaderFading(true);
    setTimeout(() => {
      setPreloaderVisible(false);
      setHeroTextVisible(true);
    }, 400);
  };

  return (
    <>
      {/* Modern Preloader */}
      {preloaderVisible && (
        <div
          onClick={skipPreloader}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "#000000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            cursor: "pointer",
            opacity: preloaderFading ? 0 : 1,
            transition: "opacity 0.8s ease",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <Image
              src="/images/logo-white.png"
              alt="LivingEdge"
              width={220}
              height={59}
              style={{ 
                maxWidth: "70vw", 
                height: "auto",
                animation: "pulse 2s ease-in-out infinite",
              }}
              priority
            />
            <style jsx global>{`
              @keyframes pulse {
                0%, 100% { opacity: 0.7; }
                50% { opacity: 1; }
              }
            `}</style>
          </div>
        </div>
      )}

      {/* Main Page Content */}
      <PageLayout>
        {/* Hero Section */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100vh",
            overflow: "hidden",
          }}
        >
          {/* Background Images - Slideshow with Ken Burns */}
          {heroImages.map((img, index) => (
            <div
              key={img}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                opacity: currentSlide === index ? 1 : 0,
                transition: "opacity 1.5s ease-in-out",
                zIndex: 1,
              }}
            >
              <Image
                src={img}
                alt={`LivingEdge Project ${index + 1}`}
                fill
                style={{ 
                  objectFit: "cover",
                  transform: currentSlide === index ? "scale(1.05)" : "scale(1)",
                  transition: "transform 8s ease-out",
                }}
                priority={index === 0}
              />
            </div>
          ))}

          {/* Gradient overlay */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 100%)",
              zIndex: 5,
            }}
          />

          {/* Hero Content */}
          <div
            style={{
              position: "relative",
              zIndex: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              textAlign: "center",
              padding: "0 20px",
            }}
          >
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "14px",
                fontWeight: 400,
                letterSpacing: "6px",
                textTransform: "uppercase",
                color: "#80AE50",
                marginBottom: "30px",
                opacity: heroTextVisible ? 1 : 0,
                transform: heroTextVisible ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.8s ease 0.2s",
              }}
            >
              Interior Design & Construction
            </p>
            <h1
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(40px, 7vw, 80px)",
                fontWeight: 300,
                letterSpacing: "0.02em",
                color: "#FFFFFF",
                margin: 0,
                lineHeight: 1.1,
                maxWidth: "1000px",
                opacity: heroTextVisible ? 1 : 0,
                transform: heroTextVisible ? "translateY(0)" : "translateY(30px)",
                transition: "all 1s ease 0.4s",
              }}
            >
              We design inspired spaces shaped by your vision
            </h1>
            
            {/* Scroll indicator */}
            <div
              style={{
                position: "absolute",
                bottom: "40px",
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
                opacity: heroTextVisible ? 1 : 0,
                transition: "opacity 1s ease 1s",
              }}
            >
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "11px",
                  fontWeight: 400,
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                Scroll
              </span>
              <div
                style={{
                  width: "1px",
                  height: "40px",
                  background: "linear-gradient(180deg, rgba(255,255,255,0.6) 0%, transparent 100%)",
                  animation: "scrollLine 2s ease-in-out infinite",
                }}
              />
              <style jsx>{`
                @keyframes scrollLine {
                  0%, 100% { transform: scaleY(1); opacity: 1; }
                  50% { transform: scaleY(0.5); opacity: 0.5; }
                }
              `}</style>
            </div>
          </div>

          {/* Slide indicators */}
          <div
            style={{
              position: "absolute",
              bottom: "40px",
              right: "40px",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              zIndex: 10,
            }}
          >
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                style={{
                  width: "3px",
                  height: currentSlide === index ? "40px" : "20px",
                  backgroundColor: currentSlide === index ? "#80AE50" : "rgba(255,255,255,0.4)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.4s ease",
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Services Section */}
        <section
          ref={sectionsRef}
          style={{
            padding: "120px 40px",
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          <div className="grid-services">
            <div className="fade-in">
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "12px",
                  fontWeight: 400,
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.5)",
                  marginBottom: "20px",
                }}
              >
                What We Do
              </p>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(36px, 4vw, 52px)",
                  fontWeight: 300,
                  color: "#FFFFFF",
                  lineHeight: 1.2,
                  marginBottom: "30px",
                }}
              >
                Creating spaces that inspire
              </h2>
              <div
                style={{
                  width: "60px",
                  height: "2px",
                  backgroundColor: "#80AE50",
                  marginBottom: "30px",
                }}
              />
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "17px",
                  fontWeight: 300,
                  color: "rgba(255,255,255,0.7)",
                  lineHeight: 1.9,
                }}
              >
                LivingEdge — Interior Design & Construction. We are a design-focused firm committed to transforming spaces that improve lives within our community.
              </p>
            </div>

            <div className="grid-services-cards">
              {[
                { title: "Interior", desc: "Thoughtful interiors that balance aesthetics with function" },
                { title: "Design", desc: "Creative solutions tailored to your unique vision" },
                { title: "Furniture", desc: "Custom pieces that define and complete your space" },
                { title: "Architectural", desc: "Structural design that stands the test of time" },
                { title: "Remodeling", desc: "Transform existing spaces into modern environments" },
                { title: "Production", desc: "Quality manufacturing of interior elements" },
              ].map((service, i) => (
                <div
                  key={service.title}
                  className={`fade-in delay-${i + 1}`}
                  style={{
                    padding: "30px",
                    background: "rgba(255,255,255,0.02)",
                    borderLeft: "2px solid #80AE50",
                    transition: "all 0.3s ease",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "18px",
                      fontWeight: 400,
                      color: "#80AE50",
                      marginBottom: "12px",
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "14px",
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

        {/* Featured Projects */}
        <section style={{ padding: "80px 0" }}>
          <div
            className="fade-in"
            style={{
              textAlign: "center",
              marginBottom: "60px",
              padding: "0 40px",
            }}
          >
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "12px",
                fontWeight: 400,
                letterSpacing: "4px",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.5)",
                marginBottom: "20px",
              }}
            >
              Recent Work
            </p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(36px, 4vw, 52px)",
                fontWeight: 300,
                color: "#FFFFFF",
              }}
            >
              Featured Projects
            </h2>
          </div>

          <div className="grid-projects">
            {[
              { img: "/images/portfolio/project-05.jpg", title: "Villa with Balcony", cat: "Architecture" },
              { img: "/images/portfolio/project-25.jpg", title: "Luxury Closet", cat: "Interior" },
              { img: "/images/portfolio/project-32.jpg", title: "Estate Aerial", cat: "Architecture" },
              { img: "/images/portfolio/project-01.jpg", title: "Contemporary Villa", cat: "Architecture" },
              { img: "/images/portfolio/project-07.jpg", title: "Garden Estate", cat: "Landscaping" },
              { img: "/images/portfolio/project-15.jpg", title: "Private Entry", cat: "Architecture" },
            ].map((project, i) => (
              <Link
                href="/portfolio"
                key={i}
                className={`fade-in delay-${(i % 3) + 1}`}
                style={{
                  position: "relative",
                  aspectRatio: "1/1",
                  overflow: "hidden",
                  cursor: "pointer",
                  display: "block",
                }}
              >
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  style={{
                    objectFit: "cover",
                    filter: "grayscale(100%) brightness(0.8)",
                    transition: "all 0.6s ease",
                  }}
                  className="project-img"
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.8) 100%)",
                    opacity: 0,
                    transition: "opacity 0.4s ease",
                  }}
                  className="project-overlay"
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "25px",
                    left: "25px",
                    opacity: 0,
                    transform: "translateY(10px)",
                    transition: "all 0.4s ease 0.1s",
                  }}
                  className="project-info"
                >
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "11px",
                      fontWeight: 400,
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      color: "#80AE50",
                      marginBottom: "8px",
                    }}
                  >
                    {project.cat}
                  </p>
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "24px",
                      fontWeight: 400,
                      color: "#FFFFFF",
                    }}
                  >
                    {project.title}
                  </h3>
                </div>
                <style jsx>{`
                  a:hover .project-img {
                    filter: grayscale(0%) brightness(1);
                    transform: scale(1.05);
                  }
                  a:hover .project-overlay {
                    opacity: 1;
                  }
                  a:hover .project-info {
                    opacity: 1;
                    transform: translateY(0);
                  }
                `}</style>
              </Link>
            ))}
          </div>

          <div
            className="fade-in"
            style={{
              textAlign: "center",
              marginTop: "60px",
            }}
          >
            <Link
              href="/portfolio"
              className="btn-modern"
              style={{
                display: "inline-block",
                padding: "18px 50px",
                border: "1px solid #80AE50",
                color: "#80AE50",
                fontFamily: "'Inter', sans-serif",
                fontSize: "13px",
                fontWeight: 400,
                letterSpacing: "3px",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              View All Projects
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="fade-in"
          style={{
            padding: "120px 40px",
            textAlign: "center",
            background: "linear-gradient(180deg, transparent 0%, rgba(128,174,80,0.05) 100%)",
          }}
        >
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 300,
              color: "#FFFFFF",
              marginBottom: "20px",
              maxWidth: "700px",
              margin: "0 auto 30px",
            }}
          >
            Ready to transform your space?
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "17px",
              fontWeight: 300,
              color: "rgba(255,255,255,0.6)",
              marginBottom: "40px",
              maxWidth: "500px",
              margin: "0 auto 40px",
            }}
          >
            Let&apos;s discuss your vision and create something extraordinary together.
          </p>
          <Link
            href="/contact-us"
            className="btn-modern"
            style={{
              display: "inline-block",
              padding: "20px 60px",
              backgroundColor: "#80AE50",
              color: "#000000",
              fontFamily: "'Inter', sans-serif",
              fontSize: "13px",
              fontWeight: 500,
              letterSpacing: "3px",
              textTransform: "uppercase",
              textDecoration: "none",
              border: "1px solid #80AE50",
            }}
          >
            Start Your Project
          </Link>
        </section>
      </PageLayout>
    </>
  );
}
