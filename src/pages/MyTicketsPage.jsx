import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Ticket } from 'lucide-react';
import BottomNav from '../components/BottomNav';
import TicketCard from '../components/TicketCard';

export default function MyTicketsPage({ tickets }) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white px-4 py-4 border-b flex items-center justify-between">
        <ArrowLeft size={24} onClick={() => navigate('/home')} className="cursor-pointer" />
        <h1 className="text-xl font-semibold">My Tickets</h1>
        <div className="w-6"></div>
      </div>

      {/* Tickets List */}
      <div className="flex-1 overflow-y-auto p-4">
        {tickets.length === 0 ? (
          <div className="text-center py-12">
            <Ticket size={64} className="text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">No tickets yet</p>
            <button 
              onClick={() => navigate('/bus-ticket')}
              className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
            >
              Book a Ticket
            </button>
          </div>
        ) : (
          tickets.map((ticket) => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))
        )}
      </div>

      {/* Bottom Navigation */}
      {/* <BottomNav currentPage="profile" /> */}
    </div>
  );
}