import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      bodySizeLimit: "100mb",
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "qb1kwi9db3.ufs.sh",
        pathname: "/f/*",
      },
    ],
  },
};

export default nextConfig;
