import React, { useState } from "react";
import Accordion from "./Accordion";
import DayPlan from "./DayPlan";

const App = () => {
  const [activeDayIndex, setActiveDayIndex] = useState(null);

  return (
    <div className="">
      <DayPlan activeDayIndex={activeDayIndex} />
      <Accordion activeDayIndex={activeDayIndex} setActiveDayIndex={setActiveDayIndex} />
    </div>
  );
};

export default App;
