// next.config.js
const isProd = process.env.NODE_ENV === 'production';
const repoName = 'room-homepage'; 

module.exports = {
  assetPrefix: isProd ? `/${repoName}/` : '',
  basePath: isProd ? `/${repoName}` : '',
  images: {
    unoptimized: true,  
  },
};