'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/ui/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    collections: false,
    collaboration: false,
    privateClient: false,
    constructByCon: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      collections: false,
      collaboration: false,
      privateClient: false,
      constructByCon: false,
    });
  };

  return (
    <>
      <Header />

      <main className="container" style={{ paddingTop: 'clamp(240px, 30vh, 260px)', paddingLeft: 'clamp(20px, 5vw, 32px)', paddingRight: 'clamp(20px, 5vw, 32px)', paddingBottom: '60px', minHeight: '100vh', position: 'relative', boxSizing: 'border-box', overflowX: 'hidden' }}>
        {/* Subtle background texture */}
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: -1,
          background: 'radial-gradient(circle at 20% 30%, rgba(196, 30, 58, 0.03), transparent 50%), radial-gradient(circle at 80% 70%, rgba(47, 109, 246, 0.03), transparent 50%)',
          pointerEvents: 'none'
        }} />

        <div className="stack">
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto clamp(56px, 10vh, 96px)' }}>
            <h1 style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(36px, 8vw, 72px)',
              fontWeight: 400,
              letterSpacing: '-0.02em',
              marginBottom: 'clamp(24px, 4vh, 40px)',
              lineHeight: 1.1
            }}>
              Let's Connect
            </h1>
            <p style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(15px, 3vw, 20px)',
              color: 'var(--ink-60)',
              fontStyle: 'italic',
              lineHeight: 1.7,
              maxWidth: '540px',
              margin: '0 auto'
            }}>
              For inquiries regarding collections, collaborations, or private client services
            </p>
          </div>

          <form onSubmit={handleSubmit} style={{ 
            maxWidth: '580px', 
            margin: '0 auto', 
            width: '100%',
            padding: 'clamp(24px, 6vh, 60px) clamp(20px, 5vw, 48px)',
            background: 'rgba(255, 255, 255, 0.6)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(0, 0, 0, 0.06)',
            borderRadius: '2px',
            boxSizing: 'border-box'
          }}>
            <div style={{ marginBottom: 'clamp(24px, 4vh, 32px)' }}>
              <label htmlFor="name" style={{ 
                display: 'block', 
                marginBottom: '12px', 
                fontSize: '13px', 
                fontWeight: 500,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                color: 'var(--imperial-red)'
              }}>
                Name
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter your name"
                required
                style={{
                  width: '100%',
                  padding: '16px 0',
                  border: 'none',
                  borderBottom: '1px solid rgba(0, 0, 0, 0.15)',
                  background: 'transparent',
                  fontSize: '16px',
                  fontFamily: 'var(--serif)',
                  fontStyle: 'italic',
                  outline: 'none',
                  transition: 'border-color 0.3s ease',
                  color: 'var(--ink)'
                }}
                onFocus={(e) => e.currentTarget.style.borderBottomColor = 'var(--ink)'}
                onBlur={(e) => e.currentTarget.style.borderBottomColor = 'rgba(0, 0, 0, 0.15)'}
              />
            </div>

            <div style={{ marginBottom: 'clamp(32px, 5vh, 48px)' }}>
              <label htmlFor="email" style={{ 
                display: 'block', 
                marginBottom: '12px', 
                fontSize: '13px', 
                fontWeight: 500,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                color: 'var(--imperial-blue)'
              }}>
                Email
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your@email.com"
                required
                style={{
                  width: '100%',
                  padding: '16px 0',
                  border: 'none',
                  borderBottom: '1px solid rgba(0, 0, 0, 0.15)',
                  background: 'transparent',
                  fontSize: '16px',
                  fontFamily: 'var(--serif)',
                  fontStyle: 'italic',
                  outline: 'none',
                  transition: 'border-color 0.3s ease',
                  color: 'var(--ink)'
                }}
                onFocus={(e) => e.currentTarget.style.borderBottomColor = 'var(--ink)'}
                onBlur={(e) => e.currentTarget.style.borderBottomColor = 'rgba(0, 0, 0, 0.15)'}
              />
            </div>

            <div style={{ marginBottom: 'clamp(40px, 6vh, 56px)' }}>
              <p style={{ 
                fontSize: '13px', 
                fontWeight: 500,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                color: 'var(--imperial-green)',
                marginBottom: '20px'
              }}>
                Areas of Interest
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
                {[
                  { key: 'collections', label: 'Collections' },
                  { key: 'collaboration', label: 'Collaboration' },
                  { key: 'privateClient', label: 'Private Client' },
                  { key: 'constructByCon', label: 'CONstruct by Con' }
                ].map(({ key, label }) => (
                  <label key={key} style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '10px', 
                    cursor: 'pointer',
                    padding: 'clamp(10px, 2vw, 12px) clamp(12px, 3vw, 16px)',
                    border: '1px solid rgba(0, 0, 0, 0.1)',
                    borderRadius: '2px',
                    transition: 'all 0.3s ease',
                    background: formData[key as keyof typeof formData] ? 'rgba(0, 0, 0, 0.03)' : 'transparent',
                    boxSizing: 'border-box'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--ink)'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.1)'}
                  >
                    <input
                      type="checkbox"
                      checked={formData[key as keyof typeof formData] as boolean}
                      onChange={(e) => setFormData({ ...formData, [key]: e.target.checked })}
                      style={{ 
                        width: '16px', 
                        height: '16px', 
                        cursor: 'pointer',
                        accentColor: 'var(--ink)',
                        flexShrink: 0
                      }}
                    />
                    <span style={{ fontSize: 'clamp(12px, 2.5vw, 14px)', fontFamily: 'var(--sans)', lineHeight: 1.3, whiteSpace: 'nowrap' }}>{label}</span>
                  </label>
                ))}
              </div>
            </div>

            <button 
              type="submit" 
              style={{
                width: '100%',
                background: 'var(--ink)',
                color: 'var(--bg)',
                border: 'none',
                padding: '18px 32px',
                fontSize: '14px',
                fontWeight: 500,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.22, 0.61, 0.36, 1)',
                borderRadius: '2px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Submit Inquiry
            </button>
          </form>

          <div style={{ marginTop: 'clamp(64px, 10vh, 96px)', textAlign: 'center', paddingBottom: 'clamp(48px, 8vh, 80px)' }}>
            <p style={{ 
              fontSize: '13px', 
              color: 'var(--ink-60)', 
              marginBottom: '16px',
              letterSpacing: '0.05em',
              textTransform: 'uppercase'
            }}>
              Direct Inquiries
            </p>
            <a href="mailto:hello@connoisseur.com" style={{ 
              color: 'var(--ink)', 
              textDecoration: 'none', 
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(18px, 2.5vw, 24px)',
              fontStyle: 'italic',
              borderBottom: '1px solid var(--ink)',
              paddingBottom: '4px',
              transition: 'opacity 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.6'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              hello@connoisseur.com
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
