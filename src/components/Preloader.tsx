"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 20;
      });
    }, 100);

    // Complete after 3 seconds (matches original animation_delay)
    const completeTimer = setTimeout(() => {
      setIsComplete(true);
    }, 3000);

    // Hide after transition (animation_duration = 1000ms)
    const hideTimer = setTimeout(() => {
      setIsHidden(true);
    }, 4000);

    return () => {
      clearInterval(interval);
      clearTimeout(completeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (isHidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[999] flex items-center justify-center transition-all duration-1000 ${
        isComplete ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{
        backgroundColor: "#000000",
      }}
    >
      {/* Progress Bar Background */}
      <div
        className="fixed top-0 left-0 w-full"
        style={{
          height: "5px",
          backgroundColor: "#919191",
        }}
      />

      {/* Progress Bar */}
      <div
        className="fixed top-0 left-0 transition-all"
        style={{
          height: "5px",
          backgroundColor: "#dd3333",
          width: `${Math.min(progress, 100)}%`,
          transition: "width 10ms linear",
        }}
      />

      {/* Animated Logo */}
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/images/logo-animated.gif"
          alt="Loading..."
          width={250}
          height={141}
          priority
          unoptimized
        />

        {/* Counter - matches original styling */}
        <p
          className="mt-4"
          style={{
            fontWeight: "bold",
            fontSize: "24px",
            color: "#65615F",
          }}
        >
          {Math.min(Math.round(progress), 100)}%
        </p>
      </div>
    </div>
  );
}
