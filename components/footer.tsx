import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <img 
              src="/WhatsApp_Image_2026-05-05_at_11.30.32_PM-removebg-preview.png" 
              alt="mmmdecors Logo" 
              className="h-32 w-auto object-contain mb-8 drop-shadow-sm grayscale brightness-[5]" 
            />
            <p className="text-sm text-primary-foreground/80">
              Creating memorable, magical moments through refined event design.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="hover:opacity-80 transition-opacity">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:opacity-80 transition-opacity">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:opacity-80 transition-opacity">
                  About Nikie
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:opacity-80 transition-opacity">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Ready to create something memorable?
            </p>
            <Link
              href="/contact"
              className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-sm text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Book a Consultation
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/70">
          <p>&copy; {currentYear} mmmdecors. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Instagram
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Pinterest
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
