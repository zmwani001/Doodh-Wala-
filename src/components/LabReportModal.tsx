import React from 'react';
import { getTodayDemoReport } from '../data/mockData';

interface LabReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LabReportModal: React.FC<LabReportModalProps> = ({ isOpen, onClose }) => {
  const report = getTodayDemoReport();

  if (!isOpen) return null;

  return (
    <div className="lab-report-overlay fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4">
      <div className="lab-report-content bg-[#fbf9f6] rounded-3xl max-w-2xl w-full max-h-[calc(100dvh-2rem)] overflow-y-auto overscroll-contain p-5 sm:p-8 shadow-2xl border border-[#042217]/10">
        {/* Certificate Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#042217]/10 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#042217] text-[#ffdf99] flex items-center justify-center">
              <span className="material-symbols-outlined text-[24px]">verified</span>
            </div>
            <div>
              <span className="text-[11px] text-[#3d674f] uppercase font-bold tracking-widest">
                Kreeri Dairy Estate QC Laboratory
              </span>
              <h3 className="font-display-hero text-2xl font-bold text-[#042217]">
                Illustrative Daily Batch Report
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

        {/* Certificate Meta Box */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-2xl bg-[#f5f3f0] border border-[#042217]/5 mb-6 text-[12px]">
          <div>
            <div className="text-[#424844]">Sample Batch Reference</div>
            <div className="font-bold text-[#042217] font-mono">{report.batchId}</div>
          </div>
          <div>
            <div className="text-[#424844]">Sample Report Date</div>
            <div className="font-bold text-[#042217]">{report.date}</div>
          </div>
        </div>

        <div className="mb-6 rounded-xl border border-amber-600/30 bg-amber-50 px-4 py-3 text-[13px] font-semibold leading-relaxed text-amber-950">
          DEMONSTRATION ONLY — These sample readings are generated for display and are not real test results, a laboratory certificate, or proof of product testing.
        </div>

        {/* Core Metrics Highlight */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          <div className="p-4 rounded-xl bg-white border border-[#042217]/10 text-center">
            <span className="text-[11px] text-[#424844] uppercase font-bold block mb-1">Natural Whole Fat</span>
            <span className="font-display-hero text-2xl font-bold text-[#042217]">{report.fatContent}</span>
            <span className="text-[11px] text-[#3d674f] block mt-0.5">Illustrative sample value</span>
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#042217]/10 text-center">
            <span className="text-[11px] text-[#424844] uppercase font-bold block mb-1">Solids-Not-Fat (SNF)</span>
            <span className="font-display-hero text-2xl font-bold text-[#042217]">{report.snfContent}</span>
            <span className="text-[11px] text-[#3d674f] block mt-0.5">Illustrative sample value</span>
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#042217]/10 text-center">
            <span className="text-[11px] text-[#424844] uppercase font-bold block mb-1">Sample Cold-Chain Temperature</span>
            <span className="font-display-hero text-2xl font-bold text-[#3d674f]">{report.temperatureAtDispatch}</span>
            <span className="text-[11px] text-[#3d674f] block mt-0.5">Illustrative sample value</span>
          </div>
        </div>

        <div className="border border-[#042217]/10 rounded-2xl overflow-hidden mb-6">
          <div className="bg-[#efeeeb] px-4 py-2.5 text-[12px] font-bold text-[#042217] uppercase tracking-wider">
            Parameters tested include:
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 bg-white px-4 py-4 text-[13px] text-[#1b1c1a]">
            <li className="flex items-center gap-2"><span aria-hidden="true">🥛</span><strong>Fat Content</strong></li>
            <li className="flex items-center gap-2"><span aria-hidden="true">💧</span><strong>SNF (Solids-Not-Fat)</strong></li>
            <li className="flex items-center gap-2"><span aria-hidden="true">⚖️</span><strong>Density</strong></li>
            <li className="flex items-center gap-2"><span aria-hidden="true">🍬</span><strong>Lactose</strong></li>
            <li className="flex items-center gap-2"><span aria-hidden="true">🧪</span><strong>Protein</strong></li>
            <li className="flex items-center gap-2"><span aria-hidden="true">💦</span><strong>Added Water Detection</strong></li>
            <li className="flex items-center gap-2"><span aria-hidden="true">🌡️</span><strong>Temperature</strong></li>
            <li className="flex items-center gap-2"><span aria-hidden="true">📊</span><strong>Milk Conductivity</strong></li>
          </ul>
        </div>

        {/* Chemist Sign-Off */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-[#f5f3f0] border border-[#042217]/5 mb-6 text-[12px]">
          <div>
            <div className="text-[#424844]">Reviewer:</div>
            <div className="font-bold text-[#042217] text-[13px]">{report.chemistName}</div>
            <div className="text-[#3d674f]">No actual laboratory review performed</div>
          </div>
          <div className="flex items-center gap-2 text-amber-900 font-bold text-[12px] bg-white px-3 py-1.5 rounded-full border border-amber-700/20">
            <span className="material-symbols-outlined text-[18px]">info</span>
            <span>Sample only · not verified</span>
          </div>
        </div>

        {/* Actions */}
        <div className="lab-report-actions flex items-center justify-end gap-3">
          <button
            onClick={() => window.print()}
            className="px-5 py-2.5 rounded-full bg-[#efeeeb] hover:bg-[#eae8e5] text-[#042217] text-[13px] font-bold flex items-center gap-1.5 transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">print</span>
            <span>Print Report</span>
          </button>
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-[#042217] text-white hover:bg-[#1b382b] text-[13px] font-bold shadow-md transition-colors"
          >
            Close Certificate
          </button>
        </div>
      </div>
    </div>
  );
};
