import React, { useRef, useEffect, useState } from "react";
import Carousel from "./Carousel";
import Shared from "./Shared";
import Stay from "./Stay";
import Activities from "./Activities";
import AboutDay from "./AboutDay";

const DayAccordion = ({
  day,
  index,
  isActive,
  onToggle,
  activeSection,
  accordionRef,
  activities,
  hotels,
  startingPoint,
  endingPoint,
  vehicleData
}) => (
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
        isActive ? "h-auto" : "max-h-0"
      }`}
      aria-labelledby={`basic-heading-${index}`}
    >
      <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700" />
      <AboutDay />
      {(activeSection === "ACTIVITIES" || activeSection === "DAY PLAN" || activeSection === null) && activities && activities.length > 0 && (
        <>
          <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700" />
          <Carousel activities={activities} />
        </>
      )}
      {(activeSection === "TRANSFERS" || activeSection === "DAY PLAN" || activeSection === null) && vehicleData && vehicleData.length > 0 && (
        <>
          <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700" />
          <Shared startingPoint={startingPoint} endingPoint={endingPoint} vehicleData={vehicleData}/>
        </>
      )}
      {(activeSection === "HOTELS" || activeSection === "DAY PLAN" || activeSection === null) && hotels && hotels.length > 0 && (
        <>
          <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700" />
          <Stay hotels={hotels} />
        </>
      )}
      {(activeSection === "ACTIVITIES" || activeSection === "DAY PLAN" || activeSection === null) && activities && activities.length > 0 && (
        <>
          <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700" />
          <Activities activities={activities} />
        </>
      )}
    </div>
  </div>
);

const Accordion = ({ activeDayIndex, setActiveDayIndex, activeSection, placeData }) => {
  const [activeDayIndices, setActiveDayIndices] = useState([]);
  const accordionRefs = useRef([]);
console.log(placeData)
  useEffect(() => {
    if (placeData && placeData.package && placeData.package.total_days) {
      setActiveDayIndices(Array(placeData.package.total_days).fill(false));
    }
  }, [placeData]);

  const handleToggle = (index) => {
    const newActiveDayIndices = [...activeDayIndices];
    newActiveDayIndices[index] = !newActiveDayIndices[index];
    setActiveDayIndices(newActiveDayIndices);

    if (newActiveDayIndices[index]) {
      setActiveDayIndex(index);
    } else {
      setActiveDayIndex(null);
    }
  };

  useEffect(() => {
    if (activeDayIndex !== null && accordionRefs.current[activeDayIndex]) {
      accordionRefs.current[activeDayIndex].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [activeDayIndex]);

  return (
    <div
      className="accordion-group w-[77%] m-1 ml-[18%] mt-[-24%]  sticky top-[25%]"
      data-accordion="default-accordion"
    >
      {activeDayIndices.map((isActive, index) => (
        <DayAccordion
          key={index}
          day={`Day ${index + 1}`}
          index={index}
          isActive={isActive}
          onToggle={handleToggle}
          activeSection={activeSection}
          accordionRef={(el) => (accordionRefs.current[index] = el)}
          activities={placeData?.activities}
          hotels={placeData?.plans && placeData.plans[index]?.hotels}
          startingPoint={placeData?.plans && placeData.plans[index]?.plan?.starting_point}
          endingPoint={placeData?.plans && placeData.plans[index]?.plan?.ending_point}
          vehicleData={placeData?.plans && placeData.plans[index]?.vehicles}
        />
      ))}
    </div>
  );
};

export default Accordion;
