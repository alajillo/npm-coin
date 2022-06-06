/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    env: {
        API_END_POINT:
            process.env.VERCEL_ENV === 'production'
                ? process.env.VERCEL_URL
                : 'http://localhost:3000/',
    },
};

module.exports = nextConfig;
