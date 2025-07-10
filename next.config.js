/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.pexels.com",
      "upload.wikimedia.org",
      "example.com", // ✅ example for dynamic images
    ],
  },
};

module.exports = nextConfig;
