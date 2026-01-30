import React, { useState } from 'react';
import { Home, Bus, HandHelping, User, ArrowLeft, Bell, Menu, Search, Ticket, IdCard, MapPin, MessageCircle, Share2, Star, QrCode, Plus, Minus } from 'lucide-react';

// Main App Component
export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [tickets, setTickets] = useState([]);
  const [passes, setPasses] = useState([]);

  const navigate = (page) => setCurrentPage(page);

  const addTicket = (ticket) => {
    setTickets([...tickets, { ...ticket, id: Date.now(), status: 'valid' }]);
  };

  const addPass = (pass) => {
    setPasses([...passes, { ...pass, id: Date.now(), status: 'valid' }]);
  };

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen">
      {currentPage === 'home' && <HomePage navigate={navigate} />}
      {currentPage === 'Bus' && <BusPage navigate={navigate} />}
      {currentPage === 'HandHelping' && <HandHelpingPage navigate={navigate} />}
      {currentPage === 'profile' && <ProfilePage navigate={navigate} tickets={tickets} passes={passes} />}
      {currentPage === 'bus-ticket' && <BusTicketPage navigate={navigate} addTicket={addTicket} />}
      {currentPage === 'daily-pass' && <DailyPassPage navigate={navigate} addPass={addPass} />}
      {currentPage === 'my-tickets' && <MyTicketsPage navigate={navigate} tickets={tickets} />}
      {currentPage === 'my-passes' && <MyPassesPage navigate={navigate} passes={passes} />}
      {currentPage === 'ticket-detail' && <TicketDetailPage navigate={navigate} />}
    </div>
  );
}

// Home Page Component
function HomePage({ navigate }) {
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-teal-500 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <span className="text-red-600 font-bold text-xs">PMPML</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Bell className="text-white" size={24} />
          <User className="text-white" size={24} onClick={() => navigate('profile')} />
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-4 py-4 bg-white">
        <div className="flex items-center gap-3 bg-gray-100 rounded-full px-4 py-3">
          <Search className="text-gray-400" size={20} />
          <input 
            type="text" 
            placeholder="कुठे जायचे आहे?"
            className="bg-transparent flex-1 outline-none text-gray-600"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-4 py-6 overflow-y-auto">
        {/* Ticket Options */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div 
            onClick={() => navigate('bus-ticket')}
            className="bg-blue-50 rounded-2xl p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-blue-100 transition"
          >
            <div className="bg-white p-4 rounded-xl mb-3">
              <Ticket size={32} className="text-black" />
            </div>
            <span className="text-black font-medium text-lg">Bus Ticket</span>
          </div>
          
          <div 
            onClick={() => navigate('daily-pass')}
            className="bg-blue-50 rounded-2xl p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-blue-100 transition"
          >
            <div className="bg-white p-4 rounded-xl mb-3">
              <IdCard size={32} className="text-black" />
            </div>
            <span className="text-black font-medium text-lg">Daily Pass</span>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="flex flex-col items-center cursor-pointer" onClick={() => navigate('my-tickets')}>
            <div className="bg-blue-50 p-4 rounded-xl mb-2">
              <Ticket size={24} className="text-amber-500" />
            </div>
            <span className="text-xs text-center">View Ticket</span>
          </div>
          
          <div className="flex flex-col items-center cursor-pointer" onClick={() => navigate('my-passes')}>
            <div className="bg-blue-50 p-4 rounded-xl mb-2">
              <Ticket size={24} className="text-amber-500" />
            </div>
            <span className="text-xs text-center">View Pass</span>
          </div>
          
          <div className="flex flex-col items-center cursor-pointer">
            <div className="bg-blue-50 p-4 rounded-xl mb-2">
              <MapPin size={24} className="text-black" />
            </div>
            <span className="text-xs text-center">Route Ti metable</span>
          </div>
          
          <div className="flex flex-col items-center cursor-pointer">
            <div className="bg-blue-50 p-4 rounded-xl mb-2">
              <div className="w-6 h-6 rounded-full border-2 border-teal-500 flex items-center justify-center">
                <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
              </div>
            </div>
            <span className="text-xs text-center">Metro Ticket</span>
          </div>
        </div>

        {/* Near Me Section */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Near Me</h2>
            <span className="text-sm underline">Show all</span>
          </div>
          
          <div className="bg-gray-200 rounded-2xl p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="bg-black p-2 rounded-full">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold">Bank Of Maharashtra</p>
                  <p className="text-sm text-gray-600">Hinjawadi Bus Stop</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">221 m</span>
                <MapPin size={20} className="text-red-500" />
              </div>
            </div>

            <div className="space-y-3">
              <div className="bg-white rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-bold bg-gray-100 px-4 py-2 rounded-lg">208</span>
                  <span className="font-medium">Bhekrai Nagar</span>
                </div>
                <div className="bg-black p-2 rounded-lg">
                  <MapPin size={20} className="text-white" />
                </div>
              </div>

              <div className="bg-white rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-bold bg-gray-100 px-4 py-2 rounded-lg">100</span>
                    <div>
                      <p className="font-medium">Ma Na Pa Dengle</p>
                      <p className="text-sm text-gray-600">Pul Nadikathi</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 ml-20 mt-2">
                  <div className="flex items-center gap-2">
                    <div className="bg-black p-1 rounded">
                      <MapPin size={16} className="text-white" />
                    </div>
                    <span className="text-green-600 font-semibold">13 min</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-black p-1 rounded">
                      <MapPin size={16} className="text-white" />
                    </div>
                    <span className="text-green-600 font-semibold">18 min</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-white rounded-xl py-3 font-medium">
                See More Bus
              </button>
            </div>
          </div>
        </div>

        {/* Share Section */}
        <div className="bg-white rounded-2xl p-6 mb-6">
          <p className="text-lg mb-2">Apli PMPML चा आनंद घेत</p>
          <p className="text-lg mb-2">आहात 🤩?</p>
          <p className="text-gray-600 mb-4">तुमच्या मित्रांसोबत शेअर करा</p>
          <button className="border-2 border-teal-500 text-teal-500 rounded-xl px-6 py-2 font-medium">
            आता शेअर करा
          </button>
        </div>

        <div className="text-center text-sm text-gray-500 mb-4">
          Powered by <span className="font-bold text-gray-700">₹ Chartr</span> for PMPML.
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav currentPage="home" navigate={navigate} />
    </div>
  );
}

// Bus Page Component
function BusPage({ navigate }) {
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
          </div>
        </div>

        {/* Location Button */}
        <button className="absolute bottom-24 right-4 bg-white p-4 rounded-full shadow-lg">
          <MapPin size={24} className="text-black" />
        </button>
      </div>

      {/* Bottom Navigation */}
      <BottomNav currentPage="Bus" navigate={navigate} />
    </div>
  );
}

// HandHelping Page Component
function HandHelpingPage({ navigate }) {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const faqs = {
    general: [
      { question: "I am unable to verify my phone number.", answer: "Please check your internet connection and try again. If the issue persists, contact support." }
    ],
    bus: [
      { question: "How many Bus are trackable?", answer: "Currently, most PMPML Bus are equipped with GPS tracking." },
      { question: "What is the frequency of location updates?", answer: "Bus locations are updated every 30 seconds." },
      { question: "Why is no bus showing on the app in my area?", answer: "This could be due to temporary GPS issues or no Bus currently operating on nearby routes." }
    ],
    pass: [
      { question: "Can I book a pass in advance?", answer: "Yes, you can book passes up to 7 days in advance." },
      { question: "My transaction is completed, but the pass is still showing as pending. What should I do?", answer: "Please wait for 5-10 minutes. If the issue persists, contact support with your transaction ID." },
      { question: "It has been 3 minutes, and the pass is still showing as pending. What now?", answer: "Check your internet connection and refresh the app. Contact support if needed." },
      { question: "A pass older than 1 day is still showing as pending.", answer: "Please contact customer support immediately with your booking details." },
      { question: "How can I confirm if I received a refund for my pending pass?", answer: "Check your payment method for refund notifications. It may take 3-5 business days." }
    ]
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      <div className="bg-white px-4 py-4 border-b flex items-center justify-between">
        <ArrowLeft size={24} onClick={() => navigate('home')} className="cursor-pointer" />
        <h1 className="text-xl font-semibold">FAQs</h1>
        <div className="w-6"></div>
      </div>

      {/* FAQs Content */}
      <div className="flex-1 overflow-y-auto p-4">
        {/* General */}
        <div className="mb-6">
          <h2 className="text-green-600 font-bold text-lg mb-3">General</h2>
          {faqs.general.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} expandedFaq={expandedFaq} setExpandedFaq={setExpandedFaq} section="general" />
          ))}
        </div>

        {/* Bus */}
        <div className="mb-6">
          <h2 className="text-green-600 font-bold text-lg mb-3">Bus</h2>
          {faqs.bus.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} expandedFaq={expandedFaq} setExpandedFaq={setExpandedFaq} section="bus" />
          ))}
        </div>

        {/* Pass */}
        <div className="mb-6">
          <h2 className="text-green-600 font-bold text-lg mb-3">Pass</h2>
          {faqs.pass.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} expandedFaq={expandedFaq} setExpandedFaq={setExpandedFaq} section="pass" />
          ))}
        </div>

        {/* Complaint Section */}
        <div className="mt-8 mb-6 text-center">
          <p className="text-gray-700 mb-4">Can't find what you're looking for?</p>
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-medium w-full">
            Raise New Complaint
          </button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav currentPage="HandHelping" navigate={navigate} />
    </div>
  );
}

// FAQ Item Component
function FAQItem({ faq, index, expandedFaq, setExpandedFaq, section }) {
  const isExpanded = expandedFaq === `${section}-${index}`;
  
  return (
    <div className="mb-3 border-b pb-3">
      <div 
        className="flex items-start justify-between cursor-pointer"
        onClick={() => setExpandedFaq(isExpanded ? null : `${section}-${index}`)}
      >
        <p className="flex-1 text-gray-800 pr-4">• {faq.question}</p>
        <Plus size={20} className={`text-gray-600 flex-shrink-0 transition-transform ${isExpanded ? 'rotate-45' : ''}`} />
      </div>
      {isExpanded && (
        <p className="mt-2 text-gray-600 text-sm pl-4">{faq.answer}</p>
      )}
    </div>
  );
}

// Profile Page Component
function ProfilePage({ navigate, tickets, passes }) {
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white px-4 py-4 border-b flex items-center justify-between">
        <ArrowLeft size={24} onClick={() => navigate('home')} className="cursor-pointer" />
        <h1 className="text-xl font-semibold">My Profile</h1>
        <Menu size={24} />
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
          <MenuItem icon={<Ticket size={24} />} text="My Tickets" onClick={() => navigate('my-tickets')} />
          <MenuItem icon={<IdCard size={24} />} text="My Passes" onClick={() => navigate('my-passes')} />
          <MenuItem icon={<MessageCircle size={24} />} text="Complaints" />
          <MenuItem icon={<Share2 size={24} />} text="Share app" />
          <MenuItem icon={<Star size={24} />} text="Rate Us" />
          <MenuItem icon={<QrCode size={24} />} text="Validate Pass / Ticket" />
        </div>

        {/* Social Links */}
        <div className="bg-white mt-6 px-4 py-6">
          <p className="text-gray-600 mb-4">Follow us on :</p>
          <div className="flex gap-6">
            <div className="w-12 h-12 border-2 border-gray-300 rounded-lg flex items-center justify-center">
              <span className="text-red-600 text-xl">▶</span>
            </div>
            <div className="w-12 h-12 border-2 border-gray-300 rounded-lg flex items-center justify-center">
              <span className="text-pink-600 text-xl">📷</span>
            </div>
            <div className="w-12 h-12 border-2 border-gray-300 rounded-lg flex items-center justify-center">
              <span className="text-black text-xl">𝕏</span>
            </div>
          </div>
          <p className="text-gray-500 text-sm mt-6">App version : 1.0.13.1 (25)</p>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav currentPage="profile" navigate={navigate} />
    </div>
  );
}

// Menu Item Component
function MenuItem({ icon, text, onClick }) {
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

// Bus Ticket Page Component
function BusTicketPage({ navigate, addTicket }) {
  const [route, setRoute] = useState('');
  const [startingStop, setStartingStop] = useState('');
  const [endingStop, setEndingStop] = useState('');
  const [fullTickets, setFullTickets] = useState(1);
  const [halfTickets, setHalfTickets] = useState(0);
  const [fareType, setFareType] = useState('fare');

  const calculateFare = () => {
    const baseFare = 30;
    return (fullTickets * baseFare + halfTickets * (baseFare / 2)).toFixed(2);
  };

  const handlePay = () => {
    const ticket = {
      type: 'bus-ticket',
      route,
      startingStop,
      endingStop,
      fullTickets,
      halfTickets,
      fare: calculateFare(),
      bookingTime: new Date().toLocaleString('en-IN', { 
        day: '2-digit', 
        month: 'short', 
        year: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true 
      }),
      validityTime: new Date(Date.now() + 60 * 60 * 1000).toLocaleString('en-IN', { 
        day: '2-digit', 
        month: 'short', 
        year: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true 
      }),
    };
    addTicket(ticket);
    navigate('my-tickets');
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white px-4 py-4 border-b flex items-center justify-between">
        <ArrowLeft size={24} onClick={() => navigate('home')} className="cursor-pointer" />
        <h1 className="text-xl font-semibold">Ticket Details</h1>
        <span className="text-gray-600">04:55</span>
      </div>

      {/* Form Content */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          {/* Date */}
          <div className="bg-green-600 text-white px-4 py-3 rounded-lg mb-6">
            {new Date().toLocaleDateString('en-IN', { 
              day: '2-digit', 
              month: 'short', 
              year: 'numeric'
            })} | {new Date().toLocaleTimeString('en-IN', { 
              hour: '2-digit', 
              minute: '2-digit',
              hour12: true 
            })}
          </div>

          {/* Route Input */}
          <div className="mb-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-green-600 p-3 rounded-full">
                <MapPin size={24} className="text-white" />
              </div>
              <input
                type="text"
                placeholder="Select or enter route"
                value={route}
                onChange={(e) => setRoute(e.target.value)}
                className="flex-1 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-green-600"
              />
            </div>

            {/* Stops */}
            <div className="ml-14 space-y-4">
              <div className="relative">
                <div className="absolute left-0 top-0 w-3 h-3 border-2 border-gray-400 rounded-full bg-white"></div>
                <input
                  type="text"
                  placeholder="Starting stop"
                  value={startingStop}
                  onChange={(e) => setStartingStop(e.target.value)}
                  className="ml-6 w-full text-gray-600 outline-none border-b border-gray-200 pb-2"
                />
              </div>

              <div className="ml-3 border-l-2 border-dashed border-gray-300 h-8"></div>

              <div className="relative">
                <div className="absolute left-0 top-0 w-3 h-3 border-2 border-gray-400 rounded-full bg-white"></div>
                <input
                  type="text"
                  placeholder="Ending stop"
                  value={endingStop}
                  onChange={(e) => setEndingStop(e.target.value)}
                  className="ml-6 w-full text-gray-600 outline-none border-b border-gray-200 pb-2"
                />
              </div>
            </div>
          </div>

          {/* Fare Type Toggle */}
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setFareType('fare')}
              className={`flex-1 py-3 rounded-lg font-medium ${
                fareType === 'fare' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-white border border-gray-300 text-gray-600'
              }`}
            >
              By Fare
            </button>
            <button
              onClick={() => setFareType('ending')}
              className={`flex-1 py-3 rounded-lg font-medium ${
                fareType === 'ending' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-white border border-gray-300 text-gray-600'
              }`}
            >
              By Ending stop
            </button>
          </div>

          {/* Ticket Selection */}
          <div className="mb-6">
            <p className="text-gray-600 mb-3">Ticket Price</p>
            <p className="text-gray-600 mb-4">Select Tickets</p>

            {/* Full Ticket */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-medium">Full</span>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setFullTickets(Math.max(0, fullTickets - 1))}
                  className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center text-xl"
                >
                  -
                </button>
                <span className="text-xl font-medium w-8 text-center">{fullTickets}</span>
                <button
                  onClick={() => setFullTickets(fullTickets + 1)}
                  className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center text-xl"
                >
                  +
                </button>
              </div>
            </div>

            {/* Half Ticket */}
            <div className="flex items-center justify-between">
              <span className="text-lg font-medium">Half</span>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setHalfTickets(Math.max(0, halfTickets - 1))}
                  className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center text-xl"
                >
                  -
                </button>
                <span className="text-xl font-medium w-8 text-center">{halfTickets}</span>
                <button
                  onClick={() => setHalfTickets(halfTickets + 1)}
                  className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center text-xl"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Footer */}
      <div className="bg-white border-t p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-gray-600">PAY USING</span>
          <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-lg">
            <div className="w-6 h-6 bg-purple-600 rounded flex items-center justify-center text-white text-xs">
              ₱
            </div>
            <span>PhonePe</span>
          </button>
        </div>
        <button 
          onClick={handlePay}
          className="w-full bg-green-600 text-white py-4 rounded-lg text-xl font-semibold"
        >
          Pay ₹{calculateFare()}
        </button>
      </div>
    </div>
  );
}

// Daily Pass Page Component
function DailyPassPage({ navigate, addPass }) {
  const [passType, setPassType] = useState('PMC');
  const [aadhaar, setAadhaar] = useState('');

  const passPrices = {
    'PMC': 70.83,
    'All': 150.0
  };

  const handlePay = () => {
    if (aadhaar.length !== 4) {
      alert('Please enter last 4 digits of Aadhaar/PAN');
      return;
    }

    const pass = {
      type: 'daily-pass',
      passType: passType === 'PMC' ? 'PMC & PCMC' : 'All Route',
      aadhaar,
      fare: passPrices[passType],
      bookingTime: new Date().toLocaleString('en-IN', { 
        day: '2-digit', 
        month: 'short', 
        year: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true 
      }),
      validityTime: new Date(Date.now() + 12 * 60 * 60 * 1000).toLocaleString('en-IN', { 
        day: '2-digit', 
        month: 'short', 
        year: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true 
      }),
    };
    addPass(pass);
    navigate('my-passes');
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white px-4 py-4 border-b flex items-center justify-between">
        <ArrowLeft size={24} onClick={() => navigate('home')} className="cursor-pointer" />
        <h1 className="text-xl font-semibold">Daily Pass</h1>
        <span className="text-gray-600">04:57</span>
      </div>

      {/* Form Content */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          {/* Date */}
          <div className="bg-green-600 text-white px-4 py-3 rounded-lg mb-6">
            {new Date().toLocaleDateString('en-IN', { 
              day: '2-digit', 
              month: 'short', 
              year: 'numeric'
            })} | {new Date().toLocaleTimeString('en-IN', { 
              hour: '2-digit', 
              minute: '2-digit',
              hour12: true 
            })}
          </div>

          {/* Pass Type Selection */}
          <div className="mb-6">
            <p className="text-gray-700 font-medium mb-4">Select pass type</p>

            <button
              onClick={() => setPassType('PMC')}
              className={`w-full mb-3 py-4 rounded-lg font-medium text-lg ${
                passType === 'PMC'
                  ? 'bg-green-100 border-2 border-green-600 text-green-700'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              PMC & PCMC - ₹70.0
            </button>

            <button
              onClick={() => setPassType('All')}
              className={`w-full py-4 rounded-lg font-medium text-lg ${
                passType === 'All'
                  ? 'bg-green-100 border-2 border-green-600 text-green-700'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              All Route - ₹150.0
            </button>

            {passType === 'PMC' && (
              <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                <p className="text-sm text-yellow-800">
                  Valid in all routes of PMC and PCMC
                </p>
              </div>
            )}
          </div>

          {/* Aadhaar Input */}
          <div className="mb-6">
            <p className="text-gray-700 font-medium mb-3">
              Enter last 4 digits of your Aadhaar Card or Pan Card
            </p>

            <div className="flex justify-center gap-4 mb-4">
              {[0, 1, 2, 3].map((index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  value={aadhaar[index] || ''}
                  onChange={(e) => {
                    const newAadhaar = aadhaar.split('');
                    newAadhaar[index] = e.target.value;
                    setAadhaar(newAadhaar.join(''));
                    if (e.target.value && index < 3) {
                      e.target.nextElementSibling?.focus();
                    }
                  }}
                  className="w-16 h-16 text-center text-2xl border-2 border-gray-300 rounded-lg outline-none focus:border-green-600"
                />
              ))}
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
              <p className="text-sm text-yellow-800">
                You should have a valid ID with above details.
              </p>
            </div>
          </div>

          {/* Final Fare */}
          <div className="border-2 border-gray-300 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-lg font-semibold">Final Fare</span>
                <div className="w-5 h-5 bg-gray-300 rounded-full flex items-center justify-center text-xs">
                  i
                </div>
              </div>
              <span className="text-2xl font-bold text-green-600">
                ₹{passPrices[passType]}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Footer */}
      <div className="bg-white border-t p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-gray-600">PAY USING</span>
          <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-lg">
            <div className="w-6 h-6 bg-purple-600 rounded flex items-center justify-center text-white text-xs">
              ₱
            </div>
            <span>PhonePe</span>
          </button>
        </div>
        <button 
          onClick={handlePay}
          className="w-full bg-green-600 text-white py-4 rounded-lg text-xl font-semibold"
        >
          ₹{passPrices[passType]}
        </button>
      </div>
    </div>
  );
}

// My Tickets Page Component
function MyTicketsPage({ navigate, tickets }) {
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white px-4 py-4 border-b flex items-center justify-between">
        <ArrowLeft size={24} onClick={() => navigate('profile')} className="cursor-pointer" />
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
              onClick={() => navigate('bus-ticket')}
              className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg"
            >
              Book a Ticket
            </button>
          </div>
        ) : (
          tickets.map((ticket) => (
            <TicketCard key={ticket.id} ticket={ticket} navigate={navigate} />
          ))
        )}
      </div>

      {/* Bottom Navigation */}
      <BottomNav currentPage="profile" navigate={navigate} />
    </div>
  );
}

// My Passes Page Component
function MyPassesPage({ navigate, passes }) {
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white px-4 py-4 border-b flex items-center justify-between">
        <ArrowLeft size={24} onClick={() => navigate('profile')} className="cursor-pointer" />
        <h1 className="text-xl font-semibold">My Passes</h1>
        <div className="w-6"></div>
      </div>

      {/* Passes List */}
      <div className="flex-1 overflow-y-auto p-4">
        {passes.length === 0 ? (
          <div className="text-center py-12">
            <IdCard size={64} className="text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">No passes yet</p>
            <button 
              onClick={() => navigate('daily-pass')}
              className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg"
            >
              Book a Pass
            </button>
          </div>
        ) : (
          passes.map((pass) => (
            <PassCard key={pass.id} pass={pass} navigate={navigate} />
          ))
        )}
      </div>

      {/* Bottom Navigation */}
      <BottomNav currentPage="profile" navigate={navigate} />
    </div>
  );
}

// Ticket Card Component
function TicketCard({ ticket, navigate }) {
  const isExpired = ticket.status === 'expired';
  
  return (
    <div className="bg-white rounded-2xl p-6 mb-4 shadow-sm relative overflow-hidden">
      {/* Header */}
      <div className="bg-red-500 text-white px-4 py-2 rounded-lg mb-4 text-center">
        पुणे महानगर परिवहन महामंडळ लि.
      </div>

      {/* Ticket Details */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <p className="text-gray-600 text-sm">Route</p>
          <p className="font-bold text-lg">{ticket.route || '100'}</p>
        </div>
        <div>
          <p className="text-gray-600 text-sm">Tickets count</p>
          <p className="font-bold text-lg">{ticket.fullTickets}</p>
        </div>
        <div>
          <p className="text-gray-600 text-sm">Fare</p>
          <p className="font-bold text-lg">₹{ticket.fare}</p>
        </div>
      </div>

      {/* Route Info */}
      <div className="mb-4 py-3 border-t border-b border-dashed border-gray-300">
        <div className="flex items-center justify-between">
          <span className="text-gray-700">{ticket.startingStop || 'Tata Johnson'}</span>
          <span className="text-gray-400">————→</span>
          <span className="text-gray-700">{ticket.endingStop || 'Hinjawadi Jakat Naka'}</span>
        </div>
      </div>

      {/* Timing */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-gray-600 text-sm">Booking Time</p>
          <p className="text-gray-800">{ticket.bookingTime}</p>
        </div>
        <div>
          <p className="text-gray-600 text-sm">Validity Time</p>
          <p className="text-gray-800">{ticket.validityTime}</p>
        </div>
      </div>

      {/* Transaction ID */}
      <p className="text-gray-500 text-xs mb-4">{ticket.id}</p>

      {/* Logo */}
      <div className="flex justify-center mb-4">
        <div className={`w-32 h-32 rounded-full border-4 border-gray-300 flex items-center justify-center ${!isExpired ? 'animate-pulse' : ''}`}>
          <div className="text-center">
            <div className="text-gray-400 text-xs mb-1">परिवहन</div>
            <div className="text-red-600 font-bold text-2xl">PMPML</div>
            <div className="text-gray-400 text-xs mt-1">सेवा</div>
          </div>
        </div>
      </div>

      {/* Status */}
      <div className="text-center">
        <p className={`font-semibold ${isExpired ? 'text-red-600' : 'text-green-600'}`}>
          {isExpired ? 'Expired' : 'Valid'}
        </p>
      </div>

      {/* QR Code Button */}
      <button className="w-full bg-green-100 border-2 border-green-600 text-green-700 py-3 rounded-lg mt-4 flex items-center justify-center gap-2">
        <QrCode size={20} />
        Show QR code
      </button>

      {/* Invalid Watermark */}
      {isExpired && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-red-600 text-6xl font-bold opacity-20 rotate-[-30deg]">
            INVALID
          </div>
        </div>
      )}
    </div>
  );
}

// Pass Card Component
function PassCard({ pass, navigate }) {
  const isExpired = pass.status === 'expired';
  
  return (
    <div className="bg-white rounded-2xl p-6 mb-4 shadow-sm relative overflow-hidden">
      {/* Header */}
      <div className="bg-red-500 text-white px-4 py-2 rounded-lg mb-4 text-center">
        पुणे महानगर परिवहन महामंडळ लि.
      </div>

      {/* Pass Details */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <p className="text-gray-600 text-sm">Pass Type</p>
          <p className="font-bold">{pass.passType}</p>
        </div>
        <div>
          <p className="text-gray-600 text-sm">ID</p>
          <p className="font-bold">{pass.aadhaar}</p>
        </div>
        <div>
          <p className="text-gray-600 text-sm">Fare</p>
          <p className="font-bold">₹{pass.fare}</p>
        </div>
      </div>

      {/* Pass Type Label */}
      <div className="mb-4 py-3 border-t border-b border-dashed border-gray-300 text-center">
        <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium">
          One Day Pass
        </span>
      </div>

      {/* Timing */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-gray-600 text-sm">Booking Time</p>
          <p className="text-gray-800">{pass.bookingTime}</p>
        </div>
        <div>
          <p className="text-gray-600 text-sm">Validity Time</p>
          <p className="text-gray-800">{pass.validityTime}</p>
        </div>
      </div>

      {/* Transaction ID */}
      <p className="text-gray-500 text-xs mb-4">{pass.id}</p>

      {/* Logo */}
      <div className="flex justify-center mb-4">
        <div className={`w-32 h-32 rounded-full border-4 border-gray-300 flex items-center justify-center ${!isExpired ? 'animate-pulse' : ''}`}>
          <div className="text-center">
            <div className="text-gray-400 text-xs mb-1">परिवहन</div>
            <div className="text-red-600 font-bold text-2xl">PMPML</div>
            <div className="text-gray-400 text-xs mt-1">सेवा</div>
          </div>
        </div>
      </div>

      {/* Status */}
      <div className="text-center">
        <p className={`font-semibold ${isExpired ? 'text-red-600' : 'text-green-600'}`}>
          {isExpired ? 'Expired' : 'Valid'}
        </p>
      </div>

      {/* QR Code Button */}
      <button className="w-full bg-green-100 border-2 border-green-600 text-green-700 py-3 rounded-lg mt-4 flex items-center justify-center gap-2">
        <QrCode size={20} />
        Show QR code
      </button>

      {/* Invalid Watermark */}
      {isExpired && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-red-600 text-6xl font-bold opacity-20 rotate-[-30deg]">
            INVALID
          </div>
        </div>
      )}
    </div>
  );
}

// Bottom Navigation Component
function BottomNav({ currentPage, navigate }) {
  return (
    <div className="bg-white border-t flex items-center justify-around py-3">
      <NavItem 
        icon={<Home size={24} />} 
        label="Home" 
        active={currentPage === 'home'}
        onClick={() => navigate('home')}
      />
      <NavItem 
        icon={<MapPin size={24} />} 
        label="Bus" 
        active={currentPage === 'Bus'}
        onClick={() => navigate('Bus')}
      />
      <NavItem 
        icon={<MessageCircle size={24} />} 
        label="HandHelping" 
        active={currentPage === 'HandHelping'}
        onClick={() => navigate('HandHelping')}
      />
    </div>
  );
}

// Navigation Item Component
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

// Ticket Detail Page (for reference)
function TicketDetailPage({ navigate }) {
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <div className="bg-white px-4 py-4 border-b flex items-center">
        <ArrowLeft size={24} onClick={() => navigate('my-tickets')} className="cursor-pointer" />
        <h1 className="text-xl font-semibold ml-4">Ticket Details</h1>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <p className="text-gray-500">Ticket details view</p>
      </div>
    </div>
  );
}