import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, Users, Phone, Sparkles, CheckCircle, X } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const ReservationSection: React.FC = () => {
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
  const [reservationCode, setReservationCode] = useState('');

  const timeSlots = [
    '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM', '02:00 PM',
    '07:00 PM', '07:30 PM', '08:00 PM', '08:30 PM', '09:00 PM', '09:30 PM', '10:00 PM'
  ];

  const guestOptions = [
    '1 Guest', '2 Guests', '3 Guests', '4 Guests', '5 Guests', '6 Guests', '7-10 Guests', '10+ Group Event'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = 'RUSTIC-' + Math.floor(100000 + Math.random() * 900000);
    setReservationCode(code);
    setIsSubmitted(true);
  };

  return (
    <section id="reservation" className="relative py-28 overflow-hidden bg-[#12100E]">
      {/* Background Visual Banner with Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1800&auto=format&fit=crop"
          alt="Luxury Table Reservation Setting"
          className="w-full h-full object-cover object-center brightness-[0.25] contrast-125 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#12100E] via-[#12100E]/80 to-[#12100E]/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Full-width Dramatic Hero CTA */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.4em] text-[#C5A059] font-semibold mb-3">
            FINE DINING RESERVATIONS
          </p>
          <h2 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-normal text-[#FAF7F2] tracking-tight leading-[1.1] mb-4">
            Your Table Awaits.
          </h2>
          <p className="text-base sm:text-xl text-[#D1C7BD] font-light max-w-xl mx-auto mb-8">
            Come for the flavours. Stay for the experience.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${RESTAURANT_INFO.phoneClean}`}
              className="px-6 py-3 text-xs font-semibold tracking-[0.2em] uppercase text-[#FAF7F2] bg-[#1A1614] border border-[#C5A059]/40 hover:border-[#C5A059] transition-all rounded-sm flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Call {RESTAURANT_INFO.phone}</span>
            </a>
          </div>
        </div>

        {/* Premium Reservation Form Container */}
        <div className="max-w-3xl mx-auto bg-[#1A1614]/90 backdrop-blur-xl border border-[#C5A059]/30 rounded-sm p-6 sm:p-12 shadow-2xl relative">
          <div className="flex items-center justify-between border-b border-[#C5A059]/20 pb-6 mb-8">
            <div>
              <h3 className="font-editorial text-2xl sm:text-3xl text-[#FAF7F2] font-medium">
                Reserve Your Experience
              </h3>
              <p className="text-xs text-[#D1C7BD] font-light mt-1">
                Select your preferred date, time, and table party size below.
              </p>
            </div>
            <Sparkles className="w-6 h-6 text-[#C5A059]" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Name */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#C5A059] font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vikramaditya Singh"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-[#12100E] border border-[#C5A059]/25 focus:border-[#C5A059] text-sm text-[#FAF7F2] placeholder-[#D1C7BD]/40 rounded-xs focus:outline-none transition-colors"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#C5A059] font-medium mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-[#12100E] border border-[#C5A059]/25 focus:border-[#C5A059] text-sm text-[#FAF7F2] placeholder-[#D1C7BD]/40 rounded-xs focus:outline-none transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#C5A059] font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="your.email@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-[#12100E] border border-[#C5A059]/25 focus:border-[#C5A059] text-sm text-[#FAF7F2] placeholder-[#D1C7BD]/40 rounded-xs focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Date */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#C5A059] font-medium mb-2 flex items-center gap-1.5">
                  <CalendarIcon className="w-3.5 h-3.5" />
                  <span>Date *</span>
                </label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-3 bg-[#12100E] border border-[#C5A059]/25 focus:border-[#C5A059] text-sm text-[#FAF7F2] rounded-xs focus:outline-none transition-colors"
                />
              </div>

              {/* Time */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#C5A059] font-medium mb-2 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Time Slot *</span>
                </label>
                <select
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full px-4 py-3 bg-[#12100E] border border-[#C5A059]/25 focus:border-[#C5A059] text-sm text-[#FAF7F2] rounded-xs focus:outline-none transition-colors"
                >
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>

              {/* Guests */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#C5A059] font-medium mb-2 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5" />
                  <span>Guests *</span>
                </label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full px-4 py-3 bg-[#12100E] border border-[#C5A059]/25 focus:border-[#C5A059] text-sm text-[#FAF7F2] rounded-xs focus:outline-none transition-colors"
                >
                  {guestOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Special Request */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#C5A059] font-medium mb-2">
                Special Request (Optional)
              </label>
              <textarea
                rows={3}
                placeholder="Birthday celebration, high chair request, dietary preferences, or quiet corner table..."
                value={formData.specialRequest}
                onChange={(e) => setFormData({ ...formData, specialRequest: e.target.value })}
                className="w-full px-4 py-3 bg-[#12100E] border border-[#C5A059]/25 focus:border-[#C5A059] text-sm text-[#FAF7F2] placeholder-[#D1C7BD]/40 rounded-xs focus:outline-none transition-colors"
              />
            </div>

            <div className="pt-4 text-center">
              <button
                type="submit"
                className="w-full sm:w-auto px-12 py-4 text-xs font-semibold tracking-[0.25em] uppercase text-[#12100E] bg-gold-gradient hover:brightness-110 transition-all rounded-sm shadow-xl"
              >
                REQUEST A RESERVATION
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Instant Confirmation Modal */}
      {isSubmitted && (
        <div className="fixed inset-0 z-50 bg-[#12100E]/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#1A1614] border border-[#C5A059]/40 max-w-md w-full rounded-sm p-8 relative text-center shadow-2xl animate-fade-in">
            <button
              onClick={() => setIsSubmitted(false)}
              className="absolute top-4 right-4 text-[#D1C7BD] hover:text-[#C5A059]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-16 h-16 rounded-full bg-[#C5A059]/20 border border-[#C5A059] text-[#C5A059] flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8" />
            </div>

            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059]">RESERVATION REQUESTED</span>
            <h3 className="font-editorial text-3xl font-medium text-[#FAF7F2] mt-1 mb-2">
              Table Reserved!
            </h3>

            <p className="text-xs text-[#D1C7BD] font-light mb-6">
              Thank you, <strong className="text-[#FAF7F2]">{formData.name}</strong>. Our guest manager will confirm your table shortly.
            </p>

            {/* Ticket Box */}
            <div className="p-4 bg-[#12100E] border border-[#C5A059]/20 rounded-xs space-y-2 text-left text-xs text-[#D1C7BD] mb-6">
              <div className="flex justify-between border-b border-[#C5A059]/10 pb-2">
                <span className="text-[#C5A059]">Booking Code:</span>
                <span className="font-mono text-[#FAF7F2] font-semibold">{reservationCode}</span>
              </div>
              <div className="flex justify-between">
                <span>Date & Time:</span>
                <span className="text-[#FAF7F2] font-medium">{formData.date} at {formData.time}</span>
              </div>
              <div className="flex justify-between">
                <span>Party Size:</span>
                <span className="text-[#FAF7F2] font-medium">{formData.guests}</span>
              </div>
              <div className="flex justify-between">
                <span>Location:</span>
                <span className="text-[#FAF7F2] font-medium">C-Scheme, Jaipur</span>
              </div>
            </div>

            <button
              onClick={() => setIsSubmitted(false)}
              className="w-full py-3 text-xs font-semibold tracking-widest uppercase bg-[#C5A059] text-[#12100E] rounded-sm"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
