import withPWAInit from "next-pwa";

const isDev = process.env.NODE_ENV === "development";

const pwaConfig = withPWAInit({
  dest: "public",
  buildExcludes: ["app-build-manifest.json"],
  exclude: [
    ({ asset, compilation }) => {
      if (
        asset.name.startsWith("server/") ||
        asset.name.match(
          /^((app-|^)build-manifest\.json|react-loadable-manifest\.json)$/
        )
      ) {
        return true;
      }
      if (isDev && !asset.name.startsWith("static/runtime/")) {
        return true;
      }
      return false;
    },
  ],
});

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default pwaConfig(nextConfig);
