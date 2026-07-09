import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <img 
              src="/mmmdecors-logo.png" 
              alt="mmmdecors Logo" 
              className="h-32 w-auto object-contain mb-6 drop-shadow-sm grayscale brightness-[5]" 
            />
            {/* MMM meaning */}
            <div className="flex flex-col gap-1 mb-4">
              <div className="flex items-center gap-2 text-xs text-primary-foreground/60">
                <span className="text-accent font-bold text-sm">M</span>
                <span className="text-primary-foreground/40">·</span>
                <span className="italic">Memorable</span>
                <span className="mx-1 text-primary-foreground/30">|</span>
                <span className="text-accent font-bold text-sm">M</span>
                <span className="text-primary-foreground/40">·</span>
                <span className="italic">Magical</span>
                <span className="mx-1 text-primary-foreground/30">|</span>
                <span className="text-accent font-bold text-sm">M</span>
                <span className="text-primary-foreground/40">·</span>
                <span className="italic">Moments</span>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/70 max-w-xs leading-relaxed">
              Creating memorable, magical moments through refined event design — one celebration at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground/90">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  About Nikie
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground/90">Get In Touch</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="mailto:nikie@mmmdecors.ca" className="text-primary-foreground/70 hover:text-accent transition-colors break-all">
                  nikie@mmmdecors.ca
                </a>
              </li>
              <li className="text-primary-foreground/50 pt-2 border-t border-primary-foreground/10">
                Based in Toronto, serving the Greater Toronto Area and beyond
              </li>
            </ul>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/50">
          <p>&copy; {currentYear} mmmdecors — Memorable Magical Moments. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="https://instagram.com/mmmdecors" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              Instagram
            </a>
            <a href="https://pinterest.com/mmmdecors" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              Pinterest
            </a>
          </div>
        </div>

        {/* Branding */}
        <div className="mt-6 text-center text-xs text-primary-foreground/40">
          <p>
            Made with love{' '}
            <span className="text-red-400">❤️</span>{' '}
            <a
              href="https://ireemedia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/50 hover:text-accent transition-colors underline underline-offset-2"
            >
              ireemedia.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
