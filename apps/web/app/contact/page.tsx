'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';

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

      <main className="container">
        <div className="stack">
          <h1 className="h-title">Contact</h1>
          <p className="copy" style={{ textAlign: 'center', maxWidth: '580px', margin: '0 auto clamp(32px, 5vh, 48px)' }}>
            Interested in our collections, collaboration, or private client access, we'd love to hear from you.
          </p>

          <form onSubmit={handleSubmit} style={{ maxWidth: '520px', margin: '0 auto', width: '100%' }}>
            <div style={{ marginBottom: '16px' }}>
              <label htmlFor="name" className="copy" style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 500 }}>
                Name
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your name"
                className="input"
                required
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="email" className="copy" style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 500 }}>
                Email
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your@email.com"
                className="input"
                required
              />
            </div>

            <div style={{ marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <p className="copy" style={{ fontSize: '14px', fontWeight: 500, marginBottom: '4px' }}>
                I'm interested in:
              </p>
              
              <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={formData.collections}
                  onChange={(e) => setFormData({ ...formData, collections: e.target.checked })}
                  style={{ 
                    width: '18px', 
                    height: '18px', 
                    cursor: 'pointer',
                    accentColor: 'var(--accent)'
                  }}
                />
                <span className="copy" style={{ fontSize: '14px' }}>Collections</span>
              </label>

              <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={formData.collaboration}
                  onChange={(e) => setFormData({ ...formData, collaboration: e.target.checked })}
                  style={{ 
                    width: '18px', 
                    height: '18px', 
                    cursor: 'pointer',
                    accentColor: 'var(--accent)'
                  }}
                />
                <span className="copy" style={{ fontSize: '14px' }}>Collaboration</span>
              </label>

              <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={formData.privateClient}
                  onChange={(e) => setFormData({ ...formData, privateClient: e.target.checked })}
                  style={{ 
                    width: '18px', 
                    height: '18px', 
                    cursor: 'pointer',
                    accentColor: 'var(--accent)'
                  }}
                />
                <span className="copy" style={{ fontSize: '14px' }}>Private Client Access</span>
              </label>

              <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={formData.constructByCon}
                  onChange={(e) => setFormData({ ...formData, constructByCon: e.target.checked })}
                  style={{ 
                    width: '18px', 
                    height: '18px', 
                    cursor: 'pointer',
                    accentColor: 'var(--accent)'
                  }}
                />
                <span className="copy" style={{ fontSize: '14px' }}>Construct by Con</span>
              </label>
            </div>

            <button type="submit" className="btn">
              Connect
            </button>
          </form>

          <div style={{ marginTop: 'clamp(48px, 7vh, 80px)', textAlign: 'center' }}>
            <p className="copy" style={{ fontSize: '14px', color: 'var(--ink-60)', marginBottom: '8px' }}>
              Or reach us directly
            </p>
            <a href="mailto:hello@connoisseur.com" className="copy" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 600 }}>
              hello@connoisseur.com
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
