import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Infinite Architects - Award Winning Design Studio - Dubai, UAE",
    template: "%s | Infinite Architects",
  },
  description:
    "Award-winning architecture and interior design firm based in Dubai, UAE.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/diu1zgo.css" />
      </head>
      <body
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: "#000000",
          color: "#ffffff",
          fontFamily: '"neue-haas-grotesk-display", sans-serif',
        }}
      >
        {children}
      </body>
    </html>
  );
}
