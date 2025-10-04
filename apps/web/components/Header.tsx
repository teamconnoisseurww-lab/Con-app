'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import Search from './Search';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      right: 0, 
      zIndex: 50,
      background: isScrolled ? 'rgba(250, 250, 250, 0.95)' : 'var(--bg)',
      backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      borderBottom: '1px solid var(--stroke)',
      padding: isScrolled ? '12px 0' : '16px 0',
      transition: 'all 0.3s cubic-bezier(0.22, 0.61, 0.36, 1)'
    }}>
      {/* Desktop: All links in one horizontal row - DESKTOP ONLY */}
      <nav 
        className="desktop-nav"
        style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 clamp(20px, 4vw, 40px)',
          zIndex: 100,
          pointerEvents: 'none'
        }}
      >
        {/* Left: CONstruct with yellow wax */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', pointerEvents: 'auto' }}>
          {/* Yellow wax seal with drip */}
          <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}>
            <svg 
              width="12" 
              height="12" 
              viewBox="0 0 20 20" 
              style={{ 
                flexShrink: 0, 
                marginTop: '0px',
                display: 'block'
              }}
            >
              <circle cx="10" cy="10" r="9" fill="#F4C430" opacity="0.9"/>
              <circle cx="10" cy="10" r="6" fill="none" stroke="#D4A017" strokeWidth="0.5" opacity="0.6"/>
            </svg>
            {isScrolled && (
              <svg 
                width="12" 
                height="30" 
                viewBox="0 0 20 60" 
                style={{ 
                  position: 'absolute',
                  top: '12px',
                  left: 0,
                  opacity: 0,
                  animation: 'dripIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards'
                }}
              >
                <path d="M 10 0 Q 10 20 10 30" stroke="#F4C430" strokeWidth="3" fill="none" opacity="0.85">
                  <animate attributeName="d" values="M 10 0 Q 10 0 10 0;M 10 0 Q 10 20 10 30" dur="0.6s" fill="freeze"/>
                </path>
                <ellipse cx="10" cy="20" rx="4" ry="6" fill="#F4C430" opacity="0.9">
                  <animate attributeName="cy" values="10;20" dur="0.5s" fill="freeze"/>
                  <animate attributeName="ry" values="0;6" dur="0.5s" fill="freeze"/>
                </ellipse>
                <ellipse cx="10" cy="35" rx="3" ry="5" fill="#F4C430" opacity="0.8">
                  <animate attributeName="cy" values="10;35" dur="0.7s" fill="freeze"/>
                  <animate attributeName="ry" values="0;5" dur="0.7s" fill="freeze"/>
                </ellipse>
                <ellipse cx="10" cy="48" rx="2" ry="3" fill="#F4C430" opacity="0.7">
                  <animate attributeName="cy" values="10;48" dur="0.9s" fill="freeze"/>
                  <animate attributeName="ry" values="0;3" dur="0.9s" fill="freeze"/>
                </ellipse>
              </svg>
            )}
          </div>
          <a 
            href="https://constructdesignacademy.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              color: 'var(--ink)',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: 400,
              transition: 'all var(--dur) var(--ease)',
              borderBottom: '1px solid transparent',
              paddingBottom: '2px',
              position: 'relative'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderBottomColor = 'var(--imperial-red)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderBottomColor = 'transparent';
            }}
          >
            <span style={{ fontWeight: 600 }}>CON</span>struct by Con.
          </a>
        </div>

        {/* Right: Other navigation links */}
        <div style={{ 
          display: 'flex', 
          gap: 'clamp(16px, 2vw, 24px)', 
          alignItems: 'center',
          pointerEvents: 'auto'
        }}>
          <Link 
          href="/collections" 
          className="nav-link"
          aria-label="View Collections"
          style={{ 
            color: 'var(--ink)', 
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: 400,
            transition: 'all var(--dur) var(--ease)',
            borderBottom: pathname === '/collections' ? '1px solid var(--imperial-blue)' : '1px solid transparent',
            paddingBottom: '2px',
            position: 'relative'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderBottomColor = 'var(--imperial-blue)';
          }}
          onMouseLeave={(e) => {
            if (pathname !== '/collections') {
              e.currentTarget.style.borderBottomColor = 'transparent';
            }
          }}
        >
          Collections
        </Link>
        <Link 
          href="/collaborations" 
          className="nav-link"
          style={{ 
            color: 'var(--ink)', 
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: 400,
            transition: 'all var(--dur) var(--ease)',
            borderBottom: pathname === '/collaborations' ? '1px solid var(--imperial-yellow)' : '1px solid transparent',
            paddingBottom: '2px',
            position: 'relative'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderBottomColor = 'var(--imperial-yellow)';
          }}
          onMouseLeave={(e) => {
            if (pathname !== '/collaborations') {
              e.currentTarget.style.borderBottomColor = 'transparent';
            }
          }}
        >
          Collaborations
        </Link>
        <Link 
          href="/contact" 
          className="nav-link"
          style={{ 
            color: 'var(--ink)', 
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: 400,
            transition: 'all var(--dur) var(--ease)',
            borderBottom: pathname === '/contact' ? '1px solid var(--imperial-green)' : '1px solid transparent',
            paddingBottom: '2px',
            position: 'relative'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderBottomColor = 'var(--imperial-green)';
          }}
          onMouseLeave={(e) => {
            if (pathname !== '/contact') {
              e.currentTarget.style.borderBottomColor = 'transparent';
            }
          }}
        >
          Connect
        </Link>
        
        {/* Search */}
        <Search />
        
        {/* Shopping cart icon */}
        <Link 
          href="/cart" 
          style={{ 
            color: 'var(--ink)',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            transition: 'transform var(--dur) var(--ease)',
            marginLeft: 'clamp(8px, 1vw, 12px)',
            position: 'relative'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5"
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 0 1-8 0"/>
          </svg>
          {totalItems > 0 && (
            <span style={{
              position: 'absolute',
              top: '-6px',
              right: '-8px',
              background: 'var(--imperial-red)',
              color: 'white',
              borderRadius: '50%',
              width: '16px',
              height: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '10px',
              fontWeight: 600
            }}>
              {totalItems}
            </span>
          )}
        </Link>
        </div>
      </nav>

      <div style={{ 
        maxWidth: 'var(--maxw)', 
        margin: '0 auto', 
        padding: '0 var(--pad)',
        position: 'relative',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        {/* Logo centered - clickable to home */}
        <Link href="/" style={{ textDecoration: 'none', display: 'block', textAlign: 'center', padding: '0 var(--pad)' }} aria-label="Connoisseur Home">
          <div style={{ 
            fontFamily: 'var(--serif)', 
            fontSize: 'clamp(24px, 3vw, 32px)', 
            fontWeight: 400,
            letterSpacing: '0.02em',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2px',
            marginBottom: '4px',
            color: 'var(--ink)'
          }}>
            <span>Con</span>
            {/* Red wax seal with drip */}
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <svg 
                width="12" 
                height="12" 
                viewBox="0 0 20 20" 
                style={{ 
                  flexShrink: 0, 
                  marginTop: '10px',
                  display: 'block'
                }}
              >
                <circle cx="10" cy="10" r="9" fill="#C41E3A" opacity="0.9"/>
                <circle cx="10" cy="10" r="6" fill="none" stroke="#8B0000" strokeWidth="0.5" opacity="0.6"/>
              </svg>
              {isScrolled && (
                <svg 
                  width="12" 
                  height="30" 
                  viewBox="0 0 20 60" 
                  style={{ 
                    position: 'absolute',
                    top: '12px',
                    left: 0,
                    opacity: 0,
                    animation: 'dripIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards'
                  }}
                >
                  <path d="M 10 0 Q 10 20 10 30" stroke="#C41E3A" strokeWidth="3" fill="none" opacity="0.85">
                    <animate attributeName="d" values="M 10 0 Q 10 0 10 0;M 10 0 Q 10 20 10 30" dur="0.6s" fill="freeze"/>
                  </path>
                  <ellipse cx="10" cy="20" rx="4" ry="6" fill="#C41E3A" opacity="0.9">
                    <animate attributeName="cy" values="10;20" dur="0.5s" fill="freeze"/>
                    <animate attributeName="ry" values="0;6" dur="0.5s" fill="freeze"/>
                  </ellipse>
                  <ellipse cx="10" cy="35" rx="3" ry="5" fill="#C41E3A" opacity="0.8">
                    <animate attributeName="cy" values="10;35" dur="0.7s" fill="freeze"/>
                    <animate attributeName="ry" values="0;5" dur="0.7s" fill="freeze"/>
                  </ellipse>
                  <ellipse cx="10" cy="48" rx="2" ry="3" fill="#C41E3A" opacity="0.7">
                    <animate attributeName="cy" values="10;48" dur="0.9s" fill="freeze"/>
                    <animate attributeName="ry" values="0;3" dur="0.9s" fill="freeze"/>
                  </ellipse>
                </svg>
              )}
            </div>
            <span>nois</span>
            {/* Blue wax seal with drip */}
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <svg 
                width="12" 
                height="12" 
                viewBox="0 0 20 20" 
                style={{ 
                  flexShrink: 0, 
                  marginTop: '10px',
                  display: 'block'
                }}
              >
                <circle cx="10" cy="10" r="9" fill="#2F6DF6" opacity="0.9"/>
                <circle cx="10" cy="10" r="6" fill="none" stroke="#1E4BA8" strokeWidth="0.5" opacity="0.6"/>
              </svg>
              {isScrolled && (
                <svg 
                  width="12" 
                  height="30" 
                  viewBox="0 0 20 60" 
                  style={{ 
                    position: 'absolute',
                    top: '12px',
                    left: 0,
                    opacity: 0,
                    animation: 'dripIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards'
                  }}
                >
                  <path d="M 10 0 Q 10 20 10 30" stroke="#2F6DF6" strokeWidth="3" fill="none" opacity="0.85">
                    <animate attributeName="d" values="M 10 0 Q 10 0 10 0;M 10 0 Q 10 20 10 30" dur="0.6s" fill="freeze"/>
                  </path>
                  <ellipse cx="10" cy="20" rx="4" ry="6" fill="#2F6DF6" opacity="0.9">
                    <animate attributeName="cy" values="10;20" dur="0.5s" fill="freeze"/>
                    <animate attributeName="ry" values="0;6" dur="0.5s" fill="freeze"/>
                  </ellipse>
                  <ellipse cx="10" cy="35" rx="3" ry="5" fill="#2F6DF6" opacity="0.8">
                    <animate attributeName="cy" values="10;35" dur="0.7s" fill="freeze"/>
                    <animate attributeName="ry" values="0;5" dur="0.7s" fill="freeze"/>
                  </ellipse>
                  <ellipse cx="10" cy="48" rx="2" ry="3" fill="#2F6DF6" opacity="0.7">
                    <animate attributeName="cy" values="10;48" dur="0.9s" fill="freeze"/>
                    <animate attributeName="ry" values="0;3" dur="0.9s" fill="freeze"/>
                  </ellipse>
                </svg>
              )}
            </div>
            <span>seur</span>
          </div>
          <div style={{ 
            fontFamily: 'var(--sans)', 
            fontSize: 'clamp(10px, 1.1vw, 12px)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            fontWeight: 400,
            color: 'var(--ink-60)',
            textAlign: 'center'
          }}>
            Global goods
          </div>
        </Link>

        {/* Mobile: Hamburger and Cart stacked - top right */}
        <div className="mobile-nav" style={{
          display: 'none',
          flexDirection: 'column',
          gap: '12px',
          alignItems: 'center',
          position: 'absolute',
          top: '16px',
          right: '20px',
          zIndex: 101
        }}>
          {/* Hamburger menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '12px',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              minWidth: '44px',
              minHeight: '44px',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            aria-label="Menu"
            aria-expanded={mobileMenuOpen}
          >
            <span style={{ 
              width: '20px', 
              height: '2px', 
              background: 'var(--ink)', 
              display: 'block', 
              transition: 'all 0.3s cubic-bezier(0.22, 0.61, 0.36, 1)',
              transform: mobileMenuOpen ? 'rotate(45deg) translateY(6px)' : 'none'
            }} />
            <span style={{ 
              width: '20px', 
              height: '2px', 
              background: 'var(--ink)', 
              display: 'block', 
              transition: 'all 0.3s cubic-bezier(0.22, 0.61, 0.36, 1)',
              opacity: mobileMenuOpen ? 0 : 1
            }} />
            <span style={{ 
              width: '20px', 
              height: '2px', 
              background: 'var(--ink)', 
              display: 'block', 
              transition: 'all 0.3s cubic-bezier(0.22, 0.61, 0.36, 1)',
              transform: mobileMenuOpen ? 'rotate(-45deg) translateY(-6px)' : 'none'
            }} />
          </button>


          {/* Cart icon */}
          <Link 
            href="/cart" 
            style={{ 
              color: 'var(--ink)',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              padding: '12px',
              minWidth: '44px',
              minHeight: '44px'
            }}
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5"
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            {totalItems > 0 && (
              <span style={{
                position: 'absolute',
                top: '-6px',
                right: '-8px',
                background: 'var(--imperial-red)',
                color: 'white',
                borderRadius: '50%',
                width: '16px',
                height: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '10px',
                fontWeight: 600
              }}>
                {totalItems}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="mobile-nav" style={{
            display: 'none',
            flexDirection: 'column',
            gap: '20px',
            alignItems: 'center',
            padding: '24px',
            background: 'var(--bg)',
            borderTop: '1px solid var(--stroke)',
            animation: 'slideDown 0.3s cubic-bezier(0.22, 0.61, 0.36, 1)',
            transformOrigin: 'top'
          }}>
          <a 
            href="https://constructdesignacademy.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              color: 'var(--ink)', 
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: 400,
              transition: 'opacity var(--dur) var(--ease)'
            }}
          >
            <span style={{ fontWeight: 600 }}>CON</span>struct by Con
          </a>
          <Link 
            href="/collections" 
            style={{ 
              color: pathname === '/collections' ? 'var(--imperial-blue)' : 'var(--ink)', 
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: pathname === '/collections' ? 600 : 400,
              transition: 'color var(--dur) var(--ease)'
            }}
          >
            Collections
          </Link>
          <Link 
            href="/collaborations" 
            style={{ 
              color: pathname === '/collaborations' ? 'var(--imperial-red)' : 'var(--ink)', 
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: pathname === '/collaborations' ? 600 : 400,
              transition: 'color var(--dur) var(--ease)'
            }}
          >
            Collaborations
          </Link>
          <Link 
            href="/contact" 
            style={{ 
              color: pathname === '/contact' ? 'var(--imperial-green)' : 'var(--ink)', 
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: pathname === '/contact' ? 600 : 400,
              transition: 'color var(--dur) var(--ease)'
            }}
          >
            Connect
          </Link>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Accessibility: Focus styles */
        a:focus-visible, button:focus-visible {
          outline: 2px solid var(--ink);
          outline-offset: 4px;
          border-radius: 2px;
        }
        
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-nav {
            display: flex !important;
          }
        }
        @media (min-width: 769px) {
          .mobile-nav {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
