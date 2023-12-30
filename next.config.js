/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "isomorphic-furyroad.vercel.app",
      },
    ],
  },
};

module.exports = nextConfig;
