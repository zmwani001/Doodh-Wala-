import React from 'react';

interface LabQualityProps {
  onOpenLabReport: () => void;
}

export const LabQuality: React.FC<LabQualityProps> = ({ onOpenLabReport }) => {
  return (
    <section className="py-24 bg-[#eae8e5] text-[#1b1c1a]" id="quality">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text & Metric Box */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[12px] text-[#3d674f] uppercase tracking-widest font-bold">
              Scientific Integrity
            </span>

            <h2 className="font-display-hero text-3xl sm:text-4xl text-[#042217] tracking-tight font-semibold">
              Every Drop Deserves Our Attention
            </h2>

            <p className="text-[15px] sm:text-[16px] text-[#424844] leading-relaxed">
              We hold our daily batches to standards substantially higher than conventional store-bought packets. Tested every single morning before transit begins.
            </p>

            {/* Dark Highlight Metric Card */}
            <div className="p-8 rounded-3xl bg-[#042217] text-white shadow-xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffdf99]/5 rounded-full blur-2xl"></div>
              <div className="font-display-hero text-5xl text-[#ffdf99] font-bold leading-none mb-2">
                140+
              </div>
              <div className="font-display-hero text-2xl text-white mb-2">
                Quality Tests Daily
              </div>
              <p className="text-[13px] text-[#f2f0ed]/80 leading-relaxed mb-6">
                Each lot is tested for SNF levels, fatty acid profiles, somatic cell counts, and zero presence of chemical preservatives or external water dilution.
              </p>
              <button
                onClick={onOpenLabReport}
                className="inline-flex items-center gap-2 bg-[#ffdf99] text-[#251a00] hover:bg-[#ecc15a] text-[13px] font-bold px-5 py-2.5 rounded-full transition-all duration-200 shadow-md"
              >
                <span className="material-symbols-outlined text-[18px]">verified</span>
                <span>View Today&apos;s Lab Report</span>
              </button>
            </div>

            {/* Badges Grid */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-[#fbf9f6] border border-[#042217]/5 shadow-sm">
                <span className="material-symbols-outlined text-[20px] text-[#3d674f]">verified</span>
                <span className="text-[13px] font-semibold text-[#1b1c1a]">100% Purity Verified</span>
              </div>
              <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-[#fbf9f6] border border-[#042217]/5 shadow-sm">
                <span className="material-symbols-outlined text-[20px] text-[#3d674f]">ac_unit</span>
                <span className="text-[13px] font-semibold text-[#1b1c1a]">&lt;4°C Cold Chain</span>
              </div>
              <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-[#fbf9f6] border border-[#042217]/5 shadow-sm">
                <span className="material-symbols-outlined text-[20px] text-[#3d674f]">block</span>
                <span className="text-[13px] font-semibold text-[#1b1c1a]">No Preservatives</span>
              </div>
              <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-[#fbf9f6] border border-[#042217]/5 shadow-sm">
                <span className="material-symbols-outlined text-[20px] text-[#3d674f]">description</span>
                <span className="text-[13px] font-semibold text-[#1b1c1a]">Batch Certificates</span>
              </div>
            </div>
          </div>

          {/* Testing Categories Panels */}
          <div className="lg:col-span-7 space-y-5">
            {/* Item 1 */}
            <div className="bg-[#fbf9f6] rounded-2xl p-6 sm:p-7 shadow-sm border border-[#042217]/5 hover:border-[#3d674f]/30 transition-all">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <h3 className="font-display-hero text-[19px] text-[#042217] font-bold flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[#3d674f] text-[24px]">science</span>
                  Purity &amp; Adulteration Screening
                </h3>
                <span className="px-3 py-1 rounded-full bg-[#bcebcc] text-[#042217] text-[11px] font-bold uppercase tracking-wider">
                  100% Negative
                </span>
              </div>
              <p className="text-[14px] text-[#424844] mb-4 leading-relaxed">
                Tested for zero urea, zero starch, zero detergent, zero maltodextrin, and zero synthetic fat enhancers.
              </p>
              <div className="w-full bg-[#eae8e5] rounded-full h-2 overflow-hidden">
                <div className="bg-[#3d674f] h-2 rounded-full w-full"></div>
              </div>
              <div className="mt-2 text-right text-[11px] font-bold text-[#3d674f]">
                Status: Passed · Cryoscope 0.00% Water
              </div>
            </div>

            {/* Item 2 */}
            <div className="bg-[#fbf9f6] rounded-2xl p-6 sm:p-7 shadow-sm border border-[#042217]/5 hover:border-[#3d674f]/30 transition-all">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <h3 className="font-display-hero text-[19px] text-[#042217] font-bold flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[#3d674f] text-[24px]">water_bottle</span>
                  Natural Composition &amp; Cream
                </h3>
                <span className="px-3 py-1 rounded-full bg-[#bcebcc] text-[#042217] text-[11px] font-bold uppercase tracking-wider">
                  3.8% – 4.2% Fat
                </span>
              </div>
              <p className="text-[14px] text-[#424844] mb-4 leading-relaxed">
                Full cream milk retaining its natural fat globules and optimal solids-not-fat (SNF 8.5%+) without artificial homogenization.
              </p>
              <div className="w-full bg-[#eae8e5] rounded-full h-2 overflow-hidden">
                <div className="bg-[#3d674f] h-2 rounded-full w-full"></div>
              </div>
              <div className="mt-2 text-right text-[11px] font-bold text-[#3d674f]">
                Status: Verified · Naturally Rich Malai Layer
              </div>
            </div>

            {/* Item 3 */}
            <div className="bg-[#fbf9f6] rounded-2xl p-6 sm:p-7 shadow-sm border border-[#042217]/5 hover:border-[#3d674f]/30 transition-all">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <h3 className="font-display-hero text-[19px] text-[#042217] font-bold flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[#3d674f] text-[24px]">health_and_safety</span>
                  Microbiological Safety &amp; Temperature
                </h3>
                <span className="px-3 py-1 rounded-full bg-[#bcebcc] text-[#042217] text-[11px] font-bold uppercase tracking-wider">
                  Safe &amp; Chilled (3.6°C)
                </span>
              </div>
              <p className="text-[14px] text-[#424844] mb-4 leading-relaxed">
                Immediate chill within 45 minutes of milking to 4°C suppresses bacterial growth, ensuring natural shelf freshness for your family.
              </p>
              <div className="w-full bg-[#eae8e5] rounded-full h-2 overflow-hidden">
                <div className="bg-[#3d674f] h-2 rounded-full w-full"></div>
              </div>
              <div className="mt-2 text-right text-[11px] font-bold text-[#3d674f]">
                Status: Dispatch Ready · Rapid Chilled
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
