import React, { useState } from "react";
import ItineraryButton from "./ItineraryButton";
import DayButton from "./DayButton";
import DayPlan from "./DayPlan";
import Transfer from "./Transfer";
import Places from "./Places";
import Hotel from "./Hotel";
import SummaryMain from "./Summary/SummaryMain";

export default function Accordion() {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [activeSection, setActiveSection] = useState(null);
  const [activeDay, setActiveDay] = useState("Day 1");

  const handleAccordionToggle = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const handleButtonClick = (buttonName) => {
    setActiveSection(buttonName);
  };

  const handleDayButtonClick = (day) => {
    setActiveDay(day);
  };

  const renderComponents = (index) => (
    <div>
      <DayPlan activeDay={index+1} />
      {(activeSection === null || activeSection === "TRANSFERS" || activeSection === "DAYPLAN") && <Transfer />}
      {(activeSection === null || activeSection === "ACTIVITIES" || activeSection === "DAYPLAN") && <Places />}
      {(activeSection === null || activeSection === "HOTELS" || activeSection === "DAYPLAN") && <Hotel />}
      {activeSection === "SUMMARY" && <SummaryMain />}
    </div>
  );

  return (
    <div>
      <div className="accordion-group" data-accordion="default-accordion">
        <div
          className={`accordion mb-7 transition-all duration-500 bg-gray-50 hover:bg-indigo-50 ${
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
            <div className="p-3">
              <h3 className="text-black text-lg font-bold">ITINERARY</h3>
              <p className="text-black mt-[-2%]">Day wise Details of your package</p>
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
            className={`accordion-content w-full px-0 overflow-hidden transition-max-height duration-500 ease-in-out ${
              activeAccordion === 0 ? "h-full" : "max-h-0"
            }`}
            aria-labelledby="basic-heading-one-with-arrow"
          >
            {activeAccordion === 0 && (
              <div className="bg-blue-100 p-1">
                <ItineraryButton onButtonClick={handleButtonClick} />
                <DayButton onButtonClick={handleDayButtonClick} />
              </div>
            )}
            {activeAccordion === 0 && (
              <div className="overflow-y-auto h-full">
                {Array.from({ length: 5 }).map((_, index) => (
                  <React.Fragment key={index}>
                    {renderComponents(index)}
                  </React.Fragment>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
