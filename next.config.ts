import type { NextConfig } from "next";

const visualCache = "public, max-age=86400, stale-while-revalidate=604800";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/projects/:path*",
        headers: [{ key: "Cache-Control", value: visualCache }],
      },
      {
        source: "/logo.svg",
        headers: [{ key: "Cache-Control", value: visualCache }],
      },
      {
        source: "/logo-hero-alpha.webp",
        headers: [{ key: "Cache-Control", value: visualCache }],
      },
    ];
  },
};

export default nextConfig;
