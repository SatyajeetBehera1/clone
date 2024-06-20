import React, { useRef, useEffect } from "react";
import Carousel from "./Carousel";
import Shared from "./Shared";
import Stay from "./Stay";
import Activities from "./Activities";

const Accordion = ({ activeDayIndex, setActiveDayIndex }) => {
  const accordionRefs = useRef([]);

  const handleToggle = (index) => {
    setActiveDayIndex(activeDayIndex === index ? null : index);
  };

  useEffect(() => {
    if (activeDayIndex !== null && accordionRefs.current[activeDayIndex]) {
      accordionRefs.current[activeDayIndex].scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [activeDayIndex]);

  return (
    <div className="accordion-group w-[77%] m-1 ml-[18%] mt-[-29%] sticky top-[25%]" data-accordion="default-accordion">
      {["Day 1", "Day 2", "Day 3", "Day 4"].map((day, index) => (
        <div
          key={index}
          className={`accordion py-4 px-6 mb-7 transition-all duration-500 bg-gray-50 rounded-2xl hover:bg-indigo-50 ${
            activeDayIndex === index ? "bg-indigo-50" : ""
          }`}
          id={`basic-heading-${index}`}
          ref={(el) => (accordionRefs.current[index] = el)}
        >
          <button
            className={`accordion-toggle group inline-flex items-center justify-between leading-8 text-gray-900 w-full transition duration-500 text-left hover:text-indigo-600 ${
              activeDayIndex === index ? "text-indigo-600" : ""
            }`}
            aria-controls={`basic-collapse-${index}`}
            onClick={() => handleToggle(index)}
          >
            <p className="text-white bg-orange-700 rounded-xl w-[10%] text-center">{day}</p>
            <p>Details for {day}</p>
            <svg
              className={`text-gray-500 transition duration-500 group-hover:text-indigo-600 ${
                activeDayIndex === index ? "rotate-180 text-indigo-600" : ""
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
              ></path>
            </svg>
          </button>
          <div
            id={`basic-collapse-${index}`}
            className={`accordion-content w-full px-0 overflow-hidden transition-max-height duration-500 ease-in-out ${
              activeDayIndex === index ? "h-full" : "max-h-0"
            }`}
            aria-labelledby={`basic-heading-${index}`}
          >
            <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700" />
            <p className="text-base text-gray-900 leading-6">
              To contact customer support, look for a 'Contact us' or 'Help'
              button or link on the website or platform. You may be able to email,
              call, or chat with customer support for assistance.
            </p>
            <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700" />
            <h3 className="font-bold">Swiss Continuous Pass - 6 Days Pass</h3>
            <Carousel />
            <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700" />
            <h3>Transfer in Vehicles</h3>
            <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700" />
            <Shared />
            <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700" />
            <Stay />
            <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700" />
            <Activities />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
