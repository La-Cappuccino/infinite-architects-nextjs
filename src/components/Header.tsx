"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact-us", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          backgroundColor: scrolled ? "rgba(0,0,0,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          padding: scrolled ? "15px 20px" : "25px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          transition: "all 0.4s ease",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ zIndex: 1001 }}>
          <Image
            src="/images/logo-white.png"
            alt="LivingEdge"
            width={160}
            height={43}
            style={{ 
              height: scrolled ? "32px" : "40px", 
              width: "auto",
              transition: "height 0.4s ease",
            }}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="line-animate"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "12px",
                  fontWeight: 400,
                  letterSpacing: "2px",
                  color: isActive ? "#80AE50" : "#FFFFFF",
                  textDecoration: "none",
                  textTransform: "uppercase",
                  transition: "color 0.3s ease",
                  paddingBottom: "5px",
                  position: "relative",
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            display: "none",
            zIndex: 1001,
          }}
        >
          <div style={{ width: "24px", height: "20px", position: "relative" }}>
            <span
              style={{
                position: "absolute",
                left: 0,
                width: "100%",
                height: "2px",
                backgroundColor: "#fff",
                transition: "all 0.3s ease",
                top: mobileMenuOpen ? "9px" : "0",
                transform: mobileMenuOpen ? "rotate(45deg)" : "none",
              }}
            />
            <span
              style={{
                position: "absolute",
                left: 0,
                top: "9px",
                width: "100%",
                height: "2px",
                backgroundColor: "#fff",
                transition: "all 0.3s ease",
                opacity: mobileMenuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                position: "absolute",
                left: 0,
                width: "100%",
                height: "2px",
                backgroundColor: "#fff",
                transition: "all 0.3s ease",
                top: mobileMenuOpen ? "9px" : "18px",
                transform: mobileMenuOpen ? "rotate(-45deg)" : "none",
              }}
            />
          </div>
        </button>

        <style jsx>{`
          .desktop-nav {
            display: flex;
            gap: 45px;
          }
          .mobile-menu-btn {
            display: none !important;
          }
          @media (max-width: 768px) {
            .desktop-nav {
              display: none !important;
            }
            .mobile-menu-btn {
              display: block !important;
            }
          }
        `}</style>
      </header>

      {/* Mobile Menu - Slide from Right */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: "100%",
          maxWidth: "320px",
          height: "100vh",
          backgroundColor: "#000",
          zIndex: 1000,
          transform: mobileMenuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          display: "flex",
          flexDirection: "column",
          padding: "100px 40px 40px",
        }}
      >
        {/* Navigation Links */}
        <nav style={{ flex: 1 }}>
          {navItems.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  display: "block",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "14px",
                  fontWeight: 400,
                  letterSpacing: "3px",
                  color: isActive ? "#80AE50" : "#FFFFFF",
                  textDecoration: "none",
                  textTransform: "uppercase",
                  padding: "20px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.1)",
                  transition: "color 0.3s ease, transform 0.3s ease",
                  transitionDelay: mobileMenuOpen ? `${index * 0.05}s` : "0s",
                  transform: mobileMenuOpen ? "translateX(0)" : "translateX(20px)",
                  opacity: mobileMenuOpen ? 1 : 0,
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Bottom Info */}
        <div
          style={{
            paddingTop: "40px",
            borderTop: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "12px",
              color: "rgba(255,255,255,0.5)",
              marginBottom: "10px",
            }}
          >
            Get in Touch
          </p>
          <a
            href="mailto:hello@livingedge.ug"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "14px",
              color: "#80AE50",
              textDecoration: "none",
            }}
          >
            hello@livingedge.ug
          </a>
        </div>
      </div>

      {/* Backdrop */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 999,
          }}
        />
      )}
    </>
  );
}
