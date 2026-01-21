/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nextjs.org",
      },
      {
        protocol: "https",
        hostname: "react.dev",
      },
      {
        protocol: "https",
        hostname: "upstash.com",
      },
      {
        protocol: "https",
        hostname: "posthog.com",
      },
    ],
  },
};

export default nextConfig;
