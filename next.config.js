/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  basePath: isProd ? '/react-next-app' : '',
  assetPrefix: isProd ? '/react-next-app' : '/',
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
