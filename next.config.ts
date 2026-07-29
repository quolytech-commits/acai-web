import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  poweredByHeader: false,
  compress: true,
  async headers() {
    return [
      {
        source: '/:path*.(mp4|webm|jpg|jpeg|png|webp|avif|svg|ico)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=604800, stale-while-revalidate=86400'
          }
        ]
      },
      {
        // Next.js emits `s-maxage=31536000` on prerendered pages. A CDN that
        // honours it caches the HTML for a year, so after a deploy it keeps
        // serving old HTML pointing at content-hashed chunks that no longer
        // exist -> 404s -> completely unstyled page. Cap the shared cache so
        // documents can never outlive the build they reference. Excludes
        // /_next/static and hashed assets, which are safe to cache immutably.
        source: '/((?!_next/static|_next/image|.*\\.(?:mp4|webm|jpg|jpeg|png|webp|avif|svg|ico|css|js|txt|xml|json)$).*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, s-maxage=60, stale-while-revalidate=300'
          }
        ]
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()'
          }
          // Content-Security-Policy is set per-request (with a nonce) in src/proxy.ts
        ]
      }
    ];
  }
};

export default nextConfig;
