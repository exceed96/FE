import withPWA from "next-pwa";

const isProd = process.env.NODE_ENV === "production";

const pwaConfig = withPWA({
  dest: "public",
  disable: !isProd,
  register: true,
  skipWaiting: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default pwaConfig(nextConfig);
