import { ImageResponse } from 'next/og';
import { siteConfig } from '@/lib/seo';

export const alt = `${siteConfig.name} — Albania's Biggest Açaí Store`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #655A7C 0%, #4a4160 100%)',
          padding: '80px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 140,
            height: 140,
            borderRadius: '50%',
            background: '#AB92BF',
            marginBottom: 40,
            fontSize: 64,
          }}
        >
          🫐
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 72,
            fontWeight: 700,
            color: '#FDF1E2',
            textAlign: 'center',
            letterSpacing: '-0.02em',
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 34,
            color: 'rgba(253, 241, 226, 0.8)',
            marginTop: 20,
            textAlign: 'center',
          }}
        >
          {siteConfig.tagline}
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 26,
            color: '#AB92BF',
            marginTop: 32,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
        >
          Albania&apos;s Biggest Açaí Store · Tirana
        </div>
      </div>
    ),
    { ...size }
  );
}
