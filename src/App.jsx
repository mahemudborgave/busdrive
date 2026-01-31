import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import HomePage from './pages/HomePage';
import BusesPage from './pages/BusesPage';
import HelpPage from './pages/HelpPage';
import ProfilePage from './pages/ProfilePage';
import BusTicketPage from './pages/BusTicketPage';
import DailyPassPage from './pages/DailyPassPage';
import MyTicketsPage from './pages/MyTicketsPage';
import MyPassesPage from './pages/MyPassesPage';
import TicketDetailPage from './pages/TicketDetailPage';
// import InstallPrompt from './components/InstallPrompt';

export default function App() {
  return (
    <AppProvider>
      <Router>
        <div className="max-w-md mx-auto bg-white min-h-screen">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/buses" element={<BusesPage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/bus-ticket" element={<BusTicketPage />} />
            <Route path="/daily-pass" element={<DailyPassPage />} />
            <Route path="/my-tickets" element={<MyTicketsPage />} />
            <Route path="/my-passes" element={<MyPassesPage />} />
            <Route path="/ticket-detail/:id" element={<TicketDetailPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          
          {/* PWA Install Prompt */}
          {/* <InstallPrompt /> */}
        </div>
      </Router>
    </AppProvider>
  );
}