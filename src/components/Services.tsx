import React from 'react';
import { Layout, MessageSquareShare, Cpu, ArrowRight, Check } from 'lucide-react';
import { ServiceOption } from '../types';

interface ServicesProps {
  onSelectService: (service: ServiceOption) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const services = [
    {
      num: '01 / WEB',
      title: 'Websites & Lead Funnels',
      serviceOption: 'Website design' as ServiceOption,
      desc: 'Mobile-first websites that explain what you do, build trust, and make it easy for prospects to take the next step.',
      icon: Layout,
      items: [
        'Business websites and custom landing pages',
        'Lead capture forms and conversion funnel pages',
        'Local SEO foundations and search analytics',
        'Website speed optimization and care plans',
      ],
      idealFor: 'Contractors, clinics, law offices, and local services needing serious credibility.',
    },
    {
      num: '02 / SOCIAL',
      title: 'Social Media Management',
      serviceOption: 'Social media management' as ServiceOption,
      desc: 'Plan, create, schedule, and manage consistent branded content across your selected social channels without the daily stress.',
      icon: MessageSquareShare,
      items: [
        'Curated monthly content calendars & themes',
        'Platform-specific captions and high-impact creatives',
        'Multi-channel post scheduling and campaign planning',
        'Audience engagement and monthly performance reporting',
      ],
      idealFor: 'Busy founders who want consistent branded social presence without hiring in-house.',
    },
    {
      num: '03 / AI',
      title: 'AI Assistants & Automation',
      serviceOption: 'AI assistant / receptionist' as ServiceOption,
      desc: 'Help customers get answers faster and help your team spend far less time on repetitive administrative tasks.',
      icon: Cpu,
      items: [
        'Website interactive chat and voice assistants',
        'AI receptionist and 24/7 inquiry capture',
        'Automated appointment and lead follow-up workflows',
        'AI content drafting, email triage, and admin assistance',
      ],
      idealFor: 'Businesses losing leads after hours or drowning in repetitive customer questions.',
    },
  ];

  return (
    <section id="services" className="py-20 md:py-24 bg-white border-b border-neutral-200">
      <div className="wrap">
        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 mb-3">
            What we do
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black tracking-tight leading-[1.08] mb-4">
            Everything working together—not another disconnected tool.
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            Choose one service or combine them into a managed growth system built around your business goals.
          </p>
        </div>

        {/* 3 Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.num}
                className="bg-white border border-neutral-200 p-7 sm:p-8 rounded-sm flex flex-col justify-between hover:border-black hover:shadow-md transition-all duration-200 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold tracking-[0.18em] text-neutral-400 group-hover:text-black transition-colors">
                      {service.num}
                    </span>
                    <div className="w-9 h-9 rounded-xs bg-neutral-100 flex items-center justify-center text-neutral-700 group-hover:bg-black group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-black tracking-tight mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  <div className="border-t border-neutral-100 pt-5 mb-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
                      Key Capabilities:
                    </div>
                    <ul className="space-y-2.5">
                      {service.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                          <Check className="w-4 h-4 text-neutral-900 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 border-t border-neutral-100">
                  <div className="text-[11px] text-neutral-500 mb-4 bg-neutral-50 p-2.5 rounded-xs border border-neutral-100">
                    <strong className="text-neutral-800">Best for:</strong> {service.idealFor}
                  </div>
                  <button
                    onClick={() => onSelectService(service.serviceOption)}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold uppercase tracking-wider bg-white hover:bg-neutral-900 hover:text-white text-neutral-900 border border-neutral-300 hover:border-neutral-900 transition-all duration-150 rounded-xs cursor-pointer"
                  >
                    <span>Request {service.title.split('&')[0]} Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
