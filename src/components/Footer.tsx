'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NewsletterSignup from './NewsletterSignup';
import './Footer.css';

export default function Footer() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOrderModalOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOrderModalOpen]);

  return (
    <footer className="footer-wrapper">
      <div className="footer-container-inner">
        <div className="footer-logo-wrapper">
          <Image 
            src="/logo-highres.png" 
            alt="Açaí Club Logo" 
            width={160} 
            height={160} 
            className="footer-top-logo" 
          />
        </div>
        
        <div className="footer-center-text">
          <h2 className="footer-main-title">The Açaí Club</h2>
          <p className="footer-tagline-main">Experience Brazil in Every Bowl</p>
          
          <div className="footer-actions">
            <button suppressHydrationWarning onClick={() => setIsOrderModalOpen(true)} className="footer-btn footer-btn-primary" style={{ border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: '1rem' }}>Order Now ➔</button>
            <Link href="/locations" className="footer-btn footer-btn-secondary">Find Us ➔</Link>
          </div>
        </div>
        
        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-contact">
              <h3>Contact</h3>
              <p>Rruga Lidhja E Prizrenit, Tiranë 1016<br />
                 theacaiclub.info@gmail.com<br />
                 069 510 0504</p>
            </div>
            <div className="footer-social-links">
              <a href="https://www.instagram.com/theacaiclub.al/" target="_blank" rel="noopener noreferrer">
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                  Instagram
                </span>
                ↗
              </a>
              <a href="https://www.tiktok.com/@theacaiclub.al" target="_blank" rel="noopener noreferrer">
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.78-1.15 5.54-3.33 7.31-1.9 1.57-4.49 2.15-6.84 1.46-2.91-.83-5.05-3.3-5.4-6.32-.3-2.61.64-5.27 2.58-7.1 1.94-1.84 4.75-2.67 7.42-2.12v4.06c-1.3-.12-2.65-.01-3.83.6-1.13.56-1.92 1.58-2.11 2.84-.19 1.25.13 2.58 1 3.51.85.92 2.2 1.34 3.46 1.07 1.18-.24 2.15-1.16 2.47-2.31.13-.5.18-1.01.18-1.52V.02z"/>
                  </svg>
                  TikTok
                </span>
                ↗
              </a>
              <a href="https://linktr.ee/theacaiclub_" target="_blank" rel="noopener noreferrer">
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                    <path d="M13.736 5.853l4.005-4.117 2.325 2.38-4.2 4.005h5.908v3.305h-5.937l4.229 4.108-2.325 2.334-5.74-5.769-5.741 5.769-2.325-2.32 4.229-4.108H2.226V8.121h5.909l-4.2-4.004 2.324-2.38 4.006 4.117V0h3.471v5.853zM10.264 16.14h3.472v7.86h-3.472v-7.86z"/>
                  </svg>
                  Linktree
                </span>
                ↗
              </a>
            </div>
          </div>
          
          <div className="footer-right">
            <h3>Quick Links</h3>
            <div className="quick-links-grid">
              <Link href="/menu" prefetch>Menu</Link>
              <Link href="/locations" prefetch>Locations</Link>
              <Link href="/community" prefetch>Community</Link>
              <Link href="/about" prefetch>About Us</Link>
              <Link href="/contact" prefetch>Contact</Link>
              <Link href="/faq" prefetch>FAQ</Link>
              <Link href="/reviews" prefetch>Reviews</Link>
              <Link href="/blog" prefetch>Açaí Journal</Link>
              <Link href="/nutrition" prefetch>Nutrition</Link>
              <Link href="/wholesale" prefetch>Wholesale</Link>
              <Link href="/franchise" prefetch>Franchise</Link>
              <Link href="/careers" prefetch>Careers</Link>
            </div>
          </div>

          <div className="footer-newsletter">
            <h3>Stay in the Loop</h3>
            <p>New menu drops, açaí sourcing stories, and offers — straight to your inbox.</p>
            <NewsletterSignup />
          </div>
        </div>

        <div className="footer-bottom-row">
          <div className="footer-copyright">
            <span>© {new Date().getFullYear()} The Açaí Club. - by <a href="https://synonymstudio.com/" target="_blank" rel="noopener noreferrer" className="footer-credit-link">Synonym Studio</a></span>
          </div>
          <div className="footer-legal-links">
            <Link href="/cookie-policy">Cookies Policy</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </div>
        </div>
      </div>
      
      {/* Order Modal */}
      {isOrderModalOpen && (
        <div className="order-modal-overlay" onClick={() => setIsOrderModalOpen(false)}>
          <div className="order-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="order-modal-close" onClick={() => setIsOrderModalOpen(false)}>✕</button>
            <h2 className="order-modal-title">How would you like to order?</h2>
            <div className="order-modal-options">
              <a href="tel:0695100504" className="order-modal-btn phone-btn">
                <span className="icon">📞</span>
                Call: 069 510 0504
              </a>
              <a href="https://wolt.com/en/alb/tirana/restaurant/the-acai-club?srsltid=AfmBOoo9duGqS99yC29iAf2qqZ9LPEq8UJLkopFATUpJ_VOS8QE5G05n" target="_blank" rel="noopener noreferrer" className="order-modal-btn wolt-btn">
                <span className="icon">🛵</span>
                Order via Wolt
              </a>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
