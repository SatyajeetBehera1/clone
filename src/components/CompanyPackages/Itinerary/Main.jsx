import React from "react";
import Pricing from "./Pricing";
import Coupons from "./Coupons";
import Deals from "./Deals";
import ItinerarySectionButton from "./ItinerarySectionButton";
import PoliciesMain from "../Policies/PoliciesMain";
import SummaryMain from "../Summary/SummaryMain";
import Parent from "./Parent";

export default function Main(prop) {
  if (prop.activeTab === "ITINERARY") {
    return (
      <div className="mx-[8%] mt-4 flex ">
        <div className="bg-white">
        <ItinerarySectionButton />
            <Parent></Parent>
        </div>

        <div className="flex flex-col">
          <Pricing></Pricing>
          <Coupons></Coupons>
          <Deals></Deals>
        </div>
      </div>
    );
  }
  else if(prop.activeTab === "POLICIES"){
    return(
      <div className="mx-[8%] mt-4 flex">
        <PoliciesMain></PoliciesMain>

        <div className="flex flex-col">
          <Pricing></Pricing>
          <Coupons></Coupons>
          <Deals></Deals>
        </div>
      </div>
    )
  }
  else{
    return(
      <div className="mx-[8%] mt-4">

        <SummaryMain></SummaryMain>
      </div>
    )
  }
}
