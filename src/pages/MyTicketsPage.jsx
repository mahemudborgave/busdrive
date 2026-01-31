import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Ticket } from 'lucide-react';
import BottomNav from '../components/BottomNav';
import TicketCard from '../components/TicketCard';
import CloseIcon from '@mui/icons-material/Close';
import { useAppContext } from '../context/AppContext';

export default function MyTicketsPage() {
  const navigate = useNavigate();
  const { tickets } = useAppContext();

  return (
    <div className="flex flex-col h-screen bg-[#ED1C2444]">
      {/* Header */}
      <div className="px-4 py-4 flex items-center justify-between">
        <CloseIcon style={{fontSize:30}} onClick={() => navigate('/home')} className="cursor-pointer" />
        <div className=''>
          <span className="text-gray-700 text-sm underline cursor-pointer mr-5">Need Help?</span>
          <span className="text-gray-700 text-sm underline cursor-pointer">Show all</span>
        </div>
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

      {/* <div className="flex-1 overflow-y-auto p-4">
        {tickets.length === 0 ? (
          <div className="text-center py-12">
            <IdCard size={64} className="text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">No tickets yet</p>
            <button 
              onClick={() => navigate('/daily-pass')}
              className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
            >
              Book a Ticket
            </button>
          </div>
        ) : (
          tickets.map((pass) => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))
        )}
      </div> */}

      {/* Bottom Navigation */}
      {/* <BottomNav currentPage="profile" /> */}
    </div>
  );
}