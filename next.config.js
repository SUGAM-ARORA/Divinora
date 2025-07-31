/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  maxDuration: 60,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
