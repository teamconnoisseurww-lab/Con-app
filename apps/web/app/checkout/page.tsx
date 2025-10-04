'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import Header from '@/components/Header';
import Footer from '@/components/ui/Footer';
import Link from 'next/link';

export default function Checkout() {
  const { cart, totalPrice, clearCart } = useCart();
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardNumber: '',
    expiry: '',
    cvc: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      console.log('Payment processed:', formData);
      alert('Order placed successfully! (Demo mode - Stripe integration needed)');
      clearCart();
      setIsProcessing(false);
    }, 2000);
  };

  if (cart.length === 0) {
    return (
      <>
        <Header />
        <main className="container" style={{ paddingTop: 'clamp(200px, 25vh, 220px)', minHeight: '100vh' }}>
          <div className="stack">
            <h1 className="h-title">Checkout</h1>
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
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Header />

      <main className="container" style={{ paddingTop: 'clamp(200px, 25vh, 220px)', minHeight: '100vh' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto', width: '100%', padding: '0 clamp(20px, 5vw, 24px)' }}>
          <h1 className="h-title">Checkout</h1>

          {/* Order Summary */}
          <div style={{ marginBottom: '32px', padding: '20px', border: '1px solid var(--stroke)', borderRadius: '12px' }}>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: '18px', fontWeight: 500, marginBottom: '16px' }}>
              Order Summary
            </h2>
            {cart.map((item) => (
              <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span className="copy">{item.name} × {item.quantity}</span>
                <span className="copy">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div style={{ 
              marginTop: '16px', 
              paddingTop: '16px', 
              borderTop: '1px solid var(--stroke)',
              display: 'flex',
              justifyContent: 'space-between',
              fontWeight: 600
            }}>
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
          </div>

          {/* Checkout Form */}
          <form onSubmit={handleSubmit}>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: '18px', fontWeight: 500, marginBottom: '20px' }}>
              Contact Information
            </h2>
            
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="input"
              required
              style={{ marginBottom: '12px' }}
            />

            <input
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="input"
              required
              style={{ marginBottom: '12px' }}
            />

            <h2 style={{ fontFamily: 'var(--serif)', fontSize: '18px', fontWeight: 500, margin: '32px 0 20px' }}>
              Shipping Address
            </h2>

            <input
              type="text"
              placeholder="Address"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className="input"
              required
              style={{ marginBottom: '12px' }}
            />

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
              <input
                type="text"
                placeholder="City"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="input"
                required
              />
              <input
                type="text"
                placeholder="State"
                value={formData.state}
                onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                className="input"
                required
              />
            </div>

            <input
              type="text"
              placeholder="ZIP Code"
              value={formData.zip}
              onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
              className="input"
              required
              style={{ marginBottom: '12px' }}
            />

            <h2 style={{ fontFamily: 'var(--serif)', fontSize: '18px', fontWeight: 500, margin: '32px 0 20px' }}>
              Payment Information
            </h2>

            <div style={{ 
              padding: '20px', 
              border: '1px solid var(--stroke)', 
              borderRadius: '12px',
              marginBottom: '24px'
            }}>
              <p className="copy" style={{ fontSize: '13px', marginBottom: '16px', color: 'var(--ink-60)' }}>
                🔒 Secured by Stripe
              </p>

              <input
                type="text"
                placeholder="Card Number"
                value={formData.cardNumber}
                onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                className="input"
                required
                maxLength={19}
                style={{ marginBottom: '12px' }}
              />

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <input
                  type="text"
                  placeholder="MM/YY"
                  value={formData.expiry}
                  onChange={(e) => setFormData({ ...formData, expiry: e.target.value })}
                  className="input"
                  required
                  maxLength={5}
                />
                <input
                  type="text"
                  placeholder="CVC"
                  value={formData.cvc}
                  onChange={(e) => setFormData({ ...formData, cvc: e.target.value })}
                  className="input"
                  required
                  maxLength={4}
                />
              </div>
            </div>

            <button 
              type="submit" 
              className="btn"
              disabled={isProcessing}
              style={{ opacity: isProcessing ? 0.6 : 1 }}
            >
              {isProcessing ? 'Processing...' : `Pay $${totalPrice.toFixed(2)}`}
            </button>

            <p className="copy" style={{ 
              fontSize: '12px', 
              textAlign: 'center', 
              marginTop: '16px',
              color: 'var(--ink-60)'
            }}>
              Your payment information is secure and encrypted
            </p>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
