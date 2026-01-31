import React from 'react';

export default function MenuItem({ icon, text, onClick, badge, danger, disabled }) {
  return (
    <div 
      className={`flex items-center justify-between px-4 py-4 border-b border-gray-100 ${
        disabled 
          ? 'opacity-50 cursor-not-allowed' 
          : 'cursor-pointer hover:bg-gray-50'
      } ${danger && !disabled ? 'bg-red-50 hover:bg-red-100' : ''}`}
      onClick={disabled ? undefined : onClick}
    >
      <div className="flex items-center gap-4">
        <div className={danger && !disabled ? 'text-red-600' : 'text-gray-700'}>{icon}</div>
        <span className={danger && !disabled ? 'text-red-600 font-medium' : 'text-gray-800'}>{text}</span>
      </div>
      {badge && (
        <div className="bg-green-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
          {badge}
        </div>
      )}
    </div>
  );
}