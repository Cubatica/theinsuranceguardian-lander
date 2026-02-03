/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Enable static export for Cloudflare Pages
  images: {
    domains: [],
    unoptimized: true, // Required for static export
  },
  trailingSlash: true, // Required: Cloudflare Pages does not support 200 rewrites; static dirs use /path/index.html
}

module.exports = nextConfig

