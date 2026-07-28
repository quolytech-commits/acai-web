'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { BlogPost } from '@/lib/blog-posts';

export default function BlogList({ posts }: { posts: BlogPost[] }) {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!listRef.current) return;
    const ctx = gsap.context(() => {
      // Animate line dividers
      gsap.fromTo('.blog-row-divider',
        { width: 0 },
        {
          width: '100%',
          duration: 1.2,
          ease: 'power3.inOut',
          stagger: 0.1,
        }
      );

      // Animate content sliding up
      gsap.fromTo('.blog-row-content',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.1,
          delay: 0.3,
        }
      );
    }, listRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="blog-list" ref={listRef}>
      {posts.map((post) => (
        <Link href={`/blog/${post.slug}`} className="blog-row" key={post.slug}>
          <div className="blog-row-divider" />
          <div className="blog-row-content">
            <div className="blog-row-meta">
              <span className="blog-row-category">{post.category}</span>
              <div className="blog-row-info">
                <span>{post.readTime}</span>
                <span className="dot" />
                <span>{post.date}</span>
              </div>
            </div>
            <div className="blog-row-main">
              <h2>{post.title}</h2>
              <span className="blog-row-arrow">➔</span>
            </div>
            <p className="blog-row-excerpt">{post.excerpt}</p>
          </div>
        </Link>
      ))}
      <div className="blog-row-divider" />
    </div>
  );
}
