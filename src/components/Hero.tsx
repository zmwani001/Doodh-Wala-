import React from 'react';

interface HeroProps {
  onOpenSubscribe: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenSubscribe }) => {
  return (
    <section
      id="hero"
      className="relative flex min-h-[560px] items-center overflow-hidden bg-[#233d2d] text-white sm:min-h-[600px] lg:min-h-[640px]"
    >
      <img
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWJ2fROuQ1RtzbANxtG5-Aj8hoUEuCaZHYuf6agNh8ls6ezksgVApL4AWwTqUh_5qE5cXlfZHMbnpRyt_egaya6mNqXU70GgGCYaqUKfDvvjziDT-ZpchftsPxd6jldVZMoJgeQUWAqsecEQokZeLtC2cHfjwihTFqvzllQ2KeNlBkw7UNSAiYtcgnMw1TcoaY09EtHjFsY4yFavqAIwe_VACQbbbMLBt5KE3ZghaIOi23PIIq7QI"
        alt="A pastoral Kashmir landscape"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#16291f]/90 via-[#16291f]/70 to-[#16291f]/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#16291f]/45 via-transparent to-[#16291f]/10" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <a
          href="https://www.google.com/maps/search/?api=1&query=Kreeri%2C%20Baramulla%2C%20Kashmir"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-5 inline-flex items-center gap-2 border-b border-white/55 pb-1 text-[13px] font-medium text-white/90 transition-colors hover:text-white"
          aria-label="Open Kreeri, Baramulla, Kashmir in Google Maps"
          title="Open in Google Maps"
        >
          <span className="material-symbols-outlined text-[17px]" aria-hidden="true">location_on</span>
          <span>Kreeri, Baramulla, Kashmir</span>
        </a>

        <div className="max-w-3xl">
          <h1 className="font-display-hero text-[42px] font-semibold leading-[1.08] text-white sm:text-[56px] lg:text-[72px]">
            Purely from Kashmir.
            <span className="mt-1 block text-[#f1dfb8]">Freshly to your Home.</span>
          </h1>
          <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-white/90 sm:text-[18px]">
            Cow milk from Kreeri, Baramulla, with daily, alternate-day and monthly delivery plans.
          </p>
        </div>

        <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <button
            onClick={onOpenSubscribe}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#f1dfb8] px-6 py-3 text-[15px] font-bold text-[#1c3022] transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <span>Order Fresh Milk</span>
            <span className="material-symbols-outlined text-[19px]" aria-hidden="true">arrow_forward</span>
          </button>
        </div>
      </div>
    </section>
  );
};
