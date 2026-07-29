'use client';

import { useState } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || status === 'submitting') return;

    setStatus('submitting');

    try {
      await fetch('https://formsubmit.co/ajax/theacaiclub.info@gmail.com', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: JSON.stringify({
          _subject: 'New Newsletter Signup',
          email,
        }),
      });
    } catch (error) {
      console.error('Newsletter signup error:', error);
    }

    setStatus('done');
    setEmail('');
  };

  if (status === 'done') {
    return (
      <p className="newsletter-success">You&apos;re on the list — thanks for signing up.</p>
    );
  }

  return (
    <form className="newsletter-form" onSubmit={handleSubmit} style={{ boxSizing: 'border-box', width: '100%', maxWidth: '340px', margin: '0 auto' }}>
      <input
        type="email"
        name="email"
        required
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="newsletter-input"
        aria-label="Email address"
        style={{ boxSizing: 'border-box' }}
        suppressHydrationWarning
      />
      <button 
        type="submit" 
        className="newsletter-btn" 
        disabled={status === 'submitting'} 
        style={{ boxSizing: 'border-box' }}
        suppressHydrationWarning
      >
        {status === 'submitting' ? 'Joining…' : 'Join'}
      </button>
    </form>
  );
}
