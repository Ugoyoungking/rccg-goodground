'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, Gift, Calendar, BookOpen, Mail, Bot, Home, Info, HeartHandshake, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { ChurchLogo } from '@/components/icons';

const navLinks = [
  { href: '/', label: 'Home', icon: <Home className="h-5 w-5" /> },
  { href: '/about', label: 'About', icon: <Info className="h-5 w-5" /> },
  { href: '/ministries', label: 'Ministries', icon: <HeartHandshake className="h-5 w-5" /> },
  { href: '/sermons', label: 'Sermons', icon: <BookOpen className="h-5 w-5" /> },
  { href: '/events', label: 'Events', icon: <Calendar className="h-5 w-5" /> },
  { href: '/giving', label: 'Giving', icon: <Gift className="h-5 w-5" /> },
  { href: '/contact', label: 'Contact', icon: <Mail className="h-5 w-5" /> },
  { href: '/sermons/new', label: 'AI Tool', icon: <Bot className="h-5 w-5" /> },
  { href: '/faq', label: 'FAQ', icon: <HelpCircle className="h-5 w-5" /> },
];

const Header = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const isActive = (pathname.length > 1 && href.length > 1) ? pathname.startsWith(href) : pathname === href;
    return (
      <Link
        href={href}
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          isActive ? "text-primary" : "text-muted-foreground"
        )}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        {children}
      </Link>
    );
  };
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 min-w-0">
          <ChurchLogo className="h-8 w-8 text-primary flex-shrink-0" />
          <span className="font-bold text-lg font-headline text-primary truncate">
              <span className="hidden sm:inline">Redeemed Christian Church of God Good Ground Area</span>
              <span className="sm:hidden">RCCG Good Ground Area</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2">
            <Button asChild className="hidden md:inline-flex bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/giving">Give Now</Link>
            </Button>
            <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                </Button>
                </SheetTrigger>
                <SheetContent side="left">
                <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between border-b pb-4">
                      <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                          <ChurchLogo className="h-8 w-8 text-primary" />
                          <span className="font-bold text-lg font-headline">RCCG Good Ground Area</span>
                      </Link>
                      <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                        <X className="h-6 w-6" />
                        <span className="sr-only">Close menu</span>
                      </Button>
                    </div>
                    <nav className="flex flex-col space-y-4 mt-6">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          "flex items-center gap-4 p-2 rounded-md text-lg font-medium transition-colors hover:bg-secondary",
                          (pathname.startsWith(link.href) && link.href !== '/') || pathname === link.href ? "bg-secondary text-primary" : "text-muted-foreground"
                        )}
                      >
                        {link.icon}
                        {link.label}
                      </Link>
                    ))}
                    </nav>
                    <div className="mt-auto">
                        <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                            <Link href="/giving">Give Now</Link>
                        </Button>
                    </div>
                </div>
                </SheetContent>
            </Sheet>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
