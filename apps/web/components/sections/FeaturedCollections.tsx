'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function FeaturedCollections() {
  const collections = [
    {
      title: 'Spring/Summer 2025',
      description: 'Ethereal elegance meets contemporary sophistication',
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80',
      category: 'Fashion',
    },
    {
      title: 'Artisan Home',
      description: 'Handcrafted pieces that tell a story',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80',
      category: 'Home Decor',
    },
    {
      title: 'Limited Edition',
      description: 'Exclusive collaborations with renowned designers',
      image: 'https://images.unsplash.com/photo-1558769132-cb1aea3c8565?w=800&q=80',
      category: 'Collaboration',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-4">Featured Collections</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Discover our curated selections of exceptional pieces
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[3/4] mb-4">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${collection.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <Link href="/collections" className="text-sm font-semibold tracking-wide border-b border-white pb-1 inline-block">
                    EXPLORE →
                  </Link>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-accent-gold font-semibold tracking-wide">{collection.category}</p>
                <h3 className="font-serif text-2xl font-bold">{collection.title}</h3>
                <p className="text-neutral-600">{collection.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
