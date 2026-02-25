"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Welcome" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact-us", label: "Contact Us" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: "#000000",
        padding: "15px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* Logo */}
      <Link href="/" style={{ textDecoration: "none" }}>
        <span
          style={{
            fontFamily: '"neue-haas-grotesk-display", sans-serif',
            fontSize: "24px",
            fontWeight: 300,
            letterSpacing: "3px",
            color: "#FFFFFF",
          }}
        >
          LIVING<span style={{ color: "#80AE50" }}>EDGE</span>
        </span>
      </Link>

      {/* Navigation */}
      <nav style={{ display: "flex", gap: "35px" }}>
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              style={{
                fontFamily: '"neue-haas-grotesk-display", sans-serif',
                fontSize: "13px",
                fontWeight: 400,
                letterSpacing: "1.5px",
                color: isActive ? "#80AE50" : "#FFFFFF",
                textDecoration: "none",
                transition: "color 0.3s ease",
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
