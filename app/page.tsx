import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ServiceCard } from '@/components/service-card';
import { TestimonialCard } from '@/components/testimonial-card';
import { services, testimonials } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';
import * as motion from 'framer-motion/client';

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />

      {/* Hero Section with Centerpiece Background */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url('/white-and-pink-flowers-wedding-centerpiece-idea.jpg')` 
        }}
      >
        <div className="mx-auto max-w-5xl text-center relative z-10 w-full pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-[110px] font-serif font-bold text-white mb-6 tracking-tight leading-[0.9] drop-shadow-2xl">
              Memorable Magical <br className="hidden md:block" /> <span className="text-accent italic font-light">Moments</span>
            </h1>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          >
            <p className="text-lg md:text-2xl text-white/90 mb-12 text-balance max-w-2xl mx-auto font-light leading-relaxed drop-shadow-lg">
              Refined event design that transforms your vision into immersive, unforgettable experiences.
            </p>
          </motion.div>
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
          >
            <Link
              href="/contact"
              className="bg-accent text-accent-foreground px-12 py-4 rounded-full font-bold hover:shadow-[0_0_40px_rgba(var(--accent),0.5)] hover:scale-105 transition-all duration-300 text-lg shadow-lg"
            >
              Start Planning
            </Link>
            <Link
              href="/portfolio"
              className="backdrop-blur-md bg-white/10 border border-white/20 text-white px-12 py-4 rounded-full font-bold hover:bg-white/20 transition-all duration-300 text-lg"
            >
              View Portfolio
            </Link>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <span className="text-[10px] tracking-[0.3em] text-white/70 uppercase font-bold">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/70 to-transparent" />
        </motion.div>
      </section>

      {/* Brand Statement */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-secondary/30 via-background to-secondary/30 border-y border-accent/10 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 border border-accent rounded-full animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 border border-accent rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="mx-auto max-w-4xl text-center relative z-10">
          <motion.p 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-foreground font-serif italic text-2xl md:text-4xl leading-relaxed mb-8"
          >
            &ldquo;When creativity meets elegance and intentionality becomes a tangible experience.&rdquo;
          </motion.p>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto my-10" 
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="text-muted-foreground text-xl max-w-2xl mx-auto font-light"
          >
            We believe every celebration deserves meticulous attention to detail, thoughtful design, and a touch of magic. That&apos;s the mmmdecors promise.
          </motion.p>
        </div>
      </motion.section>

      {/* Featured Services */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative bg-card/30 backdrop-blur-sm overflow-hidden">
        <div className="mx-auto max-w-7xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-24"
          >
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-8" />
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto font-light">
              From concept to completion, we handle every detail with precision and creativity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
            {services.slice(0, 6).map((service, idx) => (
              <motion.div 
                key={service.id} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: idx * 0.2 }}
              >
                <ServiceCard
                  id={service.id}
                  title={service.title}
                  description={service.description}
                  isCompact={true}
                />
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link
              href="/services"
              className="inline-block border-2 border-primary text-primary px-10 py-4 rounded-full font-medium hover:bg-primary hover:text-white transition-all duration-300 shadow-md"
            >
              Explore All Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose mmmdecors */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/20 relative">
        <div className="mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
              Why Choose mmmdecors
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {[
              { title: "Certified Expertise", desc: "Founder Nikie brings certified planning and design credentials with years of proven excellence." },
              { title: "Personalized Design", desc: "No two events are alike. Each design is uniquely crafted to reflect your story and vision." },
              { title: "Seamless Execution", desc: "From initial concept through installation, we handle every detail with precision and care." },
              { title: "Vendor Coordination", desc: "We manage relationships with florists, venues, and other vendors for a cohesive experience." }
            ].map((item, idx) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex gap-6 group"
              >
                <div className="flex-shrink-0">
                  <motion.div 
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    className="flex items-center justify-center h-16 w-16 rounded-2xl bg-accent/10 border border-accent/20 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500"
                  >
                    <span className="text-2xl">✓</span>
                  </motion.div>
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-lg font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-card/20 backdrop-blur-sm relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10" />
        <div className="mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
              Client Stories
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-8" />
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto font-light">
              Real moments, real feedback from those we&apos;ve had the honor to design for.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {testimonials.map((testimonial, idx) => (
              <motion.div 
                key={testimonial.id} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: idx * 0.15 }}
              >
                <TestimonialCard
                  name={testimonial.name}
                  event={testimonial.event}
                  quote={testimonial.quote}
                  featured={idx === 0}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative py-40 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground overflow-hidden"
      >
        <div className="absolute inset-0">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent rounded-full mix-blend-screen filter blur-[100px]" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.15, 0.1]
            }}
            transition={{ duration: 8, repeat: Infinity, delay: 1 }}
            className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent rounded-full mix-blend-screen filter blur-[120px]" 
          />
        </div>

        <div className="mx-auto max-w-4xl text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-serif font-bold mb-10 tracking-tight"
          >
            Ready to Create Magic?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl mb-12 text-primary-foreground/80 font-light max-w-2xl mx-auto"
          >
            Let&apos;s talk about your vision and bring it to life with intention and elegance.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="inline-block bg-accent text-accent-foreground px-12 py-5 rounded-full font-bold text-lg hover:shadow-[0_0_40px_rgba(var(--accent),0.5)] hover:scale-105 transition-all duration-500 shadow-2xl"
            >
              Schedule a Consultation
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </main>
  );
}
