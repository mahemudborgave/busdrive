import React, { createContext, useContext, useState, useEffect } from 'react';

// Create Context
const AppContext = createContext();

// Custom hook to use the context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};

// Provider Component
export const AppProvider = ({ children }) => {
  // Initialize state from localStorage
  const [tickets, setTickets] = useState(() => {
    try {
      const savedTickets = localStorage.getItem('pmpml-tickets');
      return savedTickets ? JSON.parse(savedTickets) : [];
    } catch (error) {
      console.error('Error loading tickets:', error);
      return [];
    }
  });

  const [passes, setPasses] = useState(() => {
    try {
      const savedPasses = localStorage.getItem('pmpml-passes');
      return savedPasses ? JSON.parse(savedPasses) : [];
    } catch (error) {
      console.error('Error loading passes:', error);
      return [];
    }
  });

  // Save tickets to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem('pmpml-tickets', JSON.stringify(tickets));
    } catch (error) {
      console.error('Error saving tickets:', error);
    }
  }, [tickets]);

  // Save passes to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem('pmpml-passes', JSON.stringify(passes));
    } catch (error) {
      console.error('Error saving passes:', error);
    }
  }, [passes]);

  // Add a new ticket
  const addTicket = (ticket) => {
    const newTicket = {
      ...ticket,
      id: Date.now(),
      status: 'valid',
      createdAt: new Date().toISOString()
    };
    setTickets(prevTickets => [...prevTickets, newTicket]);
    return newTicket;
  };

  // Add a new pass
  const addPass = (pass) => {
    const newPass = {
      ...pass,
      id: Date.now(),
      status: 'valid',
      createdAt: new Date().toISOString()
    };
    setPasses(prevPasses => [...prevPasses, newPass]);
    return newPass;
  };

  // Update ticket status
  const updateTicketStatus = (ticketId, status) => {
    setTickets(prevTickets =>
      prevTickets.map(ticket =>
        ticket.id === ticketId ? { ...ticket, status } : ticket
      )
    );
  };

  // Update pass status
  const updatePassStatus = (passId, status) => {
    setPasses(prevPasses =>
      prevPasses.map(pass =>
        pass.id === passId ? { ...pass, status } : pass
      )
    );
  };

  // Delete a ticket
  const deleteTicket = (ticketId) => {
    setTickets(prevTickets => prevTickets.filter(ticket => ticket.id !== ticketId));
  };

  // Delete a pass
  const deletePass = (passId) => {
    setPasses(prevPasses => prevPasses.filter(pass => pass.id !== passId));
  };

  // Clear all tickets only
  const clearAllTickets = () => {
    setTickets([]);
    localStorage.removeItem('pmpml-tickets');
  };

  // Clear all passes only
  const clearAllPasses = () => {
    setPasses([]);
    localStorage.removeItem('pmpml-passes');
  };

  // Clear all data
  const clearAllData = () => {
    setTickets([]);
    setPasses([]);
    localStorage.removeItem('pmpml-tickets');
    localStorage.removeItem('pmpml-passes');
    localStorage.removeItem('pmpml-install-dismissed');
  };

  // Get active (valid) tickets
  const activeTickets = tickets.filter(ticket => ticket.status === 'valid');

  // Get active (valid) passes
  const activePasses = passes.filter(pass => pass.status === 'valid');

  const value = {
    // State
    tickets,
    passes,
    activeTickets,
    activePasses,
    
    // Actions
    addTicket,
    addPass,
    updateTicketStatus,
    updatePassStatus,
    deleteTicket,
    deletePass,
    clearAllTickets,
    clearAllPasses,
    clearAllData,
    
    // Computed values
    ticketCount: tickets.length,
    passCount: passes.length,
    activeTicketCount: activeTickets.length,
    activePassCount: activePasses.length
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};