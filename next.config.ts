import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "standalone",
  sassOptions: {
    includePaths: [path.join(__dirname, "src")],
    silenceDeprecations: ["legacy-js-api"]
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  }
};

export default nextConfig;
