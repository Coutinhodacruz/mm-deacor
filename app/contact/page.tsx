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
          <span className="text-accent font-medium tracking-widest uppercase text-sm mb-4 block">Event Design Questionnaire</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6 tracking-tight">
            Let&apos;s Plan Your Event
          </h1>
          <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            Thank you for your interest in mmmdecors. We specialize in creating bespoke event designs tailored to each client. Please complete this form so we can understand your vision.
          </p>
        </motion.div>
      </section>

      {/* Content */}
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
            {[
              { icon: "✉", label: "Email", value: "nikie@mmmdecors.ca", href: "mailto:nikie@mmmdecors.ca" },
              { icon: "📍", label: "Location", value: "Serving clients across Canada & beyond", href: null },
              { icon: "📸", label: "Instagram", value: "@mmmdecors", href: "https://instagram.com/mmmdecors" }
            ].map((item, idx) => (
              <motion.div 
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: idx * 0.2 }}
                className="text-center p-8 bg-secondary/20 rounded-3xl border border-accent/5 hover:shadow-xl transition-all duration-500"
              >
                <div className="text-3xl text-accent mb-4">{item.icon}</div>
                <h3 className="font-serif font-bold text-lg text-foreground mb-3">{item.label}</h3>
                <p className="text-muted-foreground text-sm">
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
            <div className="text-center mb-10">
              <img
                src="/WhatsApp_Image_2026-05-05_at_11.30.32_PM-removebg-preview.png"
                alt="mmmdecors"
                className="h-16 w-auto object-contain mx-auto mb-4 opacity-70"
              />
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-3">
                Event Design Questionnaire
              </h2>
              <p className="text-sm text-muted-foreground max-w-xl mx-auto font-light leading-relaxed">
                Once submitted, we will schedule a Zoom consultation to present your custom design concept and quote.
              </p>
            </div>
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
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8">
              What to Expect
            </h2>
            <div className="space-y-6 text-base md:text-lg text-foreground/80 leading-relaxed font-light">
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
