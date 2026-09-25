import React, { useState } from 'react';

const FAQS = [
  {
    q: 'Is Meadow Milk 100% pure cow milk?',
    a: 'Yes, exclusively. We never mix buffalo milk or buy unverified milk from external collection middlemen. Every bottle comes directly from our own carefully reared, healthy dairy cows in Kreeri, Baramulla.',
  },
  {
    q: 'Do you add water, preservatives, or milk powder?',
    a: 'Never. We operate under a strict zero-adulteration mandate. Our milk has zero added water, zero skim powder reconstitution, and zero synthetic preservatives or chemicals. What comes from the cow is immediately chilled and delivered fresh.',
  },
  {
    q: 'Where is your farm located? Can customers visit?',
    a: 'Our dairy estate is situated in the scenic pastoral alpine belt of Kreeri, Baramulla, Kashmir at 1,600 meters elevation. We actively welcome subscribers for scheduled weekend visits so families and children can see where their daily morning milk originates.',
  },
  {
    q: 'How is the milk tested every day?',
    a: 'Each morning batch undergoes over 140 daily laboratory checks verifying fat content, solids-not-fat (SNF), acidity, temperature (<4°C), and testing for absent adulterants like urea, starch, detergents, or water before clearance for morning dispatch.',
  },
  {
    q: 'What time will the milk reach my house?',
    a: 'Our milk is delivered quietly between 5:00 AM and 7:30 AM every day, 7 days a week. Deliveries are placed in your doorstep delivery bag or porch cooler box so your morning tea and routine remain undisturbed.',
  },
  {
    q: 'Can I pause my subscription when traveling out of town?',
    a: 'Yes, easily! Send a simple WhatsApp message before 8:00 PM the evening prior, or use our digital Delivery Hub in this app, and your morning milk will be paused or rescheduled with zero fees or lost credits.',
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [search, setSearch] = useState('');

  const filteredFaqs = FAQS.filter(
    (item) =>
      item.q.toLowerCase().includes(search.toLowerCase()) ||
      item.a.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="py-24 bg-[#fbf9f6] px-6 lg:px-12 max-w-7xl mx-auto w-full" id="faq">
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <span className="text-[12px] text-[#3d674f] uppercase tracking-widest font-bold">
          Answers to Common Questions
        </span>
        <h2 className="font-display-hero text-3xl sm:text-4xl text-[#042217] tracking-tight font-semibold">
          Frequently Asked Questions
        </h2>
        <p className="text-[15px] sm:text-[16px] text-[#424844]">
          Everything you need to know about our daily milk, Kreeri farm sourcing, and subscription flexibility.
        </p>

        {/* Quick Search */}
        <div className="pt-4 max-w-md mx-auto">
          <div className="relative">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search questions (e.g. pause, delivery time, test)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-[#f5f3f0] border border-[#042217]/10 text-[14px] text-[#1b1c1a] focus:outline-none focus:ring-2 focus:ring-[#3d674f]"
            />
            <span className="material-symbols-outlined text-[20px] text-[#424844] absolute left-3 top-3">
              search
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {filteredFaqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="bg-[#f5f3f0] rounded-2xl p-6 transition-all border border-[#042217]/5"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-center justify-between text-left font-display-hero text-[18px] sm:text-[20px] text-[#042217] font-bold focus:outline-none"
              >
                <span>{faq.q}</span>
                <span
                  className={`material-symbols-outlined text-[24px] text-[#3d674f] transition-transform duration-300 shrink-0 ml-4 ${
                    isOpen ? 'rotate-180 text-[#042217]' : ''
                  }`}
                >
                  expand_more
                </span>
              </button>

              {isOpen && (
                <div className="mt-4 pt-3 border-t border-[#042217]/10 text-[15px] text-[#424844] leading-relaxed transition-all">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
