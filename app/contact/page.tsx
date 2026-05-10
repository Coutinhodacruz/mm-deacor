import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ContactForm } from '@/components/contact-form';
import * as motion from 'framer-motion/client';

export default function ContactPage() {
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
          <span className="text-accent font-medium tracking-widest uppercase text-sm mb-4 block">Get In Touch</span>
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-foreground mb-6 tracking-tight">
            Contact
          </h1>
          <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
            Let&apos;s discuss your vision and start planning something truly memorable together.
          </p>
        </motion.div>
      </section>

      {/* Content */}
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
            {[
              { icon: "✉", label: "Email", value: "hello@mmmdecors.com", href: "mailto:hello@mmmdecors.com" },
              { icon: "📱", label: "Phone", value: "(123) 456-7890", href: "tel:+1234567890" },
              { icon: "📍", label: "Location", value: "Serving clients nationwide", href: null }
            ].map((item, idx) => (
              <motion.div 
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: idx * 0.2 }}
                className="text-center p-8 bg-secondary/20 rounded-3xl border border-accent/5 hover:shadow-xl transition-all duration-500"
              >
                <div className="text-4xl text-accent mb-4">{item.icon}</div>
                <h3 className="font-serif font-bold text-xl text-foreground mb-3">{item.label}</h3>
                <p className="text-muted-foreground text-base">
                  {item.href ? (
                    <a href={item.href} className="hover:text-accent transition-colors">
                      {item.value}
                    </a>
                  ) : item.value}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="bg-white shadow-2xl rounded-3xl p-10 md:p-16 border border-accent/5"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-10 text-center">
              Send us a Message
            </h2>
            <ContactForm />
          </motion.div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-secondary/30 relative overflow-hidden">
        <div className="mx-auto max-w-3xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8">
              What to Expect
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-foreground/80 leading-relaxed font-light">
              <p>
                After submitting your inquiry, we typically respond within 24-48 hours to schedule an initial consultation. This gives us the chance to learn about your vision, discuss your needs, and determine if we&apos;re the right fit for your event.
              </p>
              <p className="text-muted-foreground">
                We look forward to working with you and creating something truly memorable.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
