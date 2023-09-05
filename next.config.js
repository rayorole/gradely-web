/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.notion.so",
        port: "",
      },
      {
        protocol: "https",
        hostname: "gradely.be",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
