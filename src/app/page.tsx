"use client";

import Image from "next/image";

export default function HomePage() {
  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        backgroundColor: "#000000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Background Video/Image */}
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
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.3,
          }}
        >
          <source
            src="https://infinitedesigners.com/wp-content/uploads/Infinite-Video-New-Site-3.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Centered Logo and Text */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
        }}
      >
        {/* INFINITE Logo */}
        <div style={{ marginBottom: "20px" }}>
          <Image
            src="/images/infinite-logo.png"
            alt="Infinite"
            width={500}
            height={200}
            style={{
              maxWidth: "80vw",
              height: "auto",
            }}
            priority
          />
        </div>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: '"neue-haas-grotesk-display", sans-serif',
            fontSize: "12px",
            fontWeight: 400,
            letterSpacing: "4px",
            textTransform: "uppercase",
            color: "#FFFFFF",
            margin: 0,
          }}
        >
          ARCHITECTURE | INTERIOR DESIGN | URBAN PLANNING
        </p>
      </div>
    </div>
  );
}
