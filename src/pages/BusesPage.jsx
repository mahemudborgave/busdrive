import React from 'react';
import { Search, MapPin } from 'lucide-react';
import BottomNav from '../components/BottomNav';

export default function BusesPage() {
  return (
    <div className="flex flex-col h-screen">
      {/* Map View */}
      <div className="flex-1 relative bg-gray-200">
        <div className="absolute top-4 left-4 right-4 z-10">
          <div className="flex items-center gap-3 bg-white rounded-full px-4 py-3 shadow-lg">
            <Search className="text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Enter Route"
              className="bg-transparent flex-1 outline-none"
            />
          </div>
        </div>

        {/* Map placeholder with bus stops */}
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-300 to-gray-100">
          <div className="text-center">
            <MapPin size={48} className="text-pink-600 mx-auto mb-2" />
            <p className="text-gray-600">Bus stops will appear here</p>
            <p className="text-sm text-gray-500">Multiple bus routes shown on map</p>
            <div className="mt-4 flex gap-2 justify-center flex-wrap">
              <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">324</span>
              <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">327</span>
              <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">345</span>
              <span className="bg-white px-3 py-1 rounded-full text-sm border-2 border-black">208</span>
            </div>
          </div>
        </div>

        {/* Location Button */}
        <button className="absolute bottom-24 right-4 bg-white p-4 rounded-full shadow-lg hover:bg-gray-50">
          <MapPin size={24} className="text-black" />
        </button>
      </div>

      {/* Bottom Navigation */}
      <BottomNav currentPage="buses" />
    </div>
  );
}