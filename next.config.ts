import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

/**
 * Content Security Policy. Everything is served from this origin, so nothing third-party is allowed to load.
 * `'unsafe-inline'` is needed for Next.js hydration scripts and the inline `style` attributes carried over from the
 * original pages; move to nonce-based CSP (middleware) if stricter script control is required.
 */
const contentSecurityPolicy = (frameAncestors: string) =>
  [
    "default-src 'self'",
    "base-uri 'self'",
    "object-src 'none'",
    "img-src 'self' data: blob:",
    "font-src 'self' data:",
    "style-src 'self' 'unsafe-inline'",
    "script-src 'self' 'unsafe-inline'",
    "connect-src 'self'",
    "form-action 'self'",
    "frame-src 'none'",
    `frame-ancestors ${frameAncestors}`,
    'upgrade-insecure-requests',
  ].join('; ');

const baseSecurityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=(), interest-cohort=()' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains' },
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
];

const nextConfig: NextConfig = {
  // Self-contained server bundle (.next/standalone) for Azure App Service / containers.
  output: 'standalone',
  reactStrictMode: true,
  poweredByHeader: false,
  images: { formats: ['image/avif', 'image/webp'] },
  async headers() {
    return [
      {
        // Every page except the channel partner widget cannot be framed by other sites.
        source: '/((?!channel-partner).*)',
        headers: [
          ...baseSecurityHeaders,
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          ...(isProd ? [{ key: 'Content-Security-Policy', value: contentSecurityPolicy("'self'") }] : []),
        ],
      },
      {
        // The channel partner page was built as an embeddable widget: only Infina's own sites may frame it.
        source: '/channel-partner',
        headers: [
          ...baseSecurityHeaders,
          ...(isProd
            ? [
                {
                  key: 'Content-Security-Policy',
                  value: contentSecurityPolicy("'self' https://www.infina.co.in https://infina.co.in"),
                },
              ]
            : []),
        ],
      },
    ];
  },
};

export default nextConfig;
