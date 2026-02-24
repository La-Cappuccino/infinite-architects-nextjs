"use client";

export default function Footer() {
  return (
    <footer
      style={{
        position: "fixed",
        bottom: "-1px",
        left: 0,
        right: 0,
        zIndex: 40,
        borderTop: "5px solid #80AE50",
      }}
    >
      <div
        style={{
          width: "100%",
          textAlign: "center",
          padding: "5px",
          background: "rgba(0, 0, 0, 0.7)",
        }}
      >
        <p
          style={{
            fontSize: "0.7rem",
            textTransform: "uppercase",
            letterSpacing: "1px",
            color: "#FFFFFF",
            margin: 0,
          }}
        >
          © Infinite Architects {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
