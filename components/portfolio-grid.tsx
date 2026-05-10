'use client';

import { useState } from 'react';
import Image from 'next/image';
import { portfolioEvents, portfolioCategories } from '@/lib/data';
import { motion, AnimatePresence } from 'framer-motion';

export function PortfolioGrid() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredEvents =
    selectedCategory === 'all'
      ? portfolioEvents
      : portfolioEvents.filter((event) => event.category === selectedCategory);

  return (
    <div>
      {/* Category Filter */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="flex flex-wrap gap-4 mb-16 justify-center"
      >
        {portfolioCategories.map((category, idx) => (
          <motion.button
            key={category.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: idx * 0.1 }}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-500 ${
              selectedCategory === category.id
                ? 'bg-accent text-accent-foreground shadow-xl scale-105'
                : 'bg-white border border-accent/10 text-foreground hover:border-accent hover:shadow-lg'
            }`}
          >
            {category.label}
          </motion.button>
        ))}
      </motion.div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <AnimatePresence mode="popLayout">
          {filteredEvents.map((event, idx) => (
            <motion.div
              layout
              key={event.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 1, delay: idx * 0.1, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-3xl bg-muted aspect-[4/5] shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Event Image */}
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                quality={85}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              
              {/* Image Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-700" />
  
              {/* Overlay Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 opacity-0 group-hover:opacity-100 transition-all duration-700">
                <div className="text-center transform translate-y-10 group-hover:translate-y-0 transition-transform duration-700">
                  <p className="text-accent text-xs font-bold uppercase tracking-widest mb-4">
                    {event.category}
                  </p>
                  <h3 className="text-white font-serif text-3xl text-center mb-4">
                    {event.title}
                  </h3>
                  <p className="text-white/80 text-sm text-center mb-6 max-w-xs mx-auto font-light">
                    {event.description}
                  </p>
                  <span className="text-accent text-sm font-semibold inline-flex items-center gap-2">
                    View Gallery →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
