import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site — export to plain HTML and serve via Cloudflare static assets.
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
