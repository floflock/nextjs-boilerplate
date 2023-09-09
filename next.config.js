/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: true,
  modularizeImports: {
    '@mui/icons-material': {
      transform: '@mui/icons-material/{{member}}'
    }
  },
  experimental: {
    serverActions: true,
    appDir: true,
    typedRoutes: true
  }
}

module.exports = nextConfig
