import React from 'react';
import { Plus } from 'lucide-react';

export default function FAQItem({ faq, index, expandedFaq, setExpandedFaq, section }) {
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