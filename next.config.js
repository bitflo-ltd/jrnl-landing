/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/jrnl-land' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/jrnl-land/' : '',
};

module.exports = nextConfig;