import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Plus } from 'lucide-react';
import BottomNav from '../components/BottomNav';
import FAQItem from '../components/FAQItem';

export default function HelpPage() {
  const navigate = useNavigate();
  const [expandedFaq, setExpandedFaq] = useState(null);

  const faqs = {
    general: [
      { question: "I am unable to verify my phone number.", answer: "Please check your internet connection and try again. If the issue persists, contact support." }
    ],
    bus: [
      { question: "How many buses are trackable?", answer: "Currently, most PMPML buses are equipped with GPS tracking." },
      { question: "What is the frequency of location updates?", answer: "Bus locations are updated every 30 seconds." },
      { question: "Why is no bus showing on the app in my area?", answer: "This could be due to temporary GPS issues or no buses currently operating on nearby routes." }
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
        <ArrowLeft size={24} onClick={() => navigate('/')} className="cursor-pointer" />
        <h1 className="text-xl font-semibold">FAQs</h1>
        <div className="w-6"></div>
      </div>

      {/* FAQs Content */}
      <div className="flex-1 overflow-y-auto p-4">
        {/* General */}
        <div className="mb-6">
          <h2 className="text-green-600 font-bold text-lg mb-3">General</h2>
          {faqs.general.map((faq, index) => (
            <FAQItem 
              key={index} 
              faq={faq} 
              index={index} 
              expandedFaq={expandedFaq} 
              setExpandedFaq={setExpandedFaq} 
              section="general" 
            />
          ))}
        </div>

        {/* Bus */}
        <div className="mb-6">
          <h2 className="text-green-600 font-bold text-lg mb-3">Bus</h2>
          {faqs.bus.map((faq, index) => (
            <FAQItem 
              key={index} 
              faq={faq} 
              index={index} 
              expandedFaq={expandedFaq} 
              setExpandedFaq={setExpandedFaq} 
              section="bus" 
            />
          ))}
        </div>

        {/* Pass */}
        <div className="mb-6">
          <h2 className="text-green-600 font-bold text-lg mb-3">Pass</h2>
          {faqs.pass.map((faq, index) => (
            <FAQItem 
              key={index} 
              faq={faq} 
              index={index} 
              expandedFaq={expandedFaq} 
              setExpandedFaq={setExpandedFaq} 
              section="pass" 
            />
          ))}
        </div>

        {/* Complaint Section */}
        <div className="mt-8 mb-6 text-center">
          <p className="text-gray-700 mb-4">Can't find what you're looking for?</p>
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-medium w-full hover:bg-green-700">
            Raise New Complaint
          </button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav currentPage="help" />
    </div>
  );
}