'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import Header from '@/components/Header';
import Footer from '@/components/ui/Footer';

export default function ProductDetail() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const productId = parseInt(params.id as string);

  const product = {
    id: productId,
    name: `AJ × GRC Item ${productId}`,
    price: 299.00,
    description: 'An exclusive piece from the GRC Your Way 2025 tour collection. Crafted with premium materials and designed to match AJ\'s signature style and energy.',
    images: [1, 2, 3, 4] // Placeholder for multiple images
  };

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price
    });
  };

  return (
    <>
      <Header />

      <main style={{ paddingTop: 'clamp(200px, 25vh, 220px)', minHeight: '100vh' }}>
        <div style={{ 
          maxWidth: '1400px', 
          margin: '0 auto', 
          padding: 'clamp(20px, 5vw, 40px)'
        }}>
          {/* Back button */}
          <Link 
            href="/collaborations"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: 'var(--ink)',
              textDecoration: 'none',
              fontSize: '14px',
              marginBottom: '24px',
              transition: 'opacity var(--dur) var(--ease)'
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.opacity = '0.6'}
            onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.opacity = '1'}
          >
            ← Back to Collection
          </Link>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr',
            gap: 'clamp(32px, 5vw, 64px)',
            alignItems: 'start'
          }}>
            {/* Left: Images */}
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '16px'
            }}>
              {product.images.map((img, idx) => (
                <div
                  key={idx}
                  style={{
                    width: '100%',
                    aspectRatio: '3/4',
                    background: '#F5F5F5',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.02)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                  onClick={() => setSelectedImage(idx)}
                />
              ))}
            </div>

            {/* Right: Product details - Sticky */}
            <div style={{ 
              position: 'sticky',
              top: '100px',
              padding: 'clamp(20px, 3vw, 32px)'
            }}>
              <h1 style={{ 
                fontFamily: 'var(--serif)', 
                fontSize: 'clamp(28px, 4vw, 36px)', 
                fontWeight: 500,
                marginBottom: '12px',
                lineHeight: 1.2
              }}>
                {product.name}
              </h1>

              <p style={{ 
                fontFamily: 'var(--sans)',
                fontSize: '20px',
                fontWeight: 600,
                color: 'var(--ink)',
                marginBottom: '24px'
              }}>
                ${product.price.toFixed(2)}
              </p>

              <p className="copy" style={{ 
                fontSize: '15px',
                lineHeight: 1.7,
                marginBottom: '32px'
              }}>
                {product.description}
              </p>

              {/* Size selector placeholder */}
              <div style={{ marginBottom: '24px' }}>
                <label style={{ 
                  display: 'block',
                  fontFamily: 'var(--sans)',
                  fontSize: '13px',
                  fontWeight: 600,
                  marginBottom: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Size
                </label>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                    <button
                      key={size}
                      type="button"
                      style={{
                        padding: '12px 20px',
                        border: '1px solid var(--stroke)',
                        background: 'transparent',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontFamily: 'var(--sans)',
                        fontSize: '14px',
                        transition: 'all var(--dur) var(--ease)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'var(--ink)';
                        e.currentTarget.style.background = 'var(--ink)';
                        e.currentTarget.style.color = 'var(--bg)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--stroke)';
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = 'var(--ink)';
                      }}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add to cart button */}
              <button 
                onClick={handleAddToCart}
                className="btn"
                style={{
                  width: '100%',
                  marginBottom: '16px'
                }}
              >
                Add to Cart
              </button>

              {/* Product details */}
              <div style={{ 
                marginTop: '32px',
                paddingTop: '32px',
                borderTop: '1px solid var(--stroke)'
              }}>
                <details style={{ marginBottom: '16px' }}>
                  <summary style={{ 
                    fontFamily: 'var(--sans)',
                    fontSize: '14px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    padding: '12px 0'
                  }}>
                    Product Details
                  </summary>
                  <p className="copy" style={{ fontSize: '14px', paddingTop: '12px' }}>
                    Premium materials sourced globally. Hand-finished details. Limited edition piece from the GRC Your Way 2025 tour.
                  </p>
                </details>

                <details style={{ marginBottom: '16px' }}>
                  <summary style={{ 
                    fontFamily: 'var(--sans)',
                    fontSize: '14px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    padding: '12px 0'
                  }}>
                    Shipping & Returns
                  </summary>
                  <p className="copy" style={{ fontSize: '14px', paddingTop: '12px' }}>
                    Free shipping on all orders. 30-day return policy. Items ship within 2-3 business days.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
