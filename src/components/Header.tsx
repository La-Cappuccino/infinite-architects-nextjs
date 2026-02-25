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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: scrolled ? "rgba(0,0,0,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        padding: scrolled ? "15px 50px" : "25px 50px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        transition: "all 0.4s ease",
      }}
    >
      {/* Logo */}
      <Link href="/">
        <Image
          src="/images/logo-white.png"
          alt="LivingEdge"
          width={160}
          height={43}
          style={{ 
            height: scrolled ? "36px" : "43px", 
            width: "auto",
            transition: "height 0.4s ease",
          }}
          priority
        />
      </Link>

      {/* Navigation */}
      <nav style={{ display: "flex", gap: "45px" }}>
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
    </header>
  );
}
