import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ServiceCard } from '@/components/service-card';
import { services } from '@/lib/data';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-4">
            Services
          </h1>
          <p className="text-lg text-muted-foreground">
            Comprehensive event design and styling from concept to completion.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.description}
                details={service.details}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Service Spectrum */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-8">
            Design Spectrum
          </h2>
          <p className="text-foreground mb-12">
            Whether you&apos;re looking for subtle elegance, statement designs, or complete immersive styling, we tailor our approach to match your vision.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border border-border rounded-sm">
              <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
                Subtle Elegance
              </h3>
              <p className="text-muted-foreground text-sm">
                Understated, refined approaches that enhance without overwhelming.
              </p>
            </div>
            <div className="p-6 border border-border rounded-sm">
              <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
                Statement Designs
              </h3>
              <p className="text-muted-foreground text-sm">
                Bold, dramatic visual features that capture attention and inspire awe.
              </p>
            </div>
            <div className="p-6 border border-border rounded-sm">
              <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
                Immersive Styling
              </h3>
              <p className="text-muted-foreground text-sm">
                Complete space transformation that creates an entire world for your event.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-12 text-center">
            Our Process
          </h2>

          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground font-semibold">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Consultation & Vision
                </h3>
                <p className="text-muted-foreground">
                  We meet to understand your story, preferences, and vision for the perfect celebration.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground font-semibold">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Concept Development
                </h3>
                <p className="text-muted-foreground">
                  We create mood boards, design concepts, and detailed proposals for your review and refinement.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground font-semibold">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Vendor Coordination
                </h3>
                <p className="text-muted-foreground">
                  We work with florists, venues, and other vendors to ensure seamless execution of the design.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground font-semibold">
                  4
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Design Installation
                </h3>
                <p className="text-muted-foreground">
                  We manage setup, styling, and final details to bring the design to life perfectly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Let&apos;s Discuss Your Event
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Schedule a consultation to explore how we can bring your vision to life.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-sm font-medium hover:opacity-90 transition-opacity"
          >
            Schedule Now
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
