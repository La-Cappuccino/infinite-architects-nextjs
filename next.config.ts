import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "infinitedesigners.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "use.typekit.net",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    // Allow unoptimized images for GIFs
    unoptimized: false,
  },
  // Enable static export if needed
  // output: 'export',
};

export default nextConfig;
