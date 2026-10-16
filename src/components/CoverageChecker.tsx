import React, { useState } from 'react';
import { COVERAGE_ZONES } from '../data/mockData';

export const CoverageChecker: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [checkResult, setCheckResult] = useState<{
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
        z.name.toLowerCase() === query || z.pincode === query
    );

    if (matched) {
      setCheckResult({
        isCovered: matched.status === 'active',
        isExpanding: matched.status === 'expanding',
        zoneName: matched.name,
        deliveryWindow: matched.deliveryWindow,
      });
    } else {
      setCheckResult({
        isCovered: false,
        isExpanding: false,
        zoneName: searchTerm.trim(),
      });
    }
  };

  const handleSectorClick = (sectorName: string) => {
    setSearchTerm(sectorName);
    const matched = COVERAGE_ZONES.find((z) => z.name.toLowerCase().includes(sectorName.toLowerCase()));
    setCheckResult({
      isCovered: matched?.status === 'active',
      isExpanding: matched ? matched.status === 'expanding' : false,
      zoneName: matched?.name || sectorName,
      deliveryWindow: matched?.deliveryWindow || 'Morning Fresh Delivery As Per Availed Service',
    });
  };

  return (
    <section className="scroll-mt-20 bg-[#e9e9df] py-12 text-[#26372a] sm:py-16" id="delivery">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Delivery Info */}
          <div className="space-y-5 lg:col-span-5">
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#64755e]">Delivery</span>

            <h2 className="font-display-hero text-3xl font-semibold leading-tight text-[#233d2d] sm:text-4xl">
              Check your delivery area.
            </h2>

            <p className="text-[14px] leading-relaxed text-[#5d6258]">
              Morning delivery is available in listed areas across Baramulla, Kreeri and Sopore. Search your locality or PIN code for current route information.
            </p>

            <div className="border-t border-[#c6ccbd] pt-4 text-[13px] text-[#53634f]">
              <span className="font-semibold text-[#344136]">Farm:</span> Kreeri, Baramulla, Kashmir
            </div>
          </div>

          {/* Interactive Pin / Locality Checker */}
          <div className="lg:col-span-7">
            <div className="border border-[#d0d4c9] bg-[#fbf9f5] p-5 sm:p-7">
              <h3 className="font-display-hero text-xl font-semibold text-[#233d2d]">
                Find a route
              </h3>
              <p className="mb-5 mt-1 text-[13px] text-[#5d6258]">
                Enter an exact locality name or PIN code.
              </p>

              <form onSubmit={handleCheck} className="space-y-4">
                <div>
                  <label htmlFor="locality-input" className="mb-2 block text-[12px] font-semibold text-[#455145]">
                    Locality or PIN code
                  </label>
                  <div className="flex gap-2">
                    <input
                      id="locality-input"
                      type="text"
                      required
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="e.g. Kanispora or 193198"
                      className="w-full px-4 py-3 rounded-xl bg-[#f5f3f0] text-[#1b1c1a] text-[14px] border border-[#042217]/15 focus:outline-none focus:ring-2 focus:ring-[#3d674f]"
                    />
                    <button
                      type="submit"
                      className="min-h-11 shrink-0 rounded-md bg-[#233d2d] px-5 text-[13px] font-semibold text-white transition-colors hover:bg-[#38553d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3d674f]"
                    >
                      Check
                    </button>
                  </div>
                </div>

                {/* Result Feedback */}
                {checkResult && (
                  <div
                    aria-live="polite"
                    className={`p-4 rounded-2xl transition-all duration-300 border ${
                      checkResult.isCovered
                        ? 'border-[#aab99f] bg-[#edf1e8] text-[#26372a]'
                        : 'border-[#d7c9a7] bg-[#f5f0e4] text-[#483b24]'
                    }`}
                  >
                    {checkResult.isCovered ? (
                      <div className="flex items-start gap-3">
                        <span className="material-symbols-outlined mt-0.5 shrink-0 text-[21px] text-[#53634f]" aria-hidden="true">
                          verified
                        </span>
                        <div>
                          <div className="text-[14px] font-semibold">
                            Listed for delivery: {checkResult.zoneName}
                          </div>
                          <div className="mt-1 text-[12px] text-[#5d6258]">
                            {checkResult.deliveryWindow}
                          </div>
                        </div>
                      </div>
                    ) : checkResult.isExpanding ? (
                      <div className="flex items-start gap-3">
                        <span className="material-symbols-outlined mt-0.5 shrink-0 text-[21px] text-[#8b6f3f]" aria-hidden="true">
                          schedule
                        </span>
                        <div>
                          <div className="text-[14px] font-semibold">
                            Route marked as expanding: {checkResult.zoneName}
                          </div>
                          <div className="mt-1 text-[12px] text-[#5d6258]">
                            Contact us on WhatsApp to ask about availability.
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="text-[13px] leading-relaxed">
                        We couldn&apos;t confirm {checkResult.zoneName} from the current route list. <a className="font-semibold underline underline-offset-2" href="https://wa.me/919906000000" target="_blank" rel="noopener noreferrer">Ask us on WhatsApp.</a>
                      </div>
                    )}
                  </div>
                )}
              </form>

              {/* Popular Verified Sectors Chips */}
              <div className="mt-5 border-t border-[#d8dbcf] pt-4">
                <div className="mb-2.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#66705f]">
                  Common areas
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Baramulla Old Town',
                    'Kanispora',
                    'Delina',
                    'Kreeri Proper',
                    'Sopore Town & Model Town',
                  ].map((sec) => (
                    <button
                      key={sec}
                      type="button"
                      onClick={() => handleSectorClick(sec)}
                      className="min-h-9 rounded-md border border-[#d8dbcf] bg-white px-3 py-1.5 text-[12px] font-medium text-[#344136] transition-colors hover:bg-[#edf1e8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3d674f]"
                    >
                      {sec}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
