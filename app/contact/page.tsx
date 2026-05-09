import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ContactForm } from '@/components/contact-form';

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-4">
            Get In Touch
          </h1>
          <p className="text-lg text-muted-foreground">
            Let&apos;s discuss your vision and start planning something memorable.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl text-accent mb-3">✉</div>
              <h3 className="font-semibold text-foreground mb-2">Email</h3>
              <p className="text-muted-foreground text-sm">
                <a href="mailto:hello@mmmdecors.com" className="hover:text-accent transition-colors">
                  hello@mmmdecors.com
                </a>
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl text-accent mb-3">📱</div>
              <h3 className="font-semibold text-foreground mb-2">Phone</h3>
              <p className="text-muted-foreground text-sm">
                <a href="tel:+1234567890" className="hover:text-accent transition-colors">
                  (123) 456-7890
                </a>
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl text-accent mb-3">📍</div>
              <h3 className="font-semibold text-foreground mb-2">Location</h3>
              <p className="text-muted-foreground text-sm">
                Serving clients nationwide
              </p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-sm p-8">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
              Send us a Message
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
            What to Expect
          </h2>
          <p className="text-foreground mb-8">
            After submitting your inquiry, we typically respond within 24-48 hours to schedule an initial consultation. This gives us the chance to learn about your vision, discuss your needs, and determine if we&apos;re the right fit for your event.
          </p>
          <p className="text-muted-foreground">
            We look forward to working with you and creating something truly memorable.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
