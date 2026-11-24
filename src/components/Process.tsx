import React from 'react';
import { Search, Hammer, Rocket, TrendingUp } from 'lucide-react';

export const Process: React.FC = () => {
  const steps = [
    {
      num: 'STEP 01',
      title: 'Discover',
      desc: 'Understand your services, ideal customers, revenue goals, and current marketing bottlenecks.',
      icon: Search,
      deliverable: 'Growth audit & clear proposal',
    },
    {
      num: 'STEP 02',
      title: 'Build',
      desc: 'Set up your high-converting website, monthly content workflow, lead capture forms, and agreed automation.',
      icon: Hammer,
      deliverable: 'Staging preview & content approval',
    },
    {
      num: 'STEP 03',
      title: 'Launch',
      desc: 'Review everything together, verify live lead notifications and workflows, and onboard your team.',
      icon: Rocket,
      deliverable: 'Go-live & lead tracking verification',
    },
    {
      num: 'STEP 04',
      title: 'Improve',
      desc: 'Review inbound metrics, refine campaign messaging, and optimize the customer journey month-over-month.',
      icon: TrendingUp,
      deliverable: 'Monthly strategy & reporting call',
    },
  ];

  return (
    <section id="process" className="py-20 md:py-24 bg-white border-b border-neutral-200">
      <div className="wrap">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 mb-3">
            Our process
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black tracking-tight leading-[1.08]">
            From first conversation to measurable improvement.
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 mt-3">
            A structured, no-fluff methodology that gets your marketing and automation running without draining your time.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="border-t-2 border-black pt-6 pb-2 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold tracking-[0.16em] text-neutral-500">
                      {step.num}
                    </span>
                    <Icon className="w-4 h-4 text-neutral-400 group-hover:text-black transition-colors" />
                  </div>

                  <h3 className="text-xl font-bold text-black tracking-tight mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-100">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                    Outcome
                  </span>
                  <span className="text-xs font-semibold text-neutral-900">
                    {step.deliverable}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
