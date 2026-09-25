import React from 'react';

const BENEFITS = [
  {
    icon: 'water_bottle',
    title: '100% Pure Cow Milk',
    description: 'Fresh, velvety milk milked exclusively from our own healthy, indigenous and cross-bred cows in Kreeri.',
    tag: 'Single-source farm origin',
  },
  {
    icon: 'opacity',
    title: 'No Added Powder or Water',
    description: 'Nothing unnecessary is added to our milk. No skim powder reconstitution, no dilution, and zero artificial solids.',
    tag: 'Natural fat & natural cream',
  },
  {
    icon: 'eco',
    title: 'Chemical Free',
    description: 'Naturally produced with humane animal stewardship and strictly zero preservatives, hormones, or chemical additives.',
    tag: 'Clean alpine pasture fed',
  },
  {
    icon: 'spa',
    title: 'Easy to Digest',
    description: 'Gentle on the stomach and light yet nourishing, delivering everyday wholesome nutrition with intact bio-enzymes.',
    tag: 'Unprocessed natural proteins',
  },
  {
    icon: 'biotech',
    title: '140+ Quality Tests Daily',
    description: 'Stringent safety and purity checks performed in our daily protocol to guarantee uncompromising freshness every batch.',
    tag: 'Transparent lab certification',
  },
  {
    icon: 'wb_twilight',
    title: 'Assured Morning Delivery',
    description: 'Fresh milk delivered quietly to your doorstep between 5:00 AM and 7:30 AM before the city awakes for morning chai.',
    tag: 'Punctual insulated delivery',
  },
  {
    icon: 'family_restroom',
    title: 'Ideal for Kids & Elderly',
    description: 'Rich in natural bio-available calcium, vitamins A & D, and wholesome fats essential for growing bones and elder vitality.',
    tag: 'Complete family wellness',
  },
  {
    icon: 'verified',
    title: 'Quality Guarantee',
    description: 'A dedicated quality-assurance seal backing every single glass bottle. If you are not satisfied, your morning bottle is on us.',
    tag: 'Zero-risk guarantee',
  },
  {
    icon: 'event_repeat',
    title: 'Subscription Convenience',
    description: 'Set your routine once and pause or modify anytime via WhatsApp or portal without lock-ins or cumbersome cancellations.',
    tag: 'Effortless WhatsApp control',
  },
];

export const TrustBenefits: React.FC = () => {
  return (
    <section className="py-24 bg-[#fbf9f6] px-6 lg:px-12 max-w-7xl mx-auto w-full" id="benefits">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <span className="text-[12px] text-[#3d674f] uppercase tracking-widest font-bold">
          Purity in Every Pour
        </span>
        <h2 className="font-display-hero text-3xl sm:text-4xl text-[#042217] tracking-tight font-semibold">
          Why Families in Kashmir Choose Meadow Milk
        </h2>
        <p className="text-[15px] sm:text-[16px] text-[#424844] leading-relaxed">
          Raised on virgin alpine clover and natural spring water in Kreeri, our dairy adheres to artisanal care free from industrial shortcuts.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {BENEFITS.map((item, index) => (
          <div
            key={index}
            className="bg-[#f5f3f0] hover:bg-[#efeeeb] rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 shadow-sm flex flex-col justify-between border border-[#042217]/5"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#bcebcc] text-[#416b53] flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[28px]">{item.icon}</span>
              </div>
              <h3 className="font-display-hero text-[22px] font-semibold text-[#042217] mb-2 leading-snug">
                {item.title}
              </h3>
              <p className="text-[14px] sm:text-[15px] text-[#424844] leading-relaxed">
                {item.description}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#042217]/10 text-[#3d674f] text-[12px] font-semibold flex items-center gap-1.5 uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3d674f]"></span>
              <span>{item.tag}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
