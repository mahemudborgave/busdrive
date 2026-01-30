import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Menu, User, Ticket, IdCard, MessageCircle, Share2, Star, QrCode } from 'lucide-react';
import BottomNav from '../components/BottomNav';
import MenuItem from '../components/MenuItem';

export default function ProfilePage({ tickets, passes }) {
  const navigate = useNavigate();

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

        {/* Menu Items */}
        <div className="bg-white">
          <MenuItem icon={<Ticket size={24} />} text="My Tickets" onClick={() => navigate('/my-tickets')} />
          <MenuItem icon={<IdCard size={24} />} text="My Passes" onClick={() => navigate('/my-passes')} />
          <MenuItem icon={<MessageCircle size={24} />} text="Complaints" />
          <MenuItem icon={<Share2 size={24} />} text="Share app" />
          <MenuItem icon={<Star size={24} />} text="Rate Us" />
          <MenuItem icon={<QrCode size={24} />} text="Validate Pass / Ticket" />
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
    </div>
  );
}