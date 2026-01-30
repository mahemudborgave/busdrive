import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BusesPage from './pages/BusesPage';
import HelpPage from './pages/HelpPage';
import ProfilePage from './pages/ProfilePage';
import BusTicketPage from './pages/BusTicketPage';
import DailyPassPage from './pages/DailyPassPage';
import MyTicketsPage from './pages/MyTicketsPage';
import MyPassesPage from './pages/MyPassesPage';
import TicketDetailPage from './pages/TicketDetailPage';

export default function App() {
  const [tickets, setTickets] = useState([]);
  const [passes, setPasses] = useState([]);

  const addTicket = (ticket) => {
    setTickets([...tickets, { ...ticket, id: Date.now(), status: 'valid' }]);
  };

  const addPass = (pass) => {
    setPasses([...passes, { ...pass, id: Date.now(), status: 'valid' }]);
  };

  return (
    <Router>
      <div className="max-w-md mx-auto bg-white min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/buses" element={<BusesPage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/profile" element={<ProfilePage tickets={tickets} passes={passes} />} />
          <Route path="/bus-ticket" element={<BusTicketPage addTicket={addTicket} />} />
          <Route path="/daily-pass" element={<DailyPassPage addPass={addPass} />} />
          <Route path="/my-tickets" element={<MyTicketsPage tickets={tickets} />} />
          <Route path="/my-passes" element={<MyPassesPage passes={passes} />} />
          <Route path="/ticket-detail/:id" element={<TicketDetailPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}