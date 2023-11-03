/** @type {import('next').NextConfig} */
const nextConfig = {
    remotePatterns: [
        {
            protocol: 'https',
            hostname: 'images.unsplash.com',
        },
    ],
    typescript: {
        tsconfig: {
          // Enable downlevelIteration
          downlevelIteration: true,
        },
      },
}

module.exports = nextConfig
