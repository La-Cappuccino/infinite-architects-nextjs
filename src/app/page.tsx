"use client";

import { useEffect, useState } from "react";

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Animation delay for content
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('/images/hero/infinite-designers-001.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      {/* Radial gradient overlay - matches original */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(at center center, rgba(255,255,255,0) 88%, #000000 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1
          className={`font-display transition-all duration-1000 ${
            isLoaded
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
          style={{
            fontSize: "3vw",
            fontWeight: 200,
            letterSpacing: "0.09em",
            wordSpacing: "0.2em",
            color: "#FFFFFF",
          }}
        >
          Award Winning Design Studio
        </h1>
      </div>
    </section>
  );
}
