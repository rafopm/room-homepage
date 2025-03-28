const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix:  '/'+process.env.PAGES_BASE_PATH || '',
  basePath:  process.env.PAGES_BASE_PATH || '',
  output: 'export'
};

export default nextConfig;