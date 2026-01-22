/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
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
