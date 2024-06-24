import React, { useState } from "react";
import { Icondiv } from './Navbar';
import Search from './Search';
import Main from './Itinerary/Main';
import Delightful from './Delightful';
import MidSectionPhotos from './MidSectionPhotos';

const ChooseButton = ({ activeTab, handleTabClick }) => {
  return (
    <div className="shadow-md mt-2 sticky top-[10%] z-20 bg-white">
      <div className="container w-[80%] mt-5 flex ml-[8%]">
        <div
          className={`mx-2 px-4 py-2 cursor-pointer ${
            activeTab === "ITINERARY" ? "bg-blue-500 text-white" : "bg-white text-black"
          }`}
          onClick={() => handleTabClick("ITINERARY")}
        >
          <h3 className="font-bold">ITINERARY</h3>
        </div>
        <div
          className={`mx-2 px-4 py-2 cursor-pointer ${
            activeTab === "POLICIES" ? "bg-blue-500 text-white" : "bg-white text-black"
          }`}
          onClick={() => handleTabClick("POLICIES")}
        >
          <h3 className="font-bold">POLICIES</h3>
        </div>
        <div
          className={`mx-2 px-4 py-2 cursor-pointer ${
            activeTab === "SUMMARY" ? "bg-blue-500 text-white" : "bg-white text-black"
          }`}
          onClick={() => handleTabClick("SUMMARY")}
        >
          <h3 className="font-bold">SUMMARY</h3>
        </div>
      </div>
    </div>
  );
};

export const CompanyMain = (props) => {
  const [activeTab, setActiveTab] = useState("ITINERARY");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <Icondiv  {...props}/>
      <Search  {...props}/>
      <Delightful  {...props}/>
      <MidSectionPhotos  {...props}/>
      <ChooseButton activeTab={activeTab} handleTabClick={handleTabClick}  {...props}/>
      <Main activeTab={activeTab}  {...props}/>
    </div>
  );
};
