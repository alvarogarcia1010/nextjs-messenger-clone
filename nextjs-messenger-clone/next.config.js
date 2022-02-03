/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['secure.gravatar.com', 'randomuser.me'],
  },
}

module.exports = nextConfig
