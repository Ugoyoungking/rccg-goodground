import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { ChurchLogo } from '@/components/icons';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <ChurchLogo className="h-8 w-8 text-accent" />
              <span className="text-xl font-bold font-headline">RCCG Good Ground Area</span>
            </Link>
            <p className="text-sm text-primary-foreground/80">
              A place of hope, faith, and community.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-accent mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/sermons" className="hover:text-accent transition-colors">Sermons</Link></li>
              <li><Link href="/events" className="hover:text-accent transition-colors">Events</Link></li>
              <li><Link href="/giving" className="hover:text-accent transition-colors">Give</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
              <li><Link href="/faq" className="hover:text-accent transition-colors">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-accent mb-4">Get Connected</h3>
            <ul className="space-y-2">
              <li>123 Church Street, Faith City</li>
              <li>(123) 456-7890</li>
              <li>contact@rccg.org</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-accent mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook" className="hover:text-accent transition-colors"><Facebook /></Link>
              <Link href="#" aria-label="Twitter" className="hover:text-accent transition-colors"><Twitter /></Link>
              <Link href="#" aria-label="Instagram" className="hover:text-accent transition-colors"><Instagram /></Link>
              <Link href="#" aria-label="Youtube" className="hover:text-accent transition-colors"><Youtube /></Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Redeemed Christian Church of God Good Ground Area. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
