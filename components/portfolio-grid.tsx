'use client';

import { useState } from 'react';
import Image from 'next/image';
import { portfolioEvents, portfolioCategories } from '@/lib/data';

export function PortfolioGrid() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredEvents =
    selectedCategory === 'all'
      ? portfolioEvents
      : portfolioEvents.filter((event) => event.category === selectedCategory);

  return (
    <div>
      {/* Category Filter */}
      <div className="flex flex-wrap gap-4 mb-12 justify-center md:justify-start animate-fade-in">
        {portfolioCategories.map((category, idx) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-6 py-2 rounded-sm text-sm font-medium transition-all duration-300 ${
              selectedCategory === category.id
                ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                : 'bg-card border border-border text-foreground hover:border-accent hover:shadow-md'
            }`}
            style={{ animationDelay: `${idx * 50}ms` }}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event, idx) => (
          <div
            key={event.id}
            className="group relative overflow-hidden rounded-sm bg-muted aspect-square animate-fade-in-up"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            {/* Event Image */}
            <Image
              src={event.image}
              alt={event.title}
              fill
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              quality={85}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            
            {/* Image Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-center transform group-hover:scale-100 scale-95 transition-transform duration-300">
                <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">
                  {event.category}
                </p>
                <h3 className="text-primary-foreground font-serif text-2xl text-center mb-3">
                  {event.title}
                </h3>
                <p className="text-primary-foreground/90 text-sm text-center mb-4">
                  {event.description}
                </p>
                <span className="text-accent text-sm font-medium inline-flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300">
                  View Details →
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
