import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Menu, User, Ticket, IdCard, MessageCircle, Share2, Star, QrCode, Trash2 } from 'lucide-react';
import BottomNav from '../components/BottomNav';
import MenuItem from '../components/MenuItem';
import { useAppContext } from '../context/AppContext';

export default function ProfilePage() {
  const navigate = useNavigate();
  const { tickets, passes, clearAllTickets, clearAllPasses, clearAllData } = useAppContext();
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const [clearType, setClearType] = useState('all'); // 'all', 'tickets', 'passes'

  const handleClearData = (type) => {
    setClearType(type);
    setShowClearConfirm(true);
  };

  const confirmClearData = () => {
    if (clearType === 'tickets') {
      clearAllTickets();
      alert('All tickets cleared successfully!');
    } else if (clearType === 'passes') {
      clearAllPasses();
      alert('All passes cleared successfully!');
    } else {
      clearAllData();
      alert('All tickets and passes cleared successfully!');
    }
    setShowClearConfirm(false);
  };

  const getClearMessage = () => {
    if (clearType === 'tickets') {
      return {
        title: 'Clear All Tickets?',
        message: `This will permanently delete all your tickets (${tickets.length}). This action cannot be undone.`,
        count: tickets.length
      };
    } else if (clearType === 'passes') {
      return {
        title: 'Clear All Passes?',
        message: `This will permanently delete all your passes (${passes.length}). This action cannot be undone.`,
        count: passes.length
      };
    } else {
      return {
        title: 'Clear All Data?',
        message: `This will permanently delete all your tickets (${tickets.length}) and passes (${passes.length}). This action cannot be undone.`,
        count: tickets.length + passes.length
      };
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white px-4 py-4 border-b flex items-center justify-between">
        <ArrowLeft size={24} onClick={() => navigate('/')} className="cursor-pointer" />
        <h1 className="text-xl font-semibold">My Profile</h1>
        <Menu size={24} className="cursor-pointer" />
      </div>

      {/* Profile Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Profile Picture */}
        <div className="bg-white px-4 py-6 flex items-center gap-4 mb-2">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
            <User size={32} className="text-gray-400" />
          </div>
          <p className="text-lg">Click here to update your profile</p>
        </div>

        {/* Tickets and Passes Summary */}
        <div className="bg-white mb-2">
          <div className="px-4 py-4 border-b border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Active Tickets</span>
              <span className="text-2xl font-bold text-green-600">{tickets.length}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Active Passes</span>
              <span className="text-2xl font-bold text-green-600">{passes.length}</span>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="bg-white">
          <MenuItem 
            icon={<Ticket size={24} />} 
            text="My Tickets" 
            badge={tickets.length > 0 ? tickets.length : null}
            onClick={() => navigate('/my-tickets')} 
          />
          <MenuItem 
            icon={<IdCard size={24} />} 
            text="My Passes" 
            badge={passes.length > 0 ? passes.length : null}
            onClick={() => navigate('/my-passes')} 
          />
          <MenuItem icon={<MessageCircle size={24} />} text="Complaints" />
          <MenuItem icon={<Share2 size={24} />} text="Share app" />
          <MenuItem icon={<Star size={24} />} text="Rate Us" />
          <MenuItem icon={<QrCode size={24} />} text="Validate Pass / Ticket" />
        </div>

        {/* Data Management Section */}
        <div className="bg-white mt-6">
          <div className="px-4 py-3 bg-gray-100">
            <p className="text-sm font-semibold text-gray-700">Data Management</p>
          </div>
          <MenuItem 
            icon={<Trash2 size={24} />} 
            text="Clear All Tickets" 
            onClick={() => handleClearData('tickets')}
            danger={true}
            disabled={tickets.length === 0}
          />
          <MenuItem 
            icon={<Trash2 size={24} />} 
            text="Clear All Passes" 
            onClick={() => handleClearData('passes')}
            danger={true}
            disabled={passes.length === 0}
          />
          <MenuItem 
            icon={<Trash2 size={24} />} 
            text="Clear All Data" 
            onClick={() => handleClearData('all')}
            danger={true}
            disabled={tickets.length === 0 && passes.length === 0}
          />
        </div>

        {/* Social Links */}
        <div className="bg-white mt-6 px-4 py-6">
          <p className="text-gray-600 mb-4">Follow us on :</p>
          <div className="flex gap-6">
            <div className="w-12 h-12 border-2 border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-50">
              <span className="text-red-600 text-xl">▶</span>
            </div>
            <div className="w-12 h-12 border-2 border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-50">
              <span className="text-pink-600 text-xl">📷</span>
            </div>
            <div className="w-12 h-12 border-2 border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-50">
              <span className="text-black text-xl">𝕏</span>
            </div>
          </div>
          <p className="text-gray-500 text-sm mt-6">App version : 1.0.13.1 (25)</p>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav currentPage="profile" />

      {/* Clear Data Confirmation Modal */}
      {showClearConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-red-100 p-3 rounded-full">
                <Trash2 size={32} className="text-red-600" />
              </div>
            </div>
            <h2 className="text-xl font-bold text-center mb-2">{getClearMessage().title}</h2>
            <p className="text-gray-600 text-center mb-6">
              {getClearMessage().message}
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowClearConfirm(false)}
                className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg font-medium hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={confirmClearData}
                className="flex-1 bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700"
              >
                {clearType === 'tickets' ? 'Clear Tickets' : clearType === 'passes' ? 'Clear Passes' : 'Clear All'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}