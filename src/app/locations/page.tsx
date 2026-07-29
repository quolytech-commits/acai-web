'use client';

import { useState, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Users, Store, CalendarDays } from 'lucide-react';
import { LOCATIONS } from '@/lib/locations-data';
import '../locations.css';

const MapboxMap = dynamic(() => import('../../components/MapboxMap'), {
  ssr: false,
  loading: () => <div style={{display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center'}}>Loading Mapbox...</div>
});

function AnimatedCounter({ end, duration = 2000, prefix = '' }: { end: number, duration?: number, prefix?: string }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * end));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return (
    <>
      {prefix && <span>{prefix}</span>}
      {count.toLocaleString()}
    </>
  );
}

export default function LocationsPage() {
  const [activeSiteId, setActiveSiteId] = useState<number>(LOCATIONS[0].id);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="container locations-page" ref={containerRef}>
      
      {/* 1. Header (Keep at top) */}
      <div className="locations-header" style={{ marginBottom: '3rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 className="hero-title" style={{ fontSize: 'clamp(3rem, 10vw, 5rem)', textTransform: 'none', transform: 'none', textAlign: 'center', margin: '0 auto 1rem auto' }}>Visit Us</h1>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem', maxWidth: '500px', margin: '0 auto', textAlign: 'center' }}>
          Find an Açaí Club location near you. Available in Tirana, Durrës, and across the South Coast.
        </p>
      </div>

      {/* 2. Map Layout (Bigger map on top) */}
      <div className="locations-layout map-large-layout">
        <div className="locations-map mapbox-container">
          <MapboxMap 
            locations={LOCATIONS} 
            activeLocationId={activeSiteId} 
            onLocationSelect={setActiveSiteId} 
          />
        </div>

        <div className="locations-list">
          {LOCATIONS.map((loc) => {
            const isActive = loc.id === activeSiteId;
            return (
              <div 
                key={loc.id}
                className={`location-card ${isActive ? 'active' : ''}`} 
                onClick={() => setActiveSiteId(loc.id)}
                style={{ 
                  padding: isActive ? '2rem' : '1.5rem 2rem', 
                  borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                  background: isActive ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
                  borderLeft: isActive ? '4px solid var(--color-energy)' : '4px solid transparent',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: isActive ? '1rem' : '0' }}>
                  <h3 style={{ fontSize: isActive ? '1.5rem' : '1.2rem', margin: 0, transition: 'all 0.3s ease' }}>{loc.name}</h3>
                  {isActive && <span className="tag" style={{ fontSize: '0.75rem', padding: '0.3rem 0.85rem', margin: 0, borderRadius: '100px', fontWeight: '600' }}>{loc.tag}</span>}
                </div>
                
                {isActive && (
                  <div className="location-details" style={{ marginTop: '1rem', animation: 'fadeIn 0.3s ease' }}>
                    <div style={{ marginBottom: '1rem' }}>
                      <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '0.2rem' }}>Address</p>
                      <p style={{ fontSize: '1.05rem' }}>{loc.address}</p>
                    </div>
                    {loc.hours && (
                      <div style={{ marginBottom: '1rem' }}>
                        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '0.2rem' }}>Hours</p>
                        <p style={{ fontSize: '1.05rem' }}>{loc.hours}</p>
                      </div>
                    )}
                    {loc.phone && (
                      <div style={{ marginBottom: '1.5rem' }}>
                        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '0.2rem' }}>Phone</p>
                        <p style={{ fontSize: '1.05rem' }}>{loc.phone}</p>
                      </div>
                    )}
                    <a 
                      href={loc.mapLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn" 
                      style={{ 
                        width: '100%', 
                        padding: '0.8rem',
                        background: 'var(--color-linen)', 
                        color: 'var(--color-dolphin)', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        gap: '0.5rem',
                        fontSize: '0.95rem',
                        marginTop: '1.5rem'
                      }}
                    >
                      Get Directions
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17l9.2-9.2M17 17V7H7" />
                      </svg>
                    </a>
                  </div>
                )}
                {!isActive && (
                  <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', margin: 0 }}>{loc.tag}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. Stats Section (Moved lower, colored with website fonts/colors) */}
      <div className="stats-section">
        <div className="stat-item">
          <Store size={36} className="stat-icon" strokeWidth={1.5} />
          <div className="stat-number">
            <AnimatedCounter end={7} prefix="+" duration={1500} />
          </div>
          <div className="stat-divider"></div>
          <div className="stat-label">STORES</div>
        </div>
        
        <div className="stat-item">
          <Users size={36} className="stat-icon" strokeWidth={1.5} />
          <div className="stat-number">
            <AnimatedCounter end={7000} prefix="+" duration={2500} />
          </div>
          <div className="stat-divider"></div>
          <div className="stat-label">CUSTOMERS</div>
        </div>

        <div className="stat-item">
          <CalendarDays size={36} className="stat-icon" strokeWidth={1.5} />
          <div className="stat-number">
            <AnimatedCounter end={3} duration={1500} />
          </div>
          <div className="stat-divider"></div>
          <div className="stat-label">MONTHS</div>
        </div>
      </div>

    </div>
  );
}
