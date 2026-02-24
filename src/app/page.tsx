"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import PageLayout from "@/components/PageLayout";

export default function HomePage() {
  const [preloaderVisible, setPreloaderVisible] = useState(true);
  const [preloaderFading, setPreloaderFading] = useState(false);

  useEffect(() => {
    // Start fade out after 2 seconds
    const fadeTimer = setTimeout(() => {
      setPreloaderFading(true);
    }, 2000);

    // Remove preloader after fade completes
    const removeTimer = setTimeout(() => {
      setPreloaderVisible(false);
    }, 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  // Click to skip preloader
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
            {/* Animated Logo GIF */}
            <Image
              src="/images/infinite-logo-animated.gif"
              alt="Loading..."
              width={300}
              height={169}
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
          {/* Background Image */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 1,
            }}
          >
            <Image
              src="/images/hero/infinite-designers-001.webp"
              alt="Luxury villa design"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          {/* Centered Text */}
          <div
            style={{
              position: "relative",
              zIndex: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <h1
              style={{
                fontFamily: '"neue-haas-grotesk-display", sans-serif',
                fontSize: "clamp(24px, 4vw, 48px)",
                fontWeight: 200,
                letterSpacing: "0.1em",
                color: "#FFFFFF",
                textAlign: "center",
                margin: 0,
              }}
            >
              Award Winning Design Studio
            </h1>
          </div>
        </div>
      </PageLayout>
    </>
  );
}
