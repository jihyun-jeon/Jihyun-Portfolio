/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: "/portfolio",
  env: {
    BASE_URL: "/portfolio",
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
