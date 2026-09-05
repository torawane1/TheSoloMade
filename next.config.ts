import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/TheSoloMade/bgmi-circuit',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
