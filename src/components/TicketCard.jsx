import React from 'react';
import { QrCode } from 'lucide-react';

export default function TicketCard({ ticket }) {
  const isExpired = ticket.status === 'expired';
  
  return (
    <div className="bg-white rounded-2xl p-6 mb-4 shadow-sm relative overflow-hidden">
      {/* Header */}
      <div className="bg-red-500 text-white px-4 py-2 rounded-lg mb-4 text-center">
        पुणे महानगर परिवहन महामंडळ लि.
      </div>

      {/* Ticket Details */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <p className="text-gray-600 text-sm">Route</p>
          <p className="font-bold text-lg">{ticket.route || '100'}</p>
        </div>
        <div>
          <p className="text-gray-600 text-sm">Tickets count</p>
          <p className="font-bold text-lg">{ticket.fullTickets}</p>
        </div>
        <div>
          <p className="text-gray-600 text-sm">Fare</p>
          <p className="font-bold text-lg">₹{ticket.fare}</p>
        </div>
      </div>

      {/* Route Info */}
      <div className="mb-4 py-3 border-t border-b border-dashed border-gray-300">
        <div className="flex items-center justify-between">
          <span className="text-gray-700">{ticket.startingStop || 'Tata Johnson'}</span>
          <span className="text-gray-400">————→</span>
          <span className="text-gray-700">{ticket.endingStop || 'Hinjawadi Jakat Naka'}</span>
        </div>
      </div>

      {/* Timing */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-gray-600 text-sm">Booking Time</p>
          <p className="text-gray-800 text-sm">{ticket.bookingTime}</p>
        </div>
        <div>
          <p className="text-gray-600 text-sm">Validity Time</p>
          <p className="text-gray-800 text-sm">{ticket.validityTime}</p>
        </div>
      </div>

      {/* Transaction ID */}
      <p className="text-gray-500 text-xs mb-4">{ticket.id}</p>

      {/* Logo */}
      <div className="flex justify-center mb-4">
        <div className={`w-32 h-32 rounded-full border-4 border-gray-300 flex items-center justify-center ${!isExpired ? 'animate-pulse' : ''}`}>
          <div className="text-center">
            <div className="text-gray-400 text-xs mb-1">परिवहन</div>
            <div className="text-red-600 font-bold text-2xl">PMPML</div>
            <div className="text-gray-400 text-xs mt-1">सेवा</div>
          </div>
        </div>
      </div>

      {/* Status */}
      <div className="text-center">
        <p className={`font-semibold ${isExpired ? 'text-red-600' : 'text-green-600'}`}>
          {isExpired ? 'Expired' : 'Valid'}
        </p>
      </div>

      {/* QR Code Button */}
      <button className="w-full bg-green-100 border-2 border-green-600 text-green-700 py-3 rounded-lg mt-4 flex items-center justify-center gap-2 hover:bg-green-200">
        <QrCode size={20} />
        Show QR code
      </button>

      {/* Invalid Watermark */}
      {isExpired && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-red-600 text-6xl font-bold opacity-20 rotate-[-30deg]">
            INVALID
          </div>
        </div>
      )}
    </div>
  );
}