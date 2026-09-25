import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBenefits } from './components/TrustBenefits';
import { Journey } from './components/Journey';
import { FarmStory } from './components/FarmStory';
import { LabQuality } from './components/LabQuality';
import { SubscriptionCustomizer } from './components/SubscriptionCustomizer';
import { WhyMeadowMilk } from './components/WhyMeadowMilk';
import { ValleyHeritage } from './components/ValleyHeritage';
import { Reviews } from './components/Reviews';
import { GalleryMosaic } from './components/GalleryMosaic';
import { CoverageChecker } from './components/CoverageChecker';
import { FaqSection } from './components/FaqSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { SubscriptionModal } from './components/SubscriptionModal';
import { DeliveryHubModal } from './components/DeliveryHubModal';
import { LabReportModal } from './components/LabReportModal';
import { FarmTourModal } from './components/FarmTourModal';
import { PackagingType, PlanFrequency } from './types';

export default function App() {
  const [isSubscribeModalOpen, setIsSubscribeModalOpen] = useState(false);
  const [isDeliveryHubOpen, setIsDeliveryHubOpen] = useState(false);
  const [isLabReportOpen, setIsLabReportOpen] = useState(false);
  const [isFarmTourOpen, setIsFarmTourOpen] = useState(false);

  // Selected subscription config from customizer or default
  const [subscriptionConfig, setSubscriptionConfig] = useState<{
    frequency: PlanFrequency;
    litres: number;
    packaging: PackagingType;
    totalAmount: number;
  }>({
    frequency: 'daily',
    litres: 1.0,
    packaging: 'glass',
    totalAmount: 2250,
  });

  const handleOpenSubscribe = () => {
    setIsSubscribeModalOpen(true);
  };

  const handleStartSubscription = (config: {
    frequency: PlanFrequency;
    litres: number;
    packaging: PackagingType;
    totalAmount: number;
  }) => {
    setSubscriptionConfig(config);
    setIsSubscribeModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#fbf9f6] font-body text-[#1b1c1a] antialiased selection:bg-[#bcebcc] selection:text-[#042217]">
      {/* 1-Row 3-Zone Header */}
      <Header
        onOpenSubscribe={handleOpenSubscribe}
        onOpenDeliveryHub={() => setIsDeliveryHubOpen(true)}
      />

      <main className="w-full pt-20">
        {/* 1. Hero Section */}
        <Hero
          onOpenSubscribe={handleOpenSubscribe}
          onOpenFarmTour={() => setIsFarmTourOpen(true)}
        />

        {/* 2. Trust & Benefits Grid */}
        <TrustBenefits />

        {/* 3. From Our Farm to Your Home (6-Step Journey) */}
        <Journey />

        {/* 4. Our Farm — Kreeri, Baramulla */}
        <FarmStory onOpenFarmTour={() => setIsFarmTourOpen(true)} />

        {/* 5. Quality & Purity Lab Transparency */}
        <LabQuality onOpenLabReport={() => setIsLabReportOpen(true)} />

        {/* 6. Interactive Subscription Customizer */}
        <SubscriptionCustomizer onStartSubscription={handleStartSubscription} />

        {/* 7. Why Meadow Milk vs Conventional Market Packet Milk */}
        <WhyMeadowMilk />

        {/* 8. Born in Kashmir Valley Story */}
        <ValleyHeritage />

        {/* 9. Loved by Local Families Reviews */}
        <Reviews />

        {/* 10. Farm Moments & Artisanal Craft Gallery Bento */}
        <GalleryMosaic />

        {/* 11. Delivery Area & Coverage Checker */}
        <CoverageChecker />

        {/* 12. Frequently Asked Questions */}
        <FaqSection />

        {/* 13. Final Call to Action Banner */}
        <CtaBanner onOpenSubscribe={handleOpenSubscribe} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Support Action */}
      <FloatingWhatsApp />

      {/* Interactive Modals */}
      <SubscriptionModal
        isOpen={isSubscribeModalOpen}
        onClose={() => setIsSubscribeModalOpen(false)}
        initialConfig={subscriptionConfig}
      />

      <DeliveryHubModal
        isOpen={isDeliveryHubOpen}
        onClose={() => setIsDeliveryHubOpen(false)}
      />

      <LabReportModal
        isOpen={isLabReportOpen}
        onClose={() => setIsLabReportOpen(false)}
      />

      <FarmTourModal
        isOpen={isFarmTourOpen}
        onClose={() => setIsFarmTourOpen(false)}
      />
    </div>
  );
}
