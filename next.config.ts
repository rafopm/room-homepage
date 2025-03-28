import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, 
  },
  basePath: "/room-homepage",
  assetPrefix: "/room-homepage/",
  reactStrictMode: true,
};

module.exports = nextConfig;
