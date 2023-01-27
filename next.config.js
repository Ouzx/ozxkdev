/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    fontLoaders: [
      { loader: "@next/font/google", options: { subsets: ["latin"] } },
    ],
  },
  images: {
    remotePatterns: [
      // {
      //   protocol: "https",
      //   host: "cdn.jevelin.shufflehound.com",
      //   pathname: "/wp-content/**/**",
      // },
    ],
  },
};

module.exports = nextConfig;
