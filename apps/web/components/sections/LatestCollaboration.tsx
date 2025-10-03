'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function LatestCollaboration() {
  return (
    <section className="py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="aspect-square bg-neutral-800 relative overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80)' }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-accent-gold text-sm font-semibold tracking-widest mb-4">LATEST COLLABORATION</p>
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Timeless Elegance
            </h2>
            <p className="text-lg text-neutral-300 mb-8 leading-relaxed">
              An exclusive partnership bringing together master craftsmen and contemporary design. 
              Limited pieces that blend heritage techniques with modern aesthetics.
            </p>
            <Link
              href="/collaborations"
              className="inline-block px-8 py-4 border-2 border-accent-gold text-accent-gold font-semibold tracking-wide hover:bg-accent-gold hover:text-primary transition-all duration-300"
            >
              DISCOVER MORE
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
