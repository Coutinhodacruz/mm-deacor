'use client';

import Image from 'next/image';
import { galleryImages, galleryCategories, GalleryCategory } from '@/lib/data';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';

export function MasonryGallery() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory | 'All'>('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filtered = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div>
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-14">
        {galleryCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
              activeCategory === cat.id
                ? 'bg-accent text-accent-foreground border-accent shadow-lg scale-105'
                : 'bg-transparent text-foreground/70 border-border hover:border-accent hover:text-accent'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="columns-2 md:columns-3 lg:columns-4 gap-2 sm:gap-4"
        >
          {filtered.map((img, idx) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (idx % 10) * 0.06 }}
              className="relative overflow-hidden rounded-2xl break-inside-avoid mb-2 sm:mb-4 group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500"
              onClick={() => setSelectedImage(img.src)}
            >
              <div className="relative w-full overflow-hidden">
                <Image
                  src={img.src}
                  alt={`${img.category} - Gallery Image ${idx + 1}`}
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 ease-out" />
                {/* Category badge on hover */}
                <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs font-semibold text-white bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                    {img.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-muted-foreground">
          No images in this category yet.
        </div>
      )}

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors p-2 z-50"
              >
                <X size={32} />
              </button>
              <div className="relative w-full h-full flex justify-center items-center">
                <Image
                  src={selectedImage}
                  alt="Enlarged gallery image"
                  width={1200}
                  height={1200}
                  className="object-contain max-h-[85vh] w-auto rounded-lg shadow-2xl"
                  quality={100}
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
