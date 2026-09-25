import React from 'react';
import { TODAY_BATCH_REPORT } from '../data/mockData';

interface LabReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LabReportModal: React.FC<LabReportModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-[#fbf9f6] rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#042217]/10 my-8">
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
                Daily Batch Purity Certificate
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
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-[#f5f3f0] border border-[#042217]/5 mb-6 text-[12px]">
          <div>
            <div className="text-[#424844]">Batch Reference</div>
            <div className="font-bold text-[#042217] font-mono">{TODAY_BATCH_REPORT.batchId}</div>
          </div>
          <div>
            <div className="text-[#424844]">Harvest Date</div>
            <div className="font-bold text-[#042217]">{TODAY_BATCH_REPORT.date}</div>
          </div>
          <div>
            <div className="text-[#424844]">Milking Protocol</div>
            <div className="font-bold text-[#042217]">04:30 AM Automated</div>
          </div>
          <div>
            <div className="text-[#424844]">Dispatch Temp</div>
            <div className="font-bold text-[#3d674f]">{TODAY_BATCH_REPORT.temperatureAtDispatch}</div>
          </div>
        </div>

        {/* Core Metrics Highlight */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          <div className="p-4 rounded-xl bg-white border border-[#042217]/10 text-center">
            <span className="text-[11px] text-[#424844] uppercase font-bold block mb-1">Natural Whole Fat</span>
            <span className="font-display-hero text-2xl font-bold text-[#042217]">4.15%</span>
            <span className="text-[11px] text-[#3d674f] block mt-0.5">Optimal Malai Layer</span>
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#042217]/10 text-center">
            <span className="text-[11px] text-[#424844] uppercase font-bold block mb-1">Solids-Not-Fat (SNF)</span>
            <span className="font-display-hero text-2xl font-bold text-[#042217]">8.82%</span>
            <span className="text-[11px] text-[#3d674f] block mt-0.5">Exceeds 8.5% Standard</span>
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#042217]/10 text-center">
            <span className="text-[11px] text-[#424844] uppercase font-bold block mb-1">Added Water</span>
            <span className="font-display-hero text-2xl font-bold text-[#3d674f]">0.00%</span>
            <span className="text-[11px] text-[#3d674f] block mt-0.5">Cryoscope Freezing Valid</span>
          </div>
        </div>

        {/* Full Parameter Table */}
        <div className="border border-[#042217]/10 rounded-2xl overflow-hidden mb-6">
          <div className="bg-[#efeeeb] px-4 py-2.5 text-[12px] font-bold text-[#042217] uppercase tracking-wider flex justify-between">
            <span>Test Parameter</span>
            <span>Observed Reading / Result</span>
          </div>
          <div className="divide-y divide-[#042217]/5 bg-white text-[13px]">
            {TODAY_BATCH_REPORT.parameters.map((param, i) => (
              <div key={i} className="px-4 py-2.5 flex items-center justify-between hover:bg-[#fbf9f6]">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-[#3d674f]">check_circle</span>
                  <span className="font-medium text-[#1b1c1a]">{param.name}</span>
                </div>
                <div className="text-right">
                  <span className="font-bold text-[#042217]">{param.result}</span>
                  <span className="text-[11px] text-[#424844] block font-mono">Benchmark: {param.expected}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chemist Sign-Off */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-[#f5f3f0] border border-[#042217]/5 mb-6 text-[12px]">
          <div>
            <div className="text-[#424844]">Certified &amp; Approved by:</div>
            <div className="font-bold text-[#042217] text-[13px]">{TODAY_BATCH_REPORT.chemistName}</div>
            <div className="text-[#3d674f]">Lead Technologist, Kreeri Dairy Testing Center</div>
          </div>
          <div className="flex items-center gap-2 text-[#3d674f] font-bold text-[12px] bg-white px-3 py-1.5 rounded-full border border-[#3d674f]/20">
            <span className="material-symbols-outlined text-[18px]">verified_user</span>
            <span>Digitally Verified &amp; Cleared for Morning Transit</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end gap-3">
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
