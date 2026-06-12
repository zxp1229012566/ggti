/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  webpack(config) {
    config.resolve.alias["@"] = require("path").resolve(__dirname, "src");
    return config;
  },
};

module.exports = nextConfig;
