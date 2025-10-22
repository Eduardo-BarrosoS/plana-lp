import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "smyklcytdzgtezizofcc.supabase.co",
      },
    ],
  },
};

export default nextConfig;
