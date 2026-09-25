import React from 'react';

interface FarmTourModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FarmTourModal: React.FC<FarmTourModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-[#fbf9f6] rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#042217]/10 my-8">
        <div className="flex items-center justify-between pb-4 border-b border-[#042217]/10 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#042217] text-[#ffdf99] flex items-center justify-center">
              <span className="material-symbols-outlined text-[24px]">terrain</span>
            </div>
            <div>
              <span className="text-[11px] text-[#3d674f] uppercase font-bold tracking-widest">
                Kreeri, Baramulla, Kashmir
              </span>
              <h3 className="font-display-hero text-2xl font-bold text-[#042217]">
                Kreeri Estate &amp; Farm Sanctuary
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#efeeeb] hover:bg-[#eae8e5] text-[#042217] flex items-center justify-center transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Hero image of the farm */}
        <div className="rounded-2xl overflow-hidden mb-6 h-64 relative shadow-sm border border-[#042217]/10">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWJ2fROuQ1RtzbANxtG5-Aj8hoUEuCaZHYuf6agNh8ls6ezksgVApL4AWwTqUh_5qE5cXlfZHMbnpRyt_egaya6mNqXU70GgGCYaqUKfDvvjziDT-ZpchftsPxd6jldVZMoJgeQUWAqsecEQokZeLtC2cHfjwihTFqvzllQ2KeNlBkw7UNSAiYtcgnMw1TcoaY09EtHjFsY4yFavqAIwe_VACQbbbMLBt5KE3ZghaIOi23PIIq7QI"
            alt="Kreeri mountain pastures"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-5 text-white">
            <div>
              <div className="text-[12px] text-[#ffdf99] font-bold uppercase tracking-wider">
                Single Estate Pasture
              </div>
              <div className="text-[18px] font-bold">1,600m Himalayan Altitude · Baramulla District</div>
            </div>
          </div>
        </div>

        {/* Estate Specs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 text-center">
          <div className="p-4 rounded-xl bg-[#f5f3f0] border border-[#042217]/5">
            <span className="text-[11px] text-[#424844] uppercase font-bold block mb-1">Estate Location</span>
            <span className="text-[15px] font-bold text-[#042217]">Kreeri Belt</span>
            <span className="text-[11px] text-[#3d674f] block mt-0.5">Baramulla 193198</span>
          </div>

          <div className="p-4 rounded-xl bg-[#f5f3f0] border border-[#042217]/5">
            <span className="text-[11px] text-[#424844] uppercase font-bold block mb-1">Drinking Water</span>
            <span className="text-[15px] font-bold text-[#042217]">Natural Spring</span>
            <span className="text-[11px] text-[#3d674f] block mt-0.5">Glacial Himalayan Runoff</span>
          </div>

          <div className="p-4 rounded-xl bg-[#f5f3f0] border border-[#042217]/5">
            <span className="text-[11px] text-[#424844] uppercase font-bold block mb-1">Pasture Grazing</span>
            <span className="text-[15px] font-bold text-[#042217]">Alpine Clover</span>
            <span className="text-[11px] text-[#3d674f] block mt-0.5">100% Pesticide Free</span>
          </div>
        </div>

        {/* Narrative & Visitor Policy */}
        <div className="space-y-3 text-[14px] text-[#424844] leading-relaxed mb-6 bg-[#f5f3f0] p-5 rounded-2xl border border-[#042217]/5">
          <h4 className="text-[15px] font-bold text-[#042217] flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px] text-[#3d674f]">group</span>
            Subscriber Weekend Visits
          </h4>
          <p>
            We believe that every family has the right to see exactly where their daily milk comes from. We host subscriber families every Saturday and Sunday morning (9:00 AM – 1:00 PM).
          </p>
          <p className="text-[13px] text-[#1b1c1a]">
            • Children can feed our dairy calves and watch the computerized stainless milking line.
            <br />
            • Enjoy complimentary samovar nun-chai brewed with fresh morning milk on our lawn.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
          <a
            href="https://wa.me/919906000000?text=Hello%20Meadow%20Milk%2C%20I%20would%20like%20to%20schedule%20a%20family%20visit%20to%20your%20Kreeri%20farm."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#042217] text-white hover:bg-[#1b382b] text-[13px] font-bold px-6 py-2.5 rounded-full shadow-md"
          >
            <span className="material-symbols-outlined text-[18px] text-[#ffdf99]">calendar_today</span>
            <span>Request Weekend Visit on WhatsApp</span>
          </a>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#efeeeb] text-[#042217] text-[13px] font-bold hover:bg-[#eae8e5]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
