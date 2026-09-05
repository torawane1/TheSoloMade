import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/TheSoloMade',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
