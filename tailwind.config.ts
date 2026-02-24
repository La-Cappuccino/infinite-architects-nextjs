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
        // 2026 Modern Design System - Rich Dark Palette
        infinite: {
          // Primary Green Palette
          green: {
            50: "#f7fdf2",
            100: "#edfbe0",
            200: "#dcf6c3",
            300: "#c3ed97",
            400: "#a4dc64",
            500: "#80ae50", // Primary
            600: "#6a9340",
            700: "#567532",
            800: "#45592b",
            900: "#3a4b26",
            950: "#1e2812",
          },
          // Rich Dark Palette (not just black)
          gray: {
            50: "#f8f9fa",
            100: "#f1f3f4",
            200: "#e9ecef",
            300: "#dee2e6",
            400: "#ced4da",
            500: "#adb5bd",
            600: "#6c757d",
            700: "#495057",
            800: "#343a40",
            850: "#2d3338", // Custom dark
            900: "#212529",
            925: "#1a1d20", // Custom darker
            950: "#101214", // Custom darkest
          },
          // Legacy colors for backwards compatibility
          "green-dark": "#6a9340",
          dark: "#2d3338",
          darker: "#101214",
          muted: "#65615F",
          "muted-light": "#919191",
          error: "#dc3545",
        },
        // Glass morphism backdrop colors
        glass: {
          light: "rgba(255, 255, 255, 0.1)",
          medium: "rgba(255, 255, 255, 0.15)",
          dark: "rgba(0, 0, 0, 0.2)",
          "dark-medium": "rgba(0, 0, 0, 0.3)",
          border: "rgba(255, 255, 255, 0.2)",
          "border-green": "rgba(128, 174, 80, 0.3)",
        },
      },
      fontFamily: {
        display: [
          "neue-haas-grotesk-display",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        sans: [
          "neue-haas-grotesk-display",
          "ui-sans-serif", 
          "system-ui",
          "sans-serif",
        ],
      },
      fontSize: {
        // Fluid Typography System with clamp()
        "display-xl": ["clamp(3rem, 8vw, 8rem)", { lineHeight: "1.1", letterSpacing: "0.05em" }],
        "display-lg": ["clamp(2.5rem, 6vw, 6rem)", { lineHeight: "1.1", letterSpacing: "0.05em" }],
        "display-md": ["clamp(2rem, 5vw, 4rem)", { lineHeight: "1.2", letterSpacing: "0.04em" }],
        "display-sm": ["clamp(1.75rem, 4vw, 3rem)", { lineHeight: "1.2", letterSpacing: "0.03em" }],
        "heading-xl": ["clamp(1.5rem, 3vw, 2.5rem)", { lineHeight: "1.3", letterSpacing: "0.02em" }],
        "heading-lg": ["clamp(1.25rem, 2.5vw, 2rem)", { lineHeight: "1.3", letterSpacing: "0.02em" }],
        "heading-md": ["clamp(1.125rem, 2vw, 1.5rem)", { lineHeight: "1.4", letterSpacing: "0.01em" }],
        "heading-sm": ["clamp(1rem, 1.5vw, 1.25rem)", { lineHeight: "1.4" }],
        "body-lg": ["clamp(1rem, 1.2vw, 1.125rem)", { lineHeight: "1.6" }],
        "body-md": ["clamp(0.875rem, 1vw, 1rem)", { lineHeight: "1.6" }],
        "body-sm": ["clamp(0.75rem, 0.9vw, 0.875rem)", { lineHeight: "1.5" }],
        "caption": ["clamp(0.625rem, 0.8vw, 0.75rem)", { lineHeight: "1.4" }],
      },
      fontWeight: {
        extralight: "200",
        light: "300", 
        normal: "400",
        medium: "500",
        semibold: "600",
      },
      spacing: {
        // Extended spacing scale for better control
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
        "34": "8.5rem",
        "38": "9.5rem",
        // Fluid spacing
        "fluid-xs": "clamp(0.5rem, 2vw, 1rem)",
        "fluid-sm": "clamp(1rem, 3vw, 2rem)",
        "fluid-md": "clamp(2rem, 5vw, 4rem)",
        "fluid-lg": "clamp(3rem, 8vw, 6rem)",
        "fluid-xl": "clamp(4rem, 10vw, 8rem)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      backdropBlur: {
        xs: "2px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "5%",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
        screens: {
          sm: "640px",
          md: "768px", 
          lg: "1024px",
          xl: "1280px",
          "2xl": "1440px",
        },
      },
      screens: {
        xs: "475px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        // Custom breakpoints
        mobile: "767px",
        tablet: "1024px",
        desktop: "1280px",
      },
      animation: {
        // Enhanced animations for 2026
        "fade-in": "fadeIn 1s ease-out forwards",
        "fade-in-up": "fadeInUp 1s ease-out forwards",
        "fade-in-down": "fadeInDown 1s ease-out forwards",
        "slide-down": "slideDown 0.3s ease-out",
        "slide-up": "slideUp 0.3s ease-out",
        "scale-in": "scaleIn 0.5s ease-out forwards",
        "reveal": "reveal 1.2s ease-out forwards",
        "glow": "glow 2s ease-in-out infinite alternate",
        "float": "float 3s ease-in-out infinite",
        "magnetic": "magnetic 0.3s ease-out",
        "blur-in": "blurIn 0.8s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(2rem)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-2rem)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-1rem)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(1rem)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        reveal: {
          "0%": { opacity: "0", transform: "translateY(3rem) scale(0.95)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(128, 174, 80, 0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(128, 174, 80, 0.6)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-0.5rem)" },
        },
        magnetic: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1)" },
        },
        blurIn: {
          "0%": { opacity: "0", filter: "blur(10px)" },
          "100%": { opacity: "1", filter: "blur(0px)" },
        },
      },
      boxShadow: {
        // Modern shadow system
        "glass": "0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.08)",
        "glass-lg": "0 16px 64px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1)",
        "green": "0 8px 32px rgba(128, 174, 80, 0.15)",
        "green-lg": "0 16px 64px rgba(128, 174, 80, 0.2)",
        "inner-glass": "inset 0 2px 4px rgba(255, 255, 255, 0.1)",
        "soft": "0 4px 20px rgba(0, 0, 0, 0.08)",
        "medium": "0 8px 30px rgba(0, 0, 0, 0.12)",
        "large": "0 16px 40px rgba(0, 0, 0, 0.15)",
        "xl": "0 24px 50px rgba(0, 0, 0, 0.2)",
      },
      blur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
export default config;
