import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#042217] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-14">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                alt="Meadow Milk Brand Logo"
                className="h-8 w-auto object-contain brightness-0 invert"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBx-hcZSH2FQ2BCWtYFMt_OnT1uqoLfg4HzZRcQiC4wjCkrokOAnLOB0hzuTvfbrJQg7LqWidwDO2mAfVZ_1x3A9_AqaRejzJIqvKdYp_Tgp22jIwYC7as1VQBS1EHRxC57QdO-n9RMZRJUQ1Ez7FKOxdZK4pUpMk5QVRXZ4AcWFG7hu2sXp_oLjrDMJz8rb9Nz5XlBN3V1djUXEDTNBPdgfLJiboI93qq1dKwh35SzA-E3qQIGeyU"
              />
              <span className="font-display-hero text-xl font-bold text-white tracking-tight">
                MEADOW MILK
              </span>
            </div>

            <p className="font-display-hero text-lg text-[#ffdf99] font-normal italic">
              Purely from Kashmir. Freshly to your Home.
            </p>

            <p className="text-[13px] text-[#f2f0ed]/80 leading-relaxed">
              Sourced directly from the lush, alpine slopes of Kreeri pastures. Chilled, untouched by human hands, and delivered within hours of sunrise.
            </p>

            <div className="pt-2">
              <p className="text-[11px] text-[#ecc15a] uppercase font-bold tracking-wider mb-1">
                Farm Estate Address
              </p>
              <p className="text-[13px] text-[#f2f0ed]">
                Meadow Milk Dairy Farm, Kreeri, Baramulla, Kashmir 193101
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[13px] text-[#ffdf99] font-bold uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-[14px] text-[#f2f0ed]/80">
              <li>
                <a className="hover:text-[#ffdf99] transition-colors" href="#hero">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:text-[#ffdf99] transition-colors" href="#farm">
                  Our Farm
                </a>
              </li>
              <li>
                <a className="hover:text-[#ffdf99] transition-colors" href="#quality">
                  Quality &amp; Testing
                </a>
              </li>
              <li>
                <a className="hover:text-[#ffdf99] transition-colors" href="#subscription">
                  Subscription Plans
                </a>
              </li>
              <li>
                <a className="hover:text-[#ffdf99] transition-colors" href="#delivery">
                  Delivery Network
                </a>
              </li>
              <li>
                <a className="hover:text-[#ffdf99] transition-colors" href="#faq">
                  Frequently Asked
                </a>
              </li>
            </ul>
          </div>

          {/* Dairy Standards */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[13px] text-[#ffdf99] font-bold uppercase tracking-wider">
              Dairy Standards
            </h4>
            <ul className="space-y-2.5 text-[13px] text-[#f2f0ed]/80">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[17px] text-[#ffdf99]">verified</span>
                100% Pure Cow Milk
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[17px] text-[#ffdf99]">science</span>
                140+ Daily Quality Tests
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[17px] text-[#ffdf99]">ac_unit</span>
                Cold Chain Insulated (3.6°C)
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[17px] text-[#ffdf99]">eco</span>
                Zero Preservatives or Chemicals
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[13px] text-[#ffdf99] font-bold uppercase tracking-wider">
              Contact &amp; Support
            </h4>
            <div className="space-y-2.5 text-[13px] text-[#f2f0ed]/80">
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-[#ffdf99]">chat</span>
                WhatsApp Daily Dispatch Support
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-[#ffdf99]">call</span>
                Morning Helpline: +91 1954 220 110
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-[#ffdf99]">mail</span>
                delivery@meadowmilk.in
              </p>
            </div>

            <div className="pt-3">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1b382b] text-[#ffdf99] text-[11px] font-bold border border-white/10">
                <span className="material-symbols-outlined text-[14px]">shield</span>
                100% Pure &amp; Fresh Daily Farm Milk
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-[#f2f0ed]/60">
            © {new Date().getFullYear()} Meadow Milk Kashmir. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-[13px] text-[#f2f0ed]/80">
            <a className="hover:text-[#ffdf99] transition-colors" href="#hero">
              Privacy Policy
            </a>
            <span className="text-white/20">•</span>
            <a className="hover:text-[#ffdf99] transition-colors" href="#hero">
              Terms of Supply
            </a>
            <span className="text-white/20">•</span>
            <a className="hover:text-[#ffdf99] transition-colors" href="#hero">
              Refund &amp; Bottle Guidelines
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
