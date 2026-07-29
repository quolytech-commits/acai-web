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
          backgroundColor: '#3B2A56',
          backgroundImage: 'radial-gradient(circle at center, #554473 0%, #2A1B40 70%, #1A0B2E 100%)',
          padding: '40px 60px',
        }}
      >
        {/* Circle Badge Logo - matching website footer & nav design */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 140,
            height: 140,
            borderRadius: 70,
            backgroundColor: '#FDF1E2',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
            marginBottom: 28,
            overflow: 'hidden',
          }}
        >
          {logoBase64 ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={logoBase64}
              alt="The Açaí Club Logo"
              width="105"
              height="105"
              style={{
                width: 105,
                height: 105,
                objectFit: 'contain',
              }}
            />
          ) : null}
        </div>

        {/* Title */}
        <div
          style={{
            display: 'flex',
            fontSize: 64,
            fontWeight: 800,
            color: '#FDF1E2',
            textAlign: 'center',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
          }}
        >
          {siteConfig.name}
        </div>

        {/* Tagline */}
        <div
          style={{
            display: 'flex',
            fontSize: 28,
            color: 'rgba(253, 241, 226, 0.85)',
            marginTop: 14,
            textAlign: 'center',
          }}
        >
          {siteConfig.tagline}
        </div>

        {/* Subtitle Badge */}
        <div
          style={{
            display: 'flex',
            fontSize: 20,
            color: '#AB92BF',
            marginTop: 24,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            fontWeight: 600,
          }}
        >
          ALBANIA&apos;S BIGGEST AÇAÍ STORE · TIRANA
        </div>
      </div>
    ),
    { ...size }
  );
}
