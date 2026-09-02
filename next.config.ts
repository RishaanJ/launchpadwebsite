import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/call",
        destination: "https://calendly.com/rishaanjain188/30min",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
