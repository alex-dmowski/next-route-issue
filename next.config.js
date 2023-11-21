/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  async rewrites() {
    return [
      {
        source: "/first/:path*",
        destination: "/secure/first/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
