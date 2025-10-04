'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Search() {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
      setQuery('');
      setIsOpen(false);
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      {/* Search Icon Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Search"
        aria-expanded={isOpen}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--ink)'
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
      </button>

      {/* Search Input Overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            onClick={() => setIsOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0, 0, 0, 0.3)',
              backdropFilter: 'blur(4px)',
              zIndex: 999,
              animation: 'fadeIn 0.2s ease'
            }}
          />

          {/* Search Form */}
          <div
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 1000,
              width: '90%',
              maxWidth: '600px',
              animation: 'slideDown 0.3s cubic-bezier(0.22, 0.61, 0.36, 1)'
            }}
          >
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search collections, products..."
                autoFocus
                style={{
                  width: '100%',
                  padding: '20px 24px',
                  fontSize: '18px',
                  fontFamily: 'var(--serif)',
                  fontStyle: 'italic',
                  border: '1px solid rgba(0, 0, 0, 0.1)',
                  borderRadius: '2px',
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(20px)',
                  outline: 'none',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
                  color: 'var(--ink)'
                }}
              />
            </form>
            <p
              style={{
                textAlign: 'center',
                marginTop: '12px',
                fontSize: '13px',
                color: 'rgba(255, 255, 255, 0.8)',
                fontFamily: 'var(--sans)'
              }}
            >
              Press Enter to search or Esc to close
            </p>
          </div>
        </>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
