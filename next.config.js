/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  rewrites() {
    return [
      {
        source: "/first",
        destination: "/secure/first",
      },
    ];
  },
};

module.exports = nextConfig;
