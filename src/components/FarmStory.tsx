import React from 'react';

interface FarmStoryProps {
  onOpenFarmTour: () => void;
}

export const FarmStory: React.FC<FarmStoryProps> = ({ onOpenFarmTour }) => {
  return (
    <section className="py-24 bg-[#fbf9f6] px-6 lg:px-12 max-w-7xl mx-auto w-full" id="farm">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Image Column */}
        <div className="lg:col-span-6 relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl relative border border-[#042217]/10 group">
            <img
              className="w-full h-[540px] object-cover transition-transform duration-700 group-hover:scale-105"
              alt="Authentic Kashmiri dairy farm couple in traditional attire tenderly grooming a calm dairy cow under a rustic wooden shed, with stainless steel milk churn cans in foreground and sunlit green Himalayan mountains of Kreeri Baramulla in background."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxHAzr8PCIx_Szy_Mhw1RgFqX4UYRzs6-tAlcn3NQtGBCE8LYGljC64Wm7j4Hsd2mcXcTYzS_1J7u48joRwNOHdKPry4DJhcjMJmac16G8wd1mWTwt7ekx5rmpyMaPJ-u2BxhCIOKp5OCqc5X9k_2P-akanFPpB0pEU2K5R4KN-knB-ypzq0dOJatkFHofEEYtVWTur61VWVaqQa3wmgHAB_EQ-b9PEhfczjKkJTr-alnrXfIt4to"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-[#fbf9f6]/95 backdrop-blur-md rounded-2xl p-5 shadow-lg border border-[#042217]/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#bcebcc] text-[#3d674f] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[24px]">verified</span>
                  </div>
                  <div>
                    <div className="text-[15px] font-bold text-[#042217]">Kreeri Dairy Estate</div>
                    <div className="text-[13px] text-[#424844]">Baramulla, Kashmir • Elevation 1,600m</div>
                  </div>
                </div>
                <span className="px-3 py-1 bg-[#3d674f]/10 text-[#3d674f] text-[11px] font-bold rounded-full uppercase tracking-wider">
                  Single Estate
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Narrative Column */}
        <div className="lg:col-span-6 space-y-6">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#bcebcc] text-[#042217] text-[12px] font-bold uppercase tracking-wider">
            📍 Kreeri, Baramulla, Kashmir — Elevation 1,600m
          </span>

          <h2 className="font-display-hero text-3xl sm:text-4xl text-[#042217] tracking-tight font-semibold">
            Raised in the Heart of Kashmir
          </h2>

          <p className="text-[17px] text-[#424844] leading-relaxed">
            Our farm is nestled in Kreeri, Baramulla, Kashmir — embraced by fresh Himalayan mountain air, natural streams, and verdant alpine grazing fields.
          </p>

          <p className="text-[15px] text-[#424844] leading-relaxed">
            Unlike industrial dairy conglomerates, our cows roam free in lush green pastures, grazing on natural mountain grass and clean water. This stress-free environment and natural diet result in milk that is richer in taste, higher in natural nutrients, and completely wholesome.
          </p>

          {/* Pillars */}
          <div className="space-y-4 pt-2">
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#f5f3f0] border border-[#042217]/5 transition-all hover:bg-[#efeeeb]">
              <div className="w-10 h-10 rounded-xl bg-[#bcebcc] text-[#3d674f] flex items-center justify-center shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-[22px]">favorite</span>
              </div>
              <div>
                <h4 className="text-[15px] text-[#042217] font-bold">Ethical Cow Welfare</h4>
                <p className="text-[13px] text-[#424844] mt-0.5 leading-relaxed">
                  Spacious climate-regulated open barns, 24/7 dedicated veterinary attention, and cruelty-free automated milking.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#f5f3f0] border border-[#042217]/5 transition-all hover:bg-[#efeeeb]">
              <div className="w-10 h-10 rounded-xl bg-[#bcebcc] text-[#3d674f] flex items-center justify-center shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-[22px]">terrain</span>
              </div>
              <div>
                <h4 className="text-[15px] text-[#042217] font-bold">Pristine Himalayan Soil</h4>
                <p className="text-[13px] text-[#424844] mt-0.5 leading-relaxed">
                  Baramulla’s mountain microclimate produces forage richer in natural carotene, calcium, and wholesome essential fats.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#f5f3f0] border border-[#042217]/5 transition-all hover:bg-[#efeeeb]">
              <div className="w-10 h-10 rounded-xl bg-[#bcebcc] text-[#3d674f] flex items-center justify-center shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-[22px]">maps_ar</span>
              </div>
              <div>
                <h4 className="text-[15px] text-[#042217] font-bold">Direct Farm-to-Home</h4>
                <p className="text-[13px] text-[#424844] mt-0.5 leading-relaxed">
                  Zero middleman collection depots or days sitting in chilled holding tankers across states. What we milk today is at your door tomorrow dawn.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={onOpenFarmTour}
              className="inline-flex items-center gap-2 text-[#042217] hover:text-[#3d674f] text-[14px] font-bold uppercase tracking-wider group"
            >
              <span>Explore Farm Coordinates & Visitor Guidelines</span>
              <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
