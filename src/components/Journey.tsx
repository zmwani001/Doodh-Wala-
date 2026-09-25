import React, { useState } from 'react';
import { JOURNEY_STEPS } from '../data/mockData';

export const Journey: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<number | null>(null);

  return (
    <section className="py-24 bg-[#f5f3f0] text-[#1b1c1a]" id="journey">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-[12px] text-[#3d674f] uppercase tracking-widest font-bold">
            Unbroken Cold Chain
          </span>
          <h2 className="font-display-hero text-3xl sm:text-4xl text-[#042217] tracking-tight font-semibold">
            From Our Farm to Your Home
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[#424844]">
            A transparent 6-step journey from morning mist in Kreeri to your breakfast table. Click any step for protocol details.
          </p>
        </div>

        {/* Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 relative">
          {JOURNEY_STEPS.map((step, idx) => (
            <div
              key={step.num}
              onClick={() => setSelectedStep(idx)}
              className={`bg-[#fbf9f6] rounded-2xl p-6 relative flex flex-col justify-between shadow-sm cursor-pointer transition-all duration-300 hover:-translate-y-1.5 border ${
                selectedStep === idx ? 'border-[#042217] ring-2 ring-[#042217]/20 shadow-md' : 'border-[#042217]/10 hover:border-[#3d674f]/40'
              }`}
            >
              <div>
                <div className="text-[#5a4300] font-display-hero text-3xl font-bold mb-3">
                  {step.num}
                </div>
                <div className="w-10 h-10 rounded-full bg-[#efeeeb] flex items-center justify-center text-[#042217] mb-4">
                  <span className="material-symbols-outlined text-[22px]">{step.icon}</span>
                </div>
                <h4 className="font-display-hero text-[18px] text-[#042217] font-bold mb-2">
                  {step.title}
                </h4>
                <p className="text-[13px] text-[#424844] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#042217]/10 text-[11px] text-[#3d674f] font-bold tracking-wider uppercase flex items-center justify-between">
                <span>{step.time}</span>
                <span className="material-symbols-outlined text-[16px] opacity-60">info</span>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Step Deep Dive Banner */}
        {selectedStep !== null && (
          <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-[#042217] text-white shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 transition-all duration-300">
            <div className="space-y-2 max-w-3xl">
              <div className="inline-flex items-center gap-2 text-[#ffdf99] text-[12px] font-bold uppercase tracking-wider">
                <span>Step {JOURNEY_STEPS[selectedStep].num} Protocol</span>
                <span>•</span>
                <span>{JOURNEY_STEPS[selectedStep].time}</span>
              </div>
              <h3 className="font-display-hero text-2xl font-bold text-white">
                {JOURNEY_STEPS[selectedStep].title}: Farm Standard
              </h3>
              <p className="text-[15px] text-[#f2f0ed]/90 leading-relaxed">
                {JOURNEY_STEPS[selectedStep].details}
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-3">
              <button
                onClick={() => setSelectedStep(null)}
                className="px-5 py-2.5 rounded-full bg-white/15 hover:bg-white/25 text-white text-[13px] font-semibold transition-colors"
              >
                Close View
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
