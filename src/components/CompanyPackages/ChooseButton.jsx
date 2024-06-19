import React, { useState } from "react";

export default function ChooseButton() {
  const [activeTab, setActiveTab] = useState("ITINERARY");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="shadow-md sticky top-100">
      <div className="container w-[80%] mt-5 flex ml-[8%]">
        <div
          className={` mx-2 bottomTab ${
            activeTab === "ITINERARY" ? "activeTab" : ""
          }`}
          onClick={() => handleTabClick("ITINERARY")}
        >
          <h3 className="font-bold">ITINERARY</h3>
        </div>
        <div
          className={` mx-2 bottomTab ${
            activeTab === "POLICIES" ? "activeTab" : ""
          }`}
          onClick={() => handleTabClick("POLICIES")}
        >
          <h3 className="font-bold">POLICIES</h3>
        </div>
        <div
          className={` mx-2 bottomTab ${
            activeTab === "SUMMARY" ? "activeTab" : ""
          }`}
          onClick={() => handleTabClick("SUMMARY")}
        >
          <h3 className="font-bold">SUMMARY</h3>
        </div>
      </div>
    </div>
  );
}
