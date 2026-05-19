'use client';

import Image from 'next/image';
import { galleryImages } from '@/lib/data';
import { motion } from 'framer-motion';

export function MasonryGallery() {
  return (
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
      {galleryImages.map((src, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: (idx % 10) * 0.1 }}
          className="relative overflow-hidden rounded-2xl break-inside-avoid mb-4 group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500"
        >
          <div className="relative w-full overflow-hidden">
            <Image
              src={src}
              alt={`Gallery Image ${idx + 1}`}
              width={600}
              height={800} // This is just an aspect ratio hint; h-auto makes it fit naturally
              className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            {/* Subtle glow/overlay on hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 ease-out" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
