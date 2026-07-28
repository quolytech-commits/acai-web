import { ImageResponse } from 'next/og';
import { blogPosts, getBlogPost } from '@/lib/blog-posts';
import { siteConfig } from '@/lib/seo';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function OpengraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  const title = post ? post.title : siteConfig.name;
  const category = post ? post.category : '';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #655A7C 0%, #4a4160 100%)',
          padding: '70px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', fontSize: 28, color: '#AB92BF', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          The Açaí Journal{category ? ` · ${category}` : ''}
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 58,
            fontWeight: 700,
            color: '#FDF1E2',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
          }}
        >
          {title}
        </div>
        <div style={{ display: 'flex', fontSize: 30, color: 'rgba(253, 241, 226, 0.75)' }}>
          {siteConfig.name} · {siteConfig.domain}
        </div>
      </div>
    ),
    { ...size }
  );
}
