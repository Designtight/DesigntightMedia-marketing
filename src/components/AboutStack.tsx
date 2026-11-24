import React from 'react';
import { MapPin, ShieldCheck, CheckCircle, Zap, Share2, MessageSquare, PhoneCall, Cpu, Server } from 'lucide-react';

export const AboutStack: React.FC = () => {
  const capabilities = [
    {
      title: 'Workflow Integration & Task Automation',
      category: 'Automate All Integrations & Tasks',
      icon: Zap,
      description:
        'Connects your website forms, CRM, email notifications, SMS alerts, and marketing pipelines. Inquiries trigger instant automated actions across your business tools without manual data entry.',
    },
    {
      title: 'Agentic Social Scheduling & Content Management',
      category: 'Multi-Network Publishing & Campaigns',
      icon: Share2,
      description:
        'Autonomous multi-channel social media publishing, visual campaign calendars, branded post scheduling, and audience performance tracking to keep your local brand consistently active.',
    },
    {
      title: 'AI Business Operations & Communications Hub',
      category: 'Business Admin & Content Acceleration',
      icon: MessageSquare,
      description:
        'AI-assisted client communications, fast proposal drafting, intelligent email triage, and back-office administrative workflows that give your team hours back every week.',
    },
    {
      title: 'Conversational Voice Agents & 24/7 Receptionist',
      category: 'Human-Grade Voice & Call Answering',
      icon: PhoneCall,
      description:
        'Human-sounding conversational voice agents and interactive phone receptionists that answer incoming business calls 24/7, capture customer details, and book consultations.',
    },
    {
      title: 'Autonomous Research & Delegated Task Workflows',
      category: 'Automated Operations & Monitoring',
      icon: Cpu,
      description:
        'Scheduled local market research, automated lead verification, continuous operational monitoring, and background execution of routine business tasks.',
    },
    {
      title: 'High-Performance Managed Cloud Infrastructure',
      category: '4X More Speed · 99.9% Uptime',
      icon: Server,
      description:
        'Enterprise-grade managed cloud hosting with 4X optimized loading speeds, 99.9% guaranteed uptime, automatic daily backups, SSL security, and custom business email.',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-24 bg-[#f8f8f8] border-b border-neutral-200">
      <div className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: About Narrative */}
          <div className="lg:col-span-5">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 mb-3">
              About DesigntightMedia
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black tracking-tight leading-[1.08] mb-6">
              Professional digital services, with a personal approach.
            </h2>

            <div className="space-y-4 text-base text-neutral-600 leading-relaxed">
              <p className="text-lg font-semibold text-neutral-800">
                DesigntightMedia LLC is an Oklahoma City-based digital growth partner for small businesses, service providers, and independent professionals.
              </p>
              <p>
                Our focus is straightforward: make it easier for customers to find you, understand your value, contact you, and receive a timely response. We combine conversion-focused design with practical marketing systems and carefully configured automation.
              </p>
              <div className="bg-white border border-neutral-200 p-5 rounded-xs mt-6">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-black shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-black uppercase tracking-wider mb-1">
                      Our Promise
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-normal">
                      Clear communication, transparent scope, and technology that supports real business revenue—not hype or vanity metrics.
                    </p>
                  </div>
                </div>
              </div>

              {/* Local Oklahoma City Credential */}
              <div className="flex items-start gap-2 pt-2 text-xs font-semibold text-neutral-600">
                <MapPin className="w-4 h-4 text-neutral-800 shrink-0 mt-0.5" />
                <span>2501 NE 23rd Street, Ste A136 · Oklahoma City, OK 73111</span>
              </div>
            </div>
          </div>

          {/* Right Column: Platform & System Capabilities (Zero 3rd party tool names) */}
          <div className="lg:col-span-7">
            <div className="mb-5">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">
                What Powers Your Growth System
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                Every service we deliver is supported by modern automation and high-speed infrastructure:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {capabilities.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="bg-white border border-neutral-200 p-4 sm:p-5 rounded-xs hover:border-black transition-colors duration-150 group shadow-2xs flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                          {item.category}
                        </span>
                        <div className="w-7 h-7 rounded-xs bg-neutral-100 flex items-center justify-center text-neutral-700 group-hover:bg-black group-hover:text-white transition-colors">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                      </div>
                      <h4 className="font-extrabold text-black text-sm sm:text-base tracking-tight mb-2">
                        {item.title}
                      </h4>
                      <p className="text-xs text-neutral-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 p-3.5 bg-neutral-100 border border-neutral-200/80 rounded-xs flex items-center gap-2 text-xs text-neutral-600">
              <CheckCircle className="w-4 h-4 text-neutral-800 shrink-0" />
              <span>All workflows and infrastructure are fully configured, tested, and maintained around your specific business goals.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
