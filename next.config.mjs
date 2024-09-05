const prod = process.env.NODE_ENV === "production";

import runtimeCaching from "next-pwa/cache.js";
import withPWA from "next-pwa";

const nextConfig = withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching,
  disable: prod ? false : true,
});

export default nextConfig;
