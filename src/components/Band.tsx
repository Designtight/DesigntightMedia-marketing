import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';

interface BandProps {
  onBookReview: () => void;
  onOpenFinder: () => void;
}

export const Band: React.FC<BandProps> = ({ onBookReview, onOpenFinder }) => {
  return (
    <section className="py-14 md:py-16 bg-white">
      <div className="wrap">
        <div className="bg-[#080808] text-white p-8 sm:p-12 md:p-14 rounded-sm border border-neutral-800 shadow-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-neutral-800/40 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl relative">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 mb-2">
              A better first step
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-snug mb-3">
              Not sure what your business needs?
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              Start with a no-pressure review of your website, local search visibility, social presence, and customer response process. We'll identify quick wins and recommend the right approach.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto relative shrink-0">
            <button
              onClick={onBookReview}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 text-xs font-bold uppercase tracking-wider text-black bg-white hover:bg-neutral-100 transition-colors duration-150 rounded-xs cursor-pointer shadow-md focus-visible:outline-2 focus-visible:outline-white whitespace-nowrap"
            >
              <span>Book a Growth Review</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenFinder}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-4 text-xs font-semibold text-neutral-300 hover:text-white transition-colors cursor-pointer border border-neutral-700 hover:border-neutral-500 rounded-xs whitespace-nowrap"
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Take 30-Sec Quiz</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
