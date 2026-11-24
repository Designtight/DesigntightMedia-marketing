import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onOpenConsultation: (service?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'How It Works', href: '#process' },
    { label: 'About', href: '#about' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 border-b ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-neutral-200 shadow-xs'
          : 'bg-white/90 backdrop-blur-md border-neutral-200'
      }`}
    >
      <div className="wrap">
        <div className="flex items-center justify-between min-h-[82px] sm:min-h-[88px] gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#top"
            className="flex items-center gap-3 shrink-0 focus-visible:outline-2 focus-visible:outline-neutral-900 rounded-sm py-1"
            aria-label="DesigntightMedia Home"
          >
            <img
              src="/logo.png"
              alt="DesigntightMedia — Be Noticed!"
              className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-transform duration-200 hover:scale-[1.02]"
              width="240"
              height="55"
              fetchPriority="high"
            />
          </a>

          {/* Zone 2: Navigation Links */}
          <nav
            className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-semibold text-neutral-700"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-black py-1 focus-visible:outline-2 focus-visible:outline-neutral-900 rounded-xs"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Mobile Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenConsultation()}
              className="hidden sm:inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-black hover:bg-neutral-800 transition-colors duration-150 rounded-xs cursor-pointer focus-visible:outline-2 focus-visible:outline-neutral-900 whitespace-nowrap shrink-0"
            >
              <span>Get Started</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-neutral-800 hover:text-black hover:bg-neutral-100 rounded-xs transition-colors border border-neutral-200 cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-neutral-200 bg-white px-5 py-5 shadow-lg animate-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col gap-3" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-semibold text-neutral-800 hover:text-black py-2 border-b border-neutral-100"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="mt-3 w-full py-3 text-center text-sm font-bold uppercase tracking-wider text-white bg-black hover:bg-neutral-800 rounded-xs cursor-pointer"
            >
              Request Free Growth Review
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
