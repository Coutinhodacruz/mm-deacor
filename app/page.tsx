import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ServiceCard } from '@/components/service-card';
import { TestimonialCard } from '@/components/testimonial-card';
import { services, testimonials } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section with Image */}
      <section className="relative min-h-[90vh] pt-32 pb-24 px-4 sm:px-6 lg:px-8 flex items-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/hero-image.jpg"
            alt="Elegant event design"
            fill
            className="object-cover brightness-40"
            priority
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>

        <div className="mx-auto max-w-4xl text-center relative z-10 w-full">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-6 text-balance drop-shadow-lg">
              Memorable Magical Moments
            </h1>
          </div>
          <div className="animate-fade-in-up animation-delay-200">
            <p className="text-lg md:text-xl text-foreground/90 mb-8 text-balance drop-shadow-md">
              Refined event design that transforms your vision into immersive, unforgettable experiences.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
            <Link
              href="/contact"
              className="bg-accent text-accent-foreground px-8 py-4 rounded-sm font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Start Planning
            </Link>
            <Link
              href="/portfolio"
              className="border-2 border-accent text-accent px-8 py-4 rounded-sm font-medium hover:bg-accent/10 transition-all duration-300"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Statement */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-secondary via-background to-secondary border-t-2 border-accent/20">
        <div className="mx-auto max-w-3xl text-center animate-fade-in">
          <p className="text-foreground font-serif italic text-xl md:text-2xl leading-relaxed">
            &ldquo;When creativity meets elegance and intentionality becomes a tangible experience.&rdquo;
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto my-6" />
          <p className="text-muted-foreground text-balance">
            We believe every celebration deserves meticulous attention to detail, thoughtful design, and a touch of magic. That&apos;s the mmmdecors promise.
          </p>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card/50 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Our Services
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From concept to completion, we handle every detail with precision and creativity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.slice(0, 6).map((service, idx) => (
              <div key={service.id} className="animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
                <ServiceCard
                  id={service.id}
                  title={service.title}
                  description={service.description}
                  isCompact={true}
                />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="inline-block border border-primary text-primary px-8 py-3 rounded-sm font-medium hover:bg-primary/5 transition-colors"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose mmmdecors */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card/30">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Why Choose mmmdecors
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-sm bg-accent/20">
                  <span className="text-accent text-xl">✓</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Certified Expertise
                </h3>
                <p className="text-muted-foreground">
                  Founder Nikie brings certified planning and design credentials with years of proven excellence.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-sm bg-accent/20">
                  <span className="text-accent text-xl">✓</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Personalized Design
                </h3>
                <p className="text-muted-foreground">
                  No two events are alike. Each design is uniquely crafted to reflect your story and vision.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-sm bg-accent/20">
                  <span className="text-accent text-xl">✓</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Seamless Execution
                </h3>
                <p className="text-muted-foreground">
                  From initial concept through installation, we handle every detail with precision and care.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-sm bg-accent/20">
                  <span className="text-accent text-xl">✓</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Vendor Coordination
                </h3>
                <p className="text-muted-foreground">
                  We manage relationships with florists, venues, and other vendors for a cohesive experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card/40 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Client Stories
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-6" />
            <p className="text-muted-foreground">
              Real moments, real feedback from couples and clients we&apos;ve had the honor to serve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {testimonials.slice(0, 4).map((testimonial, idx) => (
              <div key={testimonial.id} className="animate-fade-in-up" style={{ animationDelay: `${idx * 150}ms` }}>
                <TestimonialCard
                  name={testimonial.name}
                  event={testimonial.event}
                  quote={testimonial.quote}
                  featured={idx === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary via-primary/95 to-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl" />
        </div>

        <div className="mx-auto max-w-3xl text-center relative z-10 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Create Magic?
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Let&apos;s talk about your vision and bring it to life with intention and elegance.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent text-accent-foreground px-8 py-4 rounded-sm font-medium hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
