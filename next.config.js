/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // Apply these headers to all routes
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline'",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: blob: https:",
              "font-src 'self' data:",
              "connect-src 'self'",
              "frame-src 'self'",
            ].join('; ')
          },
        ],
      },
    ];
  },
  // Other Next.js config options
  images: {
    unoptimized: false, // Allow Next.js image optimization
    domains: [], // Add external domains if needed
  },
};

module.exports = nextConfig;