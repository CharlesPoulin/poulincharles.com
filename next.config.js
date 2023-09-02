/** @type {import('next').NextConfig} */
const nextConfig = {
    remotePatterns: [
        {
            protocol: 'https',
            hostname: 'images.unsplash.com',
        }
    ]
}

module.exports = nextConfig
