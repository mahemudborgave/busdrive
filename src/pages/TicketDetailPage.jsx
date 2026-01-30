import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function TicketDetailPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <div className="bg-white px-4 py-4 border-b flex items-center">
        <ArrowLeft size={24} onClick={() => navigate('/my-tickets')} className="cursor-pointer" />
        <h1 className="text-xl font-semibold ml-4">Ticket Details</h1>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <p className="text-gray-500">Ticket details view</p>
      </div>
    </div>
  );
}