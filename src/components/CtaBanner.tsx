import React from 'react';

interface CtaBannerProps {
  onOpenSubscribe: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenSubscribe }) => {
  return (
    <section className="relative py-24 bg-[#042217] text-white overflow-hidden">
      {/* Background with mountain mist */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-30 scale-105 transition-transform duration-1000"
        style={{
          backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCJMKujWgo968hqyyE8mrQ-qSbZ69OCGQ_ImZfI2HdhOjH2bazg50IDLwgg_6MERhnf3WMwBYcjHBxPfS-A1COn5ytp90TCQjxDS0SKA1XriHr7g4ULj5_GQiUEmFfRmiCCR6Ssn6AvJR-9zus951GGfAb7Bb8SbXxC0LZnkCDw07zCxd3Y_YzrJ6ls2Dpcd8Na5mDSIcfp4hX8-Yjd7G_wlNjp1mwNJIsvVaFvF_MLOL41EY8-UQY')`,
        }}
      ></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center space-y-6">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 text-[#ffdf99] text-[12px] font-bold uppercase tracking-wider border border-white/10">
          Morning Purity Awaits
        </span>

        <h2 className="font-display-hero text-4xl sm:text-5xl lg:text-6xl text-white font-bold tracking-tight">
          Start Your Morning With Meadow Milk
        </h2>

        <p className="text-[17px] sm:text-[18px] text-[#f2f0ed]/90 max-w-2xl mx-auto leading-relaxed">
          Pure cow milk from our farm in Kreeri, delivered fresh to your home every single morning. Taste the real difference tomorrow.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenSubscribe}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#ffdf99] text-[#251a00] hover:bg-[#ecc15a] active:scale-[0.98] text-[15px] font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-xl hover:-translate-y-0.5"
          >
            <span>Subscribe Now</span>
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </button>

          <a
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/20 hover:bg-white/30 text-white text-[15px] font-semibold px-7 py-4 rounded-full transition-all duration-200 border border-white/15"
            href="https://wa.me/919906000000?text=Hi%2C%20I%20want%20to%20inquire%20about%20Meadow%20Milk%20daily%20delivery%20in%20Kashmir."
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="material-symbols-outlined text-[22px] text-[#ffdf99]">chat</span>
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
