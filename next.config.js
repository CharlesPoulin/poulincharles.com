/** @type {import('next').NextConfig} */
const nextConfig = {
    remotePatterns: [
        {
            protocole: 'https',
            hostname: 'images.unsplash.com',
        }
    ]
}

module.exports = nextConfig
