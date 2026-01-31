import React from 'react';
import { QrCode } from 'lucide-react';
import QrCodeIcon from '@mui/icons-material/QrCode';

const scalePulseStyle = `
@keyframes scalePulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.15);
  }
}

.scale-pulse {
  animation: scalePulse 1.2s ease-in-out infinite;
}
`;

function formatDateTime(dateStr) {
  const d = new Date(dateStr);

  const datePart = d.toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: '2-digit',
  });

  const timePart = d.toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  return `${datePart} | ${timePart}`;
}

function formatEndOfDay(dateStr) {
  const d = new Date(dateStr);
  d.setHours(23, 59, 0, 0); // 👈 force 11:59 PM

  const datePart = d.toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: '2-digit',
  });

  return `${datePart} | 11:59 PM`;
}

function generatePassCode() {
  const now = new Date();

  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = String(now.getFullYear()).slice(-2);

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");

  const randomLetters = Math.random().toString(36).substring(2, 5).toUpperCase();

  return `${day}${month}${year}${hours}${minutes}GD0${randomLetters}`;
}

export default function TicketCard({ ticket }) {
  const isExpired = ticket.status === 'expired';

  return (
    <div>
      <style>{scalePulseStyle}</style>
      <div className="bg-white rounded-2xl mb-20 shadow-sm relative overflow-hidden">

        {/* Header */}
        <div className="text-xl bg-red-500 text-white px-4 py-2 rounded-t-lg mb-4 text-center">
          पुणे महानगर परिवहन महामंडळ लि.
        </div>

        {/* Ticket Details */}
        <div className="grid grid-cols-4 gap-4 mb-4 p-4">
          <div className="col-span-2">
            <p className="text-gray-600 text-sm">Route</p>
            <p className="font-bold text-xl">{ticket.route || '100'}</p>
          </div>
          <div className='text-right'>
            <p className="text-gray-600 text-sm whitespace-nowrap">
              Tickets count
            </p>
            <p className="font-bold text-xl">{ticket.fullTickets}</p>
          </div>
          <div className='text-right'>
            <p className="text-gray-600 text-sm">Fare</p>
            <p className="font-bold text-xl">₹{Math.trunc(ticket.fare)}</p>
          </div>
        </div>

        {/* Route Info */}
        <div className="mb-4 p-4 py-3">
          <div className="flex items-center justify-between te0xt-xl">
            <span className="text-gray-700">{ticket.startingStop || 'Tata Johnson'}</span>
            <span className="text-gray-400"><img src="arrow-left-long.jpeg" alt="arrow-left-long.jpeg" className="w-20" /></span>
            <span className="text-gray-700">{ticket.endingStop || 'Hinjawadi Jakat Naka'}</span>
          </div>
        </div>

        {/* Timing */}
        <div className="relative grid grid-cols-2 gap-4 mb-4 p-4 py-8 border-t border-dashed border-gray-300">
          <div>
            <p className="text-gray-600 text-sm">Booking Time</p>
            <p className="text-gray-800 font-semibold text-sm">{ticket.bookingTime}</p>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Validity Time</p>
            <p className="text-gray-800 font-semibold text-sm">{ticket.validityTime}</p>
          </div>

          {/* Left cut */}
          <div className="absolute top-1.2 -left-5  w-9 h-9 bg-[#ED1C2444] rounded-full -translate-y-1/2"></div>

          {/* Right cut */}
          <div className="absolute top-1.2 -right-4 w-8 h-8 bg-[#ED1C2444] rounded-full -translate-y-1/2"></div>
        </div>

        {/* Transaction ID */}
        <p className="text-gray-500 text-base px-6 mb-6 text-center">{generatePassCode()}</p>

        {/* Logo */}
        <div className="flex justify-center my-8">
          <div className={`w-40 rounded-full flex items-center justify-center ${!isExpired ? 'scale-pulse' : ''}`}>
            <img src="pmpml-logo.webp" alt="pmpml-logo.webp" />
          </div>
        </div>

        {/* Status */}
        <div className="text-center bg-gray-200 py-1">
          <p className={`${isExpired ? 'text-red-600' : 'text-green-600'}`}>
            {isExpired ? 'Expired' : 'Valid'}
          </p>
        </div>

        {/* Invalid Watermark */}
        {isExpired && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-red-600 text-6xl font-bold opacity-20 rotate-[-30deg]">
              INVALID
            </div>
          </div>
        )}
      </div>

      {/* QR Code Button */}
      <button className="w-full bg-green-100 border-2 border-green-600 text-green-700 py-3 rounded-lg mt-4 flex items-center justify-center gap-2">
        <QrCodeIcon size={20} />
        Show QR code
      </button>
    </div>
  );
}