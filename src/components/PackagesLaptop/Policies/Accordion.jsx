import React, { useState } from 'react';
import TermsAndCondition from './TermsAndCondition';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion-group w-[95%]">
        {/* Cancellation & Date Change */}
      <div
        className={`group accordion mb-8 py-4 px-6 bg-gray-50 rounded-xl transition-all duration-500 ${
          activeIndex === 0 ? 'bg-indigo-50' : 'hover:bg-indigo-50'
        }`}
      >
        <button
          className={`accordion-toggle group inline-flex items-center justify-between text-left leading-8 text-gray-900 w-full transition duration-500 ${
            activeIndex === 0 ? 'text-indigo-600' : 'group-hover:text-indigo-600'
          }`}
          aria-controls={`collapse-1`}
          onClick={() => toggleAccordion(0)}
        >
          <h3 className="text-2xl font-medium">Cancellation & Date Change</h3>
          <svg
            className={`text-gray-400 transition duration-500 w-6 h-6 ${
              activeIndex === 0 ? 'text-indigo-600 rotate-90' : 'group-hover:text-indigo-600'
            }`}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 12L19 12M14 18L19.2929 12.7071C19.6262 12.3738 19.7929 12.2071 19.7929 12C19.7929 11.7929 19.6262 11.6262 19.2929 11.2929L14 6"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
        <div
          id={`collapse-1`}
          className={`accordion-content w-full px-0 overflow-hidden transition-all duration-500 ${
            activeIndex === 0 ? 'max-h-screen' : 'max-h-0'
          }`}
          aria-labelledby={`heading-1`}
        >
          <h3 className="text-2xl font-medium mt-[2%]">Package Cancellation Policy</h3>
          <p className="text-red-600 mt-[1%]">Cancellation not possible after booking</p>
          <h3 className="text-2xl font-medium mt-[2%]">Package Date Change Policy</h3>
          <p className="text-red-600 mt-[1%]">Date Change not possible after booking</p>
        </div>
      </div>
      {/* Terms and Conditions */}
      <div
        className={`group accordion mb-8 py-4 px-6 bg-gray-50 rounded-xl transition-all duration-500 ${
          activeIndex === 1 ? 'bg-indigo-50' : 'hover:bg-indigo-50'
        }`}
      >
        <button
          className={`accordion-toggle group inline-flex items-center justify-between text-left leading-8 text-gray-900 w-full transition duration-500 ${
            activeIndex === 1 ? 'text-indigo-600' : 'group-hover:text-indigo-600'
          }`}
          aria-controls={`collapse-1`}
          onClick={() => toggleAccordion(1)}
        >
          <h3 className="text-2xl font-medium">Terms and Conditions</h3>
          <svg
            className={`text-gray-400 transition duration-500 w-6 h-6 ${
              activeIndex === 0 ? 'text-indigo-600 rotate-90' : 'group-hover:text-indigo-600'
            }`}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 12L19 12M14 18L19.2929 12.7071C19.6262 12.3738 19.7929 12.2071 19.7929 12C19.7929 11.7929 19.6262 11.6262 19.2929 11.2929L14 6"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
        <div
          id={`collapse-1`}
          className={`accordion-content w-full px-0 overflow-hidden transition-all duration-500 ${
            activeIndex === 1 ? 'h-full' : 'max-h-0'
          }`}
          aria-labelledby={`heading-1`}
        >
          <TermsAndCondition></TermsAndCondition>
        </div>
      </div>
      
    </div>
  );
};

export default Accordion;
