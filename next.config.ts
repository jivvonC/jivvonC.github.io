import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages serves plain files, so the site ships as a static export.
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
