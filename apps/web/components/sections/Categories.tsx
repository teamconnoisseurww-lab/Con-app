'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Categories() {
  const categories = [
    { name: 'Fashion', href: '/fashion', icon: '👗' },
    { name: 'Home Decor', href: '/home-decor', icon: '🏠' },
    { name: 'Interior Design', href: '/interior-design', icon: '🎨' },
    { name: 'Personal Styling', href: '/styling', icon: '✨' },
  ];

  return (
    <section className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-4">Our Expertise</h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={category.href}
                className="block p-8 bg-white hover:bg-accent-gold group transition-all duration-300 text-center"
              >
                <div className="text-5xl mb-4">{category.icon}</div>
                <h3 className="font-serif text-xl font-bold group-hover:text-white transition-colors">
                  {category.name}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
