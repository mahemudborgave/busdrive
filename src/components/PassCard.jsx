import React, { useState, useEffect, useMemo } from 'react';
import { QrCode, X } from 'lucide-react';
import QrCodeIcon from '@mui/icons-material/QrCode';

// Custom hook for countdown timer
function useCountdown(validityTimeStr) {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const calculateTimeLeft = () => {
      try {
        const validityDate = new Date(validityTimeStr);
        const now = new Date();
        const difference = validityDate - now;

        if (difference <= 0 || isNaN(difference)) {
          setTimeLeft('Expired');
          return;
        }

        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        const h = String(hours).padStart(2, '0');
        const m = String(minutes).padStart(2, '0');
        const s = String(seconds).padStart(2, '0');

        setTimeLeft(`${h}:${m}:${s}`);
      } catch (error) {
        setTimeLeft('Expired');
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [validityTimeStr]);

  return timeLeft;
}


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
  d.setHours(23, 59, 0, 0);

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

  const randomLetters = 'f5d'.toUpperCase();

  return `${day}${month}${year}${hours}${minutes}GD0${randomLetters}`;
}

// Simple QR Modal Component
function QRModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 bg-opacity-50 flex items-center justify-center z-50 p-15">
      <div className="bg-white rounded-lg p-2 max-w-sm w-full relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>

        {/* QR Code Image */}
        <div className="mt-1">
          <img src="qr_code.svg" alt="QR Code" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
}

export default function PassCard({ pass }) {
  const [showQRModal, setShowQRModal] = useState(false);
  const isExpired = pass.status === 'expired';
  const passCode = useMemo(() => generatePassCode(pass.bookingTime), [pass.bookingTime]);

  const getEndOfDayTime = () => {
    try {
      const bookingDate = new Date(pass.bookingTime);
      const endOfDay = new Date(bookingDate);
      endOfDay.setHours(23, 59, 59, 999);
      return endOfDay;
    } catch (error) {
      return new Date();
    }
  };

  const countdown = useCountdown(getEndOfDayTime());

  return (
    <div>
      <style>{scalePulseStyle}</style>
      <div className="bg-white rounded-2xl mb-20 shadow-sm relative overflow-hidden">

        {/* Header */}
        <div className="text-xl bg-red-500 text-white px-4 py-2 rounded-t-lg mb-4 text-center">
          पुणे महानगर परिवहन महामंडळ लि.
        </div>

        {/* Pass Details */}
        <div className="grid grid-cols-4 gap-4 mb-4 p-4">
          <div className="col-span-2">
            <p className="text-gray-600 text-sm">Pass Type</p>
            <p className="font-bold text-xl whitespace-nowrap">
              {pass.passType}
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-sm">ID</p>
            <p className="font-bold text-xl">{pass.aadhaar}</p>
          </div>

          <div>
            <p className="text-gray-600 text-sm">Fare</p>
            <p className="font-bold text-xl">₹{pass.fare}</p>
          </div>
        </div>

        {/* Timing */}
        <div className="relative grid grid-cols-2 border-t border-dashed border-gray-300 gap-4 p-6 mb-2">
          <div>
            <p className="text-gray-600 text-sm">Booking Time</p>
            <p className="text-gray-800 font-semibold text-sm">{formatDateTime(pass.bookingTime)}</p>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Validity Time</p>
            <p className="text-gray-800 font-semibold text-sm">{formatEndOfDay(pass.bookingTime)}</p>
          </div>

          <div className="absolute top-1.2 -left-5 w-9 h-9 bg-[#ED1C2444] rounded-full -translate-y-1/2"></div>
          <div className="absolute top-1.2 -right-4 w-8 h-8 bg-[#ED1C2444] rounded-full -translate-y-1/2"></div>
        </div>

        {/* Transaction ID */}
        <p className="text-gray-500 text-base px-6 mb-6 text-center">{passCode}</p>

        {/* Pass Type Label */}
        <div className="mb-4 py-1 text-center bg-red-500 text-white font-semibold">
          One Day Pass
        </div>

        {/* Logo */}
        <div className="flex justify-center my-8">
          <div className={`w-40 rounded-full flex items-center justify-center ${!isExpired ? 'scale-pulse' : ''}`}>
            <img src="pmpml-logo.webp" alt="pmpml-logo.webp" />
          </div>
        </div>

        {/* Status - Countdown Timer */}
        <div className="text-center p-1 bg-gray-100">
          <p className={`${isExpired || countdown === 'Expired' ? 'text-gray-600' : 'text-gray-600'}`}>
            {isExpired || countdown === 'Expired' ? 'Expired' : countdown}
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
      <button
        onClick={() => setShowQRModal(true)}
        className="w-full bg-green-100 border-2 border-green-600 text-green-700 py-3 rounded-lg mt-4 flex items-center justify-center gap-2 hover:bg-green-200 transition-colors"
      >
        <QrCodeIcon size={20} />
        Show QR code
      </button>

      {/* QR Modal */}
      <QRModal
        isOpen={showQRModal}
        onClose={() => setShowQRModal(false)}
      />
    </div>
  );
}