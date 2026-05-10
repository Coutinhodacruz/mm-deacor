'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { navigation } from '@/lib/data';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/95 backdrop-blur-md border-b border-accent/10 shadow-sm py-1' 
          : 'bg-background/80 backdrop-blur-sm py-2'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between relative h-14 md:h-16">
          {/* Logo - Left */}
          <Link href="/" className="flex items-center group relative z-10">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <img 
                src="/WhatsApp_Image_2026-05-05_at_11.30.32_PM-removebg-preview.png" 
                alt="mmmdecors Logo" 
                className="h-16 md:h-28 w-auto object-contain drop-shadow-sm" 
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex items-center justify-center absolute inset-0 pointer-events-none">
            <div className="flex items-center gap-8 lg:gap-10 pointer-events-auto">
              {navigation.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="text-sm lg:text-base font-medium text-foreground/80 hover:text-accent transition-colors duration-300 relative group whitespace-nowrap"
                  >
                    {item.name}
                    <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Button - Right */}
          <motion.div 
            className="hidden md:block relative z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <Link
              href="/contact"
              className="bg-accent text-accent-foreground px-6 py-2 rounded-full text-sm font-semibold hover:shadow-lg hover:bg-accent/90 transition-all duration-300 border border-accent/20 whitespace-nowrap"
            >
              Book Now
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground relative z-10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 flex flex-col gap-4 pb-4 border-t border-accent/5 pt-4"
            >
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-foreground hover:text-accent transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-center text-sm font-medium hover:shadow-lg transition-all duration-300 inline-block"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Now
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
