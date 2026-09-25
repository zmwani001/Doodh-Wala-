import React, { useState } from 'react';
import { COVERAGE_ZONES } from '../data/mockData';

export const CoverageChecker: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [checkResult, setCheckResult] = useState<{
    searched: boolean;
    isCovered: boolean;
    zoneName?: string;
    deliveryWindow?: string;
    isExpanding?: boolean;
  } | null>(null);

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchTerm.trim().toLowerCase();
    if (!query) return;

    const matched = COVERAGE_ZONES.find(
      (z) =>
        z.name.toLowerCase().includes(query) ||
        z.pincode.includes(query) ||
        query.includes(z.name.toLowerCase().split(' ')[0])
    );

    if (matched) {
      setCheckResult({
        searched: true,
        isCovered: matched.status === 'active',
        isExpanding: matched.status === 'expanding',
        zoneName: matched.name,
        deliveryWindow: matched.deliveryWindow,
      });
    } else {
      // General heuristic for Kashmir queries
      const generalActiveKeywords = ['baramulla', 'kreeri', 'sopore', 'delina', 'kanispora', '193101', '193198', '193201', 'ushkara', 'sangrama'];
      const isGeneralActive = generalActiveKeywords.some((k) => query.includes(k));

      setCheckResult({
        searched: true,
        isCovered: isGeneralActive,
        isExpanding: !isGeneralActive,
        zoneName: searchTerm.trim(),
        deliveryWindow: isGeneralActive ? '05:00 AM – 07:30 AM' : 'Waitlist Route Activation',
      });
    }
  };

  const handleSectorClick = (sectorName: string) => {
    setSearchTerm(sectorName);
    const matched = COVERAGE_ZONES.find((z) => z.name.toLowerCase().includes(sectorName.toLowerCase()));
    setCheckResult({
      searched: true,
      isCovered: matched ? matched.status === 'active' : true,
      isExpanding: matched ? matched.status === 'expanding' : false,
      zoneName: matched?.name || sectorName,
      deliveryWindow: matched?.deliveryWindow || '05:00 AM – 07:30 AM',
    });
  };

  return (
    <section className="py-24 bg-[#efeeeb] text-[#1b1c1a]" id="delivery">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Delivery Info */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[12px] text-[#3d674f] uppercase tracking-widest font-bold">
              Daily Reach
            </span>

            <h2 className="font-display-hero text-3xl sm:text-4xl text-[#042217] tracking-tight font-semibold">
              Fresh Milk, Delivered to Your Door
            </h2>

            <p className="text-[15px] sm:text-[16px] text-[#424844] leading-relaxed">
              Our temperature-regulated delivery fleet drives out of Kreeri at 5:00 AM, quietly reaching residential gates before households begin their morning chai.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#fbf9f6] border border-[#042217]/5 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#bcebcc] text-[#3d674f] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[24px]">location_on</span>
                </div>
                <div>
                  <div className="text-[14px] font-bold text-[#042217]">Farm Origin</div>
                  <div className="text-[13px] text-[#424844]">Kreeri Estate, Baramulla, Kashmir 193101</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#fbf9f6] border border-[#042217]/5 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#bcebcc] text-[#3d674f] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[24px]">alarm</span>
                </div>
                <div>
                  <div className="text-[14px] font-bold text-[#042217]">Delivery Window</div>
                  <div className="text-[13px] text-[#424844]">5:00 AM to 7:30 AM (Monday through Sunday)</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#fbf9f6] border border-[#042217]/5 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#bcebcc] text-[#3d674f] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[24px]">route</span>
                </div>
                <div>
                  <div className="text-[14px] font-bold text-[#042217]">Current Active Zones</div>
                  <div className="text-[13px] text-[#424844]">
                    Baramulla Town, Kreeri, Delina, Kanispora, Sopore Corridor &amp; expanding along Srinagar Highway
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Pin / Locality Checker */}
          <div className="lg:col-span-6">
            <div className="bg-[#fbf9f6] rounded-3xl p-6 sm:p-8 shadow-xl border border-[#042217]/10">
              <h3 className="font-display-hero text-2xl font-bold text-[#042217] mb-2">
                Check Delivery In Your Area
              </h3>
              <p className="text-[14px] text-[#424844] mb-6">
                Enter your town or locality in Baramulla / Kashmir to verify active morning delivery routes.
              </p>

              <form onSubmit={handleCheck} className="space-y-4">
                <div>
                  <label htmlFor="locality-input" className="block text-[13px] font-bold text-[#424844] mb-2">
                    Enter Locality or Pin Code
                  </label>
                  <div className="flex gap-2">
                    <input
                      id="locality-input"
                      type="text"
                      required
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="e.g. Kanispora, Baramulla or 193101"
                      className="w-full px-4 py-3 rounded-xl bg-[#f5f3f0] text-[#1b1c1a] text-[14px] border border-[#042217]/15 focus:outline-none focus:ring-2 focus:ring-[#3d674f]"
                    />
                    <button
                      type="submit"
                      className="bg-[#042217] text-white hover:bg-[#1b382b] px-6 py-3 rounded-xl text-[14px] font-bold shrink-0 transition-colors shadow-md"
                    >
                      Check
                    </button>
                  </div>
                </div>

                {/* Result Feedback */}
                {checkResult && (
                  <div
                    className={`p-4 rounded-2xl transition-all duration-300 border ${
                      checkResult.isCovered
                        ? 'bg-[#bcebcc]/60 border-[#3d674f]/30 text-[#042217]'
                        : 'bg-[#ffdf99]/40 border-[#ecc15a]/40 text-[#251a00]'
                    }`}
                  >
                    {checkResult.isCovered ? (
                      <div className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-[24px] text-[#3d674f] shrink-0 mt-0.5">
                          verified
                        </span>
                        <div>
                          <div className="text-[15px] font-bold">
                            Good News! Active Morning Delivery in {checkResult.zoneName}
                          </div>
                          <div className="text-[13px] text-[#424844] mt-0.5">
                            Standard window: <strong>{checkResult.deliveryWindow}</strong>. Orders placed by 8:00 PM start tomorrow morning!
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-[24px] text-[#bc9533] shrink-0 mt-0.5">
                          schedule
                        </span>
                        <div>
                          <div className="text-[15px] font-bold">
                            Route Expanding Soon to {checkResult.zoneName}
                          </div>
                          <div className="text-[13px] text-[#424844] mt-0.5">
                            We are rapidly expanding morning routes across the Baramulla–Srinagar highway. Send us your address on WhatsApp to get priority route access.
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </form>

              {/* Popular Verified Sectors Chips */}
              <div className="mt-6 pt-6 border-t border-[#042217]/10">
                <div className="text-[11px] text-[#424844] uppercase tracking-wider mb-2.5 font-bold">
                  Popular Verified Sectors (Click to check)
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Baramulla Old Town', 'Kanispora', 'Delina', 'Kreeri Proper', 'Ushkara', 'Sopore'].map(
                    (sec) => (
                      <button
                        key={sec}
                        type="button"
                        onClick={() => handleSectorClick(sec)}
                        className="px-3 py-1.5 bg-[#eae8e5] hover:bg-[#bcebcc] text-[#042217] rounded-full text-[12px] font-semibold transition-colors border border-[#042217]/5"
                      >
                        {sec}
                      </button>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
