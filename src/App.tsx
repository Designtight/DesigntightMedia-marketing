import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Metrics } from './components/Metrics';
import { Services } from './components/Services';
import { Pricing } from './components/Pricing';
import { Band } from './components/Band';
import { Process } from './components/Process';
import { AboutStack } from './components/AboutStack';
import { Blog } from './components/Blog';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { PackageFinderModal } from './components/PackageFinderModal';
import { ServiceOption } from './types';

export default function App() {
  const [selectedService, setSelectedService] = useState<ServiceOption>('Not sure yet');
  const [isFinderOpen, setIsFinderOpen] = useState(false);

  const scrollToContact = (service?: ServiceOption) => {
    if (service) {
      setSelectedService(service);
    }
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (service: ServiceOption) => {
    setSelectedService(service);
    scrollToContact(service);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col font-sans selection:bg-black selection:text-white">
      {/* Sticky Header with Top Bar Contract */}
      <Header onOpenConsultation={() => scrollToContact()} />

      <main id="top" className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenConsultation={() => scrollToContact()}
          onOpenFinder={() => setIsFinderOpen(true)}
        />

        {/* 3 Core Growth Pillars */}
        <Metrics />

        {/* What We Do: Web, Social, AI */}
        <Services onSelectService={handleSelectService} />

        {/* Simple Packages & Transparent Pricing */}
        <Pricing onSelectPlan={handleSelectService} />

        {/* A Better First Step Callout Band */}
        <Band
          onBookReview={() => scrollToContact()}
          onOpenFinder={() => setIsFinderOpen(true)}
        />

        {/* 4-Step Process: Discover, Build, Launch, Improve */}
        <Process />

        {/* About & Integrated Technology Stack */}
        <AboutStack />

        {/* Blog: Insights & Guides */}
        <Blog onSelectService={handleSelectService} />

        {/* Interactive Consultation Form */}
        <ContactForm
          initialService={selectedService}
          onServiceChange={setSelectedService}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Package Finder Modal */}
      <PackageFinderModal
        isOpen={isFinderOpen}
        onClose={() => setIsFinderOpen(false)}
        onSelectService={(service) => {
          setSelectedService(service);
        }}
      />
    </div>
  );
}
