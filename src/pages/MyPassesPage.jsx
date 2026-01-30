import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, IdCard } from 'lucide-react';
import BottomNav from '../components/BottomNav';
import PassCard from '../components/PassCard';
import CloseIcon from '@mui/icons-material/Close';

export default function MyPassesPage({ passes }) {
  const navigate = useNavigate();

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

      {/* Passes List */}
      <div className="flex-1 overflow-y-auto p-4">
        {passes.length === 0 ? (
          <div className="text-center py-12">
            <IdCard size={64} className="text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">No passes yet</p>
            <button 
              onClick={() => navigate('/daily-pass')}
              className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
            >
              Book a Pass
            </button>
          </div>
        ) : (
          passes.map((pass) => (
            <PassCard key={pass.id} pass={pass} />
          ))
        )}
      </div>

      {/* Bottom Navigation */}
      {/* <BottomNav currentPage="profile" /> */}
    </div>
  );
}