'use client';

import { useCart } from '@/context/CartContext';
import Header from '@/components/Header';
import Footer from '@/components/ui/Footer';
import Link from 'next/link';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();

  return (
    <>
      <Header />

      <main className="container" style={{ paddingTop: 'clamp(200px, 25vh, 220px)', minHeight: '100vh' }}>
        <div className="stack">
          <h1 className="h-title">Shopping Cart</h1>

          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', padding: 'clamp(40px, 8vh, 80px) 0' }}>
              <p className="copy" style={{ marginBottom: '24px' }}>
                Your cart is empty
              </p>
              <Link 
                href="/collaborations"
                className="btn"
                style={{ 
                  maxWidth: '280px',
                  display: 'inline-block',
                  margin: '0 auto'
                }}
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <>
              <div style={{ maxWidth: '720px', margin: '0 auto', width: '100%' }}>
                {cart.map((item) => (
                  <div 
                    key={item.id}
                    style={{
                      display: 'flex',
                      gap: '20px',
                      padding: '20px 0',
                      borderBottom: '1px solid var(--stroke)',
                      alignItems: 'center'
                    }}
                  >
                    <div style={{
                      width: '80px',
                      height: '80px',
                      background: 'var(--bg)',
                      border: '1px solid var(--stroke)',
                      borderRadius: '8px',
                      flexShrink: 0
                    }} />

                    <div style={{ flex: 1 }}>
                      <h3 style={{ 
                        fontFamily: 'var(--serif)', 
                        fontSize: '18px', 
                        fontWeight: 500,
                        marginBottom: '4px'
                      }}>
                        {item.name}
                      </h3>
                      <p className="copy" style={{ fontSize: '14px' }}>
                        ${item.price.toFixed(2)}
                      </p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        style={{
                          background: 'transparent',
                          border: '1px solid var(--stroke)',
                          borderRadius: '4px',
                          width: '28px',
                          height: '28px',
                          cursor: 'pointer',
                          fontSize: '16px',
                          color: 'var(--ink)'
                        }}
                      >
                        −
                      </button>
                      <span style={{ minWidth: '20px', textAlign: 'center' }}>
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        style={{
                          background: 'transparent',
                          border: '1px solid var(--stroke)',
                          borderRadius: '4px',
                          width: '28px',
                          height: '28px',
                          cursor: 'pointer',
                          fontSize: '16px',
                          color: 'var(--ink)'
                        }}
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: 'var(--ink-60)',
                        cursor: 'pointer',
                        fontSize: '14px',
                        padding: '8px'
                      }}
                    >
                      Remove
                    </button>
                  </div>
                ))}

                <div style={{ 
                  marginTop: '32px', 
                  padding: '24px 0',
                  borderTop: '2px solid var(--ink)'
                }}>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    marginBottom: '24px'
                  }}>
                    <span style={{ 
                      fontFamily: 'var(--serif)', 
                      fontSize: '20px', 
                      fontWeight: 500 
                    }}>
                      Total
                    </span>
                    <span style={{ 
                      fontFamily: 'var(--serif)', 
                      fontSize: '20px', 
                      fontWeight: 500 
                    }}>
                      ${totalPrice.toFixed(2)}
                    </span>
                  </div>

                  <Link 
                    href="/checkout"
                    className="btn"
                    style={{ 
                      display: 'block',
                      textAlign: 'center',
                      textDecoration: 'none'
                    }}
                  >
                    Proceed to Checkout
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
