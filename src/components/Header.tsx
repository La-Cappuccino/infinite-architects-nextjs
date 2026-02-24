"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Welcome" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/team", label: "Team" },
  { href: "/media-room", label: "Media Room" },
  { href: "/contact-us", label: "Contact Us" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <header
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: "transparent",
      }}
    >
      <div
        style={{
          maxWidth: "90%",
          margin: "0 auto",
          padding: "24px 0",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link href="/" aria-label="Infinite Architects - Home">
          <Image
            src="/images/logo-white.png"
            alt="Infinite Architects"
            width={200}
            height={119}
            priority
            style={{ 
              maxWidth: isMobile ? "90px" : "200px", 
              height: "auto" 
            }}
          />
        </Link>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
              marginBottom: "8px",
            }}
            aria-label="Main navigation"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  fontFamily: '"neue-haas-grotesk-display", sans-serif',
                  fontWeight: 400,
                  letterSpacing: "1px",
                  fontSize: "14px",
                  color: pathname === item.href ? "#80AE50" : "#FFFFFF",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#80AE50";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color =
                    pathname === item.href ? "#80AE50" : "#FFFFFF";
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}

        {/* Mobile Menu Toggle */}
        {isMobile && (
          <button
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "6px",
              padding: "8px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <span
              style={{
                display: "block",
                width: "24px",
                height: "2px",
                background: "#FFFFFF",
                transition: "transform 0.3s",
                transform: mobileMenuOpen
                  ? "rotate(45deg) translateY(8px)"
                  : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: "24px",
                height: "2px",
                background: "#FFFFFF",
                transition: "opacity 0.3s",
                opacity: mobileMenuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                width: "24px",
                height: "2px",
                background: "#FFFFFF",
                transition: "transform 0.3s",
                transform: mobileMenuOpen
                  ? "rotate(-45deg) translateY(-8px)"
                  : "none",
              }}
            />
          </button>
        )}
      </div>

      {/* Mobile Navigation */}
      {isMobile && mobileMenuOpen && (
        <nav
          style={{
            margin: "0 5%",
          }}
          aria-label="Mobile navigation"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              borderRadius: "10px",
              overflow: "hidden",
              background: "#FFFFFF",
            }}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  padding: "12px 16px",
                  fontFamily: '"neue-haas-grotesk-display", sans-serif',
                  fontWeight: 500,
                  fontSize: "1rem",
                  color: "#000000",
                  textDecoration: "none",
                  background:
                    pathname === item.href ? "#80AE50" : "transparent",
                  transition: "background 0.3s",
                }}
                onMouseEnter={(e) => {
                  if (pathname !== item.href) {
                    e.currentTarget.style.background = "#ECFFD8";
                  }
                }}
                onMouseLeave={(e) => {
                  if (pathname !== item.href) {
                    e.currentTarget.style.background = "transparent";
                  }
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
