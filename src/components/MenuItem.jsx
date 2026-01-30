import React from 'react';

export default function MenuItem({ icon, text, onClick }) {
  return (
    <div 
      className="flex items-center gap-4 px-4 py-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50"
      onClick={onClick}
    >
      <div className="text-gray-700">{icon}</div>
      <span className="text-gray-800">{text}</span>
    </div>
  );
}