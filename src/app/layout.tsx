import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";

export const metadata: Metadata = {
  title: "Infinite Architect - Award Winning Design Studio - Dubai, UAE",
  description:
    "A young studio-based architecture and interior design firm based in Dubai UAE",
  metadataBase: new URL("https://infinitedesigners.com"),
  openGraph: {
    title: "Infinite Architect - Award Winning Design Studio - Dubai, UAE",
    description:
      "A young studio-based architecture and interior design firm based in Dubai UAE",
    url: "https://infinitedesigners.com/",
    siteName: "Infinite Architect",
    images: [
      {
        url: "/images/logo-white.png",
        width: 500,
        height: 297,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Infinite Architect - Award Winning Design Studio",
    description:
      "A young studio-based architecture and interior design firm based in Dubai UAE",
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <head>
        <link
          rel="stylesheet"
          href="https://use.typekit.net/diu1zgo.css"
        />
      </head>
      <body
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: "#000000",
          color: "#FFFFFF",
          fontFamily: '"neue-haas-grotesk-display", sans-serif',
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        }}
      >
        <Preloader />
        <Header />
        <main id="content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
