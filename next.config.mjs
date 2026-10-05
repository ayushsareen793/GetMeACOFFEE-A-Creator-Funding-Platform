/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  async redirects() {
    return [{ source: "/login", destination: "/Login", permanent: false }]
  },
}

export default nextConfig;
