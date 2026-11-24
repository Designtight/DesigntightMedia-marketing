import React from 'react';
import { ArrowRight, CheckCircle2, Sparkles, Compass } from 'lucide-react';

interface HeroProps {
  onOpenConsultation: () => void;
  onOpenFinder: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, onOpenFinder }) => {
  const scrollToPricing = () => {
    const el = document.getElementById('pricing');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 bg-gradient-to-br from-white via-white to-neutral-100 border-b border-neutral-200 overflow-hidden">
      {/* Subtle background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(#000 1px, transparent 1px), radial-gradient(#000 1px, #fff 1px)',
          backgroundSize: '24px 24px',
          backgroundPosition: '0 0, 12px 12px',
        }}
        aria-hidden="true"
      />

      <div className="wrap relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 border border-neutral-200 text-neutral-700 text-xs font-bold uppercase tracking-[0.2em] rounded-xs mb-5">
              <span>Oklahoma City</span>
              <span className="text-neutral-400">·</span>
              <span>Websites</span>
              <span className="text-neutral-400">·</span>
              <span>Marketing</span>
              <span className="text-neutral-400">·</span>
              <span>AI</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-extrabold text-black tracking-[-0.035em] leading-[1.03] mb-6">
              Get noticed.
              <span className="block text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-700 tracking-[-0.02em] mt-3">
                Get more leads. Grow with confidence.
              </span>
            </h1>

            {/* Lead copy */}
            <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed max-w-2xl mb-8">
              DesigntightMedia helps local businesses turn their online presence into a practical growth system—with conversion-focused websites, consistent social content, and smart AI-powered customer follow-up.
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-black hover:bg-neutral-800 text-white font-bold text-sm tracking-wide transition-all duration-150 rounded-xs cursor-pointer shadow-xs focus-visible:outline-2 focus-visible:outline-black"
              >
                <span>Request a Free Growth Review</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={scrollToPricing}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 bg-white hover:bg-neutral-50 text-neutral-900 font-bold text-sm border border-neutral-300 transition-colors duration-150 rounded-xs cursor-pointer focus-visible:outline-2 focus-visible:outline-black"
              >
                Explore Packages
              </button>

              <button
                onClick={onOpenFinder}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3.5 text-xs font-semibold text-neutral-600 hover:text-black transition-colors cursor-pointer"
                title="Answer 3 questions to find the right package"
              >
                <Compass className="w-4 h-4 text-neutral-500" />
                <span>Need help choosing? Match package</span>
              </button>
            </div>

            {/* Trust bullet statement */}
            <div className="mt-8 pt-6 border-t border-neutral-200/80 flex items-center gap-2 text-xs sm:text-sm font-medium text-neutral-500">
              <CheckCircle2 className="w-4 h-4 text-neutral-700 shrink-0" />
              <span>Clear strategy · Human-approved content · Automation with a purpose</span>
            </div>
          </div>

          {/* Right Column: Signature Dark Connected System Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#080808] text-white p-7 sm:p-9 rounded-sm border border-neutral-800 shadow-xl flex flex-col justify-between min-h-[420px] relative overflow-hidden group">
              {/* Subtle accent glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-neutral-700/10 rounded-full blur-3xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between text-xs tracking-[0.2em] uppercase font-bold text-neutral-400 mb-6">
                  <span>Your Digital Growth Partner</span>
                  <span className="flex items-center gap-1 text-[11px] text-neutral-300">
                    <Sparkles className="w-3 h-3 text-neutral-400" /> OKC
                  </span>
                </div>

                <div className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-snug mb-5 text-white">
                  One connected system.<br />
                  <span className="text-neutral-300 font-bold">More opportunities.</span>
                </div>

                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-6">
                  Attract attention → capture interest → respond quickly → turn inquiries into customers.
                </p>

                {/* Connected Pipeline Flow Indicator */}
                <div className="space-y-2.5 py-4 my-2 border-y border-neutral-800 text-xs">
                  <div className="flex items-center gap-3 text-neutral-300">
                    <span className="w-5 h-5 rounded-xs bg-neutral-800 border border-neutral-700 flex items-center justify-center font-bold text-[10px] text-white">
                      1
                    </span>
                    <span>High-converting, mobile-ready local website</span>
                  </div>
                  <div className="flex items-center gap-3 text-neutral-300">
                    <span className="w-5 h-5 rounded-xs bg-neutral-800 border border-neutral-700 flex items-center justify-center font-bold text-[10px] text-white">
                      2
                    </span>
                    <span>Consistent monthly social media scheduling</span>
                  </div>
                  <div className="flex items-center gap-3 text-neutral-300">
                    <span className="w-5 h-5 rounded-xs bg-neutral-800 border border-neutral-700 flex items-center justify-center font-bold text-[10px] text-white">
                      3
                    </span>
                    <span>Instant AI receptionist & lead notification</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between text-[11px] tracking-[0.2em] uppercase font-bold text-neutral-400">
                <span>DESIGNTIGHTMEDIA</span>
                <span className="text-white">BE NOTICED!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
