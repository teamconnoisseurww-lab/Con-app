'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { totalItems } = useCart();

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
      {/* Navigation links - absolutely positioned to far right */}
      <nav style={{ 
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        display: 'flex', 
        gap: 'clamp(16px, 2vw, 24px)', 
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 clamp(20px, 4vw, 40px)',
        width: 'auto',
        zIndex: 100,
        pointerEvents: 'auto'
      }}>
        <Link 
          href="/collections" 
          className="nav-link"
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
            e.currentTarget.style.borderBottomColor = 'var(--imperial-blue)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderBottomColor = 'transparent';
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
            borderBottom: '1px solid transparent',
            paddingBottom: '2px',
            position: 'relative'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderBottomColor = 'var(--imperial-yellow)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderBottomColor = 'transparent';
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
            borderBottom: '1px solid transparent',
            paddingBottom: '2px',
            position: 'relative'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderBottomColor = 'var(--imperial-green)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderBottomColor = 'transparent';
          }}
        >
          Contact
        </Link>
        
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
        <Link href="/" style={{ textDecoration: 'none', display: 'block', textAlign: 'center' }}>
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
      </div>
    </header>
  );
}
