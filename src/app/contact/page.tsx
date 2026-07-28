'use client';

import { Suspense, useState, useRef, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import gsap from 'gsap';
import '../contact.css';

const VALID_SUBJECTS = ['general', 'franchise', 'wholesale', 'careers', 'feedback'];

const subjectLabels: Record<string, string> = {
  general: 'General Inquiry',
  franchise: 'Franchise',
  wholesale: 'Wholesale',
  careers: 'Careers',
  feedback: 'Feedback',
};

export default function ContactPage() {
  return (
    <Suspense fallback={null}>
      <ContactForm />
    </Suspense>
  );
}

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [subjectOpen, setSubjectOpen] = useState(false);
  const [subject, setSubject] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const requested = searchParams.get('subject');
    if (requested && VALID_SUBJECTS.includes(requested)) {
      setSubject(requested);
    }
  }, [searchParams]);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(containerRef.current.children,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out' }
      );
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(e.currentTarget);
    const subj = subjectLabels[subject] || 'General Inquiry';

    try {
      await fetch('https://formsubmit.co/ajax/theacaiclub.info@gmail.com', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });
    } catch (error) {
      console.error('Form submission error:', error);
    }

    // Open WhatsApp with a short heads-up only — full details (name, email, message)
    // were already sent via the email submission above, so we avoid putting PII in the URL.
    const waText = `Hi, I just sent a "${subj}" inquiry through the website contact form — looking forward to hearing back!`;
    const waUrl = `https://wa.me/355695100504?text=${encodeURIComponent(waText)}`;
    window.open(waUrl, '_blank');

    // Output animation for form
    gsap.to(formRef.current, {
      opacity: 0, x: -50, duration: 0.5, onComplete: () => {
        setSubmitted(true);
        // Input animation for success message
        setTimeout(() => {
          if (successRef.current) {
            gsap.fromTo(successRef.current,
              { scale: 0.8, opacity: 0, rotation: -10 },
              { scale: 1, opacity: 1, rotation: 0, duration: 0.6, ease: 'back.out(1.7)' }
            );
          }
        }, 50);
      }
    });
  };

  return (
    <div className="container contact-page">
      <div className="contact-layout">

        <div className="contact-info" ref={containerRef}>
          <span className="tag">Connect</span>
          <h1 className="hero-title" style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', marginTop: '0.5rem', textTransform: 'none', transform: 'none' }}>Say Hello</h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem', lineHeight: 1.6, marginBottom: '3rem', maxWidth: '450px' }}>
            Whether you're looking to partner with us, inquire about our organic sourcing,
            or just want to share your açaí story, we'd love to hear from you.
          </p>

          <div style={{ marginBottom: '2rem' }}>
            <p className="tag">Direct</p>
            <p style={{ fontSize: '1.2rem' }}>theacaiclub.info@gmail.com</p>
          </div>
          <div>
            <p className="tag">Phone</p>
            <p style={{ fontSize: '1.2rem' }}>+355 69 5100 504</p>
          </div>
        </div>

        <div className="contact-form-container">
          {!submitted ? (
            <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
              <input type="hidden" name="_captcha" value="false" />
              <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

              <div className="input-group">
                <input type="text" id="name" name="name" className="input-field" placeholder=" " required maxLength={100} pattern="[\p{L}\s\-']+" title="Only letters, spaces, hyphens, and apostrophes are allowed." />
                <label htmlFor="name" className="input-label">Name</label>
                <div className="input-focus-line"></div>
              </div>

              <div className="input-group">
                <input type="email" id="email" name="email" className="input-field" placeholder=" " required maxLength={254} />
                <label htmlFor="email" className="input-label">Email Address</label>
                <div className="input-focus-line"></div>
              </div>

              <div className="input-group custom-select-group" onClick={() => setSubjectOpen(!subjectOpen)}>
                <input type="hidden" name="subject" value={subject} required />
                <div className={`input-field custom-select-display ${subject ? 'has-value' : ''}`}>
                  {subjectLabels[subject] || ''}
                </div>
                <label className={`input-label ${subject || subjectOpen ? 'active' : ''}`}>Subject</label>
                <div className="custom-select-arrow" style={{ transform: subjectOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>▼</div>
                <div className="input-focus-line"></div>

                <div className={`custom-select-options ${subjectOpen ? 'open' : ''}`}>
                  <div className="custom-select-option" onClick={() => setSubject('general')}>General Inquiry</div>
                  <div className="custom-select-option" onClick={() => setSubject('franchise')}>Franchise</div>
                  <div className="custom-select-option" onClick={() => setSubject('wholesale')}>Wholesale</div>
                  <div className="custom-select-option" onClick={() => setSubject('careers')}>Careers</div>
                  <div className="custom-select-option" onClick={() => setSubject('feedback')}>Feedback</div>
                </div>
              </div>

              <div className="input-group">
                <textarea id="message" name="message" className="input-field" placeholder=" " required maxLength={2000}></textarea>
                <label htmlFor="message" className="input-label">How can we help?</label>
                <div className="input-focus-line"></div>
              </div>

              <button type="submit" className="btn" style={{
                width: '100%',
                marginTop: '1.5rem',
                padding: '1.2rem',
                background: 'var(--color-linen)',
                color: 'var(--color-dolphin)',
                fontSize: '1rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem'
              }}>
                Send Message
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
              </button>
            </form>
          ) : (
            <div ref={successRef} className="success-message">
              <div className="success-icon">✓</div>
              <h2 style={{ marginBottom: '1rem', fontSize: '2rem' }}>Sent.</h2>
              <p style={{ color: 'var(--color-text-muted)', maxWidth: '280px' }}>
                We've received your message and will respond within 24 hours.
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
