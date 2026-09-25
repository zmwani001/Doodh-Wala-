import React, { useState } from 'react';
import { PackagingType, PlanFrequency } from '../types';

interface SubscriptionCustomizerProps {
  onStartSubscription: (config: {
    frequency: PlanFrequency;
    litres: number;
    packaging: PackagingType;
    totalAmount: number;
  }) => void;
}

export const SubscriptionCustomizer: React.FC<SubscriptionCustomizerProps> = ({
  onStartSubscription,
}) => {
  const [frequency, setFrequency] = useState<PlanFrequency>('daily');
  const [litres, setLitres] = useState<number>(1.0);
  const [packaging, setPackaging] = useState<PackagingType>('glass');

  // Rates
  const ratePerLitre = frequency === 'monthly' ? 72 : 75;
  const daysInMonth = frequency === 'alternate' ? 15 : 30;
  const monthlyTotal = Math.round(litres * daysInMonth * ratePerLitre);
  const dailyCost = Math.round(litres * ratePerLitre);

  const whatsappMessage = `Hello Meadow Milk Kashmir, I would like to start a morning milk subscription:%0A- Plan: ${
    frequency === 'daily' ? 'Daily (7 days/wk)' : frequency === 'alternate' ? 'Alternate Days' : 'Monthly Prepaid Pass'
  }%0A- Quantity: ${litres}L per delivery%0A- Packaging: ${
    packaging === 'glass' ? 'Eco Glass Bottle' : 'Food-Grade Pouch'
  }%0A- Location: Baramulla, Kashmir%0APlease guide me on starting tomorrow morning!`;

  return (
    <section className="py-24 bg-[#fbf9f6] px-6 lg:px-12 max-w-7xl mx-auto w-full" id="subscription">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <span className="text-[12px] text-[#3d674f] uppercase tracking-widest font-bold">
          Daily Milk Made Simple
        </span>
        <h2 className="font-display-hero text-3xl sm:text-4xl text-[#042217] tracking-tight font-semibold">
          Fresh Milk, Every Morning. Automatically.
        </h2>
        <p className="text-[15px] sm:text-[16px] text-[#424844]">
          Choose your daily quantity and let Meadow Milk take care of the rest. Cancel, pause, or adjust anytime via WhatsApp.
        </p>
      </div>

      {/* Subscription Plans & Interactive Customizer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Plans Cards (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Daily Plan */}
            <div
              onClick={() => setFrequency('daily')}
              className={`cursor-pointer rounded-2xl p-6 transition-all border-2 ${
                frequency === 'daily'
                  ? 'bg-white border-[#042217] shadow-lg ring-1 ring-[#042217]/10'
                  : 'bg-[#f5f3f0] border-transparent hover:bg-[#efeeeb]'
              }`}
            >
              <span className="px-2.5 py-1 rounded-full bg-[#bcebcc] text-[#042217] text-[11px] font-bold uppercase tracking-wider">
                Most Popular
              </span>
              <h4 className="font-display-hero text-[20px] font-bold text-[#042217] mt-4 mb-1">
                Daily Milk
              </h4>
              <div className="text-[13px] text-[#424844] mb-4">
                7 days a week, reliable morning delivery.
              </div>
              <div className="font-display-hero text-2xl text-[#042217] font-bold">
                ₹75<span className="text-[13px] font-normal text-[#424844]"> / L</span>
              </div>
            </div>

            {/* Alternate Plan */}
            <div
              onClick={() => setFrequency('alternate')}
              className={`cursor-pointer rounded-2xl p-6 transition-all border-2 ${
                frequency === 'alternate'
                  ? 'bg-white border-[#042217] shadow-lg ring-1 ring-[#042217]/10'
                  : 'bg-[#f5f3f0] border-transparent hover:bg-[#efeeeb]'
              }`}
            >
              <span className="px-2.5 py-1 rounded-full bg-[#eae8e5] text-[#424844] text-[11px] font-bold uppercase tracking-wider">
                Flexible
              </span>
              <h4 className="font-display-hero text-[20px] font-bold text-[#042217] mt-4 mb-1">
                Alternate Days
              </h4>
              <div className="text-[13px] text-[#424844] mb-4">
                Delivered on alternate mornings (15 days/mo).
              </div>
              <div className="font-display-hero text-2xl text-[#042217] font-bold">
                ₹75<span className="text-[13px] font-normal text-[#424844]"> / L</span>
              </div>
            </div>

            {/* Monthly Plan */}
            <div
              onClick={() => setFrequency('monthly')}
              className={`cursor-pointer rounded-2xl p-6 transition-all border-2 ${
                frequency === 'monthly'
                  ? 'bg-white border-[#042217] shadow-lg ring-1 ring-[#042217]/10'
                  : 'bg-[#f5f3f0] border-transparent hover:bg-[#efeeeb]'
              }`}
            >
              <span className="px-2.5 py-1 rounded-full bg-[#ffdf99] text-[#251a00] text-[11px] font-bold uppercase tracking-wider">
                Best Value
              </span>
              <h4 className="font-display-hero text-[20px] font-bold text-[#042217] mt-4 mb-1">
                Monthly Pass
              </h4>
              <div className="text-[13px] text-[#424844] mb-4">
                Prepaid 30-day supply with bottle swap.
              </div>
              <div className="font-display-hero text-2xl text-[#042217] font-bold">
                ₹72<span className="text-[13px] font-normal text-[#424844]"> / L</span>
              </div>
            </div>
          </div>

          {/* Interactive Stepper Form Box */}
          <div className="bg-[#f5f3f0] rounded-3xl p-6 sm:p-8 space-y-8 border border-[#042217]/5 shadow-sm">
            {/* Step 1: Quantity */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-[15px] text-[#042217] font-bold">
                  Step 1: Select Daily Quantity
                </label>
                <span className="text-[13px] font-semibold text-[#3d674f]">
                  Selected: {litres} Litre{litres > 1 ? 's' : ''} (₹{dailyCost} / morning)
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[0.5, 1.0, 2.0, 3.0].map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => setLitres(val)}
                    className={`py-3 px-4 rounded-xl text-center text-[14px] font-bold transition-all duration-200 ${
                      litres === val
                        ? 'bg-[#042217] text-white shadow-md'
                        : 'bg-white text-[#1b1c1a] hover:bg-[#eae8e5] border border-[#042217]/10'
                    }`}
                  >
                    {val === 0.5 ? '500 ml' : `${val} Litre${val > 1 ? 's' : ''}${val === 1 ? ' ★' : ''}`}
                  </button>
                ))}
              </div>

              {/* Incremental steppers for flexible quantity */}
              <div className="mt-3 flex items-center gap-3 text-[13px] text-[#424844]">
                <span>Need a custom amount?</span>
                <div className="inline-flex items-center bg-white rounded-lg border border-[#042217]/10 px-2 py-1">
                  <button
                    type="button"
                    onClick={() => setLitres((prev) => Math.max(0.5, Number((prev - 0.5).toFixed(1))))}
                    className="w-6 h-6 rounded flex items-center justify-center text-[#042217] hover:bg-[#efeeeb] font-bold"
                  >
                    -
                  </button>
                  <span className="w-12 text-center font-bold text-[#042217]">{litres}L</span>
                  <button
                    type="button"
                    onClick={() => setLitres((prev) => Number((prev + 0.5).toFixed(1)))}
                    className="w-6 h-6 rounded flex items-center justify-center text-[#042217] hover:bg-[#efeeeb] font-bold"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Step 2: Packaging Selection */}
            <div>
              <label className="text-[15px] text-[#042217] block mb-3 font-bold">
                Step 2: Choose Preferred Packaging
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label
                  onClick={() => setPackaging('glass')}
                  className={`cursor-pointer p-4 rounded-2xl flex items-center gap-4 transition-all border-2 ${
                    packaging === 'glass'
                      ? 'bg-white border-[#042217] shadow-sm'
                      : 'bg-white/80 border-transparent hover:bg-white'
                  }`}
                >
                  <input
                    type="radio"
                    name="packaging"
                    checked={packaging === 'glass'}
                    onChange={() => setPackaging('glass')}
                    className="w-4 h-4 accent-[#042217]"
                  />
                  <div>
                    <div className="text-[14px] text-[#042217] font-bold flex items-center gap-1.5">
                      <span>Eco Glass Bottle</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#bcebcc] text-[#042217]">Recommended</span>
                    </div>
                    <div className="text-[12px] text-[#424844] mt-0.5">
                      Reusable sanitized returnable bottles
                    </div>
                  </div>
                </label>

                <label
                  onClick={() => setPackaging('pouch')}
                  className={`cursor-pointer p-4 rounded-2xl flex items-center gap-4 transition-all border-2 ${
                    packaging === 'pouch'
                      ? 'bg-white border-[#042217] shadow-sm'
                      : 'bg-white/80 border-transparent hover:bg-white'
                  }`}
                >
                  <input
                    type="radio"
                    name="packaging"
                    checked={packaging === 'pouch'}
                    onChange={() => setPackaging('pouch')}
                    className="w-4 h-4 accent-[#042217]"
                  />
                  <div>
                    <div className="text-[14px] text-[#042217] font-bold">
                      Food-Grade Pouch
                    </div>
                    <div className="text-[12px] text-[#424844] mt-0.5">
                      Multi-layered sealed protective pouch
                    </div>
                  </div>
                </label>
              </div>
            </div>

            {/* Delivery Time Assurance */}
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#bcebcc]/40 text-[#042217] border border-[#3d674f]/20">
              <span className="material-symbols-outlined text-[24px] text-[#3d674f]">schedule</span>
              <div className="text-[13px] leading-relaxed">
                <span className="font-bold">Guaranteed Delivery Slot:</span> Between 5:00 AM and 7:30 AM quietly at your main door or doorstep milk bag in Baramulla.
              </div>
            </div>
          </div>
        </div>

        {/* Live Order Summary Card (5 Cols) */}
        <div className="lg:col-span-5 sticky top-28 bg-[#efeeeb] rounded-3xl p-6 sm:p-8 shadow-xl border border-[#042217]/10">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-display-hero text-2xl font-bold text-[#042217]">
              Subscription Summary
            </h3>
            <span className="px-2.5 py-1 rounded-full bg-[#042217] text-[#ffdf99] text-[11px] font-bold uppercase">
              Pure Cow Milk
            </span>
          </div>

          <p className="text-[13px] text-[#424844] mb-6">
            Transparent pricing direct from Kreeri farm with zero hidden delivery charges.
          </p>

          <div className="space-y-3 mb-6 bg-white/70 rounded-2xl p-4 border border-[#042217]/5">
            <div className="flex justify-between items-center py-1.5 border-b border-[#042217]/5">
              <span className="text-[14px] text-[#424844]">Daily Quantity</span>
              <span className="text-[14px] text-[#042217] font-bold">
                {litres} Litre{litres > 1 ? 's' : ''} / morning
              </span>
            </div>

            <div className="flex justify-between items-center py-1.5 border-b border-[#042217]/5">
              <span className="text-[14px] text-[#424844]">Delivery Plan</span>
              <span className="text-[14px] text-[#042217] font-bold">
                {frequency === 'daily'
                  ? 'Daily (7 days/wk)'
                  : frequency === 'alternate'
                  ? 'Alternate Days (15 days/mo)'
                  : 'Monthly Pass (30 days prepaid)'}
              </span>
            </div>

            <div className="flex justify-between items-center py-1.5 border-b border-[#042217]/5">
              <span className="text-[14px] text-[#424844]">Packaging Format</span>
              <span className="text-[14px] text-[#042217] font-bold">
                {packaging === 'glass' ? 'Eco Sanitized Glass' : 'Food-Grade Sealed Pouch'}
              </span>
            </div>

            <div className="flex justify-between items-center py-1.5 border-b border-[#042217]/5">
              <span className="text-[14px] text-[#424844]">Doorstep Delivery</span>
              <span className="text-[14px] text-[#3d674f] font-bold">FREE ($0)</span>
            </div>

            <div className="flex justify-between items-center py-1.5">
              <span className="text-[14px] text-[#424844]">Bottle Security Deposit</span>
              <span className="text-[14px] text-[#042217] font-bold">₹0 (Waived for New Subscribers)</span>
            </div>
          </div>

          <div className="pt-2 pb-6 flex justify-between items-baseline">
            <div>
              <span className="font-display-hero text-[18px] text-[#042217] font-bold block">
                Estimated Monthly
              </span>
              <span className="text-[12px] text-[#424844]">
                {daysInMonth} deliveries @ ₹{ratePerLitre}/L
              </span>
            </div>
            <div className="text-right">
              <span className="font-display-hero text-3xl sm:text-4xl text-[#042217] font-bold">
                ₹{monthlyTotal.toLocaleString('en-IN')}
              </span>
              <div className="text-[12px] text-[#3d674f] font-bold">
                ₹{dailyCost} / morning delivery
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={() =>
                onStartSubscription({
                  frequency,
                  litres,
                  packaging,
                  totalAmount: monthlyTotal,
                })
              }
              className="w-full flex items-center justify-center gap-3 bg-[#042217] text-white hover:bg-[#1b382b] active:scale-[0.98] text-[15px] font-bold py-4 rounded-full shadow-lg transition-all duration-200"
            >
              <span className="material-symbols-outlined text-[20px] text-[#ffdf99]">local_shipping</span>
              <span>Start My Subscription</span>
            </button>

            <a
              href={`https://wa.me/919906000000?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#bcebcc] hover:bg-[#a3d1b3] text-[#042217] text-[14px] font-bold py-3.5 rounded-full transition-all duration-200"
            >
              <span className="material-symbols-outlined text-[19px]">chat</span>
              <span>Subscribe Instantly via WhatsApp</span>
            </a>
          </div>

          <div className="mt-4 text-center">
            <p className="text-[12px] text-[#424844] flex items-center justify-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-[#3d674f]">verified</span>
              <span>Pause, modify or cancel anytime with 1-click via WhatsApp</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
