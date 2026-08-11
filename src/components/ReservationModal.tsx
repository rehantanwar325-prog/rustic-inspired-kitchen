import React, { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: new Date().toISOString().split('T')[0],
    time: '19:30',
    guests: '2 Guests',
    specialRequest: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingCode, setBookingCode] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = 'RUSTIC-' + Math.floor(100000 + Math.random() * 900000);
    setBookingCode(code);
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#12100E]/90 backdrop-blur-xl flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#1A1614] border border-[#C5A059]/40 max-w-lg w-full rounded-sm p-6 sm:p-8 relative shadow-2xl animate-fade-in my-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#D1C7BD] hover:text-[#C5A059] p-1"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="text-center mb-6">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059]">RUSTIC C-SCHEME</span>
              <h3 className="font-editorial text-3xl font-medium text-[#FAF7F2] mt-1">
                Reserve Your Table
              </h3>
              <p className="text-xs text-[#D1C7BD] font-light mt-1">
                Join us for an unforgettable Indian culinary experience.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#C5A059] font-medium mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#12100E] border border-[#C5A059]/25 focus:border-[#C5A059] text-xs text-[#FAF7F2] rounded-xs focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#C5A059] font-medium mb-1">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 Phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#12100E] border border-[#C5A059]/25 focus:border-[#C5A059] text-xs text-[#FAF7F2] rounded-xs focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#C5A059] font-medium mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#12100E] border border-[#C5A059]/25 focus:border-[#C5A059] text-xs text-[#FAF7F2] rounded-xs focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[#C5A059] font-medium mb-1">
                    Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-2.5 py-2 bg-[#12100E] border border-[#C5A059]/25 text-xs text-[#FAF7F2] rounded-xs"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[#C5A059] font-medium mb-1">
                    Time *
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-2 py-2 bg-[#12100E] border border-[#C5A059]/25 text-xs text-[#FAF7F2] rounded-xs"
                  >
                    <option value="12:30 PM">12:30 PM</option>
                    <option value="01:30 PM">01:30 PM</option>
                    <option value="07:30 PM">07:30 PM</option>
                    <option value="08:30 PM">08:30 PM</option>
                    <option value="09:30 PM">09:30 PM</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[#C5A059] font-medium mb-1">
                    Guests *
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-2 py-2 bg-[#12100E] border border-[#C5A059]/25 text-xs text-[#FAF7F2] rounded-xs"
                  >
                    <option value="2 Guests">2 Guests</option>
                    <option value="4 Guests">4 Guests</option>
                    <option value="6 Guests">6 Guests</option>
                    <option value="8+ Guests">8+ Guests</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#C5A059] font-medium mb-1">
                  Special Request
                </label>
                <textarea
                  rows={2}
                  placeholder="Seating preferences, anniversary request..."
                  value={formData.specialRequest}
                  onChange={(e) => setFormData({ ...formData, specialRequest: e.target.value })}
                  className="w-full px-3.5 py-2 bg-[#12100E] border border-[#C5A059]/25 focus:border-[#C5A059] text-xs text-[#FAF7F2] rounded-xs focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 text-xs font-semibold tracking-[0.2em] uppercase text-[#12100E] bg-gold-gradient hover:brightness-110 transition-all rounded-sm shadow-xl mt-2"
              >
                CONFIRM RESERVATION
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-4">
            <div className="w-14 h-14 rounded-full bg-[#C5A059]/20 border border-[#C5A059] text-[#C5A059] flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-7 h-7" />
            </div>

            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059]">CONFIRMATION</span>
            <h3 className="font-editorial text-2xl font-medium text-[#FAF7F2] mt-1 mb-2">
              Reservation Received!
            </h3>

            <p className="text-xs text-[#D1C7BD] font-light mb-6">
              Code: <span className="font-mono text-[#FAF7F2] font-semibold">{bookingCode}</span>. We look forward to hosting you at C-Scheme, Jaipur.
            </p>

            <button
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="w-full py-3 text-xs font-semibold tracking-widest uppercase bg-[#C5A059] text-[#12100E] rounded-sm"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
