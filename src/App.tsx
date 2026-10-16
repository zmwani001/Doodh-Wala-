import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBenefits } from './components/TrustBenefits';
import { SubscriptionCustomizer } from './components/SubscriptionCustomizer';
import { CoverageChecker } from './components/CoverageChecker';
import { LabQuality } from './components/LabQuality';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { SubscriptionModal } from './components/SubscriptionModal';
import { DeliveryHubModal } from './components/DeliveryHubModal';
import { LabReportModal } from './components/LabReportModal';
import { PackagingType, PlanFrequency } from './types';

export default function App() {
  const [isSubscribeModalOpen, setIsSubscribeModalOpen] = useState(false);
  const [isDeliveryHubOpen, setIsDeliveryHubOpen] = useState(false);
  const [isLabReportOpen, setIsLabReportOpen] = useState(false);

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
    totalAmount: 2050,
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

      <main className="w-full pt-[72px]">
        <Hero onOpenSubscribe={handleOpenSubscribe} />
        <TrustBenefits />
        <SubscriptionCustomizer onStartSubscription={handleStartSubscription} />
        <CoverageChecker />
        <LabQuality onOpenLabReport={() => setIsLabReportOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Support Action */}
      <FloatingWhatsApp />

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
    </div>
  );
}
