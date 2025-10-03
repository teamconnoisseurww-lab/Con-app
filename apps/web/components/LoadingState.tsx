'use client';

import { useState, useEffect } from 'react';

export default function LoadingState() {
  const [progress, setProgress] = useState(0);
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Load to 20% and stop (page not ready)
    const duration = 1500;
    const interval = 20;
    const targetProgress = 20; // Stop at 20%
    const steps = duration / interval;
    const increment = targetProgress / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= targetProgress) {
          clearInterval(timer);
          return targetProgress;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'var(--bg)', // Off-white background
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999
    }}>
      <div style={{ 
        textAlign: 'center',
        maxWidth: '460px',
        width: '100%',
        padding: '0 24px'
      }}>
        <p style={{
          fontFamily: 'var(--serif)',
          fontSize: 'clamp(20px, 3vw, 28px)',
          color: 'var(--ink)', // Black text
          marginBottom: '48px',
          fontStyle: 'italic',
          fontWeight: 400
        }}>
          Loading
        </p>

        {/* Progress bar - stops at 20% */}
        <div style={{
          width: '100%',
          height: '48px',
          border: '1px solid var(--ink)', // Black border
          borderRadius: '999px',
          padding: '4px',
          background: 'transparent',
          marginBottom: '80px'
        }}>
          <div style={{
            width: `${progress}%`,
            height: '100%',
            background: 'var(--ink)', // Black fill
            borderRadius: '999px',
            transition: 'width 0.1s linear'
          }} />
        </div>

        {/* Email input */}
        <form onSubmit={handleSubmit}>
          <div style={{
            width: '100%',
            border: '1px solid var(--ink)', // Black border
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
                padding: '14px 24px',
                color: 'var(--ink)', // Black text
                fontFamily: 'var(--sans)',
                fontSize: '15px',
                outline: 'none',
                textAlign: 'center'
              }}
            />
          </div>

          {/* Sign Up button */}
          <button 
            type="submit" 
            style={{
              background: 'var(--ink)', // Black background
              color: 'var(--bg)', // White text
              border: 'none',
              borderRadius: '999px',
              padding: '16px 48px',
              fontFamily: 'var(--sans)',
              fontSize: '16px',
              fontWeight: 600,
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
    </div>
  );
}
