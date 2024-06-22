import React, { useRef, useEffect, useState } from "react";
import Carousel from "./Carousel";
import Shared from "./Shared";
import Stay from "./Stay";
import Activities from "./Activities";
import AboutDay from "./AboutDay";

const DayAccordion = ({ day, index, isActive, onToggle, activeSection, accordionRef }) => (
  <div
    className={`accordion py-4 px-6 mb-7 transition-all duration-500 bg-gray-50 rounded-2xl hover:bg-indigo-50 ${
      isActive ? "bg-indigo-50" : ""
    }`}
    id={`basic-heading-${index}`}
    ref={accordionRef}
  >
    <button
      className={`accordion-toggle group inline-flex items-center justify-between leading-8 text-gray-900 w-full transition duration-500 text-left hover:text-indigo-600 ${
        isActive ? "text-indigo-600" : ""
      }`}
      aria-controls={`basic-collapse-${index}`}
      aria-expanded={isActive}
      onClick={() => onToggle(index)}
    >
      <p className="text-white bg-orange-700 rounded-xl w-[10%] text-center">{day}</p>
      <p>Details for {day}</p>
      <svg
        className={`text-gray-500 transition duration-500 group-hover:text-indigo-600 ${
          isActive ? "rotate-180 text-indigo-600" : ""
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
        isActive ? "h-full" : "max-h-0"
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
);

const Accordion = ({ activeDayIndex, setActiveDayIndex, activeSection }) => {
  const [activeDayIndices, setActiveDayIndices] = useState([]);
  const accordionRefs = useRef([]);

  const handleToggle = (index) => {
    if (activeDayIndices.includes(index)) {
      const newActiveDayIndices = activeDayIndices.filter((item) => item !== index);
      setActiveDayIndices(newActiveDayIndices);
      if (newActiveDayIndices.length === 0) {
        setActiveDayIndex(null); // Set the active day index to null when no accordion is open
      }
    } else {
      setActiveDayIndices([...activeDayIndices, index]);
      setActiveDayIndex(index); // Set the active day index when a day's accordion is opened
    }
  };

  useEffect(() => {
    if (activeDayIndices.length > 0 && accordionRefs.current[activeDayIndices[0]]) {
      accordionRefs.current[activeDayIndices[0]].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [activeDayIndices]);

  useEffect(() => {
    if (["ACTIVITIES", "DAY PLAN", "TRANSFERS", "HOTELS"].includes(activeSection)) {
      setActiveDayIndices([0, 1, 2, 3]);
    } else {
      setActiveDayIndices([]);
      setActiveDayIndex(null); // Ensure no day is highlighted if the section is not one of the listed ones
    }
  }, [activeSection, setActiveDayIndex]);

  return (
    <div
      className="accordion-group w-[77%] m-1 ml-[18%] mt-[-29%] sticky top-[25%]"
      data-accordion="default-accordion"
    >
      {["Day 1", "Day 2", "Day 3", "Day 4"].map((day, index) => (
        <DayAccordion
          key={index}
          day={day}
          index={index}
          isActive={activeDayIndices.includes(index)}
          onToggle={handleToggle}
          activeSection={activeSection}
          accordionRef={(el) => (accordionRefs.current[index] = el)}
        />
      ))}
    </div>
  );
};

export default Accordion;
