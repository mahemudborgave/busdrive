import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export default function BusTicketPage() {
  const navigate = useNavigate();
  const { addTicket } = useAppContext();
  
  const [route, setRoute] = useState('');
  const [startingStop, setStartingStop] = useState('');
  const [endingStop, setEndingStop] = useState('');
  const [fullTickets, setFullTickets] = useState(1);
  const [halfTickets, setHalfTickets] = useState(0);
  const [fareType, setFareType] = useState('fare');

  const calculateFare = () => {
    const baseFare = 30;
    return (fullTickets * baseFare + halfTickets * (baseFare / 2)).toFixed(2);
  };

  const handlePay = () => {
    const ticket = {
      type: 'bus-ticket',
      route,
      startingStop,
      endingStop,
      fullTickets,
      halfTickets,
      fare: calculateFare(),
      bookingTime: new Date().toLocaleString('en-IN', { 
        day: '2-digit', 
        month: 'short', 
        year: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true 
      }),
      validityTime: new Date(Date.now() + 60 * 60 * 1000).toLocaleString('en-IN', { 
        day: '2-digit', 
        month: 'short', 
        year: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true 
      }),
    };
    addTicket(ticket);
    navigate('/my-tickets');
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white px-4 py-4 border-b flex items-center justify-between">
        <ArrowLeft size={24} onClick={() => navigate('/')} className="cursor-pointer" />
        <h1 className="text-xl font-semibold">Ticket Details</h1>
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

          {/* Route Input */}
          <div className="mb-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-green-600 p-3 rounded-full">
                <MapPin size={24} className="text-white" />
              </div>
              <input
                type="text"
                placeholder="Select or enter route"
                value={route}
                onChange={(e) => setRoute(e.target.value)}
                className="flex-1 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-green-600"
              />
            </div>

            {/* Stops */}
            <div className="ml-14 space-y-4">
              <div className="relative">
                <div className="absolute left-0 top-0 w-3 h-3 border-2 border-gray-400 rounded-full bg-white"></div>
                <input
                  type="text"
                  placeholder="Starting stop"
                  value={startingStop}
                  onChange={(e) => setStartingStop(e.target.value)}
                  className="ml-6 w-full text-gray-600 outline-none border-b border-gray-200 pb-2"
                />
              </div>

              <div className="ml-3 border-l-2 border-dashed border-gray-300 h-8"></div>

              <div className="relative">
                <div className="absolute left-0 top-0 w-3 h-3 border-2 border-gray-400 rounded-full bg-white"></div>
                <input
                  type="text"
                  placeholder="Ending stop"
                  value={endingStop}
                  onChange={(e) => setEndingStop(e.target.value)}
                  className="ml-6 w-full text-gray-600 outline-none border-b border-gray-200 pb-2"
                />
              </div>
            </div>
          </div>

          {/* Fare Type Toggle */}
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setFareType('fare')}
              className={`flex-1 py-3 rounded-lg font-medium ${
                fareType === 'fare' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-white border border-gray-300 text-gray-600'
              }`}
            >
              By Fare
            </button>
            <button
              onClick={() => setFareType('ending')}
              className={`flex-1 py-3 rounded-lg font-medium ${
                fareType === 'ending' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-white border border-gray-300 text-gray-600'
              }`}
            >
              By Ending stop
            </button>
          </div>

          {/* Ticket Selection */}
          <div className="mb-6">
            <p className="text-gray-600 mb-3">Ticket Price</p>
            <p className="text-gray-600 mb-4">Select Tickets</p>

            {/* Full Ticket */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-medium">Full</span>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setFullTickets(Math.max(0, fullTickets - 1))}
                  className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center text-xl hover:bg-gray-50"
                >
                  -
                </button>
                <span className="text-xl font-medium w-8 text-center">{fullTickets}</span>
                <button
                  onClick={() => setFullTickets(fullTickets + 1)}
                  className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center text-xl hover:bg-gray-50"
                >
                  +
                </button>
              </div>
            </div>

            {/* Half Ticket */}
            <div className="flex items-center justify-between">
              <span className="text-lg font-medium">Half</span>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setHalfTickets(Math.max(0, halfTickets - 1))}
                  className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center text-xl hover:bg-gray-50"
                >
                  -
                </button>
                <span className="text-xl font-medium w-8 text-center">{halfTickets}</span>
                <button
                  onClick={() => setHalfTickets(halfTickets + 1)}
                  className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center text-xl hover:bg-gray-50"
                >
                  +
                </button>
              </div>
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
          Pay ₹{calculateFare()}
        </button>
      </div>
    </div>
  );
}