const isProd = process.env.PAGES_BASE_PATH === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? '/room-homepage/' : '',
  basePath: isProd ? '/room-homepage' : '',
  output: 'export'
};

export default nextConfig;