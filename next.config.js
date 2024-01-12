/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "./out",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.thenounproject.com',
        port: '',
      }
    ],
  },
};

module.exports = nextConfig;
