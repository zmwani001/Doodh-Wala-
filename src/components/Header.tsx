import React, { useState } from 'react';

interface HeaderProps {
  onOpenSubscribe: () => void;
  onOpenDeliveryHub: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSubscribe, onOpenDeliveryHub }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'home' },
    { name: 'Our Farm', href: '#farm', id: 'farm' },
    { name: 'Our Milk', href: '#benefits', id: 'benefits' },
    { name: 'Journey', href: '#journey', id: 'journey' },
    { name: 'Quality', href: '#quality', id: 'quality' },
    { name: 'Subscription', href: '#subscription', id: 'subscription' },
    { name: 'Delivery', href: '#delivery', id: 'delivery' },
    { name: 'FAQs', href: '#faq', id: 'faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#fbf9f6]/90 backdrop-blur-md shadow-[0_1px_8px_rgba(20,36,28,0.04)] border-b border-[#042217]/10">
      <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between gap-4">
        {/* Brand Area */}
        <a href="#hero" className="flex items-center gap-3 shrink-0 group focus:outline-none">
          <img
            alt="Meadow Milk Brand Logo"
            className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBx-hcZSH2FQ2BCWtYFMt_OnT1uqoLfg4HzZRcQiC4wjCkrokOAnLOB0hzuTvfbrJQg7LqWidwDO2mAfVZ_1x3A9_AqaRejzJIqvKdYp_Tgp22jIwYC7as1VQBS1EHRxC57QdO-n9RMZRJUQ1Ez7FKOxdZK4pUpMk5QVRXZ4AcWFG7hu2sXp_oLjrDMJz8rb9Nz5XlBN3V1djUXEDTNBPdgfLJiboI93qq1dKwh35SzA-E3qQIGeyU"
          />
          <div className="flex flex-col">
            <span className="font-display-hero text-[22px] tracking-tight leading-none text-[#042217] font-bold">
              MEADOW MILK
            </span>
            <span className="text-[11px] font-bold text-[#3d674f] uppercase tracking-widest mt-0.5">
              Kreeri, Baramulla
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-5 text-[14px] font-semibold text-[#424844]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setActiveSection(link.id)}
                className={`transition-all duration-200 px-3 py-1.5 rounded-full ${
                  isActive
                    ? 'bg-[#1b382b] text-white shadow-sm'
                    : 'text-[#424844] hover:text-[#042217] hover:bg-[#efeeeb]'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Actions Zone */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            className="hidden md:flex items-center gap-1.5 text-[#3d674f] hover:text-[#042217] transition-colors text-[13px] font-semibold px-2 py-1 rounded-lg hover:bg-[#efeeeb]"
            href="https://wa.me/919906000000?text=Hello%20Meadow%20Milk%2C%20I%20have%20an%20inquiry%20regarding%20morning%20milk%20delivery."
            rel="noopener"
            target="_blank"
          >
            <span className="material-symbols-outlined text-[19px]">chat</span>
            <span className="hidden lg:inline">Morning Support</span>
          </a>

          <button
            onClick={onOpenSubscribe}
            className="bg-[#042217] text-white hover:bg-[#1b382b] active:scale-[0.98] text-[14px] font-semibold px-4 sm:px-5 py-2.5 rounded-full transition-all duration-200 shadow-[0_2px_8px_-2px_rgba(20,36,28,0.15)] flex items-center gap-1.5"
          >
            <span className="material-symbols-outlined text-[18px] text-[#ffdf99]">local_shipping</span>
            <span>Subscribe for Daily Milk</span>
          </button>

          {/* Account / Delivery Manager Button */}
          <button
            onClick={onOpenDeliveryHub}
            aria-label="Manage Deliveries"
            title="My Deliveries & Schedule"
            className="w-9 h-9 rounded-full bg-[#1b382b] hover:bg-[#042217] text-white flex items-center justify-center shrink-0 transition-transform active:scale-95 shadow-sm"
          >
            <span className="material-symbols-outlined text-[20px]">person</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden w-9 h-9 rounded-lg bg-[#efeeeb] text-[#042217] flex items-center justify-center transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-[22px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#fbf9f6] border-b border-[#042217]/10 px-6 py-4 shadow-xl">
          <div className="grid grid-cols-2 gap-2 mb-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => {
                  setActiveSection(link.id);
                  setMobileMenuOpen(false);
                }}
                className="px-3 py-2 rounded-lg text-[14px] font-semibold text-[#1b1c1a] hover:bg-[#efeeeb] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-[#042217]/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDeliveryHub();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#efeeeb] text-[#042217] text-[14px] font-semibold"
            >
              <span className="material-symbols-outlined text-[18px]">calendar_month</span>
              Manage My Morning Deliveries
            </button>
            <a
              href="https://wa.me/919906000000"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#bcebcc] text-[#042217] text-[14px] font-semibold"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              WhatsApp Helpline (+91 99060 00000)
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
