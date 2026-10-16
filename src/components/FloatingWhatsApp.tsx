import React from 'react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href="https://wa.me/919906000000"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact Meadow Milk on WhatsApp"
      title="Contact Meadow Milk on WhatsApp"
      className="fixed bottom-4 right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#38553d] text-white shadow-md transition-colors hover:bg-[#233d2d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#233d2d] sm:bottom-6 sm:right-6 sm:h-auto sm:w-auto sm:gap-2 sm:rounded-md sm:px-4 sm:py-3"
    >
      <span className="material-symbols-outlined text-[22px]" aria-hidden="true">chat</span>
      <span className="hidden text-[13px] font-semibold sm:inline">WhatsApp</span>
    </a>
  );
};
