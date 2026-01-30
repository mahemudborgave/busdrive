import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, MapPin, MessageCircle } from 'lucide-react';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';

export default function BottomNav({ currentPage }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white border-t border-gray-200 flex items-center justify-around py-3">
      <NavItem 
        icon={<Home size={24} />} 
        label="Home" 
        active={currentPage === 'home'}
        onClick={() => navigate('/')}
      />
      <NavItem 
        icon={<MapPin size={24} />} 
        label="Buses" 
        active={currentPage === 'buses'}
        onClick={() => navigate('/buses')}
      />
      <NavItem 
        icon={<HelpOutlinedIcon />} 
        label="Help" 
        active={currentPage === 'help'}
        onClick={() => navigate('/help')}
      />
    </div>
  );
}

function NavItem({ icon, label, active, onClick }) {
  return (
    <div 
      className={`flex flex-col items-center cursor-pointer ${active ? 'text-black' : 'text-gray-400'}`}
      onClick={onClick}
    >
      {icon}
      <span className="text-xs mt-1">{label}</span>
    </div>
  );
}