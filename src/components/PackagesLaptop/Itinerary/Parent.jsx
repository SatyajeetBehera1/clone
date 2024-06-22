import React, { useState, useEffect } from "react";
import Accordion from "./Accordion";
import DayPlan from "./DayPlan";

const Parent = (props) => {
  const { activeSection } = props;
  const [activeDayIndex, setActiveDayIndex] = useState(null);

  const handleActiveSectionChange = (sectionName) => {
    console.log("Selected section:", sectionName);
  };

  useEffect(() => {
    if (activeSection === "DAY PLAN") {
      setActiveDayIndex(0);
    } else {
      setActiveDayIndex(null);
    }
  }, [activeSection]);

  return (
    <div className="">
      <DayPlan activeDayIndex={activeDayIndex} setActiveDayIndex={setActiveDayIndex} />
      <Accordion
        activeDayIndex={activeDayIndex}
        setActiveDayIndex={setActiveDayIndex}
        activeSection={activeSection}
        onActiveSectionChange={handleActiveSectionChange}
      />
    </div>
  );
};

export default Parent;
