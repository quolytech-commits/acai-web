'use client';

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LOCATIONS } from '@/lib/locations-data';
import './locations.css';

const MapboxMap = dynamic(() => import('../components/MapboxMap'), {
  ssr: false,
  loading: () => <div style={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center', color: 'var(--color-linen)' }}>Loading Interactive Map...</div>
});

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSiteId, setActiveSiteId] = useState<number>(LOCATIONS[0].id);

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 900px)').matches;
    const ctx = gsap.context(() => {
      // Smooth intro transition (scoped to the first hero only)
      gsap.fromTo(
        '.hero-first .section-content',
        {
          y: isMobile ? 20 : 40,
          opacity: 0,
          filter: 'blur(12px)'
        },
        {
          y: 0,
          opacity: 1,
          filter: 'blur(0px)',
          duration: isMobile ? 0.9 : 1.15,
          ease: 'power3.out',
          delay: 0.15
        }
      );

      // Cinematic 3D word reveal
      gsap.fromTo('.hero-first .reveal-word',
        {
          y: isMobile ? 80 : 120,
          opacity: 0,
          rotationX: -60,
          transformOrigin: '0% 50% -50',
          filter: 'blur(8px)'
        },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          filter: 'blur(0px)',
          duration: 1.4,
          stagger: 0.15,
          ease: 'power3.out',
          delay: isMobile ? 0.2 : 0.3
        }
      );

      // Subtitle reveal (readable + smooth)
      gsap.fromTo(
        '.hero-first .hero-subtitle',
        {
          y: isMobile ? 12 : 26,
          opacity: 0,
          filter: 'blur(10px)'
        },
        {
          y: 0,
          opacity: 1,
          filter: 'blur(0px)',
          duration: isMobile ? 0.85 : 1,
          ease: 'power3.out',
          delay: isMobile ? 0.55 : 0.8
        }
      );

      // Psychological Story Scroll Animations
      // Stable Vertical Fade-In for Story Sections
      gsap.utils.toArray('.story-paragraph').forEach((section: unknown) => {
        const secEl = section as HTMLElement;
        gsap.from(secEl, {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: secEl,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        });
      });
      // Psychological Heading Animations
      const headers = gsap.utils.toArray('.story-header');
      headers.forEach((h: unknown) => {
        const headerEl = h as HTMLElement;
        gsap.from(headerEl, {
          scrollTrigger: {
            trigger: headerEl,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
          },
          scale: 0.8,
          filter: 'blur(10px)',
          opacity: 0,
          duration: 1.8,
          ease: 'power2.out'
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="scroll-container" style={{ position: 'relative' }}>

      {/* Premium Full-Screen Background Video */}
      <div className="homepage-video-background">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="homepage-bg-video"
          onTimeUpdate={(e) => {
            if (e.currentTarget.currentTime >= 16) {
              e.currentTarget.currentTime = 0;
              e.currentTarget.play().catch(() => { });
            }
          }}
        >
          <source src="/videos/promo.mp4#t=0,16" type="video/mp4" />
        </video>
        <div className="homepage-video-overlay" />
      </div>

      <div className="section flex-center hero-first" style={{ position: 'relative', zIndex: 5 }}>
        <div className="section-content">
          <h1 className="hero-title">
            <span className="reveal-line">
              <span className="reveal-word">Taste</span> <span className="reveal-word">The</span> <span className="reveal-word">Soul</span>
            </span>
            <span className="reveal-line">
              <span className="reveal-word">of</span> <span className="reveal-word">Brazil</span>
            </span>
          </h1>
          <p className="hero-subtitle">Experience the pure, authentic rhythm of the Amazon. Premium organic Açaí, crafted with Rio’s vibrant energy.</p>
        </div>
      </div>

      {/* Psychological Our Story Section */}
      <div className="section flex-center our-story-section" style={{
        height: 'auto',
        padding: '20vh 0',
        position: 'relative',
        background: 'var(--color-linen)',
        color: 'var(--color-text-dark)',
        overflow: 'hidden'
      }}>
        <div className="section-content" style={{ textAlign: 'center', maxWidth: '900px', position: 'relative', zIndex: 10 }}>

          <div className="story-paragraph" style={{ marginBottom: '15vh' }}>
            <h2 className="story-header hero-title" style={{
              color: 'var(--color-amethyst)',
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontStyle: 'normal',
              fontFamily: 'var(--font-heading)',
              lineHeight: '1.1',
              letterSpacing: '-0.02em'
            }}>The Silence <br /> of the Forest</h2>
            <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.3rem)', lineHeight: '1.7', fontWeight: '400', color: '#1A1A1A', opacity: 0.9 }}>
              Deep within the Amazon, where time ceases to exist, a pulse begins. It’s a rhythmic vibration from the soil, a primitive energy that has fueled the soul of humanity for millennia. We didn&apos;t find Açaí; it found us in the quiet moments between the shadows of the palms.
            </p>
          </div>

          <div className="story-paragraph" style={{ marginBottom: '15vh' }}>
            <h2 className="story-header hero-title" style={{
              color: 'var(--color-amethyst)',
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontStyle: 'normal',
              fontFamily: 'var(--font-heading)',
              lineHeight: '1.1',
              letterSpacing: '-0.02em'
            }}>A Transformation <br /> of Soul</h2>
            <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.3rem)', lineHeight: '1.7', fontWeight: '400', color: '#1A1A1A', opacity: 0.9 }}>
              To taste this fruit is to invite the wild back into your subconscious. It is a psychological awakening—a reminder that we are not separate from nature, but woven into its very fiber. Every dark, velvety bite is a bridge between the ancient wisdom of the rainforest and the frenetic magic of the modern world.
            </p>
          </div>

          <div className="story-paragraph">
            <h2 className="story-header hero-title" style={{
              color: 'var(--color-amethyst)',
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontStyle: 'normal',
              fontFamily: 'var(--font-heading)',
              lineHeight: '1.1',
              letterSpacing: '-0.02em'
            }}>The Heart <br /> of Brazil</h2>
            <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.3rem)', lineHeight: '1.7', fontWeight: '400', color: '#1A1A1A', opacity: 0.9 }}>
              We don&apos;t just provide a bowl. We offer a homecoming. A moment to pause, to breathe, and to reconnect with the raw energy that defines the Brazilian spirit. This is your journey. This is your rhythm. This is the Açaí Club.
            </p>
          </div>

        </div>
      </div>

      {/* Store Locator Section - Minimalist & Elegant */}
      <div className="section flex-center store-locator-section" style={{
        height: 'auto',
        padding: '15vh 0 20vh 0',
        position: 'relative',
        background: 'var(--color-amethyst)',
        color: 'var(--color-linen)',
        overflow: 'hidden',
        width: '100%'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>

          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="hero-title" style={{
              fontSize: 'clamp(2.8rem, 7vw, 4.5rem)',
              marginBottom: '0.8rem',
              color: 'var(--color-linen)',
              fontFamily: 'var(--font-heading)',
              letterSpacing: '-0.02em',
              lineHeight: '1.1',
              fontWeight: '500',
              textAlign: 'center',
              margin: '0 auto 0.8rem auto'
            }}>Visit Us</h2>
            <p style={{ color: 'var(--color-linen)', opacity: 0.8, fontSize: '1.1rem', maxWidth: '500px', margin: '0 auto', lineHeight: '1.6', fontWeight: '400' }}>
              Select a sanctuary across Tirana, Durrës, and the South Coast.
            </p>
          </div>

          {/* Minimalist Store Selector Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.6rem', marginBottom: '2.5rem' }}>
            {LOCATIONS.map((loc) => {
              const isActive = loc.id === activeSiteId;
              return (
                <button
                  key={loc.id}
                  onClick={() => setActiveSiteId(loc.id)}
                  style={{
                    padding: '0.6rem 1.4rem',
                    borderRadius: '100px',
                    border: isActive ? '1px solid var(--color-linen)' : '1px solid rgba(253, 241, 226, 0.2)',
                    background: isActive ? 'var(--color-linen)' : 'transparent',
                    color: isActive ? 'var(--color-dolphin)' : 'var(--color-linen)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9rem',
                    fontWeight: isActive ? '600' : '400',
                    cursor: 'pointer',
                    transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                    letterSpacing: '0.01em',
                    boxShadow: isActive ? '0 4px 15px rgba(0,0,0,0.1)' : 'none'
                  }}
                >
                  {loc.name}
                </button>
              );
            })}
          </div>

          {/* Refined Interactive Map */}
          <div style={{ marginBottom: '1.5rem', width: '100%' }}>
            <div className="mapbox-container" style={{ width: '100%', height: '460px', borderRadius: '36px', overflow: 'hidden', border: '1px solid rgba(253, 241, 226, 0.15)', boxShadow: '0 15px 40px rgba(0,0,0,0.12)', position: 'relative', background: 'rgba(0,0,0,0.05)' }}>
              <MapboxMap
                locations={LOCATIONS}
                activeLocationId={activeSiteId}
                onLocationSelect={setActiveSiteId}
              />
            </div>
          </div>

          {/* Single Refined Info Banner for Selected Store */}
          {(() => {
            const activeLoc = LOCATIONS.find(l => l.id === activeSiteId) || LOCATIONS[0];
            return (
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '2rem 2.5rem',
                borderRadius: '36px',
                background: 'rgba(253, 241, 226, 0.06)',
                border: '1px solid rgba(253, 241, 226, 0.15)',
                gap: '1.5rem',
                textAlign: 'left',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)'
              }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '0.5rem' }}>
                    <h3 style={{ fontSize: '1.5rem', margin: 0, fontWeight: '600', fontFamily: 'var(--font-heading)', color: 'var(--color-linen)' }}>{activeLoc.name}</h3>
                    <span style={{ fontSize: '0.75rem', padding: '0.35rem 0.9rem', borderRadius: '100px', background: 'rgba(253, 241, 226, 0.15)', color: 'var(--color-linen)', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: '600' }}>{activeLoc.tag}</span>
                  </div>
                  <p style={{ fontSize: '1.05rem', opacity: 0.85, margin: 0, marginBottom: activeLoc.hours ? '0.25rem' : '0', color: 'var(--color-linen)', fontWeight: '400' }}>{activeLoc.address}</p>
                  {activeLoc.hours && (
                    <p style={{ fontSize: '0.9rem', opacity: 0.65, margin: 0, color: 'var(--color-linen)', fontWeight: '400' }}>{activeLoc.hours}</p>
                  )}
                </div>

                <div>
                  <a
                    href={activeLoc.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: '0.8rem 1.8rem',
                      borderRadius: '100px',
                      background: 'var(--color-linen)',
                      color: 'var(--color-dolphin)',
                      fontSize: '0.95rem',
                      fontWeight: '600',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      transition: 'all 0.2s ease',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                    }}
                  >
                    Directions
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17l9.2-9.2M17 17V7H7" />
                    </svg>
                  </a>
                </div>
              </div>
            );
          })()}

          {/* Minimalist Directory Link */}
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link
              href="/locations"
              style={{
                color: 'var(--color-linen)',
                fontSize: '0.9rem',
                fontWeight: '400',
                textDecoration: 'underline',
                textUnderlineOffset: '6px',
                opacity: 0.7,
                transition: 'opacity 0.2s ease'
              }}
            >
              View all store details and seasonal hours in our full directory ↗
            </Link>
          </div>

        </div>
      </div>

    </main>

  );
}
