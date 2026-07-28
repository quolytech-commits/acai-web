'use client';

import { useEffect, useRef, useState } from 'react';
import Map, { Marker, NavigationControl, Popup } from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';

// Using the token from the .env file
const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

export default function MapboxMap({ locations, activeLocationId, onLocationSelect }: any) {
  const mapRef = useRef<any>(null);
  const [viewState, setViewState] = useState({
    longitude: 19.818200,
    latitude: 41.3166888,
    zoom: 16
  });
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    const activeLoc = locations.find((l: any) => l.id === activeLocationId);
    if (activeLoc && activeLoc.lat && activeLoc.lng) {
      mapRef.current?.flyTo({
        center: [activeLoc.lng, activeLoc.lat],
        zoom: 14,
        duration: 2000
      });
    }
  }, [activeLocationId, locations]);

  const onMapLoad = (evt: any) => {
    const map = evt.target;
    const style = map.getStyle();
    if (style && style.layers) {
      style.layers.forEach((layer: any) => {
        // Hide Points of Interest (businesses, shops) and transit, but keep city/place names
        if (layer.type === 'symbol' && (layer.id.includes('poi') || layer.id.includes('transit'))) {
          map.setLayoutProperty(layer.id, 'visibility', 'none');
        }
      });
    }
  };

  return (
    <Map
      ref={mapRef}
      {...viewState}
      onMove={(evt: any) => setViewState(evt.viewState)}
      onLoad={onMapLoad}
      mapStyle="mapbox://styles/mapbox/outdoors-v12"
      mapboxAccessToken={MAPBOX_TOKEN}
      style={{ width: '100%', height: '100%' }}
    >
      <NavigationControl position="top-right" />

      {clickCount === 2 && (
        <Popup
          longitude={19.818200}
          latitude={41.3166888}
          offset={40}
          onClose={() => setClickCount(1)}
          closeOnClick={false}
          maxWidth="320px"
          style={{ borderRadius: '12px', overflow: 'hidden' }}
        >
          <div style={{
            color: '#2a1a4a',
            fontFamily: 'inherit',
            width: '320px',
            maxWidth: '90vw',
            overflow: 'hidden',
          }}>
            <div style={{
              display: 'flex',
              overflowX: 'auto',
              gap: '1rem',
              padding: '0.5rem',
              paddingBottom: '1rem',
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
            }}>

              {/* Card 1: Tirana Flagship */}
              <div style={{ flex: '0 0 260px', scrollSnapAlign: 'start', padding: '1.2rem', background: '#fff', borderRadius: '12px', border: '1px solid rgba(42, 26, 74, 0.1)', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ margin: '0 0 0.2rem 0', fontSize: '1.3rem', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>Tirana Flagship</h3>
                <p style={{ margin: '0 0 1rem 0', fontSize: '0.9rem', opacity: 0.7, fontWeight: 500 }}>Flagship Store</p>

                <div style={{ marginBottom: '0.6rem' }}>
                  <strong style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#666' }}>Address</strong>
                  <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>Rruga Lidhja e Prizrenit, Tiranë 1016</span>
                </div>

                <div style={{ marginBottom: '0.6rem' }}>
                  <strong style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#666' }}>Hours</strong>
                  <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>Mon — Sun: 10:00 - 23:00</span>
                </div>

                <div style={{ marginBottom: '1.2rem' }}>
                  <strong style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#666' }}>Phone</strong>
                  <a href="tel:+355695100504" style={{ fontSize: '0.95rem', color: '#e55b3c', textDecoration: 'none', fontWeight: 600 }}>+355 69 5100 504</a>
                </div>

                <div style={{ marginTop: 'auto' }}>
                  <a href="https://maps.google.com/?q=41.3166888,19.818200" target="_blank" rel="noopener noreferrer" style={{ display: 'block', textAlign: 'center', background: '#2a1a4a', color: '#fdf1e2', padding: '0.6rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem', transition: 'background 0.2s' }}>
                    Get Directions
                  </a>
                </div>
              </div>

              {/* Card 2: Kalaja e Tiranës */}
              <div style={{ flex: '0 0 260px', scrollSnapAlign: 'start', padding: '1.2rem', background: '#fff', borderRadius: '12px', border: '1px solid rgba(42, 26, 74, 0.1)', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ margin: '0 0 0.2rem 0', fontSize: '1.3rem', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>Kalaja e Tiranës</h3>
                <p style={{ margin: '0 0 1rem 0', fontSize: '0.9rem', opacity: 0.7, fontWeight: 500 }}>Tirana</p>

                <div style={{ marginBottom: '0.6rem' }}>
                  <strong style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#666' }}>Address</strong>
                  <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>Kalaja e Tiranës, Tirana</span>
                </div>

                <div style={{ marginBottom: '0.6rem' }}>
                  <strong style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#666' }}>Hours</strong>
                  <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>Seasonal</span>
                </div>

                <div style={{ marginTop: 'auto' }}>
                  <a href="https://maps.app.goo.gl/9CiMFEx9ijy2adbH7?g_st=ic" target="_blank" rel="noopener noreferrer" style={{ display: 'block', textAlign: 'center', background: '#2a1a4a', color: '#fdf1e2', padding: '0.6rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem', transition: 'background 0.2s' }}>
                    Get Directions
                  </a>
                </div>
              </div>

              {/* Card 3: Equos Resort */}
              <div style={{ flex: '0 0 260px', scrollSnapAlign: 'start', padding: '1.2rem', background: '#fff', borderRadius: '12px', border: '1px solid rgba(42, 26, 74, 0.1)', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ margin: '0 0 0.2rem 0', fontSize: '1.3rem', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>Equos Resort</h3>
                <p style={{ margin: '0 0 1rem 0', fontSize: '0.9rem', opacity: 0.7, fontWeight: 500 }}>Tirana Area</p>

                <div style={{ marginBottom: '0.6rem' }}>
                  <strong style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#666' }}>Address</strong>
                  <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>Equos Resort, Tirana Area</span>
                </div>

                <div style={{ marginBottom: '0.6rem' }}>
                  <strong style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#666' }}>Hours</strong>
                  <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>Seasonal</span>
                </div>

                <div style={{ marginTop: 'auto' }}>
                  <a href="https://maps.app.goo.gl/F958j1mzVvUnwGDe6?g_st=ic" target="_blank" rel="noopener noreferrer" style={{ display: 'block', textAlign: 'center', background: '#2a1a4a', color: '#fdf1e2', padding: '0.6rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem', transition: 'background 0.2s' }}>
                    Get Directions
                  </a>
                </div>
              </div>

              {/* Card 4: Portside */}
              <div style={{ flex: '0 0 260px', scrollSnapAlign: 'start', padding: '1.2rem', background: '#fff', borderRadius: '12px', border: '1px solid rgba(42, 26, 74, 0.1)', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ margin: '0 0 0.2rem 0', fontSize: '1.3rem', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>Portside</h3>
                <p style={{ margin: '0 0 1rem 0', fontSize: '0.9rem', opacity: 0.7, fontWeight: 500 }}>Durrës</p>

                <div style={{ marginBottom: '0.6rem' }}>
                  <strong style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#666' }}>Address</strong>
                  <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>Portside, Durrës</span>
                </div>

                <div style={{ marginBottom: '0.6rem' }}>
                  <strong style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#666' }}>Hours</strong>
                  <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>Seasonal</span>
                </div>

                <div style={{ marginTop: 'auto' }}>
                  <a href="https://maps.app.goo.gl/kvmksTzUA9LTt5Ed9?g_st=ic" target="_blank" rel="noopener noreferrer" style={{ display: 'block', textAlign: 'center', background: '#2a1a4a', color: '#fdf1e2', padding: '0.6rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem', transition: 'background 0.2s' }}>
                    Get Directions
                  </a>
                </div>
              </div>

              {/* Card 5: Lighthouse */}
              <div style={{ flex: '0 0 260px', scrollSnapAlign: 'start', padding: '1.2rem', background: '#fff', borderRadius: '12px', border: '1px solid rgba(42, 26, 74, 0.1)', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ margin: '0 0 0.2rem 0', fontSize: '1.3rem', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>Lighthouse</h3>
                <p style={{ margin: '0 0 1rem 0', fontSize: '0.9rem', opacity: 0.7, fontWeight: 500 }}>Durrës</p>

                <div style={{ marginBottom: '0.6rem' }}>
                  <strong style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#666' }}>Address</strong>
                  <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>Lighthouse, Durrës</span>
                </div>

                <div style={{ marginBottom: '0.6rem' }}>
                  <strong style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#666' }}>Hours</strong>
                  <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>Seasonal</span>
                </div>

                <div style={{ marginTop: 'auto' }}>
                  <a href="https://maps.app.goo.gl/YxM3ayHuuhWWkhXP7?g_st=ic" target="_blank" rel="noopener noreferrer" style={{ display: 'block', textAlign: 'center', background: '#2a1a4a', color: '#fdf1e2', padding: '0.6rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem', transition: 'background 0.2s' }}>
                    Get Directions
                  </a>
                </div>
              </div>

              {/* Card 6: Moyo */}
              <div style={{ flex: '0 0 260px', scrollSnapAlign: 'start', padding: '1.2rem', background: '#fff', borderRadius: '12px', border: '1px solid rgba(42, 26, 74, 0.1)', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ margin: '0 0 0.2rem 0', fontSize: '1.3rem', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>Moyo</h3>
                <p style={{ margin: '0 0 1rem 0', fontSize: '0.9rem', opacity: 0.7, fontWeight: 500 }}>Drymades</p>

                <div style={{ marginBottom: '0.6rem' }}>
                  <strong style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#666' }}>Address</strong>
                  <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>Moyo, Drymades</span>
                </div>

                <div style={{ marginBottom: '0.6rem' }}>
                  <strong style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#666' }}>Hours</strong>
                  <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>Seasonal</span>
                </div>

                <div style={{ marginTop: 'auto' }}>
                  <a href="https://maps.app.goo.gl/ma4ggAtoTcv7hebv7?g_st=ic" target="_blank" rel="noopener noreferrer" style={{ display: 'block', textAlign: 'center', background: '#2a1a4a', color: '#fdf1e2', padding: '0.6rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem', transition: 'background 0.2s' }}>
                    Get Directions
                  </a>
                </div>
              </div>

              {/* Card 7: Poda */}
              <div style={{ flex: '0 0 260px', scrollSnapAlign: 'start', padding: '1.2rem', background: '#fff', borderRadius: '12px', border: '1px solid rgba(42, 26, 74, 0.1)', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ margin: '0 0 0.2rem 0', fontSize: '1.3rem', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>Poda</h3>
                <p style={{ margin: '0 0 1rem 0', fontSize: '0.9rem', opacity: 0.7, fontWeight: 500 }}>Ksamil</p>

                <div style={{ marginBottom: '0.6rem' }}>
                  <strong style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#666' }}>Address</strong>
                  <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>Poda, Ksamil</span>
                </div>

                <div style={{ marginBottom: '0.6rem' }}>
                  <strong style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#666' }}>Hours</strong>
                  <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>Seasonal</span>
                </div>

                <div style={{ marginTop: 'auto' }}>
                  <a href="https://maps.app.goo.gl/B8HBYb9D25qe6Yt16?g_st=ic" target="_blank" rel="noopener noreferrer" style={{ display: 'block', textAlign: 'center', background: '#2a1a4a', color: '#fdf1e2', padding: '0.6rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem', transition: 'background 0.2s' }}>
                    Get Directions
                  </a>
                </div>
              </div>

              {/* Linktree Box / More Card */}
              <div style={{ flex: '0 0 260px', scrollSnapAlign: 'start', padding: '1.2rem', background: 'linear-gradient(135deg, #f5f0eb 0%, #e8decb 100%)', borderRadius: '12px', border: '1px solid rgba(42, 26, 74, 0.1)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '1rem', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                <span style={{ fontSize: '1.05rem', fontWeight: 700, color: '#4a3a6a', textAlign: 'center', lineHeight: '1.4' }}>
                  Explore all our locations
                </span>
                <a
                  href="https://linktr.ee/theacaiclub_"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    background: '#39E09B', // Linktree brand green
                    color: '#111',
                    padding: '0.6rem 1.2rem',
                    borderRadius: '30px',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    boxShadow: '0 4px 12px rgba(57, 224, 155, 0.4)'
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                    <path d="M13.736 5.853l4.005-4.117 2.325 2.38-4.2 4.005h5.908v3.305h-5.937l4.229 4.108-2.325 2.334-5.74-5.769-5.741 5.769-2.325-2.32 4.229-4.108H2.226V8.121h5.909l-4.2-4.004 2.324-2.38 4.006 4.117V0h3.471v5.853zM10.264 16.14h3.472v7.86h-3.472v-7.86z" />
                  </svg>
                  Open Linktree
                </a>
              </div>

            </div>
          </div>
        </Popup>
      )}

      <Marker
        longitude={19.818200}
        latitude={41.3166888}
        anchor="center"
        onClick={(e) => {
          e.originalEvent.stopPropagation();
          if (clickCount === 0) {
            mapRef.current?.flyTo({
              center: [19.818200, 41.3166888],
              zoom: 19,
              duration: 1200
            });
            setClickCount(1);
          } else {
            setClickCount(2);
          }
        }}
      >
        <div style={{
          width: '70px',
          height: '70px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '2px solid rgba(255, 255, 255, 0.4)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
          overflow: 'hidden',
          cursor: 'pointer',
          transition: 'transform 0.3s ease'
        }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <img src="/logo-highres.png" alt="The Açaí Club" style={{ width: '50px', height: 'auto', objectFit: 'contain', filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.5))' }} />
        </div>
      </Marker>
    </Map>
  );
}
