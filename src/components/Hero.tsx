import React from 'react';

interface HeroProps {
  onOpenSubscribe: () => void;
  onOpenFarmTour: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenSubscribe, onOpenFarmTour }) => {
  return (
    <section
      id="hero"
      className="relative -mt-20 pt-28 pb-20 min-h-[920px] flex items-center justify-center overflow-hidden bg-[#042217] text-white"
    >
      {/* Background Image with Scrim */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 scale-105"
        style={{
          backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDWJ2fROuQ1RtzbANxtG5-Aj8hoUEuCaZHYuf6agNh8ls6ezksgVApL4AWwTqUh_5qE5cXlfZHMbnpRyt_egaya6mNqXU70GgGCYaqUKfDvvjziDT-ZpchftsPxd6jldVZMoJgeQUWAqsecEQokZeLtC2cHfjwihTFqvzllQ2KeNlBkw7UNSAiYtcgnMw1TcoaY09EtHjFsY4yFavqAIwe_VACQbbbMLBt5KE3ZghaIOi23PIIq7QI')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#042217] via-[#042217]/65 to-[#042217]/45 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#042217]/85 via-[#042217]/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-12 w-full flex flex-col items-center lg:items-start text-center lg:text-left">
        {/* Top Origin Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md text-[#ffdf99] text-[12px] font-semibold tracking-wider uppercase mb-8 shadow-sm border border-white/10">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ecc15a] animate-ping"></span>
          <span>📍 Direct from Kreeri, Baramulla, Kashmir • Morning Milking 4:30 AM</span>
        </div>

        {/* Main Headline */}
        <div className="max-w-4xl space-y-4 mb-6">
          <h1 className="font-display-hero text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-none">
            MEADOW MILK
          </h1>
          <p className="font-display-hero text-2xl sm:text-3xl text-[#ffdf99] font-normal italic leading-snug">
            Purely from Kashmir. Freshly to your Home.
          </p>
        </div>

        {/* Narrative Hook */}
        <p className="text-[17px] sm:text-[18px] text-[#f2f0ed]/90 max-w-2xl mb-10 leading-relaxed font-normal">
          100% pure cow milk, sourced directly from our pristine alpine farm in Kreeri, Baramulla and delivered fresh to your doorstep every morning before sunrise.
        </p>

        {/* Action Row */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-12">
          <button
            onClick={onOpenSubscribe}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#ffdf99] text-[#251a00] hover:bg-[#ecc15a] active:scale-[0.98] text-[15px] font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-xl hover:-translate-y-0.5"
          >
            <span>Subscribe for Daily Milk</span>
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </button>

          <button
            onClick={onOpenFarmTour}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/15 hover:bg-white/25 active:scale-[0.98] backdrop-blur-md text-white text-[15px] font-semibold px-7 py-4 rounded-full transition-all duration-200 border border-white/15"
          >
            <span className="material-symbols-outlined text-[22px] text-[#ffdf99]">play_circle</span>
            <span>Explore Our Farm</span>
          </button>
        </div>

        {/* Trust Ribbon */}
        <div className="w-full max-w-4xl rounded-2xl bg-white/10 backdrop-blur-md p-4 mb-10 border border-white/10 shadow-sm">
          <div className="flex flex-wrap items-center justify-center lg:justify-between gap-y-3 gap-x-6 text-[#f2f0ed] text-[13px] font-semibold tracking-wide">
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[19px] text-[#ffdf99]">eco</span>
              100% Pure Cow Milk
            </span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[19px] text-[#ffdf99]">water_drop</span>
              No Added Water
            </span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[19px] text-[#ffdf99]">block</span>
              No Added Milk Powder
            </span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[19px] text-[#ffdf99]">schedule</span>
              Delivered 5:00 AM – 7:30 AM
            </span>
          </div>
        </div>

        {/* Hero Metrics Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl">
          <div className="rounded-2xl bg-[#1b382b]/85 backdrop-blur-md p-4 text-center sm:text-left flex items-center gap-4 border border-white/10 shadow-md">
            <div className="w-12 h-12 rounded-xl bg-[#042217] flex items-center justify-center shrink-0 text-[#ffdf99]">
              <span className="material-symbols-outlined text-[26px]">star</span>
            </div>
            <div>
              <div className="text-[20px] font-bold text-white leading-tight">4.9 ★ Rating</div>
              <div className="text-[13px] text-[#82a291] mt-0.5">1,200+ Kashmir families</div>
            </div>
          </div>

          <div className="rounded-2xl bg-[#1b382b]/85 backdrop-blur-md p-4 text-center sm:text-left flex items-center gap-4 border border-white/10 shadow-md">
            <div className="w-12 h-12 rounded-xl bg-[#042217] flex items-center justify-center shrink-0 text-[#bcebcc]">
              <span className="material-symbols-outlined text-[26px]">science</span>
            </div>
            <div>
              <div className="text-[20px] font-bold text-white leading-tight">140+ Tests</div>
              <div className="text-[13px] text-[#82a291] mt-0.5">Daily purity checks</div>
            </div>
          </div>

          <div className="rounded-2xl bg-[#1b382b]/85 backdrop-blur-md p-4 text-center sm:text-left flex items-center gap-4 border border-white/10 shadow-md">
            <div className="w-12 h-12 rounded-xl bg-[#042217] flex items-center justify-center shrink-0 text-[#ffdf99]">
              <span className="material-symbols-outlined text-[26px]">verified_user</span>
            </div>
            <div>
              <div className="text-[20px] font-bold text-white leading-tight">Zero Adulteration</div>
              <div className="text-[13px] text-[#82a291] mt-0.5">Strict farm guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
