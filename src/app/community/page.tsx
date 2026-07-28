'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import '../community.css';

const communitySlots = [
  {
    id: 1,
    title: 'FRESH PREPARATION',
    tag: '#purebliss',
    src: '/videos/acai-1.mp4',
    type: 'video'
  },
  {
    id: 2,
    title: 'TROPICAL VIBES',
    tag: '#acaibowl',
    src: '/uploads/acai-image-1.jpg',
    type: 'image'
  },
  {
    id: 3,
    title: 'COMMUNITY LOVE',
    tag: '#theacaiclub',
    src: '/uploads/acai-image-2.jpg',
    type: 'image'
  },
  {
    id: 4,
    title: 'FRESH INGREDIENTS',
    tag: '#theacaiclub',
    src: '/uploads/acai-image-3.jpg',
    type: 'image'
  },
  {
    id: 5,
    title: 'SUMMER VIBES',
    tag: '#theacaiclub',
    src: '/uploads/acai-image-4.jpg',
    type: 'image'
  },
  {
    id: 6,
    title: 'BOWL GOALS',
    tag: '#theacaiclub',
    src: '/uploads/acai-image-5.jpg',
    type: 'image'
  },
  {
    id: 7,
    title: 'HEALTHY EATS',
    tag: '#theacaiclub',
    src: '/uploads/acai-image-6.jpg',
    type: 'image'
  },
  {
    id: 8,
    title: 'AÇAI LOVERS',
    tag: '#theacaiclub',
    src: '/uploads/acai-image-7.jpg',
    type: 'image'
  },
  {
    id: 9,
    title: 'DELICIOUS TREAT',
    tag: '#theacaiclub',
    src: '/uploads/acai-image-8.jpg',
    type: 'image'
  },
  {
    id: 10,
    title: 'GOOD MORNING',
    tag: '#theacaiclub',
    src: '/uploads/acai-image-9.jpg',
    type: 'image'
  },
  {
    id: 11,
    title: 'PERFECT BLEND',
    tag: '#theacaiclub',
    src: '/uploads/acai-image-10.jpg',
    type: 'image'
  },
  {
    id: 12,
    title: 'COMMUNITY BOWL',
    tag: '#theacaiclub',
    src: '/uploads/acai-image-11.jpg',
    type: 'image'
  },
  {
    id: 13,
    title: 'AÇAI LOVERS',
    tag: '#theacaiclub',
    src: '/uploads/acai-image-12.jpg',
    type: 'image'
  },
  {
    id: 14,
    title: 'DELICIOUS TREAT',
    tag: '#theacaiclub',
    src: '/uploads/acai-image-13.jpg',
    type: 'image'
  }
];

export default function CommunityPage() {
  useEffect(() => {
    document.body.classList.add('community-page-body');

    // Premium motion design entrance
    gsap.fromTo('.community-header-section', 
      { 
        y: -50, 
        opacity: 0 
      }, 
      { 
        y: 0, 
        opacity: 1, 
        duration: 1.4, 
        ease: 'power3.out' 
      }
    );

    gsap.fromTo('.gallery-slot-card', 
      { 
        scale: 0.9, 
        opacity: 0,
        y: 30
      }, 
      { 
        scale: 1, 
        opacity: 1, 
        y: 0,
        duration: 1.2, 
        stagger: 0.1, 
        ease: 'power4.out',
        delay: 0.2
      }
    );

    return () => document.body.classList.remove('community-page-body');
  }, []);

  return (
    <div className="community-page" style={{ paddingTop: '14vh' }}>
      <div className="community-header-section" style={{ paddingBottom: '3vh', textAlign: 'center' }}>
        <h1 className="community-title" style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', marginTop: 0, marginBottom: 0 }}>COMMUNITY GALLERY</h1>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', marginTop: '0.6rem' }}>
          Real bowls, real moments, shared by the community — tag us to be featured.
        </p>
      </div>

      <div className="community-gallery-container container">
        {/* Featured Hero Video Showcase */}
        {communitySlots.filter(s => s.type === 'video').map(videoSlot => (
          <div 
            key={videoSlot.id} 
            className="gallery-slot-card"
            style={{
              width: '100%',
              maxWidth: '1200px',
              margin: '0 auto 3.5rem auto',
              borderRadius: '36px',
              overflow: 'hidden',
              background: 'transparent',
              border: 'none',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.4)',
              aspectRatio: '16 / 9',
              minHeight: '400px',
              maxHeight: '75vh',
              position: 'relative'
            }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                borderRadius: '36px',
                transition: 'transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)'
              }}
              className="slot-media-img"
            >
              <source src={videoSlot.src} type="video/mp4" />
            </video>
          </div>
        ))}

        {/* Images Masonry Grid Below */}
        <div className="community-masonry-grid" style={{ alignItems: 'start' }}>
          {communitySlots.filter(s => s.type !== 'video').map(slot => (
            <div 
              key={slot.id} 
              className="gallery-slot-card slot-vertical"
              style={{ background: 'transparent', border: 'none', boxShadow: 'none', overflow: 'hidden' }}
            >
              <Image
                src={slot.src}
                alt={slot.title}
                fill
                loading="lazy"
                sizes="(max-width: 900px) 92vw, (max-width: 1300px) 45vw, 400px"
                style={{
                  objectFit: 'cover',
                  borderRadius: '36px',
                  transition: 'transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)'
                }}
                className="slot-media-img"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="community-ugc-cta container">
        <a 
          href="https://www.instagram.com/theacaiclub.al/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="tag"
          style={{ textDecoration: 'none' }}
        >
          @theacaiclub.al
        </a>
        <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', marginBottom: '1.2rem', fontWeight: '500' }}>Tag your bowl to be featured.</h2>
        <div>
          <a
            href="https://www.instagram.com/theacaiclub.al/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Follow on Instagram ➔
          </a>
        </div>
      </div>
    </div>
  );
}
