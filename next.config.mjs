/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      // 处理中文URL编码问题
      {
        source: '/v/:path*',
        destination: '/v/:path*',
      },
    ]
  },
  // 确保URL编码正确处理
  trailingSlash: false,
  skipMiddlewareUrlNormalize: true,
}

export default nextConfig
