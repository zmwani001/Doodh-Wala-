import React, { useState } from 'react';

interface DeliveryHubModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DeliveryHubModal: React.FC<DeliveryHubModalProps> = ({ isOpen, onClose }) => {
  const [isPausedTomorrow, setIsPausedTomorrow] = useState(false);
  const [extraLitres, setExtraLitres] = useState(0);
  const [toastMsg, setToastMsg] = useState('');

  if (!isOpen) return null;

  const showNotification = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(''), 3000);
  };

  const handleTogglePause = () => {
    setIsPausedTomorrow(!isPausedTomorrow);
    showNotification(
      !isPausedTomorrow
        ? "Tomorrow's morning delivery has been paused. No charge will be applied."
        : "Tomorrow's morning delivery has been resumed! Delivery by 6:30 AM."
    );
  };

  const handleAddExtra = () => {
    setExtraLitres((prev) => prev + 1);
    showNotification(`Added +1 Litre extra milk for tomorrow morning! Total: ${1 + extraLitres + 1}L`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-[#fbf9f6] rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-[#042217]/10 my-8">
        <div className="flex items-center justify-between pb-4 border-b border-[#042217]/10 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#1b382b] text-white flex items-center justify-center">
              <span className="material-symbols-outlined text-[22px]">calendar_month</span>
            </div>
            <div>
              <span className="text-[11px] text-[#3d674f] uppercase font-bold tracking-wider">
                Customer Delivery Hub
              </span>
              <h3 className="font-display-hero text-2xl font-bold text-[#042217]">
                Manage Morning Milk
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

        {/* Toast Alert */}
        {toastMsg && (
          <div className="mb-4 p-3.5 rounded-xl bg-[#bcebcc] text-[#042217] text-[13px] font-bold flex items-center gap-2 animate-fadeIn">
            <span className="material-symbols-outlined text-[20px]">check_circle</span>
            <span>{toastMsg}</span>
          </div>
        )}

        {/* Tomorrow Morning Status Card */}
        <div className="bg-[#f5f3f0] rounded-2xl p-5 mb-6 border border-[#042217]/5 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[12px] font-bold uppercase tracking-wider text-[#424844]">
              Next Scheduled Delivery
            </span>
            <span
              className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase ${
                isPausedTomorrow
                  ? 'bg-[#ffdad6] text-[#ba1a1a]'
                  : 'bg-[#bcebcc] text-[#042217]'
              }`}
            >
              {isPausedTomorrow ? 'Paused' : 'Confirmed · On Schedule'}
            </span>
          </div>

          <div className="flex items-baseline justify-between pt-1">
            <div>
              <div className="text-[18px] font-bold text-[#042217]">
                Tomorrow Dawn (5:30 AM – 7:00 AM)
              </div>
              <div className="text-[13px] text-[#424844]">
                {isPausedTomorrow
                  ? '0 Litres (Delivery paused)'
                  : `${1 + extraLitres} Litre${1 + extraLitres > 1 ? 's' : ''} · Eco Sanitized Glass Bottle`}
              </div>
            </div>
            <div className="text-right">
              <span className="text-[12px] text-[#3d674f] font-semibold block">Baramulla Central Hub</span>
              <span className="text-[11px] text-[#424844]">Van Route #02</span>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-3 mb-6">
          <label className="block text-[13px] font-bold text-[#042217]">
            Quick Controls for Tomorrow Morning
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              onClick={handleTogglePause}
              className={`p-3.5 rounded-2xl text-[13px] font-bold flex items-center justify-center gap-2 border transition-all ${
                isPausedTomorrow
                  ? 'bg-[#042217] text-white border-[#042217]'
                  : 'bg-white hover:bg-[#ffdad6]/40 text-[#ba1a1a] border-[#ba1a1a]/30'
              }`}
            >
              <span className="material-symbols-outlined text-[19px]">
                {isPausedTomorrow ? 'play_arrow' : 'pause'}
              </span>
              <span>{isPausedTomorrow ? 'Resume Tomorrow' : 'Pause Tomorrow'}</span>
            </button>

            <button
              onClick={handleAddExtra}
              className="p-3.5 rounded-2xl bg-white hover:bg-[#efeeeb] text-[#042217] text-[13px] font-bold flex items-center justify-center gap-2 border border-[#042217]/15 transition-all shadow-sm"
            >
              <span className="material-symbols-outlined text-[19px] text-[#3d674f]">add_circle</span>
              <span>Need Extra Milk (+1L)</span>
            </button>
          </div>
        </div>

        {/* Glass Bottle Tracker */}
        <div className="p-4 rounded-2xl bg-[#efeeeb] border border-[#042217]/5 mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[24px] text-[#3d674f]">recycling</span>
            <div>
              <div className="text-[13px] font-bold text-[#042217]">
                Glass Bottle Swap Status
              </div>
              <div className="text-[12px] text-[#424844]">
                2 bottles currently at your residence. Please leave empty washed bottles on porch tomorrow morning.
              </div>
            </div>
          </div>
          <span className="px-3 py-1 bg-white rounded-full text-[12px] font-bold text-[#3d674f] shrink-0 border border-[#042217]/5">
            Good Standing
          </span>
        </div>

        {/* WhatsApp Dispatch Support */}
        <div className="pt-2 border-t border-[#042217]/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href="https://wa.me/919906000000?text=Hello%20Meadow%20Milk%20Dispatch%2C%20I%20need%20assistance%20with%20my%20daily%20delivery%20schedule."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-[#3d674f] hover:text-[#042217] text-[13px] font-bold"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span>WhatsApp Dispatch Helpline</span>
          </a>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#042217] text-white text-[13px] font-bold hover:bg-[#1b382b]"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
