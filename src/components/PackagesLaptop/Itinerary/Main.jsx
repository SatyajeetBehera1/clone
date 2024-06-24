import React, { useState } from "react";
import Pricing from "./Pricing";
import Coupons from "./Coupons";
import Deals from "./Deals";
import PoliciesMain from "../Policies/PoliciesMain";
import SummaryMain from "../Summary/SummaryMain";
import Parent from "./Parent";
import ItinerarySectionButton from "./ItinerarySectionButton";

export default function Main(props) {
  const [activeSection, setActiveSection] = useState(null);

  const handleButtonClick = (sectionName) => {
    setActiveSection(sectionName);
  };

  if (props.activeTab === "ITINERARY") {
    return (
      <div className="mx-[8%] mt-4 flex">
        <div className="bg-white">
          <ItinerarySectionButton onButtonClick={handleButtonClick} {...props} />
          <Parent activeSection={activeSection} {...props} />
        </div>

        <div className="flex flex-col">
          <Pricing activeSection={activeSection} {...props} />
          <Coupons activeSection={activeSection} {...props} />
          <Deals activeSection={activeSection} {...props} />
        </div>
      </div>
    );
  } else if (props.activeTab === "POLICIES") {
    return (
      <div className="mx-[8%] mt-4 flex">
        <PoliciesMain {...props} />
        <div className="flex flex-col">
          <Pricing {...props} />
          <Coupons {...props} />
          <Deals {...props} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="mx-[8%] mt-4 flex">
        <SummaryMain {...props} />
        <div className="flex flex-col">
          <Pricing {...props} />
          <Coupons {...props} />
          <Deals {...props} />
        </div>
      </div>
    );
  }
}
