import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, 
  },
  basePath: process.env.PAGES_BASE_PATH || '',
  assetPrefix: "/room-homepage/",
  reactStrictMode: true,
};

module.exports = nextConfig;
