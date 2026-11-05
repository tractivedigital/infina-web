import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Self-contained server bundle (.next/standalone) for Azure App Service / containers.
  output: 'standalone',
  reactStrictMode: true,
  poweredByHeader: false,
  images: { formats: ['image/avif', 'image/webp'] },
};

export default nextConfig;
