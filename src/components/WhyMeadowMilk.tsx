import React from 'react';

export const WhyMeadowMilk: React.FC = () => {
  return (
    <section className="py-24 bg-[#f5f3f0] text-[#1b1c1a]" id="why">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-[12px] text-[#3d674f] uppercase tracking-widest font-bold">
            Compare the Difference
          </span>
          <h2 className="font-display-hero text-3xl sm:text-4xl text-[#042217] tracking-tight font-semibold">
            Why Families Choose Meadow Milk Over Packet Milk
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[#424844]">
            See the direct contrast between standard mass-market packaged pouches and our farm-to-table morning harvest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {/* Conventional Packet Milk */}
          <div className="bg-[#fbf9f6] rounded-3xl p-8 shadow-sm border border-[#042217]/5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#042217]/10">
                <div>
                  <h3 className="font-display-hero text-[22px] text-[#1b1c1a] font-bold">
                    Conventional Market Milk
                  </h3>
                  <p className="text-[13px] text-[#424844] mt-0.5">Typical plastic packet milk in shops</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#ffdad6] text-[#ba1a1a] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[26px]">cancel</span>
                </div>
              </div>

              <div className="space-y-4 pt-6 text-[14px] text-[#424844]">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#ba1a1a] text-[20px] shrink-0 mt-0.5">
                    close
                  </span>
                  <span>
                    <strong>Reconstituted:</strong> Made from dry milk powder, water, and synthetic additives to manipulate fat ratios.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#ba1a1a] text-[20px] shrink-0 mt-0.5">
                    close
                  </span>
                  <span>
                    <strong>2 to 5 Days Old:</strong> Shipped long distance in holding tankers before reaching your local store.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#ba1a1a] text-[20px] shrink-0 mt-0.5">
                    close
                  </span>
                  <span>
                    <strong>Aggressive Ultra-Processing:</strong> High-heat denaturing destroys beneficial enzymes and alters natural taste.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#ba1a1a] text-[20px] shrink-0 mt-0.5">
                    close
                  </span>
                  <span>
                    <strong>Single-Use Plastics:</strong> Piles of thin plastic bags polluting water streams and Kashmir landscape.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#ba1a1a] text-[20px] shrink-0 mt-0.5">
                    close
                  </span>
                  <span>
                    <strong>Untraceable Origin:</strong> Pooled from hundreds of unmonitored commercial collection agents.
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-[#042217]/10 text-[12px] font-bold text-[#ba1a1a] uppercase tracking-wider">
              Compromised Freshness
            </div>
          </div>

          {/* Meadow Milk Kashmir */}
          <div className="bg-[#042217] text-white rounded-3xl p-8 shadow-2xl relative overflow-hidden flex flex-col justify-between border border-white/10">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div>
                  <span className="text-[11px] text-[#ffdf99] uppercase font-bold tracking-widest block mb-1">
                    The Pure Way
                  </span>
                  <h3 className="font-display-hero text-[24px] text-white font-bold">
                    Meadow Milk Kashmir
                  </h3>
                  <p className="text-[13px] text-[#82a291] mt-0.5">Kreeri, Baramulla Farm Single-Source</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#ffdf99] text-[#042217] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[26px]">check_circle</span>
                </div>
              </div>

              <div className="space-y-4 pt-6 text-[14px] text-[#f2f0ed]/90">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#ffdf99] text-[20px] shrink-0 mt-0.5">
                    check
                  </span>
                  <span>
                    <strong className="text-white">100% Pure Cow Milk:</strong> Zero reconstituted powders, zero added water, zero chemicals.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#ffdf99] text-[20px] shrink-0 mt-0.5">
                    check
                  </span>
                  <span>
                    <strong className="text-white">Freshness Within Hours:</strong> Milked at 4:30 AM and placed on your doorstep by 7:30 AM.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#ffdf99] text-[20px] shrink-0 mt-0.5">
                    check
                  </span>
                  <span>
                    <strong className="text-white">Intact Living Nutrition:</strong> Gently chilled to 3.6°C to safeguard natural bio-enzymes &amp; vitamins.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#ffdf99] text-[20px] shrink-0 mt-0.5">
                    check
                  </span>
                  <span>
                    <strong className="text-white">Eco-friendly Sterilized Glass:</strong> Reusable returnable glass bottles protecting family health &amp; valley ecology.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#ffdf99] text-[20px] shrink-0 mt-0.5">
                    check
                  </span>
                  <span>
                    <strong className="text-white">Verifiable Single Origin:</strong> Visit our farm in Kreeri, meet our cows, and inspect our cold-chain testing.
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 text-[12px] font-bold text-[#ffdf99] uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ffdf99] animate-pulse"></span>
              <span>100% Farm Transparency Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
