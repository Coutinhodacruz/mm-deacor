import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { MasonryGallery } from '@/components/masonry-gallery';
import * as motion from 'framer-motion/client';

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-background selection:bg-accent/30">
      <Header />

      {/* Hero */}
      <section className="pt-40 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/50 to-background overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="text-accent font-medium tracking-widest uppercase text-sm mb-4 block">Visual Archive</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6 tracking-tight">
            The Gallery
          </h1>
          <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            A curated collection of unforgettable moments, timeless elegance, and breathtaking designs.
          </p>
        </motion.div>
      </section>

      {/* Masonry Layout */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <MasonryGallery />
        </div>
      </section>

      <Footer />
    </main>
  );
}
