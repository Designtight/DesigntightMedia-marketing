import React from 'react';
import { Globe, Share2, Bot } from 'lucide-react';

export const Metrics: React.FC = () => {
  const pillars = [
    {
      num: '01',
      title: 'Clear online presence',
      desc: 'Mobile-first websites built to establish credibility and convert traffic into inquiries.',
      icon: Globe,
    },
    {
      num: '02',
      title: 'Consistent marketing',
      desc: 'Branded social posts and content calendars executed without draining your team.',
      icon: Share2,
    },
    {
      num: '03',
      title: 'Smarter follow-up',
      desc: 'AI receptionist and automated workflows that capture leads before they go cold.',
      icon: Bot,
    },
  ];

  return (
    <div className="bg-white border-b border-neutral-200">
      <div className="wrap">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-neutral-200">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.num}
                className="py-7 px-5 sm:px-8 flex flex-col justify-between group hover:bg-neutral-50/70 transition-colors duration-150"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-2xl font-black text-black tracking-tighter tabular-nums">
                    {pillar.num}
                  </span>
                  <div className="w-8 h-8 rounded-xs bg-neutral-100 flex items-center justify-center text-neutral-700 group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-bold text-black tracking-tight mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-neutral-500 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
