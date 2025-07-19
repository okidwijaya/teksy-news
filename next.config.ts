import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
        pathname: "/**",
      },
      {
        protocol: 'https',
        hostname: 'roocnpvdpaqbtljihsfu.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(webp)$/i,
      type: 'asset/resource',
    });
    return config;
  },
};

export default nextConfig;
