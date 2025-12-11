import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  reactStrictMode: true,
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
        hostname: 'www.cloudsand.my.id',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cloudsand.my.id',
        port: '',
        pathname: '/**',
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(webp)$/i,
      type: "asset/resource",
    });
    return config;
  },
  turbopack: {}
};

export default nextConfig;
