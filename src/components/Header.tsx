import React, { useState } from 'react';
import { BrandLogo } from './BrandLogo';

interface HeaderProps {
  onOpenSubscribe: () => void;
  onOpenDeliveryHub: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSubscribe, onOpenDeliveryHub }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'home' },
    { name: 'Our Milk', href: '#subscription', id: 'subscription' },
    { name: 'Why Meadow Milk', href: '#why', id: 'why' },
    { name: 'Quality', href: '#quality', id: 'quality' },
    { name: 'Delivery', href: '#delivery', id: 'delivery' },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#243a2b]/10 bg-[#fbf9f6]">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-12">
        <a href="#hero" className="group flex shrink-0 items-center gap-2.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3d674f]">
          <BrandLogo className="h-10 w-10 shrink-0 rounded-full bg-[#e9eddf] object-cover object-[center_38%] transition-transform duration-200 group-hover:scale-[1.03]" />
          <div className="flex flex-col">
            <span className="font-display-hero text-[21px] font-semibold leading-none text-[#233d2d]">
              Meadow Milk
            </span>
            <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#64755e]">
              Kashmir
            </span>
          </div>
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-1 text-[14px] font-medium text-[#424844] lg:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setActiveSection(link.id)}
                className={`rounded px-3 py-2 transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3d674f] ${
                  isActive
                    ? 'text-[#233d2d]'
                    : 'text-[#50584d] hover:bg-[#edf0e7] hover:text-[#233d2d]'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenSubscribe();
            }}
            className="flex min-h-10 items-center gap-1.5 rounded-md bg-[#233d2d] px-3 text-[13px] font-semibold text-white transition-colors hover:bg-[#38553d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3d674f] sm:px-4 sm:text-[14px]"
          >
            <span className="material-symbols-outlined text-[18px] text-[#f1dfb8]" aria-hidden="true">local_shipping</span>
            <span className="hidden sm:inline">Order Fresh Milk</span>
            <span className="sm:hidden">Order</span>
          </button>

          <button
            onClick={onOpenDeliveryHub}
            aria-label="Manage deliveries"
            title="Manage deliveries"
            className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-md border border-[#233d2d]/20 text-[#233d2d] transition-colors hover:bg-[#edf0e7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3d674f] sm:flex"
          >
            <span className="material-symbols-outlined text-[20px]" aria-hidden="true">calendar_month</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-[#233d2d]/20 text-[#233d2d] transition-colors hover:bg-[#edf0e7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3d674f] lg:hidden"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-[#233d2d]/10 bg-[#fbf9f6] px-4 py-3 lg:hidden">
          <nav aria-label="Mobile navigation" className="mx-auto grid max-w-7xl gap-1 sm:grid-cols-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => {
                  setActiveSection(link.id);
                  setMobileMenuOpen(false);
                }}
                className="rounded px-3 py-2.5 text-[14px] font-medium text-[#374438] transition-colors hover:bg-[#edf0e7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#3d674f]"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenDeliveryHub();
            }}
            className="mx-auto mt-2 flex min-h-11 w-full max-w-7xl items-center gap-2 rounded border-t border-[#233d2d]/10 px-3 text-left text-[14px] font-medium text-[#38553d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#3d674f]"
          >
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">calendar_month</span>
            Manage deliveries
          </button>
        </div>
      )}
    </header>
  );
};
