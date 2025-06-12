/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["placeholder.svg"],
    unoptimized: true,
  },
  // Add these configurations for GitHub Pages
  output: "export",
  trailingSlash: true,
  basePath: "/my-portfolio",
  assetPrefix: "/my-portfolio/",
}

module.exports = nextConfig
