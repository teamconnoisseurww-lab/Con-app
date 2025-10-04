'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/ui/Footer';

export default function Home() {
  const [email, setEmail] = useState('');
  const progress = 75; // Static progress at 75%

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <>
      <Header />

      {/* Loading content as main page */}
      <main className="container" style={{ paddingTop: 'clamp(200px, 25vh, 220px)', minHeight: '100vh' }}>
        <div style={{ 
          textAlign: 'center',
          maxWidth: '380px',
          width: '100%',
          margin: '0 auto',
          padding: '0 clamp(20px, 5vw, 24px)'
        }}>
          <p style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(16px, 3.5vw, 22px)',
            color: 'var(--ink)',
            marginBottom: 'clamp(24px, 4vh, 32px)',
            fontStyle: 'italic',
            fontWeight: 400
          }}>
            Loading
          </p>

          {/* Progress bar - stops at 20% */}
          <div style={{
            width: '100%',
            height: 'clamp(32px, 6vw, 36px)',
            border: '1px solid var(--ink)',
            borderRadius: '999px',
            padding: '3px',
            background: 'transparent',
            marginBottom: 'clamp(32px, 6vh, 48px)'
          }}>
            <div style={{
              width: `${progress}%`,
              height: '100%',
              background: 'var(--ink)',
              borderRadius: '999px',
              transition: 'width 0.1s linear'
            }} />
          </div>

          {/* Email input */}
          <form onSubmit={handleSubmit}>
            <div style={{
              width: '100%',
              border: '1px solid var(--ink)',
              borderRadius: '999px',
              padding: '4px',
              marginBottom: '32px'
            }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email *"
                required
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  padding: 'clamp(10px, 2.5vw, 12px) 0',
                  color: 'var(--ink)',
                  fontFamily: 'var(--serif)',
                  fontSize: 'clamp(13px, 3vw, 14px)',
                  outline: 'none',
                  textAlign: 'center',
                  fontStyle: 'italic',
                  fontWeight: 400
                }}
              />
            </div>

            {/* Sign Up button */}
            <button 
              type="submit" 
              style={{
                background: 'var(--ink)',
                color: 'var(--bg)',
                border: 'none',
                borderRadius: '999px',
                padding: 'clamp(10px, 2.5vw, 12px) clamp(32px, 8vw, 40px)',
                fontFamily: 'var(--serif)',
                fontSize: 'clamp(13px, 3vw, 14px)',
                fontWeight: 400,
                fontStyle: 'italic',
                cursor: 'pointer',
                transition: 'transform var(--dur) var(--ease), opacity var(--dur) var(--ease)',
                display: 'block',
                margin: '0 auto'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.opacity = '0.9';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.opacity = '1';
              }}
            >
              Sign Up
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
