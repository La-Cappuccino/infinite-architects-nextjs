import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Infinite Architects Design System
        infinite: {
          green: "#80ae50",
          "green-dark": "#6a9340",
          dark: "#303030",
          darker: "#000000",
          muted: "#65615F",
          "muted-light": "#919191",
          error: "#dd3333",
        },
      },
      fontFamily: {
        // Primary font - Neue Haas Grotesk Display
        display: [
          "neue-haas-grotesk-display",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      fontWeight: {
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
      },
      container: {
        center: true,
        padding: "5%",
      },
      screens: {
        mobile: "767px",
        tablet: "1024px",
      },
      animation: {
        "fade-in": "fadeIn 1s ease-out forwards",
        "fade-in-up": "fadeInUp 1s ease-out forwards",
        "slide-down": "slideDown 0.3s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
