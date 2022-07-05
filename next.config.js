/** @type {import('next').NextConfig} */
const withImages = require('next-images');

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx'],
  ...withImages(),
};

module.exports = nextConfig;
