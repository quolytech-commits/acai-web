import { ImageResponse } from 'next/og';
import { siteConfig } from '@/lib/seo';
import fs from 'node:fs';
import path from 'node:path';

export const alt = `${siteConfig.name} — Albania's Biggest Açaí Store`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
  let logoBase64 = '';
  try {
    const logoPath = path.join(process.cwd(), 'public', 'logo-highres.png');
    const logoBuffer = fs.readFileSync(logoPath);
    logoBase64 = `data:image/png;base64,${logoBuffer.toString('base64')}`;
  } catch (err) {
    console.error('Failed to load logo for OpenGraph image:', err);
  }

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
          background: 'linear-gradient(135deg, #1A0B2E 0%, #3B2A56 50%, #655A7C 100%)',
          padding: '60px',
        }}
      >
        {logoBase64 ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={logoBase64}
            alt="The Açaí Club Logo"
            width="160"
            height="160"
            style={{
              width: 160,
              height: 160,
              objectFit: 'contain',
              marginBottom: 28,
            }}
          />
        ) : null}
        <div
          style={{
            display: 'flex',
            fontSize: 68,
            fontWeight: 800,
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
            fontSize: 32,
            color: 'rgba(253, 241, 226, 0.85)',
            marginTop: 16,
            textAlign: 'center',
          }}
        >
          {siteConfig.tagline}
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 24,
            color: '#AB92BF',
            marginTop: 28,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            fontWeight: 600,
          }}
        >
          Albania&apos;s Biggest Açaí Store · Tirana
        </div>
      </div>
    ),
    { ...size }
  );
}
