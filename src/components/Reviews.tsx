import React, { useState } from 'react';
import { CUSTOMER_REVIEWS } from '../data/mockData';
import { ReviewItem } from '../types';

export const Reviews: React.FC = () => {
  const [reviews, setReviews] = useState<ReviewItem[]>(CUSTOMER_REVIEWS);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newName, setNewName] = useState('');
  const [newLocation, setNewLocation] = useState('');
  const [newComment, setNewComment] = useState('');
  const [newRating, setNewRating] = useState(5);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newComment.trim()) return;

    const newRev: ReviewItem = {
      id: `rev-${Date.now()}`,
      name: newName.trim(),
      location: newLocation.trim() || 'Baramulla, Kashmir',
      rating: newRating,
      avatarText: newName.slice(0, 2).toUpperCase(),
      comment: newComment.trim(),
      subscriptionType: 'Daily Subscriber',
      date: 'Just now',
    };

    setReviews([newRev, ...reviews]);
    setNewName('');
    setNewLocation('');
    setNewComment('');
    setShowAddModal(false);
  };

  return (
    <section className="py-24 bg-[#f5f3f0] text-[#1b1c1a]" id="testimonials">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6 text-center md:text-left">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[12px] text-[#3d674f] uppercase tracking-widest font-bold">
              Community Word
            </span>
            <h2 className="font-display-hero text-3xl sm:text-4xl text-[#042217] tracking-tight font-semibold">
              Loved by Local Families
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#424844]">
              Read genuine experiences from homes across Baramulla, Kanispora, and Sopore who drink Meadow Milk every dawn.
            </p>
          </div>

          <button
            onClick={() => setShowAddModal(true)}
            className="inline-flex items-center gap-2 bg-[#fbf9f6] text-[#042217] hover:bg-white border border-[#042217]/10 px-5 py-3 rounded-full text-[14px] font-bold shadow-sm transition-all"
          >
            <span className="material-symbols-outlined text-[18px] text-[#3d674f]">rate_review</span>
            <span>Share Your Experience</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.slice(0, 6).map((rev) => (
            <div
              key={rev.id}
              className="bg-[#fbf9f6] rounded-3xl p-8 shadow-sm border border-[#042217]/5 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div className="space-y-4">
                {/* 5 Stars */}
                <div className="flex text-[#ecc15a] items-center gap-1">
                  {[...Array(rev.rating)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-[20px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>

                <p className="text-[15px] text-[#1b1c1a] italic leading-relaxed">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#042217]/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#bcebcc] text-[#042217] flex items-center justify-center font-bold text-[14px] shrink-0">
                  {rev.avatarText}
                </div>
                <div>
                  <div className="text-[14px] font-bold text-[#042217]">{rev.name}</div>
                  <div className="text-[12px] text-[#424844]">{rev.location}</div>
                  <div className="text-[11px] text-[#3d674f] font-semibold mt-0.5">
                    {rev.subscriptionType}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Review Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-[#fbf9f6] rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#042217]/10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display-hero text-2xl font-bold text-[#042217]">
                Share Your Meadow Milk Review
              </h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="w-8 h-8 rounded-full bg-[#efeeeb] flex items-center justify-center text-[#042217] hover:bg-[#eae8e5]"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            <form onSubmit={handleAddReview} className="space-y-4">
              <div>
                <label className="block text-[13px] font-semibold text-[#1b1c1a] mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="e.g. Parvez Ahmed"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#f5f3f0] border border-[#042217]/15 focus:outline-none focus:ring-2 focus:ring-[#3d674f] text-[14px]"
                />
              </div>

              <div>
                <label className="block text-[13px] font-semibold text-[#1b1c1a] mb-1">
                  Locality / Town
                </label>
                <input
                  type="text"
                  value={newLocation}
                  onChange={(e) => setNewLocation(e.target.value)}
                  placeholder="e.g. Kanispora, Baramulla"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#f5f3f0] border border-[#042217]/15 focus:outline-none focus:ring-2 focus:ring-[#3d674f] text-[14px]"
                />
              </div>

              <div>
                <label className="block text-[13px] font-semibold text-[#1b1c1a] mb-1">
                  Rating
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setNewRating(star)}
                      className="text-[#ecc15a] hover:scale-110 transition-transform"
                    >
                      <span
                        className="material-symbols-outlined text-[26px]"
                        style={{
                          fontVariationSettings: star <= newRating ? "'FILL' 1" : "'FILL' 0",
                        }}
                      >
                        star
                      </span>
                    </button>
                  ))}
                  <span className="text-[13px] text-[#424844] ml-2">
                    {newRating} / 5 Stars
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-[13px] font-semibold text-[#1b1c1a] mb-1">
                  Your Experience with the Milk &amp; Delivery
                </label>
                <textarea
                  rows={4}
                  required
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Tell us about the morning taste, creaminess, delivery timing, or tea flavor..."
                  className="w-full px-4 py-2.5 rounded-xl bg-[#f5f3f0] border border-[#042217]/15 focus:outline-none focus:ring-2 focus:ring-[#3d674f] text-[14px]"
                />
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-5 py-2.5 rounded-full text-[#424844] hover:bg-[#efeeeb] text-[14px] font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full bg-[#042217] text-white hover:bg-[#1b382b] text-[14px] font-bold shadow-md"
                >
                  Publish Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
