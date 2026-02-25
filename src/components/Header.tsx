"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact-us", label: "Contact" },
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
        padding: "20px 50px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* Logo */}
      <Link href="/">
        <Image
          src="/images/logo-white.png"
          alt="LivingEdge"
          width={180}
          height={48}
          style={{ height: "48px", width: "auto" }}
          priority
        />
      </Link>

      {/* Navigation */}
      <nav style={{ display: "flex", gap: "40px" }}>
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              style={{
                fontFamily: '"neue-haas-grotesk-display", sans-serif',
                fontSize: "15px",
                fontWeight: 400,
                letterSpacing: "1.5px",
                color: isActive ? "#80AE50" : "#FFFFFF",
                textDecoration: "none",
                transition: "color 0.3s ease",
                textTransform: "uppercase",
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
