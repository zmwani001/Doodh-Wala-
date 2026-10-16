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
  const ratePerLitre = frequency === 'monthly' ? 60 : frequency === 'daily' ? 65 : 63;
  const daysInMonth = frequency === 'alternate' ? 15 : 30;
  const bottleMonthlyCharge = packaging === 'glass' ? 100 : 0;
  const monthlyTotal = Math.round(litres * daysInMonth * ratePerLitre) + bottleMonthlyCharge;
  const dailyCost = Math.round(litres * ratePerLitre);

  const whatsappMessage = `Hello Meadow Milk Kashmir, I would like to start a morning milk subscription:%0A- Plan: ${
    frequency === 'daily' ? 'Daily (7 days/wk)' : frequency === 'alternate' ? 'Alternate Days' : 'Monthly Prepaid Pass'
  }%0A- Quantity: ${litres}L per delivery%0A- Packaging: ${
    packaging === 'glass' ? 'Eco Glass Bottle' : 'Food-Grade Pouch'
  }%0A- Monthly glass bottle charge: ₹${bottleMonthlyCharge}%0A- Estimated monthly total: ₹${monthlyTotal}%0A- Location: Baramulla, Kashmir%0APlease guide me on starting tomorrow morning!`;

  return (
    <section className="scroll-mt-20 bg-[#f2f0e8] px-5 py-12 sm:px-8 sm:py-16 lg:px-12" id="subscription">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 max-w-2xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#64755e]">Meadow Milk</span>
          <h2 className="mt-2 font-display-hero text-3xl font-semibold leading-tight text-[#233d2d] sm:text-4xl">
            Choose your milk plan.
          </h2>
          <p className="mt-2 text-[14px] leading-relaxed text-[#5d6258]">
            Cow milk from Kreeri, in the quantity and delivery rhythm that suits your home.
          </p>
        </div>

      {/* Subscription Plans & Interactive Customizer */}
      <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:gap-8">
        {/* Plans Cards (7 Cols) */}
        <div className="space-y-5 lg:col-span-7">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-3" role="group" aria-label="Choose a delivery plan">
            <button
              type="button"
              aria-pressed={frequency === 'daily'}
              onClick={() => setFrequency('daily')}
              className={`rounded-md border p-4 text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3d674f] ${
                frequency === 'daily'
                  ? 'border-[#38553d] bg-white'
                  : 'border-[#d8dbcf] bg-[#faf9f5] hover:border-[#82927b]'
              }`}
            >
              <span className="block text-[14px] font-semibold text-[#233d2d]">Daily</span>
              <span className="mt-1 block text-[13px] text-[#5d6258]">₹65 / L</span>
            </button>
            <button
              type="button"
              aria-pressed={frequency === 'alternate'}
              onClick={() => setFrequency('alternate')}
              className={`rounded-md border p-4 text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3d674f] ${
                frequency === 'alternate'
                  ? 'border-[#38553d] bg-white'
                  : 'border-[#d8dbcf] bg-[#faf9f5] hover:border-[#82927b]'
              }`}
            >
              <span className="block text-[14px] font-semibold text-[#233d2d]">Alternate days</span>
              <span className="mt-1 block text-[13px] text-[#5d6258]">₹63 / L</span>
            </button>
            <button
              type="button"
              aria-pressed={frequency === 'monthly'}
              onClick={() => setFrequency('monthly')}
              className={`rounded-md border p-4 text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3d674f] ${
                frequency === 'monthly'
                  ? 'border-[#38553d] bg-white'
                  : 'border-[#d8dbcf] bg-[#faf9f5] hover:border-[#82927b]'
              }`}
            >
              <span className="block text-[14px] font-semibold text-[#233d2d]">Monthly pass</span>
              <span className="mt-1 block text-[13px] text-[#5d6258]">₹60 / L</span>
            </button>
          </div>

          {/* Interactive Stepper Form Box */}
          <div className="space-y-6 border-t border-[#c9d1c0] pt-5">
            {/* Step 1: Quantity */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-[15px] text-[#042217] font-bold">
                  Quantity per delivery
                </label>
                <span className="text-[13px] font-medium text-[#53634f]">
                  {litres} L · ₹{dailyCost} per delivery
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[0.5, 1.0, 2.0, 3.0].map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => setLitres(val)}
                    className={`min-h-11 rounded-md border px-3 py-2 text-center text-[14px] font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3d674f] ${
                      litres === val
                        ? 'border-[#38553d] bg-[#38553d] text-white'
                        : 'border-[#d8dbcf] bg-[#faf9f5] text-[#344136] hover:bg-white'
                    }`}
                  >
                    {val === 0.5 ? '500 ml' : `${val} Litre${val > 1 ? 's' : ''}`}
                  </button>
                ))}
              </div>

              {/* Incremental steppers for flexible quantity */}
              <div className="mt-3 flex flex-wrap items-center gap-3 text-[13px] text-[#5d6258]">
                <span>Adjust quantity</span>
                <div className="inline-flex items-center rounded-md border border-[#d8dbcf] bg-[#faf9f5] px-2 py-1">
                  <button
                    type="button"
                    onClick={() => setLitres((prev) => Math.max(0.5, Number((prev - 0.5).toFixed(1))))}
                    aria-label="Decrease quantity by half a litre"
                    className="flex h-8 w-8 items-center justify-center rounded text-[18px] font-semibold text-[#233d2d] hover:bg-[#edf0e7]"
                  >
                    -
                  </button>
                  <span className="w-12 text-center font-bold text-[#042217]">{litres}L</span>
                  <button
                    type="button"
                    onClick={() => setLitres((prev) => Number((prev + 0.5).toFixed(1)))}
                    aria-label="Increase quantity by half a litre"
                    className="flex h-8 w-8 items-center justify-center rounded text-[18px] font-semibold text-[#233d2d] hover:bg-[#edf0e7]"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Step 2: Packaging Selection */}
            <div>
              <label className="text-[15px] text-[#042217] block mb-3 font-bold">
                Packaging
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label
                  onClick={() => setPackaging('glass')}
                  className={`cursor-pointer rounded-md border p-4 flex items-center gap-3 transition-colors ${
                    packaging === 'glass'
                      ? 'bg-white border-[#38553d]'
                      : 'bg-[#faf9f5] border-[#d8dbcf] hover:bg-white'
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
                    </div>
                    <div className="text-[12px] text-[#424844] mt-0.5">
                      Reusable sanitized returnable bottles
                    </div>
                  </div>
                </label>

                <label
                  onClick={() => setPackaging('pouch')}
                    className={`cursor-pointer rounded-md border p-4 flex items-center gap-3 transition-colors ${
                    packaging === 'pouch'
                      ? 'bg-white border-[#38553d]'
                      : 'bg-[#faf9f5] border-[#d8dbcf] hover:bg-white'
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
            <div className="flex items-center gap-3 border-t border-[#c9d1c0] pt-4 text-[#53634f]">
              <span className="material-symbols-outlined text-[20px]" aria-hidden="true">schedule</span>
              <div className="text-[13px] leading-relaxed">
                <span className="font-semibold">Delivery:</span> Morning schedule follows the selected plan.
              </div>
            </div>
          </div>
        </div>

        {/* Live Order Summary Card (5 Cols) */}
        <div className="bg-[#fbf9f5] p-5 border border-[#d8dbcf] sm:p-6 lg:sticky lg:top-24 lg:col-span-5">
          <h3 className="mb-4 font-display-hero text-xl font-semibold text-[#233d2d]">
            Your selection
          </h3>

          <div className="mb-5 divide-y divide-[#d8dbcf]">
            <div className="flex items-center justify-between gap-3 py-3">
              <span className="text-[13px] text-[#5d6258]">Quantity</span>
              <span className="text-right text-[13px] font-semibold text-[#233d2d]">
                {litres} Litre{litres > 1 ? 's' : ''} / morning
              </span>
            </div>

            <div className="flex items-center justify-between gap-3 py-3">
              <span className="text-[13px] text-[#5d6258]">Plan</span>
              <span className="text-right text-[13px] font-semibold text-[#233d2d]">
                {frequency === 'daily'
                  ? 'Daily (7 days/wk)'
                  : frequency === 'alternate'
                  ? 'Alternate Days (15 days/mo)'
                  : 'Monthly Pass (30 days prepaid)'}
              </span>
            </div>

            <div className="flex items-center justify-between gap-3 py-3">
              <span className="text-[13px] text-[#5d6258]">Packaging</span>
              <span className="text-right text-[13px] font-semibold text-[#233d2d]">
                {packaging === 'glass' ? 'Eco Sanitized Glass' : 'Food-Grade Sealed Pouch'}
              </span>
            </div>

            <div className="flex items-center justify-between gap-3 py-3">
              <span className="text-[13px] text-[#5d6258]">Glass bottle charge</span>
              <span className="text-right text-[13px] font-semibold text-[#233d2d]">₹{bottleMonthlyCharge} / month</span>
            </div>
          </div>

          <div className="flex items-end justify-between gap-4 border-t border-[#d8dbcf] py-4">
            <div>
              <span className="block text-[13px] font-semibold text-[#233d2d]">
                Monthly estimate
              </span>
              <span className="text-[11px] text-[#5d6258]">
                {daysInMonth} deliveries @ ₹{ratePerLitre}/L
              </span>
            </div>
            <div className="text-right">
              <span className="font-display-hero text-3xl font-semibold text-[#233d2d]">
                ₹{monthlyTotal.toLocaleString('en-IN')}
              </span>
              <div className="text-[11px] font-medium text-[#53634f]">
                ₹{dailyCost} / delivery
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
              className="flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-[#233d2d] py-3 text-[14px] font-semibold text-white transition-colors hover:bg-[#38553d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3d674f]"
            >
              <span className="material-symbols-outlined text-[19px] text-[#f1dfb8]" aria-hidden="true">local_shipping</span>
              <span>Order Fresh Milk</span>
            </button>

            <a
              href={`https://wa.me/919906000000?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 w-full items-center justify-center gap-2 text-[13px] font-medium text-[#38553d] underline decoration-[#aab59e] underline-offset-4 transition-colors hover:text-[#1d3324] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3d674f]"
            >
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">chat</span>
              <span>Ask about ordering on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};
