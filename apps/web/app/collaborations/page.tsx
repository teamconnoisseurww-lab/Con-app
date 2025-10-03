'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import { useCart } from '@/context/CartContext';

export default function Collaborations() {
  const { addToCart } = useCart();
  return (
    <>
      <Header />

      <main className="container" style={{ minHeight: '100dvh' }}>
        <div className="stack">
          {/* Poster-style layout with intensified paint */}
          <style jsx>{`
            .collab-paint {
              position: fixed;
              inset: 0;
              z-index: -1;
              pointer-events: none;
              background:
                radial-gradient(1200px 600px at 10% 20%, var(--accent-15), transparent 60%),
                radial-gradient(800px 400px at 90% 80%, var(--accent-15), transparent 50%);
              opacity: .24;
              filter: saturate(120%) contrast(110%);
            }
          `}</style>
          <div className="collab-paint" aria-hidden="true" />

          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto' }}>
            <span className="copy" style={{ 
              fontSize: '13px', 
              color: 'var(--accent)', 
              fontWeight: 600, 
              letterSpacing: '0.08em', 
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '16px'
            }}>
              Latest Collaboration
            </span>

            <h1 style={{ 
              fontFamily: 'var(--serif)', 
              fontSize: 'clamp(36px, 6vw, 64px)', 
              fontWeight: 500, 
              lineHeight: 1.1,
              marginBottom: 'clamp(20px, 3vh, 32px)',
              letterSpacing: '-0.02em',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'clamp(16px, 2vw, 24px)',
              flexWrap: 'wrap'
            }}>
              <img 
                src="/Con Script Logo copy.jpg" 
                alt="Signature" 
                style={{ 
                  height: 'clamp(60px, 10vw, 120px)',
                  width: 'auto',
                  objectFit: 'contain',
                  mixBlendMode: 'multiply'
                }}
              />
              <span>×</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 'clamp(8px, 1vw, 12px)' }}>
                AJ
                {/* Wax seal with drip */}
                <div style={{ position: 'relative', display: 'inline-block' }}>
                  <svg 
                    width="clamp(16px, 2vw, 20px)" 
                    height="clamp(16px, 2vw, 20px)" 
                    viewBox="0 0 20 20" 
                    style={{ 
                      display: 'block',
                      marginTop: '8px'
                    }}
                  >
                    <circle cx="10" cy="10" r="9" fill="#2C5F2D" opacity="0.9"/>
                    <circle cx="10" cy="10" r="6" fill="none" stroke="#1a3a1b" strokeWidth="0.5" opacity="0.6"/>
                  </svg>
                  {/* Drip animation */}
                  <svg 
                    width="4" 
                    height="20" 
                    viewBox="0 0 4 20" 
                    style={{ 
                      position: 'absolute', 
                      left: '50%', 
                      top: '100%',
                      transform: 'translateX(-50%)',
                      overflow: 'visible'
                    }}
                  >
                    <ellipse cx="2" cy="2" rx="1.5" ry="2" fill="#2C5F2D">
                      <animate attributeName="ry" values="2;8;2" dur="4s" repeatCount="indefinite"/>
                      <animate attributeName="cy" values="2;10;2" dur="4s" repeatCount="indefinite"/>
                    </ellipse>
                  </svg>
                </div>
                Yawn
              </span>
            </h1>

            <p className="copy" style={{ 
              fontSize: 'clamp(15px, 1.8vw, 18px)', 
              lineHeight: 1.7,
              marginBottom: 'clamp(24px, 4vh, 40px)',
              maxWidth: '560px',
              margin: '0 auto clamp(32px, 5vh, 48px)'
            }}>
              An exclusive package presented with the GRC Your Way 2025 tour, featuring selected pieces from AJ. 
              Matching his style, energy, and vision.
            </p>

            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '12px', 
              alignItems: 'center',
              marginBottom: 'clamp(32px, 5vh, 48px)'
            }}>
              <button 
                onClick={() => {
                  document.getElementById('store-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn"
                style={{ 
                  maxWidth: '280px',
                  display: 'inline-block',
                  textAlign: 'center',
                  marginTop: 0
                }}
              >
                GRC Your Way Store
              </button>
            </div>

            <div className="grid cards" style={{ marginTop: 'clamp(48px, 7vh, 80px)', textAlign: 'left' }}>
              <div className="card">
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: '20px', fontWeight: 500, marginBottom: '8px' }}>
                  The Vision
                </h3>
                <p className="copy" style={{ fontSize: '14px' }}>
                  To shine light on the style and culture found throughout the global tech community. This package captures AJ's personal aesthetic. Pieces he'd wear. Establishing the young, stylish leader as a new cultural archetype.
                </p>
              </div>

              <div className="card">
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: '20px', fontWeight: 500, marginBottom: '8px' }}>
                  The Craft
                </h3>
                <p className="copy" style={{ fontSize: '14px' }}>
                  Designed with Connoisseur's Maison discipline and creative direction. Each piece balances streetwear energy with luxury quality, crafted to embody the convergence of intelligence, confidence and lifestyle.
                </p>
              </div>

              <div className="card">
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: '20px', fontWeight: 500, marginBottom: '8px' }}>
                  The Impact
                </h3>
                <p className="copy" style={{ fontSize: '14px' }}>
                  A portion of proceeds supports initiatives that elevate emerging voices in Tech and Art/Fashion culture, extending the collaboration's influence beyond fashion into community and innovation.
                </p>
              </div>
            </div>

            {/* Store Section */}
            <div id="store-section" style={{ marginTop: 'clamp(64px, 10vh, 120px)' }}>
              <h2 style={{ 
                fontFamily: 'var(--serif)', 
                fontSize: 'clamp(28px, 4vw, 40px)', 
                fontWeight: 500,
                textAlign: 'center',
                marginBottom: 'clamp(32px, 5vh, 48px)'
              }}>
                Collection
              </h2>

              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: 'clamp(20px, 3vw, 32px)'
              }}>
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <Link
                    key={item}
                    href={`/product/${item}`}
                    style={{
                      textDecoration: 'none',
                      color: 'inherit',
                      display: 'block',
                      cursor: 'pointer'
                    }}
                  >
                    <div 
                      style={{ position: 'relative' }}
                      onMouseEnter={(e) => {
                        const img = e.currentTarget.querySelector('.product-img') as HTMLElement;
                        if (img) img.style.transform = 'scale(1.05)';
                      }}
                      onMouseLeave={(e) => {
                        const img = e.currentTarget.querySelector('.product-img') as HTMLElement;
                        if (img) img.style.transform = 'scale(1)';
                      }}
                    >
                      {/* Product image placeholder */}
                      <div 
                        className="product-img"
                        style={{
                          width: '100%',
                          aspectRatio: '3/4',
                          background: '#F5F5F5',
                          borderRadius: '4px',
                          marginBottom: '12px',
                          transition: 'transform 0.4s cubic-bezier(0.22, 0.61, 0.36, 1)',
                          overflow: 'hidden'
                        }} 
                      />
                      
                      {/* Product info */}
                      <div style={{ padding: '0 4px' }}>
                        <h3 style={{ 
                          fontFamily: 'var(--sans)', 
                          fontSize: '14px', 
                          fontWeight: 400, 
                          marginBottom: '4px',
                          color: 'var(--ink)',
                          lineHeight: 1.4
                        }}>
                          AJ × GRC Item {item}
                        </h3>
                        
                        <p style={{ 
                          fontFamily: 'var(--sans)',
                          fontSize: '14px',
                          fontWeight: 600,
                          color: 'var(--ink)',
                          marginBottom: '8px'
                        }}>
                          $299
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
