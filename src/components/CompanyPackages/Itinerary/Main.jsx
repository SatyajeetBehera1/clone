import React, { useState } from "react";
import Pricing from "./Pricing";
import Coupons from "./Coupons";
import Deals from "./Deals";
import PoliciesMain from "../Policies/PoliciesMain";
import SummaryMain from "../Summary/SummaryMain";
import Parent from "./Parent";
import ItinerarySectionButton from "./ItinerarySectionButton";

export default function Main(prop) {
  const [activeSection, setActiveSection] = useState(null);

  const handleButtonClick = (sectionName) => {
    setActiveSection(sectionName);

  };

  if (prop.activeTab === "ITINERARY") {
    return (
      <div className="mx-[8%] mt-4 flex ">
        <div className="bg-white">
          <ItinerarySectionButton onButtonClick={handleButtonClick} />
          <Parent activeSection={activeSection} />
        </div>

        <div className="flex flex-col">
          <Pricing activeSection={activeSection} />
          <Coupons activeSection={activeSection} />
          <Deals activeSection={activeSection} />
        </div>
      </div>
    );
  } else if (prop.activeTab === "POLICIES") {
    return (
      <div className="mx-[8%] mt-4 flex">
        <PoliciesMain />
        <div className="flex flex-col">
          <Pricing />
          <Coupons />
          <Deals />
        </div>
      </div>
    );
  } else {
    return (
      <div className="mx-[8%] mt-4">
        <SummaryMain />
      </div>
    );
  }
}
