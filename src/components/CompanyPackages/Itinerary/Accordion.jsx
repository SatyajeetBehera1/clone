import React, { useRef, useEffect, useState } from "react";
import Carousel from "./Carousel";
import Shared from "./Shared";
import Stay from "./Stay";
import Activities from "./Activities";
import AboutDay from "./AboutDay";

const Accordion = ({ activeSection }) => {
  const [activeDayIndices, setActiveDayIndices] = useState([]);

  const accordionRefs = useRef([]);

  const handleToggle = (index) => {
    if (activeDayIndices.includes(index)) {
      setActiveDayIndices(activeDayIndices.filter((item) => item !== index));
    } else {
      setActiveDayIndices([...activeDayIndices, index]);
    }
  };

  useEffect(() => {
    
    if (activeDayIndices.length > 0 && accordionRefs.current[activeDayIndices[0]]) {
      accordionRefs.current[activeDayIndices[0]].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [activeDayIndices, activeSection]);

  
  useEffect(() => {
    if (activeSection === "ACTIVITIES" || activeSection === "DAY PLAN" || activeSection === "TRANSFERS" || activeSection === "HOTELS") {
      setActiveDayIndices([0, 1, 2, 3]); 
    } else {
      setActiveDayIndices([]);
    }
  }, [activeSection]);

  return (
    <div
      className="accordion-group w-[77%] m-1 ml-[18%] mt-[-29%] sticky top-[25%]"
      data-accordion="default-accordion"
    >
      {["Day 1", "Day 2", "Day 3", "Day 4"].map((day, index) => (
        <div
          key={index}
          className={`accordion py-4 px-6 mb-7 transition-all duration-500 bg-gray-50 rounded-2xl hover:bg-indigo-50 ${
            activeDayIndices.includes(index) ? "bg-indigo-50" : ""
          }`}
          id={`basic-heading-${index}`}
          ref={(el) => (accordionRefs.current[index] = el)}
        >
          <button
            className={`accordion-toggle group inline-flex items-center justify-between leading-8 text-gray-900 w-full transition duration-500 text-left hover:text-indigo-600 ${
              activeDayIndices.includes(index) ? "text-indigo-600" : ""
            }`}
            aria-controls={`basic-collapse-${index}`}
            onClick={() => handleToggle(index)}
          >
            <p className="text-white bg-orange-700 rounded-xl w-[10%] text-center">
              {day}
            </p>
            <p>Details for {day}</p>
            <svg
              className={`text-gray-500 transition duration-500 group-hover:text-indigo-600 ${
                activeDayIndices.includes(index) ? "rotate-180 text-indigo-600" : ""
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
              activeDayIndices.includes(index) ? "h-full" : "max-h-0"
            }`}
            aria-labelledby={`basic-heading-${index}`}
          >
            <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700" />
            <AboutDay />

            {(activeSection === "ACTIVITIES" || activeSection === "DAY PLAN") && (
              <>
                <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700" />
                <Carousel />
              </>
            )}

            {(activeSection === "TRANSFERS" || activeSection === "DAY PLAN") && (
              <>
                <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700" />
                <Shared />
              </>
            )}

            {(activeSection === "HOTELS" || activeSection === "DAY PLAN") && (
              <>
                <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700" />
                <Stay />
              </>
            )}

            {(activeSection === "ACTIVITIES" || activeSection === "DAY PLAN") && (
              <>
                <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700" />
                <Activities />
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
