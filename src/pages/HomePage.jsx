import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, User, Search, Ticket, IdCard, MapPin } from 'lucide-react';
import BottomNav from '../components/BottomNav';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsSharpIcon from '@mui/icons-material/NotificationsSharp';
import ConfirmationNumberSharpIcon from '@mui/icons-material/ConfirmationNumberSharp';
import AssignmentIndSharpIcon from '@mui/icons-material/AssignmentIndSharp';
import AltRouteTwoToneIcon from '@mui/icons-material/AltRouteTwoTone';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import DirectionsIcon from '@mui/icons-material/Directions';

export default function HomePage() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col h-screen bg-[#FEFAF9]">
            {/* Header */}
            <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                        <img src="pmpml-logo.webp" alt="logo" />
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <NotificationsSharpIcon className="text-black" style={{ fontSize: 25 }} />
                    <AccountCircleIcon className="text-black cursor-pointer" style={{ fontSize: 32 }} onClick={() => navigate('/profile')} />
                </div>
            </div>

            {/* Search Bar */}
            <div className="px-3 py-2 bg-white m-2 border border-gray-200 rounded-2xl">
                <div className="flex items-center gap-3 bg-gray-200 rounded-full px-4 py-3">
                    <Search className="text-gray-700" size={20} />
                    <input
                        type="text"
                        placeholder="कुठे जायचे आहे?"
                        className="bg-transparent flex-1 outline-none text-gray-700"
                    />
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 px-4 py-6 overflow-y-auto">
                {/* Ticket Options */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div
                        onClick={() => navigate('/bus-ticket')}
                        className="rounded-2xl flex flex-col items-center justify-center cursor-pointer"
                    >
                        <div className="bg-sky-100 shadow w-full flex items-center justify-center p-4 rounded-xl mb-2">
                            <ConfirmationNumberSharpIcon className="text-black" style={{ fontSize: 30 }} />
                        </div>
                        <span className="text-black text-base">Bus Ticket</span>
                    </div>

                    <div
                        onClick={() => navigate('/daily-pass')}
                        className="rounded-2xl flex flex-col items-center justify-center cursor-pointer"
                    >
                        <div className="bg-sky-100 shadow w-full flex items-center justify-center p-4 rounded-xl mb-2">
                            <AssignmentIndSharpIcon className="text-black" style={{ fontSize: 30 }} />
                        </div>
                        <span className="text-black text-base">Daily Pass</span>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-4 gap-4 mb-6">
                    <div className="flex flex-col items-center cursor-pointer" onClick={() => navigate('/my-tickets')}>
                        <div className="bg-sky-100 shadow p-4 rounded-xl mb-2">
                            <img src="fold-ticket.png" className='w-7' alt="fold-ticket.png" />
                        </div>
                        <span className="text-base text-center">View Ticket</span>
                    </div>

                    <div className="flex flex-col items-center cursor-pointer" onClick={() => navigate('/my-passes')}>
                        <div className="bg-sky-100 shadow p-4 rounded-xl mb-2">
                            <img src="fold-ticket.png" className='w-7' alt="fold-ticket.png" />
                        </div>
                        <span className="text-base text-center">View Pass</span>
                    </div>

                    <div className="flex flex-col items-center cursor-pointer">
                        <div className="bg-sky-100 shadow p-4 rounded-xl mb-2">
                            <AltRouteTwoToneIcon style={{ fontSize: 30 }} className="text-black" />
                        </div>
                        <span className="text-base text-center">Route Ti metable</span>
                    </div>

                    <div className="flex flex-col items-center cursor-pointer">
                        <div className="bg-sky-100 shadow p-2 rounded-xl mb-2">
                            <img src="PuneMetro_logo.png" className='w-12' alt="PuneMetro_logo.png" />
                        </div>
                        <span className="text-base text-center">Metro Ticket</span>
                    </div>
                </div>

                {/* Near Me Section */}
                <div className="mb-4">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-medium">Near Me</h2>
                        <span className="text-gray-700 text-sm underline cursor-pointer">Show all</span>
                    </div>

                    <div className="bg-gray-200 rounded-2xl p-1">
                        <div className="flex items-center justify-between mb-4 px-4 py-2">
                            <div className="flex items-center gap-3">
                                <div className="bg-black p-1 rounded-full flex items-center justify-center">
                                    <DirectionsBusIcon style={{ fontSize: 15 }} className="text-white" />
                                </div>
                                <div>
                                    <p className="">Bank Of Maharashtra</p>
                                    <p className="">Hinjawadi Bus Stop</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-gray-700">221 m</span>
                                <DirectionsIcon style={{ fontSize: 20 }} className="text-red-500" />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <div className="bg-white p-4 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <span className="text-lg font-semibold bg-gray-200 px-5 py-3 rounded-lg">208</span>
                                    <span className="">Bhekrai Nagar</span>
                                </div>
                                <div className="p-2 rounded-lg">
                                    <DirectionsBusIcon size={20} className="text-black" />
                                </div>
                            </div>

                            <div className="bg-white p-4">
                                <div className="">
                                    <div className="flex items-center justify-between  gap-4">
                                        <span className="text-xl font-semibold bg-gray-200 px-5 py-3 rounded-lg">100</span>
                                        <div className='flex-1'>
                                            <p>Ma Na Pa Dengle</p>
                                            <p>Pul Nadikathi</p>
                                        </div>
                                        <div className="gap-2 mt-2">
                                            <div className="flex items-center gap-1 border-b border-gray-400 pb-1 mb-1">
                                                <div className="rounded-lg">
                                                    <DirectionsBusIcon className="text-black" />
                                                </div>
                                                <span className="text-green-600">13 min</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <div className="rounded-lg">
                                                    <DirectionsBusIcon className="text-black" />
                                                </div>
                                                <span className="text-green-600">18 min</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <button className="w-full text-gray-700">
                                See More Buses
                            </button>
                        </div>
                    </div>
                </div>

                {/* Nearby Section */}
                <div className="rounded-2xl mb-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-medium">Nearby</h2>
                    </div>
                </div>

                {/* Share Section */}
                <div className="rounded-2xl p-6 mb-6">
                    <p className="text-lg mb-1">Apli PMPML चा आनंद घेत</p>
                    <p className="text-lg mb-1">आहात 😍?</p>
                    <p className="mb-4">तुमच्या मित्रांसोबत शेअर करा</p>
                    <button className="border-2 border-gray-200 text-teal-500 rounded-xl px-6 py-2 font-medium">
                        आता शेअर करा
                    </button>
                </div>

                <div className="text-center text-sm text-gray-500 mb-4">
                    Powered by <img src="chartr.webp" className='inline-block h-4 mx-2' alt="chartr.webp" /> for PMPML.
                </div>
            </div>

            {/* Bottom Navigation */}
            <BottomNav currentPage="home" />
        </div>
    );
}