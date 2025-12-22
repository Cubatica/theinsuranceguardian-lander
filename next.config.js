/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Enable static export for Cloudflare Pages
  images: {
    domains: [],
    unoptimized: true, // Required for static export
  },
  trailingSlash: false, // Cloudflare Pages works better without trailing slashes
}

module.exports = nextConfig

