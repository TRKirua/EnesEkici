// The site is served from https://trkirua.github.io/EnesEkici/ in production
const basePath = process.env.NODE_ENV === "production" ? "/EnesEkici" : ""

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  devIndicators: false,
  // Allow opening the dev server from other devices / the LAN IP (HMR and dev scripts are blocked otherwise)
  allowedDevOrigins: ["192.168.*.*"],
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
}

export default nextConfig
