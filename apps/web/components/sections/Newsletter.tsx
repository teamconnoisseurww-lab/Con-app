'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Join Our Circle
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            Be the first to discover new collections, exclusive collaborations, and styling insights.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 border-2 border-neutral-300 focus:border-accent-gold focus:outline-none transition-colors"
              required
            />
            <button
              type="submit"
              className="px-8 py-4 bg-primary text-white font-semibold tracking-wide hover:bg-accent-gold hover:text-primary transition-all duration-300"
            >
              SUBSCRIBE
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
