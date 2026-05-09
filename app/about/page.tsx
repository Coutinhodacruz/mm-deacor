import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-4">
            About Nikie
          </h1>
          <p className="text-lg text-muted-foreground">
            The vision and expertise behind mmmdecors.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {/* Introduction */}
          <div className="mb-16">
            <p className="text-lg text-foreground mb-6 leading-relaxed">
              Nikie Rowaiye is a certified wedding planner and event designer with a passion for transforming visions into refined, immersive experiences. Her journey began in a creative household where her mother owned and operated a design company, shaping Nikie&apos;s eye for detail and her understanding that every design choice carries meaning.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Raised in an environment where creativity was encouraged and meticulous attention to detail was celebrated, Nikie developed a distinctive design signature that weaves together elegance, intentionality, and authentic storytelling.
            </p>
          </div>

          {/* Philosophy */}
          <div className="p-8 bg-secondary rounded-sm mb-16">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              Design Philosophy
            </h2>
            <p className="text-foreground leading-relaxed">
              Nikie believes that every celebration deserves meticulous attention to detail, from the boldest design statements to the most subtle touches. She doesn&apos;t believe in one-size-fits-all event design. Instead, she focuses on weaving together each client&apos;s personality, cultural background, and personal story into every design decision.
            </p>
            <p className="text-foreground mt-4 leading-relaxed">
              Her approach combines precision-guided creativity with genuine care for execution excellence. The result: events that feel seamless, elevated, and truly special—spaces where guests pause to appreciate the thoughtfulness and beauty surrounding them.
            </p>
          </div>

          {/* Credentials & Background */}
          <div className="mb-16">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-8">
              Expertise & Credentials
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 border border-border rounded-sm">
                <h3 className="font-semibold text-foreground mb-2">
                  Certified Wedding Planner
                </h3>
                <p className="text-muted-foreground text-sm">
                  Professional credentials in event planning with extensive experience in logistics and coordination.
                </p>
              </div>
              <div className="p-6 border border-border rounded-sm">
                <h3 className="font-semibold text-foreground mb-2">
                  Certified Event Designer
                </h3>
                <p className="text-muted-foreground text-sm">
                  Specialized training and proven expertise in creating visually stunning, cohesive event spaces.
                </p>
              </div>
              <div className="p-6 border border-border rounded-sm">
                <h3 className="font-semibold text-foreground mb-2">
                  Years of Experience
                </h3>
                <p className="text-muted-foreground text-sm">
                  Accumulated expertise across hundreds of events, from intimate celebrations to large-scale affairs.
                </p>
              </div>
              <div className="p-6 border border-border rounded-sm">
                <h3 className="font-semibold text-foreground mb-2">
                  Vendor Network
                </h3>
                <p className="text-muted-foreground text-sm">
                  Strong relationships with florists, venues, and other service providers for seamless coordination.
                </p>
              </div>
            </div>
          </div>

          {/* Personal Touch */}
          <div className="p-8 bg-card rounded-sm mb-16">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              Beyond Events
            </h2>
            <p className="text-foreground leading-relaxed">
              When not designing stunning events, Nikie enjoys unwinding with her favorite TV shows and continuously exploring new ideas and inspirations. This creative fuel helps her stay at the forefront of design trends while maintaining the timeless elegance that defines the mmmdecors brand.
            </p>
            <p className="text-foreground mt-4 leading-relaxed">
              She&apos;s passionate about helping couples and clients celebrate their most important moments in surroundings that reflect who they are and what they value.
            </p>
          </div>

          {/* Core Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-8">
              Core Values
            </h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <span className="text-accent text-xl flex-shrink-0">✓</span>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Simplicity</h3>
                  <p className="text-muted-foreground">Clean, uncluttered aesthetic philosophy in all designs.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-accent text-xl flex-shrink-0">✓</span>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Elegance</h3>
                  <p className="text-muted-foreground">Refined and sophisticated approach to every detail.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-accent text-xl flex-shrink-0">✓</span>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Intentionality</h3>
                  <p className="text-muted-foreground">Purposeful curation where every element has meaning.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-accent text-xl flex-shrink-0">✓</span>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Personalization</h3>
                  <p className="text-muted-foreground">Custom tailoring to reflect each client&apos;s unique story.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-accent text-xl flex-shrink-0">✓</span>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Excellence</h3>
                  <p className="text-muted-foreground">Execution with precision from concept through completion.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Let&apos;s create something memorable and magical for your special occasion.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-sm font-medium hover:opacity-90 transition-opacity"
          >
            Get In Touch
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
