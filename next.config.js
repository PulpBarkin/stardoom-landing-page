/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export. After `next build`, the `out/` directory contains a
  // fully static site we can drag-drop into Vercel (or any static host).
  // No Node.js runtime needed on the server side.
  output: 'export',
  // Trailing slashes keep the static export friendly to drag-drop hosts.
  trailingSlash: true,
  // Disable image optimization since static export can't generate them
  // on demand. We're not using next/image for hero images either.
  images: { unoptimized: true },
};

module.exports = nextConfig;
