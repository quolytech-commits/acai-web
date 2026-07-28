import type { Metadata } from 'next';
import { blogPosts } from '@/lib/blog-posts';
import '../blog.css';
import BlogList from './BlogList';

export const metadata: Metadata = {
  title: 'The Açaí Journal',
  description: 'Stories on açaí sourcing, health benefits, and why authentic açaí costs more — from the team at Albania\'s biggest açaí store in Tirana.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'The Açaí Journal | The Açaí Club',
    description: 'Stories on açaí sourcing, health benefits, and pricing from Albania\'s biggest açaí store.',
    url: '/blog',
  },
};

export default function BlogPage() {
  return (
    <main className="blog-page">
      <div className="container">
        <div className="blog-hero">
          <h1>The Açaí Journal</h1>
          <p>
            Stories about where our açaí comes from, why it&apos;s worth the price, and what the fruit actually does
            for you — straight from the team.
          </p>
        </div>

        <BlogList posts={blogPosts} />
      </div>
    </main>
  );
}
