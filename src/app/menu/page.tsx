'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { acaiCups, smoothies, toppings } from '@/lib/menu-data';
import '../menu.css';

export default function MenuPage() {
  useEffect(() => {
    document.body.classList.add('menu-page-body');

    // Motion Design: Section Title Entrance
    gsap.fromTo('.section-title-minimal',
      {
        y: -60,
        opacity: 0,
        scale: 0.95
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.4,
        ease: 'power3.out',
        stagger: 0.3
      }
    );

    // Motion Design: Staggered Stencil Entrance of the Cups
    gsap.fromTo('.menu-item-minimal',
      {
        x: 250,
        opacity: 0,
        rotate: 12
      },
      {
        x: 0,
        opacity: 1,
        rotate: 0,
        duration: 1.6,
        stagger: 0.15,
        ease: 'power4.out',
        delay: 0.25
      }
    );

    return () => document.body.classList.remove('menu-page-body');
  }, []);

  return (
    <div className="menu-page">

      <h1 className="visually-hidden">The Açaí Club Menu — Açaí Cups, Smoothies &amp; Toppings</h1>

      {/* Section 1: Açaí Cups */}
      <section className="menu-section-container">
        <h2 className="section-title-minimal">ACAÍ CUPS</h2>
        <div className="menu-grid-minimal">
          {acaiCups.map(item => (
            <div key={item.id} className="menu-item-minimal">
              <div className="image-wrapper-minimal">
                {item.image && (
                  <Image
                    src={item.image}
                    alt={`${item.title} açaí bowl — ${item.description}`}
                    className="image-minimal"
                    fill
                    sizes="(max-width: 480px) 80vw, (max-width: 900px) 47vw, 44vw"
                    priority={item.id === 'trancoso'}
                  />
                )}
              </div>
              <div className="info-minimal">
                <h3 className="item-title-minimal">{item.title}</h3>
                <p className="item-description-minimal" style={{ whiteSpace: 'pre-line' }}>{item.description}</p>
                <p className="item-price-minimal" style={{ whiteSpace: 'pre-line' }}>{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Smoothies */}
      <section className="menu-section-container">
        <h2 className="section-title-minimal">SMOOTHIES</h2>
        <div className="menu-grid-minimal">
          {smoothies.map(item => (
            <div key={item.id} className="menu-item-minimal">
              <div className="image-wrapper-minimal">
                {item.image && (
                  <Image
                    src={item.image}
                    alt={`${item.title} açaí smoothie — ${item.description}`}
                    className="image-minimal"
                    fill
                    sizes="(max-width: 480px) 80vw, (max-width: 900px) 47vw, 44vw"
                  />
                )}
              </div>
              <div className="info-minimal">
                <h3 className="item-title-minimal">{item.title}</h3>
                <p className="item-description-minimal" style={{ whiteSpace: 'pre-line' }}>{item.description}</p>
                {item.price && <p className="item-price-minimal" style={{ whiteSpace: 'pre-line' }}>{item.price}</p>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Toppings */}
      <section className="toppings-section">
        <h2 className="section-title-minimal">TOPPING / CREATE YOUR OWN</h2>

        <div className="create-own-explainer">
          <p className="create-own-text">Build your perfect bowl or smoothie! Start with our signature pure Açaí base, then mix and match with our premium toppings.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
            <div className="create-own-base-price" style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.4 }}>
              CREATE YOUR OWN Açaí Cup: M 490 L / L 590 L
              <span style={{ fontSize: '0.75em', fontWeight: 500, textTransform: 'none', letterSpacing: '0.02em', color: 'rgba(253, 241, 226, 0.75)' }}>
                Base + granola (+ toppings extra price)
              </span>
            </div>
            <div className="create-own-base-price" style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.4 }}>
              CREATE YOUR OWN Smoothie: 400 L
              <span style={{ fontSize: '0.75em', fontWeight: 500, textTransform: 'none', letterSpacing: '0.02em', color: 'rgba(253, 241, 226, 0.75)' }}>
                Base + milk (+ toppings extra price)
              </span>
            </div>
          </div>
        </div>

        <div className="toppings-grid">
          {toppings.map((item, idx) => (
            <div key={idx} className="topping-item">
              <span className="topping-name">{item.name}</span>
              <span className="topping-dots"></span>
              <span className="topping-price">{item.price}</span>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
