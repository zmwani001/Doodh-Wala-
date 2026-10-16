import React from 'react';
import { BrandLogo } from './BrandLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-[#233d2d] py-8 text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-7 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <BrandLogo className="h-11 w-11 rounded-full bg-white object-cover object-[center_38%]" />
            <div>
              <p className="font-display-hero text-xl font-semibold">Meadow Milk</p>
              <p className="mt-0.5 text-[13px] text-white/75">Purely from Kashmir. Freshly to your Home.</p>
            </div>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-white/85">
            <a className="transition-colors hover:text-[#f1dfb8]" href="#subscription">Our milk</a>
            <a className="transition-colors hover:text-[#f1dfb8]" href="#why">Why Meadow Milk</a>
            <a className="transition-colors hover:text-[#f1dfb8]" href="#delivery">Delivery</a>
            <a className="transition-colors hover:text-[#f1dfb8]" href="https://wa.me/919906000000" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </nav>
        </div>

        <div className="mt-7 flex flex-col gap-2 border-t border-white/15 pt-4 text-[12px] text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <p>Kreeri, Baramulla, Kashmir</p>
          <p>© {new Date().getFullYear()} Meadow Milk</p>
        </div>
      </div>
    </footer>
  );
};
