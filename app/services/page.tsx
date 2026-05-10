import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ServiceCard } from '@/components/service-card';
import { services } from '@/lib/data';
import Link from 'next/link';
import * as motion from 'framer-motion/client';

export default function ServicesPage() {
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
          <span className="text-accent font-medium tracking-widest uppercase text-sm mb-4 block">What We Offer</span>
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-foreground mb-6 tracking-tight">
            Services
          </h1>
          <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
            Comprehensive event design and styling from concept to completion, crafted with intention and elegance.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
            {services.map((service, idx) => (
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
                  details={service.details}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Spectrum */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-secondary/20 relative">
        <div className="mx-auto max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-8">
              Design Spectrum
            </h2>
            <p className="text-xl text-muted-foreground font-light mb-16 max-w-3xl mx-auto">
              Whether you&apos;re looking for subtle elegance, statement designs, or complete immersive styling, we tailor our approach to match your vision.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Subtle Elegance", desc: "Understated, refined approaches that enhance without overwhelming." },
                { title: "Statement Designs", desc: "Bold, dramatic visual features that capture attention and inspire awe." },
                { title: "Immersive Styling", desc: "Complete space transformation that creates an entire world for your event." }
              ].map((item, idx) => (
                <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 + (idx * 0.2) }}
                  className="p-10 bg-white border border-accent/5 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500"
                >
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-base font-light leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
              Our Process
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto" />
          </motion.div>

          <div className="space-y-16">
            {[
              { num: "1", title: "Consultation & Vision", desc: "We meet to understand your story, preferences, and vision for the perfect celebration." },
              { num: "2", title: "Concept Development", desc: "We create mood boards, design concepts, and detailed proposals for your review and refinement." },
              { num: "3", title: "Vendor Coordination", desc: "We work with florists, venues, and other vendors to ensure seamless execution of the design." },
              { num: "4", title: "Design Installation", desc: "We manage setup, styling, and final details to bring the design to life perfectly." }
            ].map((step, idx) => (
              <motion.div 
                key={step.num}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: idx * 0.2 }}
                className="flex flex-col md:flex-row items-center gap-10 text-center md:text-left group"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-20 w-20 rounded-full bg-accent text-accent-foreground font-serif text-3xl font-bold shadow-xl group-hover:scale-110 transition-transform duration-500">
                    {step.num}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-serif font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto md:mx-0">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="py-40 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground relative overflow-hidden"
      >
        <div className="mx-auto max-w-3xl text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-8"
          >
            Let&apos;s Discuss Your Event
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl md:text-2xl mb-12 text-primary-foreground/80 font-light"
          >
            Schedule a consultation to explore how we can bring your vision to life.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <Link
              href="/contact"
              className="inline-block bg-accent text-accent-foreground px-12 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 shadow-xl"
            >
              Schedule Now
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </main>
  );
}
