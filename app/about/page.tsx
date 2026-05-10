import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import Image from 'next/image';
import * as motion from 'framer-motion/client';

export default function AboutPage() {
  const credentials = [
    { title: "Certified Wedding Planner", desc: "Professional credentials in event planning with extensive experience in logistics and coordination." },
    { title: "Certified Event Designer", desc: "Specialized training and proven expertise in creating visually stunning, cohesive event spaces." },
    { title: "Years of Experience", desc: "Accumulated expertise across hundreds of events, from intimate celebrations to large-scale affairs." },
    { title: "Vendor Network", desc: "Strong relationships with florists, venues, and other service providers for seamless coordination." }
  ];

  const values = [
    { title: "Simplicity", desc: "Clean, uncluttered aesthetic philosophy in all designs." },
    { title: "Elegance", desc: "Refined and sophisticated approach to every detail." },
    { title: "Intentionality", desc: "Purposeful curation where every element has meaning." },
    { title: "Personalization", desc: "Custom tailoring to reflect each client's unique story." },
    { title: "Excellence", desc: "Execution with precision from concept through completion." }
  ];

  return (
    <main className="min-h-screen bg-background selection:bg-accent/30">
      <Header />

      {/* Hero */}
      <section className="pt-40 pb-24 px-4 sm:px-6 lg:px-8 bg-[#FAF9F6] relative overflow-hidden">
        {/* Luxurious Background Texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/noise.png')] mix-blend-overlay" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mx-auto max-w-4xl text-center relative z-10"
        >
          <span className="text-accent font-bold tracking-[0.3em] uppercase text-xs mb-6 block">The Heart of mmmdecors</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-8 tracking-tight leading-none">
            About <span className="italic font-light text-accent/80">Us</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 font-serif italic mb-10 max-w-2xl mx-auto leading-relaxed">
            At mmmdecors, design is not just what we do - it&apos;s who we are.
          </p>
          <div className="w-24 h-1 bg-accent/20 mx-auto rounded-full" />
        </motion.div>
        
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/20 -skew-x-12 translate-x-1/2 -z-0" />
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-accent/5 rounded-full blur-[100px] -z-0" />
      </section>

      {/* Main Content - Introduction with Portrait */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            {/* Left Column: Portrait with Decorative Elements */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="lg:col-span-5 relative"
            >
              {/* Outer Decorative Frame */}
              <div className="absolute -top-6 -left-6 w-full h-full border border-accent/20 rounded-[2rem] -z-10 translate-x-4 translate-y-4" />
              
              {/* Main Image Container */}
              <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] aspect-[4/5] max-w-md mx-auto lg:ml-0 bg-secondary">
                <Image
                  src="/nikie-portrait.png"
                  alt="Nikie Rowaiye - Event Designer"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating Info Box */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute -bottom-10 -right-4 lg:right-0 z-20 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-accent/10 max-w-[240px]"
              >
                <span className="text-accent font-bold text-xs uppercase tracking-widest block mb-2">Certified Event Designer</span>
                <p className="text-foreground/70 text-xs leading-relaxed font-light">
                  Transforming personal stories into flawless, elevated celebrations.
                </p>
              </motion.div>

              {/* Subtle Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/5 rounded-full blur-3xl -z-20" />
            </motion.div>

            {/* Right Column: Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
              className="lg:col-span-7 text-left"
            >
              <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Meet the Designer</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 leading-tight">
                Nikie <span className="text-accent">Rowaiye</span>
              </h2>
              
              <div className="w-20 h-0.5 bg-accent mb-10" />

              <div className="space-y-4 text-base text-foreground/70 leading-normal font-light max-w-2xl">
                <p>
                  Led by Nikie Rowaiye, a certified wedding planner and certified event designer, mmmdecors brings years of experience, creativity, and thoughtful execution to every event. Nike&apos;s journey into the world of design started early, inspired by her mother, who owned a design company. Growing up in a creative environment shaped her eye for detail and her passion for transforming ideas into beautiful realities.
                </p>
                <p>
                  Nike believes that no two events should ever feel the same. Her approach is centered on personalization - intentionally weaving each client&apos;s personality, culture, and story into the design. Whether it&apos;s a subtle detail or a bold statement piece, every element is carefully curated to create an experience that feels authentic and unique.
                </p>
                <p>
                  Known for her distinctive style and meticulous attention to detail, Nike combines elegance with creativity to deliver events that are not only visually stunning but also meaningful. Her goal is always to create moments that linger - events that feel seamless, elevated, and truly special for both clients and their guests.
                </p>
                <p>
                  When she&apos;s not designing or planning, Nike enjoys relaxing with her favorite TV shows, exploring new ideas and inspirations - moments that continue to fuel her creativity and passion for what she does.
                </p>
                <p className="text-xl font-serif font-bold text-accent pt-6 leading-tight">
                  At mmmdecors, we don&apos;t just plan events - we create memorable, magical moments that leave a lasting impression.
                </p>
                
                {/* Signature/Author Block */}
                <div className="flex items-center gap-4 pt-8">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent font-serif font-bold text-lg">
                    NR
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-sm uppercase tracking-wide">Nikie Rowaiye</h4>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest">Founder & Lead Designer</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise & Credentials */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-secondary/5">
        <div className="mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Excellence & Credentials</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6 text-balance">Our Foundation</h2>
            <div className="w-12 h-0.5 bg-accent mx-auto" />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {credentials.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: idx * 0.15 }}
                className="p-10 bg-white border border-accent/5 hover:border-accent/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 rounded-[2rem] group relative overflow-hidden"
              >
                <div className="relative z-10">
                  <h3 className="font-serif font-bold text-xl text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-foreground/60 text-sm leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
                {/* Subtle Decorative Number */}
                <span className="absolute bottom-[-10%] right-[-5%] text-8xl font-serif font-bold text-accent/[0.03] pointer-events-none group-hover:text-accent/[0.06] transition-colors duration-500">
                  0{idx + 1}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8">Our Core Values</h2>
              <p className="text-lg text-muted-foreground font-light mb-12">
                Every project we undertake is guided by a set of unwavering principles that define the mmmdecors experience.
              </p>
              <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src="/hero-image.jpg"
                  alt="Elegant details"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-accent/10 mix-blend-overlay" />
              </div>
            </motion.div>

            <div className="space-y-10">
              {values.map((value, idx) => (
                <motion.div 
                  key={value.title}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: idx * 0.15 }}
                  className="flex gap-8 items-start group"
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent font-serif font-bold text-2xl group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-500">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-xl text-foreground mb-3 group-hover:text-accent transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground font-light leading-relaxed text-base">
                      {value.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
