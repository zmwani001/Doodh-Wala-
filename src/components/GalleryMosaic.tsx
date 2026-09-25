import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/mockData';

export const GalleryMosaic: React.FC = () => {
  const [activeItem, setActiveItem] = useState<(typeof GALLERY_ITEMS)[0] | null>(null);

  return (
    <section className="py-24 bg-[#fbf9f6] px-6 lg:px-12 max-w-7xl mx-auto w-full" id="gallery">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <span className="text-[12px] text-[#3d674f] uppercase tracking-widest font-bold">
          Life on the Estate
        </span>
        <h2 className="font-display-hero text-3xl sm:text-4xl text-[#042217] tracking-tight font-semibold">
          Farm Moments &amp; Artisanal Craft
        </h2>
        <p className="text-[15px] sm:text-[16px] text-[#424844]">
          Every morning begins before first light in Kreeri. Here is an authentic glimpse behind our pastures. Click any moment to inspect.
        </p>
      </div>

      {/* Gallery Bento Mosaic */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {GALLERY_ITEMS.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveItem(item)}
            className="rounded-3xl overflow-hidden shadow-sm h-80 relative group cursor-pointer border border-[#042217]/10"
          >
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              alt={item.title}
              src={item.imgUrl}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#042217]/85 via-[#042217]/20 to-transparent flex items-end p-6 transition-opacity">
              <div className="text-white space-y-1">
                <span className="text-[11px] text-[#ffdf99] uppercase font-bold tracking-wider">
                  {item.subtitle}
                </span>
                <h4 className="font-display-hero text-[20px] font-bold text-white">
                  {item.title}
                </h4>
              </div>
            </div>
            <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="material-symbols-outlined text-[20px]">zoom_in</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          onClick={() => setActiveItem(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-8"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#fbf9f6] rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-white/20"
          >
            <div className="relative h-96 w-full overflow-hidden">
              <img
                src={activeItem.imgUrl}
                alt={activeItem.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
              >
                <span className="material-symbols-outlined text-[22px]">close</span>
              </button>
            </div>
            <div className="p-6 sm:p-8 space-y-3">
              <span className="text-[12px] text-[#3d674f] font-bold uppercase tracking-wider">
                {activeItem.subtitle}
              </span>
              <h3 className="font-display-hero text-2xl font-bold text-[#042217]">
                {activeItem.title}
              </h3>
              <p className="text-[15px] text-[#424844] leading-relaxed">
                {activeItem.description}
              </p>
              <div className="pt-3 flex items-center justify-between border-t border-[#042217]/10 text-[13px] text-[#3d674f]">
                <span className="flex items-center gap-1.5 font-bold">
                  <span className="material-symbols-outlined text-[18px]">location_on</span>
                  Kreeri Farm Estate, Baramulla
                </span>
                <button
                  onClick={() => setActiveItem(null)}
                  className="px-4 py-2 rounded-full bg-[#efeeeb] text-[#042217] font-bold text-[13px] hover:bg-[#eae8e5]"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
