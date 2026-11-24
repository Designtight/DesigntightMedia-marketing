import React, { useState } from 'react';
import { Check, Star, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { PricingPlan, ServiceOption } from '../types';

interface PricingProps {
  onSelectPlan: (service: ServiceOption) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const [showStandalone, setShowStandalone] = useState(false);

  const plans: PricingPlan[] = [
    {
      id: 'local-presence',
      tag: 'Start strong',
      name: 'Local Presence',
      price: '$299',
      period: '/mo',
      setup: '$499 one-time setup',
      featured: false,
      serviceOption: 'Local Presence ($299/mo)' as ServiceOption,
      ctaText: 'Choose Local Presence',
      features: [
        'Up to 5-page website or complete refresh',
        'Full mobile optimization & fast contact form',
        'Basic local Google & SEO foundation setup',
        '8 branded social posts per month',
        'Monthly traffic and lead summary report',
        'Website hosting billed separately if applicable',
      ],
    },
    {
      id: 'growth-engine',
      tag: 'Most popular · Growth',
      name: 'Growth Engine',
      price: '$599',
      period: '/mo',
      setup: '$999 one-time setup',
      featured: true,
      serviceOption: 'Growth Engine ($599/mo)' as ServiceOption,
      ctaText: 'Choose Growth Engine',
      features: [
        'Up to 7-page custom website or full rebuild',
        'High-converting lead capture landing page & form',
        '12–16 branded social media posts per month',
        'Agentic multi-channel social scheduling & campaign calendar',
        'Instant lead notification & automated follow-up workflows',
        'Monthly strategy review & growth reporting call',
      ],
    },
    {
      id: 'ai-business-suite',
      tag: 'Premium automation',
      name: 'AI Business Suite',
      price: '$999',
      period: '/mo',
      setup: '$1,999 one-time setup',
      featured: false,
      serviceOption: 'AI Business Suite ($999/mo)' as ServiceOption,
      ctaText: 'Choose AI Business Suite',
      features: [
        'Everything included in Growth Engine',
        'Custom interactive AI website assistant',
        'Conversational AI voice receptionist & 24/7 phone agent',
        'Dedicated FAQ & business knowledge-base ingestion',
        'Automated appointment booking & task integration workflows',
        'Priority technical support & ongoing prompt optimization',
      ],
    },
  ];

  const standaloneProjects = [
    { name: '1–3 Page Starter Website', price: 'From $699', type: 'One-time' },
    { name: '4–6 Page Comprehensive Website', price: 'From $1,099', type: 'One-time' },
    { name: 'Landing Page / Lead Funnel', price: 'From $450', type: 'One-time' },
    { name: 'Social-Only Content Management', price: 'From $399/mo', type: 'Monthly' },
    { name: 'AI Receptionist Installation', price: '$750 setup + $249/mo', type: 'Hybrid' },
  ];

  return (
    <section id="pricing" className="py-20 md:py-24 bg-[#f8f8f8] border-b border-neutral-200">
      <div className="wrap">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 mb-3">
            Simple packages
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black tracking-tight leading-[1.08] mb-4">
            Choose the level of support your business needs.
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            Recommended introductory pricing for Oklahoma City small businesses. Final scope and third-party platform usage are confirmed in each transparent proposal.
          </p>
        </div>

        {/* 3 Tier Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch mb-10">
          {plans.map((plan) => (
            <article
              key={plan.id}
              className={`bg-white rounded-sm p-7 sm:p-9 flex flex-col justify-between transition-all duration-200 relative ${
                plan.featured
                  ? 'border-2 border-black shadow-xl ring-1 ring-black/5'
                  : 'border border-neutral-300 hover:border-neutral-400 shadow-xs'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-black text-white px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.16em] rounded-xs flex items-center gap-1.5 shadow-sm">
                  <Star className="w-3 h-3 fill-white text-white" />
                  <span>Recommended Choice</span>
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-neutral-500">
                    {plan.tag}
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-black tracking-tight mb-2">
                  {plan.name}
                </h3>

                <div className="flex items-baseline gap-1 mt-3 mb-1">
                  <span className="text-4xl sm:text-5xl font-black text-black tracking-tight tabular-nums">
                    {plan.price}
                  </span>
                  <span className="text-sm font-medium text-neutral-500">
                    {plan.period}
                  </span>
                </div>

                <div className="text-xs font-semibold text-neutral-600 mb-6 pb-6 border-b border-neutral-100">
                  {plan.setup}
                </div>

                <div className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
                  Included In Package:
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                      <Check className="w-4 h-4 text-black shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-neutral-100">
                <button
                  onClick={() => onSelectPlan(plan.serviceOption)}
                  className={`w-full py-3.5 px-4 text-xs font-bold uppercase tracking-wider rounded-xs cursor-pointer transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-black ${
                    plan.featured
                      ? 'bg-black text-white hover:bg-neutral-800'
                      : 'bg-white text-black border border-neutral-300 hover:border-black hover:bg-neutral-50'
                  }`}
                >
                  {plan.ctaText}
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Standalone Project & Platform Transparency Card */}
        <div className="bg-white border border-neutral-200 p-6 sm:p-7 rounded-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-base font-bold text-black flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-neutral-500" />
                <span>Prefer a standalone project or custom scope?</span>
              </h4>
              <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                We also offer fixed-scope individual projects for websites, social setups, or dedicated AI installations.
              </p>
            </div>
            <button
              onClick={() => setShowStandalone(!showStandalone)}
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-neutral-800 hover:text-black py-2 px-3 border border-neutral-300 hover:border-black rounded-xs transition-colors cursor-pointer shrink-0"
            >
              <span>{showStandalone ? 'Hide Rates' : 'View Standalone Rates'}</span>
              {showStandalone ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>

          {showStandalone && (
            <div className="mt-6 pt-6 border-t border-neutral-100 animate-in fade-in duration-200">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                {standaloneProjects.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-neutral-50 rounded-xs border border-neutral-200 flex flex-col justify-between"
                  >
                    <span className="text-xs font-medium text-neutral-700">{item.name}</span>
                    <span className="text-sm font-bold text-black mt-2 font-mono tabular-nums">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-neutral-500 leading-relaxed bg-neutral-50/80 p-3.5 rounded-xs border border-neutral-200">
                <strong>Transparent Scope Policy:</strong> Standalone projects: 1–3 page website from $699; 4–6 page website from $1,099; landing page / lead funnel from $450. Social-only management from $399/month. AI receptionist installation from $750 plus $249/month management. Third-party platform subscriptions, phone charges, AI credits, advertising spend, domains, and hosting are separate unless expressly included.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
