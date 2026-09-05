import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/bgmi-circuit',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
