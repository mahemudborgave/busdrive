import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export default function DailyPassPage() {
  const navigate = useNavigate();
  const { addPass } = useAppContext();
  
  const [passType, setPassType] = useState('PMC');
  const [aadhaar, setAadhaar] = useState('');

  const passPrices = {
    'PMC': 70.83,
    'All': 150.0
  };

  const handlePay = () => {
    if (aadhaar.length !== 4) {
      alert('Please enter last 4 digits of Aadhaar/PAN');
      return;
    }

    const pass = {
      type: 'daily-pass',
      passType: passType === 'PMC' ? 'PMC & PCMC' : 'All Route',
      aadhaar,
      fare: passPrices[passType],
      bookingTime: new Date().toLocaleString('en-IN', { 
        day: '2-digit', 
        month: 'short', 
        year: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true 
      }),
      validityTime: new Date(Date.now() + 12 * 60 * 60 * 1000).toLocaleString('en-IN', { 
        day: '2-digit', 
        month: 'short', 
        year: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true 
      }),
    };
    addPass(pass);
    navigate('/my-passes');
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white px-4 py-4 border-b flex items-center justify-between">
        <ArrowLeft size={24} onClick={() => navigate('/')} className="cursor-pointer" />
        <h1 className="text-xl font-semibold">Daily Pass</h1>
        <span className="text-gray-600">{new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}</span>
      </div>

      {/* Form Content */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          {/* Date */}
          <div className="bg-green-600 text-white px-4 py-3 rounded-lg mb-6">
            {new Date().toLocaleDateString('en-IN', { 
              day: '2-digit', 
              month: 'short', 
              year: 'numeric'
            })} | {new Date().toLocaleTimeString('en-IN', { 
              hour: '2-digit', 
              minute: '2-digit',
              hour12: true 
            })}
          </div>

          {/* Pass Type Selection */}
          <div className="mb-6">
            <p className="text-gray-700 font-medium mb-4">Select pass type</p>

            <button
              onClick={() => setPassType('PMC')}
              className={`w-full mb-3 py-4 rounded-lg font-medium text-lg ${
                passType === 'PMC'
                  ? 'bg-green-100 border-2 border-green-600 text-green-700'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              PMC & PCMC - ₹70.0
            </button>

            <button
              onClick={() => setPassType('All')}
              className={`w-full py-4 rounded-lg font-medium text-lg ${
                passType === 'All'
                  ? 'bg-green-100 border-2 border-green-600 text-green-700'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              All Route - ₹150.0
            </button>

            {passType === 'PMC' && (
              <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                <p className="text-sm text-yellow-800">
                  Valid in all routes of PMC and PCMC
                </p>
              </div>
            )}
          </div>

          {/* Aadhaar Input */}
          <div className="mb-6">
            <p className="text-gray-700 font-medium mb-3">
              Enter last 4 digits of your Aadhaar Card or Pan Card
            </p>

            <div className="flex justify-center gap-4 mb-4">
              {[0, 1, 2, 3].map((index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  value={aadhaar[index] || ''}
                  onChange={(e) => {
                    const newAadhaar = aadhaar.split('');
                    newAadhaar[index] = e.target.value;
                    setAadhaar(newAadhaar.join(''));
                    if (e.target.value && index < 3) {
                      e.target.nextElementSibling?.focus();
                    }
                  }}
                  className="w-16 h-16 text-center text-2xl border-2 border-gray-300 rounded-lg outline-none focus:border-green-600"
                />
              ))}
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
              <p className="text-sm text-yellow-800">
                You should have a valid ID with above details.
              </p>
            </div>
          </div>

          {/* Final Fare */}
          <div className="border-2 border-gray-300 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-lg font-semibold">Final Fare</span>
                <div className="w-5 h-5 bg-gray-300 rounded-full flex items-center justify-center text-xs">
                  i
                </div>
              </div>
              <span className="text-2xl font-bold text-green-600">
                ₹{passPrices[passType]}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Footer */}
      <div className="bg-white border-t p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-gray-600">PAY USING</span>
          <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50">
            <div className="w-6 h-6 bg-purple-600 rounded flex items-center justify-center text-white text-xs">
              ₱
            </div>
            <span>PhonePe</span>
          </button>
        </div>
        <button 
          onClick={handlePay}
          className="w-full bg-green-600 text-white py-4 rounded-lg text-xl font-semibold hover:bg-green-700"
        >
          ₹{passPrices[passType]}
        </button>
      </div>
    </div>
  );
}