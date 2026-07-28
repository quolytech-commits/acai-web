'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Background change on scroll
      setScrolled(currentScrollY > 50);

      // Hide/Show logic
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${!visible ? 'hidden' : ''}`}>
      <div className="container navbar-container">
        <div className="nav-logo">
          <Link href="/" className="nav-logo-link">
            <Image
              src="/logo-highres.png"
              alt="Açaí Club Logo"
              className="nav-logo-img"
              width={740}
              height={740}
              priority
            />
          </Link>
        </div>

        {/* Hamburger Menu Icon */}
        <button
          className={`mobile-menu-btn ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          suppressHydrationWarning
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Global Links */}
        <div className={`nav-links ${isOpen ? 'show' : ''}`}>
          <Link href="/menu" className="nav-link" onClick={() => setIsOpen(false)}>Menu</Link>
          <Link href="/community" className="nav-link" onClick={() => setIsOpen(false)}>Community</Link>
          <Link href="/about" className="nav-link" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/locations" className="nav-link" onClick={() => setIsOpen(false)}>Locations</Link>
          <Link href="/contact" className="nav-link nav-link-contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}
