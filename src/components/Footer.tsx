import React from 'react';
import { ArrowUp, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#080808] text-white pt-14 pb-12 border-t border-neutral-800">
      <div className="wrap">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 pb-12 border-b border-neutral-800">
          {/* Brand & Mission */}
          <div className="max-w-md">
            <div className="bg-white p-3 sm:p-3.5 rounded-xs inline-block mb-4 shadow-sm border border-neutral-700/40">
              <img
                src="/logo.png"
                alt="DesigntightMedia Be Noticed"
                className="h-12 sm:h-14 md:h-16 w-auto object-contain"
                width="240"
                height="55"
              />
            </div>
            <p className="text-sm text-neutral-300 font-semibold mb-2">
              Websites · Marketing · AI Automation
            </p>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Helping Oklahoma City businesses get noticed, capture qualified leads, and grow with confidence through connected digital systems.
            </p>
          </div>

          {/* Quick Navigation & Contact Details */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 md:gap-14">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-3">
                Be Noticed!
              </div>
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-neutral-400">
                <a
                  href="#services"
                  onClick={(e) => scrollToSection(e, 'services')}
                  className="hover:text-white transition-colors"
                >
                  Services
                </a>
                <span className="text-neutral-700">·</span>
                <a
                  href="#pricing"
                  onClick={(e) => scrollToSection(e, 'pricing')}
                  className="hover:text-white transition-colors"
                >
                  Pricing
                </a>
                <span className="text-neutral-700">·</span>
                <a
                  href="#process"
                  onClick={(e) => scrollToSection(e, 'process')}
                  className="hover:text-white transition-colors"
                >
                  How It Works
                </a>
                <span className="text-neutral-700">·</span>
                <a
                  href="#about"
                  onClick={(e) => scrollToSection(e, 'about')}
                  className="hover:text-white transition-colors"
                >
                  About
                </a>
                <span className="text-neutral-700">·</span>
                <a
                  href="#blog"
                  onClick={(e) => scrollToSection(e, 'blog')}
                  className="hover:text-white transition-colors"
                >
                  Blog
                </a>
                <span className="text-neutral-700">·</span>
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, 'contact')}
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </div>

              <div className="mt-4 flex flex-col gap-1.5 text-xs text-neutral-400">
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-neutral-500 shrink-0 mt-0.5" />
                  <span>2501 NE 23rd Street, Ste A136 · Oklahoma City, OK 73111</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                  <a href="tel:+14054589771" className="hover:text-white transition-colors">
                    (405) 458-9771
                  </a>
                  <span className="text-neutral-700">·</span>
                  <a href="mailto:samuel@designtightMedia.com" className="hover:text-white transition-colors">
                    samuel@designtightMedia.com
                  </a>
                </div>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="p-3 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 rounded-xs text-neutral-300 hover:text-white transition-colors cursor-pointer self-start sm:self-center"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div>
            © {currentYear} DesigntightMedia LLC. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Clear strategy</span>
            <span>·</span>
            <span>Human-approved content</span>
            <span>·</span>
            <span>Automation with a purpose</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
