import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { PortfolioGrid } from '@/components/portfolio-grid';
import Link from 'next/link';
import * as motion from 'framer-motion/client';

export default function PortfolioPage() {
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
          <span className="text-accent font-medium tracking-widest uppercase text-sm mb-4 block">Our Work</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6 tracking-tight">
            Portfolio
          </h1>
          <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            A glimpse into the magical events we&apos;ve had the honor to design and create, where every detail tells a story.
          </p>
        </motion.div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <PortfolioGrid />
        </div>
      </section>

      {/* CTA */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="py-40 px-4 sm:px-6 lg:px-8 bg-secondary text-secondary-foreground relative overflow-hidden"
      >
        <div className="mx-auto max-w-3xl text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-8"
          >
            Imagine Your Event Here
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg md:text-xl mb-12 text-secondary-foreground/80 font-light"
          >
            Let&apos;s discuss how we can create something equally beautiful and meaningful for you.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <Link
              href="/contact"
              className="inline-block bg-accent text-accent-foreground px-8 py-3 md:px-10 md:py-4 rounded-full font-bold text-base hover:shadow-2xl hover:scale-105 transition-all duration-500 shadow-xl"
            >
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </main>
  );
}
