import React from 'react';

const BENEFITS = [
  {
    icon: 'water_bottle',
    title: '100% Pure Cow Milk',
    description: 'Fresh, velvety milk milked exclusively from our own healthy, indigenous and cross-bred cows in Kreeri. Single-source farm origin.',
  },
  {
    icon: 'opacity',
    title: 'No Added Powder or Water',
    description: 'Nothing unnecessary is added to our milk. No skim powder reconstitution, no dilution, and zero artificial solids. Natural fat & natural cream.',
  },
  {
    icon: 'eco',
    title: 'Chemical Free',
    description: 'Naturally produced with humane animal stewardship and strictly zero preservatives, hormones, or chemical additives. Clean alpine pasture fed.',
  },
  {
    icon: 'spa',
    title: 'Easy to Digest',
    description: 'Gentle on the stomach and light yet nourishing, delivering everyday wholesome nutrition with intact bio-enzymes. Unprocessed natural proteins.',
  },
  {
    icon: 'biotech',
    title: 'Purity Ensured Through Advanced Testing',
    description: 'Stringent safety and purity checks performed in our daily protocol to guarantee uncompromising freshness every batch. Transparent lab certification.',
  },
  {
    icon: 'family_restroom',
    title: 'Subscription Convenience',
    description: 'Set your routine once and pause or modify anytime via WhatsApp or portal without lock-ins or cumbersome cancellations. Effortless WhatsApp control.',
  },
];

export const TrustBenefits: React.FC = () => {
  return (
    <section className="scroll-mt-20 border-b border-[#253a2b]/10 bg-[#fbf9f6] px-5 py-10 sm:px-8 lg:px-12" id="why">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[minmax(180px,0.8fr)_2fr] md:items-center">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#64755e]">Why Meadow Milk</span>
          <h2 className="mt-2 font-display-hero text-2xl font-semibold leading-tight text-[#233d2d]">Local milk, clear choices.</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {BENEFITS.map((item, index) => (
          <div
            key={index}
            className="flex gap-3 border-l border-[#c9d1c0] pl-4"
          >
            <span className="material-symbols-outlined mt-0.5 text-[20px] text-[#64755e]" aria-hidden="true">{item.icon}</span>
            <div>
              <h3 className="font-display-hero text-[17px] font-semibold leading-snug text-[#233d2d]">
                {item.title}
              </h3>
              <p className="mt-1 text-[13px] leading-relaxed text-[#5d6258]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};
