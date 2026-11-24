import React, { useState } from 'react';
import { X, Check, ArrowRight, Sparkles, RotateCcw } from 'lucide-react';
import { ServiceOption } from '../types';

interface PackageFinderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectService: (service: ServiceOption) => void;
}

export const PackageFinderModal: React.FC<PackageFinderModalProps> = ({
  isOpen,
  onClose,
  onSelectService,
}) => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    bottleneck: '',
    budget: '',
    aiNeed: '',
  });

  if (!isOpen) return null;

  const handleSelect = (key: 'bottleneck' | 'budget' | 'aiNeed', value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const calculateRecommendation = (): {
    plan: ServiceOption;
    name: string;
    price: string;
    reason: string;
  } => {
    if (answers.aiNeed === 'yes' || answers.budget === 'high') {
      return {
        plan: 'AI Business Suite ($999/mo)',
        name: 'AI Business Suite',
        price: '$999/mo + $1,999 setup',
        reason:
          'Because 24/7 inquiry capture, voice receptionist, and priority automation match your goals for maximum time savings and fast lead responses.',
      };
    }
    if (
      answers.bottleneck === 'social' ||
      answers.bottleneck === 'both' ||
      answers.budget === 'mid'
    ) {
      return {
        plan: 'Growth Engine ($599/mo)',
        name: 'Growth Engine',
        price: '$599/mo + $999 setup',
        reason:
          'Because it gives you a complete 7-page conversion website plus 12–16 monthly scheduled social posts and automated lead notification—our most popular balanced system.',
      };
    }
    return {
      plan: 'Local Presence ($299/mo)',
      name: 'Local Presence',
      price: '$299/mo + $499 setup',
      reason:
        'Because it gets your core 5-page website, contact forms, local SEO, and 8 monthly social posts up and running with a manageable monthly investment.',
    };
  };

  const recommendation = calculateRecommendation();

  const handleApply = () => {
    onSelectService(recommendation.plan);
    onClose();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const reset = () => {
    setStep(1);
    setAnswers({ bottleneck: '', budget: '', aiNeed: '' });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150"
      role="dialog"
      aria-modal="true"
      aria-labelledby="finder-title"
    >
      <div className="bg-white rounded-sm border border-neutral-300 w-full max-w-lg p-6 sm:p-8 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-neutral-400 hover:text-black hover:bg-neutral-100 rounded-xs transition-colors cursor-pointer"
          aria-label="Close Package Matcher"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 mb-1">
          <Sparkles className="w-3.5 h-3.5 text-black" />
          <span>Interactive Package Matcher</span>
        </div>
        <h3 id="finder-title" className="text-xl sm:text-2xl font-extrabold text-black tracking-tight mb-5">
          Find your best-fit growth plan
        </h3>

        {/* Step Progress */}
        <div className="flex items-center gap-1.5 mb-6">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`h-1.5 flex-1 rounded-full transition-colors ${
                s <= step ? 'bg-black' : 'bg-neutral-200'
              }`}
            />
          ))}
        </div>

        {/* Question 1 */}
        {step === 1 && (
          <div className="animate-in fade-in duration-150">
            <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block mb-1">
              Step 1 of 3
            </span>
            <h4 className="text-base font-bold text-black mb-4">
              What is your primary digital bottleneck right now?
            </h4>
            <div className="space-y-2.5">
              {[
                { id: 'web', label: 'Outdated or missing business website' },
                { id: 'social', label: 'Inconsistent or nonexistent social media posts' },
                { id: 'leads', label: 'Missing after-hours inquiries / slow lead follow-up' },
                { id: 'both', label: 'Need an all-in-one overhaul (Web + Social + AI)' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => handleSelect('bottleneck', opt.id)}
                  className="w-full text-left p-3.5 border border-neutral-200 hover:border-black rounded-xs text-xs sm:text-sm font-semibold text-neutral-800 hover:bg-neutral-50 transition-all flex items-center justify-between cursor-pointer"
                >
                  <span>{opt.label}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-neutral-400" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Question 2 */}
        {step === 2 && (
          <div className="animate-in fade-in duration-150">
            <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block mb-1">
              Step 2 of 3
            </span>
            <h4 className="text-base font-bold text-black mb-4">
              What monthly support budget feels most realistic?
            </h4>
            <div className="space-y-2.5">
              {[
                { id: 'low', label: 'Entry tier (~$299/mo) — Cover the essentials' },
                { id: 'mid', label: 'Growth tier (~$599/mo) — Balanced active marketing' },
                { id: 'high', label: 'Complete suite (~$999/mo) — Hands-off automation' },
                { id: 'onetime', label: 'Prefer a fixed one-time project without a monthly retainer' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => handleSelect('budget', opt.id)}
                  className="w-full text-left p-3.5 border border-neutral-200 hover:border-black rounded-xs text-xs sm:text-sm font-semibold text-neutral-800 hover:bg-neutral-50 transition-all flex items-center justify-between cursor-pointer"
                >
                  <span>{opt.label}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-neutral-400" />
                </button>
              ))}
            </div>
            <button
              onClick={() => setStep(1)}
              className="mt-4 text-xs font-semibold text-neutral-500 hover:text-black cursor-pointer"
            >
              ← Back to previous question
            </button>
          </div>
        )}

        {/* Question 3 */}
        {step === 3 && (
          <div className="animate-in fade-in duration-150">
            <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block mb-1">
              Step 3 of 3
            </span>
            <h4 className="text-base font-bold text-black mb-4">
              Do you want 24/7 AI receptionist or conversational chat included?
            </h4>
            <div className="space-y-2.5">
              {[
                { id: 'yes', label: 'Yes, capturing leads after hours is a top priority' },
                { id: 'maybe', label: 'Interested, but want to see website & social in place first' },
                { id: 'no', label: 'No, standard contact forms are sufficient for now' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => handleSelect('aiNeed', opt.id)}
                  className="w-full text-left p-3.5 border border-neutral-200 hover:border-black rounded-xs text-xs sm:text-sm font-semibold text-neutral-800 hover:bg-neutral-50 transition-all flex items-center justify-between cursor-pointer"
                >
                  <span>{opt.label}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-neutral-400" />
                </button>
              ))}
            </div>
            <button
              onClick={() => setStep(2)}
              className="mt-4 text-xs font-semibold text-neutral-500 hover:text-black cursor-pointer"
            >
              ← Back to previous question
            </button>
          </div>
        )}

        {/* Result Screen */}
        {answers.bottleneck && answers.budget && answers.aiNeed && (
          <div className="mt-6 pt-6 border-t border-neutral-200 animate-in fade-in duration-200">
            <div className="bg-neutral-50 border-2 border-black p-5 rounded-xs mb-5">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-neutral-500 block mb-1">
                Recommended Solution
              </span>
              <div className="flex items-baseline justify-between">
                <strong className="text-xl font-black text-black">
                  {recommendation.name}
                </strong>
                <span className="font-mono text-xs font-bold text-neutral-700">
                  {recommendation.price}
                </span>
              </div>
              <p className="text-xs text-neutral-600 mt-3 leading-relaxed">
                {recommendation.reason}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleApply}
                className="flex-1 py-3 px-4 bg-black hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider rounded-xs cursor-pointer transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Select & Fill Form</span>
                <Check className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={reset}
                className="p-3 border border-neutral-200 hover:border-black rounded-xs text-neutral-600 hover:text-black transition-colors cursor-pointer"
                title="Restart Quiz"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
