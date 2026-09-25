import React, { useState } from 'react';

export const FloatingWhatsApp: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Quick Menu Popover */}
      {showMenu && (
        <div className="bg-[#fbf9f6] rounded-2xl p-4 shadow-2xl border border-[#042217]/10 w-72 mb-2 space-y-2 text-[#1b1c1a] animate-fadeIn">
          <div className="flex items-center justify-between pb-2 border-b border-[#042217]/10">
            <div className="text-[13px] font-bold text-[#042217]">Meadow Milk Dispatch Desk</div>
            <button
              onClick={() => setShowMenu(false)}
              className="text-[#424844] hover:text-[#042217]"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>
          <p className="text-[12px] text-[#424844]">
            Chat live with our morning delivery coordinator in Baramulla:
          </p>
          <div className="space-y-1.5 pt-1">
            <a
              href="https://wa.me/919906000000?text=Hello%2C%20I%20want%20to%20start%20a%20daily%20milk%20subscription%20in%20Baramulla."
              target="_blank"
              rel="noopener noreferrer"
              className="block p-2 rounded-xl bg-[#f5f3f0] hover:bg-[#bcebcc]/50 text-[12px] font-semibold text-[#042217] transition-colors"
            >
              🥛 Start Morning Subscription
            </a>
            <a
              href="https://wa.me/919906000000?text=Hello%2C%20please%20pause%20my%20milk%20delivery%20for%20tomorrow."
              target="_blank"
              rel="noopener noreferrer"
              className="block p-2 rounded-xl bg-[#f5f3f0] hover:bg-[#bcebcc]/50 text-[12px] font-semibold text-[#042217] transition-colors"
            >
              ⏸️ Pause Tomorrow&apos;s Milk
            </a>
            <a
              href="https://wa.me/919906000000?text=Hello%2C%20does%20Meadow%20Milk%20deliver%20in%20my%20area%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-2 rounded-xl bg-[#f5f3f0] hover:bg-[#bcebcc]/50 text-[12px] font-semibold text-[#042217] transition-colors"
            >
              📍 Check Delivery In My Locality
            </a>
          </div>
        </div>
      )}

      {/* Main WhatsApp Button */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setShowMenu(!showMenu)}
          aria-label="Quick WhatsApp Options"
          className="w-10 h-10 rounded-full bg-[#1b382b] text-white flex items-center justify-center shadow-lg hover:bg-[#042217] transition-all hover:scale-105"
        >
          <span className="material-symbols-outlined text-[20px]">
            {showMenu ? 'keyboard_arrow_down' : 'more_vert'}
          </span>
        </button>

        <a
          href="https://wa.me/919906000000"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Connect on WhatsApp"
          className="flex items-center gap-2 bg-[#3d674f] text-white px-4 py-3 rounded-full shadow-[0_12px_32px_-8px_rgba(20,36,28,0.25)] hover:bg-[#1b382b] transition-all hover:scale-105"
        >
          <span className="material-symbols-outlined text-[24px]">chat</span>
          <span className="text-[14px] font-bold hidden sm:inline">WhatsApp Support</span>
        </a>
      </div>
    </div>
  );
};
