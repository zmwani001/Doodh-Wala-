import React, { useState } from 'react';
import { PackagingType, PlanFrequency } from '../types';

interface SubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialConfig: {
    frequency: PlanFrequency;
    litres: number;
    packaging: PackagingType;
    totalAmount: number;
  };
}

export const SubscriptionModal: React.FC<SubscriptionModalProps> = ({
  isOpen,
  onClose,
  initialConfig,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [area, setArea] = useState('Baramulla Town');
  const [instructions, setInstructions] = useState('Place quietly in doorstep milk bag');
  const [startDate, setStartDate] = useState('Tomorrow Morning (5:30 AM)');
  const [isSuccess, setIsSuccess] = useState(false);
  const [subscriptionId, setSubscriptionId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !address.trim()) return;

    const newId = `MM-KMR-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubscriptionId(newId);
    setIsSuccess(true);
  };

  const whatsappOrderUrl = `https://wa.me/919906000000?text=${encodeURIComponent(
    `Hello Meadow Milk Kashmir!%0A*New Subscription Order: ${subscriptionId}*%0A%0A• Name: ${name}%0A• Phone: ${phone}%0A• Area: ${area}%0A• Address: ${address}%0A• Plan: ${
      initialConfig.frequency === 'daily'
        ? 'Daily Milk (7 days/wk)'
        : initialConfig.frequency === 'alternate'
        ? 'Alternate Days'
        : 'Monthly Prepaid Pass'
    }%0A• Quantity: ${initialConfig.litres} Litre/morning%0A• Packaging: ${
      initialConfig.packaging === 'glass' ? 'Eco Glass Bottle' : 'Food-Grade Pouch'
    }%0A• First Morning: ${startDate}%0A• Note: ${instructions}%0A%0APlease confirm my morning delivery schedule!`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-[#fbf9f6] rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-[#042217]/10 my-8">
        {!isSuccess ? (
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-[#042217]/10 mb-6">
              <div>
                <span className="text-[11px] text-[#3d674f] uppercase font-bold tracking-wider">
                  Direct From Kreeri Farm
                </span>
                <h3 className="font-display-hero text-2xl font-bold text-[#042217]">
                  Start Your Morning Subscription
                </h3>
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-[#efeeeb] hover:bg-[#eae8e5] text-[#042217] flex items-center justify-center transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            {/* Selected Plan Summary Banner */}
            <div className="bg-[#f5f3f0] rounded-2xl p-4 mb-6 border border-[#042217]/5 flex items-center justify-between">
              <div>
                <div className="text-[14px] font-bold text-[#042217]">
                  {initialConfig.litres}L ·{' '}
                  {initialConfig.frequency === 'daily'
                    ? 'Daily'
                    : initialConfig.frequency === 'alternate'
                    ? 'Alternate Days'
                    : 'Monthly Pass'}
                </div>
                <div className="text-[12px] text-[#424844]">
                  {initialConfig.packaging === 'glass' ? 'Eco Glass Bottle Swap' : 'Food-Grade Sealed Pouch'} • Delivery: 5:00 AM – 7:30 AM
                </div>
              </div>
              <div className="text-right">
                <div className="font-display-hero text-xl font-bold text-[#042217]">
                  ₹{initialConfig.totalAmount.toLocaleString('en-IN')}
                </div>
                <div className="text-[11px] text-[#3d674f] font-semibold">Monthly Est.</div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[13px] font-bold text-[#042217] mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Zubair Lone"
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#042217]/15 focus:outline-none focus:ring-2 focus:ring-[#3d674f] text-[14px]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[13px] font-bold text-[#042217] mb-1">
                    WhatsApp Mobile Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +91 99060 XXXXX"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#042217]/15 focus:outline-none focus:ring-2 focus:ring-[#3d674f] text-[14px]"
                  />
                </div>

                <div>
                  <label className="block text-[13px] font-bold text-[#042217] mb-1">
                    Locality / Town
                  </label>
                  <select
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#042217]/15 focus:outline-none focus:ring-2 focus:ring-[#3d674f] text-[14px]"
                  >
                    <option value="Baramulla Old Town">Baramulla Old Town</option>
                    <option value="Kanispora">Kanispora</option>
                    <option value="Delina">Delina</option>
                    <option value="Kreeri Proper">Kreeri Proper</option>
                    <option value="Ushkara">Ushkara</option>
                    <option value="Sopore Model Town">Sopore Model Town</option>
                    <option value="Sangrama">Sangrama</option>
                    <option value="Other Area (Baramulla District)">Other Area</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[13px] font-bold text-[#042217] mb-1">
                  Complete Delivery Address (House / Landmark)
                </label>
                <textarea
                  rows={2}
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="e.g. Near Jamia Masjid, Mohalla Syed Karim, House #42"
                  className="w-full px-4 py-2 rounded-xl bg-white border border-[#042217]/15 focus:outline-none focus:ring-2 focus:ring-[#3d674f] text-[14px]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[13px] font-bold text-[#042217] mb-1">
                    Preferred Start Date
                  </label>
                  <select
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#042217]/15 focus:outline-none focus:ring-2 focus:ring-[#3d674f] text-[14px]"
                  >
                    <option value="Tomorrow Morning (5:30 AM)">Tomorrow Morning (5:30 AM)</option>
                    <option value="Day After Tomorrow">Day After Tomorrow</option>
                    <option value="1st of Next Month">1st of Next Month</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[13px] font-bold text-[#042217] mb-1">
                    Doorstep Instructions
                  </label>
                  <input
                    type="text"
                    value={instructions}
                    onChange={(e) => setInstructions(e.target.value)}
                    placeholder="e.g. Doorstep hook, porch box"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#042217]/15 focus:outline-none focus:ring-2 focus:ring-[#3d674f] text-[14px]"
                  />
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#bcebcc]/40 text-[#042217] text-[12px] flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px] text-[#3d674f]">verified</span>
                <span>
                  <strong>Zero-Risk Guarantee:</strong> You only pay after your first morning milk delivery. Pause or cancel anytime via WhatsApp.
                </span>
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-full text-[#424844] hover:bg-[#efeeeb] text-[14px] font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-7 py-3 rounded-full bg-[#042217] text-white hover:bg-[#1b382b] text-[14px] font-bold shadow-lg"
                >
                  Confirm Subscription
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#bcebcc] text-[#042217] flex items-center justify-center mx-auto shadow-md">
              <span className="material-symbols-outlined text-[36px]">check</span>
            </div>

            <div className="space-y-2">
              <span className="text-[12px] text-[#3d674f] font-bold uppercase tracking-wider">
                Subscription Confirmed
              </span>
              <h3 className="font-display-hero text-3xl font-bold text-[#042217]">
                Welcome to Meadow Milk!
              </h3>
              <p className="text-[14px] text-[#424844] max-w-md mx-auto">
                Your morning milk subscription has been registered with our Kreeri farm dispatch desk.
              </p>
            </div>

            <div className="bg-[#f5f3f0] rounded-2xl p-5 text-left border border-[#042217]/10 space-y-2 max-w-md mx-auto text-[13px]">
              <div className="flex justify-between">
                <span className="text-[#424844]">Subscription ID:</span>
                <span className="font-bold text-[#042217] font-mono">{subscriptionId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#424844]">Customer Name:</span>
                <span className="font-bold text-[#042217]">{name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#424844]">Delivery Area:</span>
                <span className="font-bold text-[#042217]">{area}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#424844]">First Delivery:</span>
                <span className="font-bold text-[#3d674f]">{startDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#424844]">Milk Quantity:</span>
                <span className="font-bold text-[#042217]">{initialConfig.litres}L ({initialConfig.packaging === 'glass' ? 'Glass Bottle' : 'Pouch'})</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={whatsappOrderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#042217] text-white hover:bg-[#1b382b] text-[14px] font-bold px-7 py-3 rounded-full shadow-lg"
              >
                <span className="material-symbols-outlined text-[20px] text-[#ffdf99]">chat</span>
                <span>Send Details via WhatsApp</span>
              </a>

              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#efeeeb] text-[#042217] text-[14px] font-bold hover:bg-[#eae8e5]"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
