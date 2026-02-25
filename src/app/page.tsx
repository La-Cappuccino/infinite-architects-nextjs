"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import PageLayout from "@/components/PageLayout";

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [preloaderVisible, setPreloaderVisible] = useState(true);
  const [preloaderFading, setPreloaderFading] = useState(false);

  const heroImages = [
    "/images/portfolio/project-05.jpg",
    "/images/portfolio/project-01.jpg",
    "/images/portfolio/project-07.jpg",
    "/images/portfolio/project-32.jpg",
  ];

  useEffect(() => {
    // Preloader timing
    const fadeTimer = setTimeout(() => setPreloaderFading(true), 1500);
    const removeTimer = setTimeout(() => setPreloaderVisible(false), 2500);

    // Hero slideshow
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
      clearInterval(slideInterval);
    };
  }, [heroImages.length]);

  const skipPreloader = () => {
    setPreloaderFading(true);
    setTimeout(() => setPreloaderVisible(false), 500);
  };

  return (
    <>
      {/* Preloader */}
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
            transition: "opacity 1s ease",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <Image
              src="/images/logo-white.png"
              alt="LivingEdge"
              width={280}
              height={75}
              style={{ maxWidth: "80vw", height: "auto" }}
              priority
            />
          </div>
        </div>
      )}

      {/* Main Page Content */}
      <PageLayout>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "calc(100vh - 90px)",
            overflow: "hidden",
          }}
        >
          {/* Background Images - Slideshow */}
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
                style={{ objectFit: "cover" }}
                priority={index === 0}
              />
            </div>
          ))}

          {/* Dark overlay for text readability */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.3)",
              zIndex: 5,
            }}
          />

          {/* Centered Text */}
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
                fontFamily: '"neue-haas-grotesk-display", sans-serif',
                fontSize: "18px",
                fontWeight: 300,
                letterSpacing: "4px",
                textTransform: "uppercase",
                color: "#80AE50",
                marginBottom: "20px",
              }}
            >
              Interior Design & Construction
            </p>
            <h1
              style={{
                fontFamily: '"neue-haas-grotesk-display", sans-serif',
                fontSize: "clamp(32px, 5vw, 60px)",
                fontWeight: 200,
                letterSpacing: "0.05em",
                color: "#FFFFFF",
                margin: 0,
                lineHeight: 1.2,
                maxWidth: "900px",
              }}
            >
              We design inspired spaces shaped by your vision
            </h1>
          </div>

          {/* Slide indicators */}
          <div
            style={{
              position: "absolute",
              bottom: "40px",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: "12px",
              zIndex: 10,
            }}
          >
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                style={{
                  width: currentSlide === index ? "30px" : "10px",
                  height: "10px",
                  borderRadius: "5px",
                  backgroundColor: currentSlide === index ? "#80AE50" : "rgba(255,255,255,0.5)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </PageLayout>
    </>
  );
}
