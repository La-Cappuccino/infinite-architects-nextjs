import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";

export const metadata: Metadata = {
  title: {
    default: "Infinite Architects - Award Winning Design Studio - Dubai, UAE",
    template: "%s | Infinite Architects"
  },
  description:
    "Award-winning architecture and interior design firm based in Dubai, UAE. Creating extraordinary spaces that inspire and transform with innovative design solutions.",
  metadataBase: new URL("https://infinitedesigners.com"),
  authors: [{ name: "Infinite Architects", url: "https://infinitedesigners.com" }],
  creator: "Infinite Architects",
  publisher: "Infinite Architects",
  keywords: [
    "architecture",
    "interior design", 
    "Dubai",
    "UAE",
    "design studio",
    "luxury design",
    "residential architecture",
    "commercial design",
    "award winning"
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://infinitedesigners.com",
    siteName: "Infinite Architects",
    title: "Infinite Architects - Award Winning Design Studio - Dubai, UAE",
    description:
      "Award-winning architecture and interior design firm based in Dubai, UAE. Creating extraordinary spaces that inspire and transform.",
    images: [
      {
        url: "/images/logo-white.png",
        width: 500,
        height: 297,
        alt: "Infinite Architects Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Infinite Architects - Award Winning Design Studio",
    description:
      "Award-winning architecture and interior design firm based in Dubai, UAE. Creating extraordinary spaces that inspire and transform.",
    images: ["/images/logo-white.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#80ae50' },
    { media: '(prefers-color-scheme: dark)', color: '#80ae50' }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://use.typekit.net/diu1zgo.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://use.typekit.net" />
      </head>
      <body className="bg-black text-white font-sans antialiased selection:bg-infinite-green-500/20 selection:text-infinite-green-500">
        {/* Page transition overlay */}
        <div 
          id="page-transition" 
          className="fixed inset-0 bg-black z-[100] pointer-events-none opacity-0 transition-opacity duration-500"
        />
        
        <Preloader />
        
        {/* Skip to content for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[110] focus:px-4 focus:py-2 focus:bg-infinite-green-500 focus:text-black focus:rounded-lg"
        >
          Skip to main content
        </a>
        
        <Header />
        
        <main 
          id="main-content" 
          className="relative min-h-screen pt-[80px] lg:pt-[100px]"
          role="main"
        >
          <div className="transition-all duration-500 ease-out">
            {children}
          </div>
        </main>
        
        <Footer />

        {/* Smooth scroll behavior script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Smooth page transitions
              document.addEventListener('DOMContentLoaded', function() {
                const pageTransition = document.getElementById('page-transition');
                
                // Add transition effect to internal links
                document.addEventListener('click', function(e) {
                  const link = e.target.closest('a[href^="/"]');
                  if (link && !link.hasAttribute('target')) {
                    e.preventDefault();
                    pageTransition.style.opacity = '1';
                    setTimeout(() => {
                      window.location.href = link.href;
                    }, 250);
                  }
                });

                // Hide transition overlay on page load
                setTimeout(() => {
                  pageTransition.style.opacity = '0';
                }, 100);
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
