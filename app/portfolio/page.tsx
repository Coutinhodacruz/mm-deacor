import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { PortfolioGrid } from '@/components/portfolio-grid';
import Link from 'next/link';

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-4">
            Portfolio
          </h1>
          <p className="text-lg text-muted-foreground">
            A glimpse into the events we&apos;ve had the honor to design and create.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <PortfolioGrid />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Imagine Your Event Here
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Let&apos;s discuss how we can create something equally beautiful and meaningful for you.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-sm font-medium hover:opacity-90 transition-opacity"
          >
            Start Your Project
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
