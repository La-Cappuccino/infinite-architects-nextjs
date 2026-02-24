"use client";

import Link from "next/link";
import Image from "next/image";
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
      <Link href="/">
        <Image
          src="/images/infinite-logo.png"
          alt="Infinite Architects"
          width={180}
          height={107}
          style={{ height: "60px", width: "auto" }}
          priority
        />
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
