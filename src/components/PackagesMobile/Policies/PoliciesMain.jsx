import React, { useState } from "react";
import PoliciesModal from "./PoliciesModal";

export default function PoliciesMain() {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAccordionToggle = (index) => {
    if (activeAccordion === index) {
      setActiveAccordion(null);
      setIsModalOpen(false); // Close modal if accordion is collapsed
    } else {
      setActiveAccordion(index);
      setIsModalOpen(true); // Open modal if accordion is expanded
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <div className="accordion-group mt-[-20px]" data-accordion="default-accordion">
        <div
          className={`accordion py-4 px-6 mb-7 transition-all duration-500 bg-gray-50 rounded-2xl hover:bg-indigo-50 ${
            activeAccordion === 0 ? "accordion-active:bg-indigo-50" : ""
          }`}
          id="basic-heading-one-with-arrow"
        >
          <button
            className={`accordion-toggle group inline-flex items-center justify-between leading-8 text-gray-900 w-full transition duration-500 text-left hover:text-indigo-600 ${
              activeAccordion === 0 ? "accordion-active:text-indigo-600" : ""
            }`}
            aria-controls="basic-collapse-one-with-arrow"
            onClick={() => handleAccordionToggle(0)}
          >
            <div>
              <h3 className="text-blue-400 text-lg font-bold">
                Policies
              </h3>
            </div>
            <svg
              className={`text-gray-500 transition duration-500 group-hover:text-indigo-600 ${
                activeAccordion === 0
                  ? "accordion-active:text-indigo-600 accordion-active:rotate-180"
                  : ""
              }`}
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div
            id="basic-collapse-one-with-arrow"
            className={`accordion-content w-full px-0 overflow-hidden ${
              activeAccordion === 0 ? "h-auto" : "max-h-0"
            }`}
            aria-labelledby="basic-heading-one-with-arrow"
          >
          </div>
        </div>
      </div>
      {/* Render TermsModal with isOpen and toggleModal props */}
      <PoliciesModal isOpen={isModalOpen} toggleModal={toggleModal} />
    </div>
  );
}
