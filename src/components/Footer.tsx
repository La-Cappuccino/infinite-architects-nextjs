"use client";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "2px solid #80AE50",
        padding: "20px 0",
        textAlign: "center",
        backgroundColor: "#000000",
      }}
    >
      <p
        style={{
          fontFamily: '"neue-haas-grotesk-display", sans-serif',
          fontSize: "11px",
          fontWeight: 400,
          letterSpacing: "1px",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.5)",
          margin: 0,
        }}
      >
        © LIVINGEDGE 2026. ALL RIGHTS RESERVED.
      </p>
    </footer>
  );
}
