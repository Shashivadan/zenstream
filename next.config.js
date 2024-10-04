/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "github.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        hostname: "media.kitsu.io",
        port: "",
        pathname: "/**",
        protocol: "https",
      },
      {
        hostname: "media.kitsu.app",
        port: "",
        pathname: "/**",
        protocol: "https",
      },
      {
        protocol: "https",
        hostname: "asianimg.pro",
        pathname: "/cover/**",
      },
      {
        protocol: "https",
        hostname: "www.pngall.com",
      },
      {
        protocol: "https",
        hostname: "gogocdn.net",
      },
      {
        protocol: "https",
        hostname: "asianimg.pro",
      },
      {
        protocol: "https",
        hostname: "s4.anilist.co",
      },
      {
        protocol: "https",
        hostname: "uploads.mangadex.org",
      },
      {
        protocol: "https",
        hostname: "sup-proxy.zephex0-f6c.workers.dev",
      },
      {
        protocol: "https",
        hostname: "image.tmdb.org",
      },
      {
        protocol: "https",
        hostname: "artworks.thetvdb.com",
      },
    ],
    domains: ["kitsu-production-media.s3.us-west-002.backblazeb2.com"],
  },
};

export default config;
