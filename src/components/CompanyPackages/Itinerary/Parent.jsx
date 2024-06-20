import React, { useState } from "react";
import Accordion from "./Accordion";
import DayPlan from "./DayPlan";

const Parent = (props) => {
  const [activeDayIndex, setActiveDayIndex] = useState(null);
  const handleActiveSectionChange = (sectionName) => {
    // Handle any necessary state updates or logic here if needed
    console.log("Selected section:", sectionName);
  };
  console.log(props.activeSection)

  return (
    <div className="">
      <DayPlan activeDayIndex={activeDayIndex} />
      <Accordion activeDayIndex={activeDayIndex} setActiveDayIndex={setActiveDayIndex} activeSection={props.activeSection} onActiveSectionChange={handleActiveSectionChange}/>
    </div>
  );
};

export default Parent;
