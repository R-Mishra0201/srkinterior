/** @type {import('next').NextConfig} */
const nextConfig = {
  // ❌ Ye hata do:
  // output: 'export',

  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
