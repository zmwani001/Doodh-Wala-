import React from 'react';

export const ValleyHeritage: React.FC = () => {
  return (
    <section className="py-24 bg-[#fbf9f6] px-6 lg:px-12 max-w-7xl mx-auto w-full" id="story">
      <div className="rounded-3xl bg-[#efeeeb] p-8 lg:p-16 relative overflow-hidden border border-[#042217]/10 shadow-sm">
        {/* Subtle decorative background watermarks */}
        <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-[#bcebcc]/20 blur-3xl pointer-events-none"></div>

        <div className="max-w-3xl space-y-6 relative z-10">
          <span className="text-[12px] text-[#3d674f] uppercase tracking-widest font-bold">
            Valley Heritage
          </span>

          <h2 className="font-display-hero text-3xl sm:text-4xl text-[#042217] tracking-tight font-semibold">
            Born in Kashmir. Made for Your Morning.
          </h2>

          <p className="text-[17px] sm:text-[18px] text-[#1b1c1a] leading-relaxed font-normal">
            Morning in Kashmir has a cadence unlike anywhere on earth. The morning call echoing over misty pine-forested slopes, the first warm embers in the samovar, the aroma of fresh girda from the local kandur, and a cup of rich, fragrant nun-chai or cardamom milk shared with three generations around the dastarkhwan.
          </p>

          <p className="text-[15px] sm:text-[16px] text-[#424844] leading-relaxed">
            Meadow Milk was born out of a desire to revive that unadulterated agrarian heritage. We believe dairy shouldn’t be an industrial secret wrapped in synthetic packaging. By maintaining our cows in Kreeri on natural alpine slopes and delivering without middleman delays, we keep our valley’s families healthy and our rural farmland thriving.
          </p>

          <div className="pt-6 flex flex-wrap items-center gap-6 sm:gap-10 border-t border-[#042217]/10">
            <div className="flex flex-col">
              <span className="font-display-hero text-2xl font-bold text-[#042217]">100%</span>
              <span className="text-[13px] text-[#424844] font-medium">Kashmir Sourced &amp; Run</span>
            </div>

            <div className="w-px h-10 bg-[#c2c8c2] hidden sm:block"></div>

            <div className="flex flex-col">
              <span className="font-display-hero text-2xl font-bold text-[#042217]">Kreeri</span>
              <span className="text-[13px] text-[#424844] font-medium">Baramulla Foothills (1,600m)</span>
            </div>

            <div className="w-px h-10 bg-[#c2c8c2] hidden sm:block"></div>

            <div className="flex flex-col">
              <span className="font-display-hero text-2xl font-bold text-[#042217]">0 hrs</span>
              <span className="text-[13px] text-[#424844] font-medium">Inter-state Holding Depots</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
