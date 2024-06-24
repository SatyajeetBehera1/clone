import React from "react";
import ActivitiesIcon from "./Activities.svg";
import TransferIcon from "./Transfer.svg";
import HotelIcon from "./Hotel.svg";

export default function Header() {
  return (
    <div className="w-full mx-auto bg-white rounded-lg p-6">
      <h1 className="text-3xl font-bold mb-6">Trip Summary</h1>
      <div className="flex">
        <ActivityItem icon={ActivitiesIcon} label="Activities" />
        <div className="border-l border-gray-300 h-12"></div>
        <ActivityItem icon={TransferIcon} label="Transfers" />
        <div className="border-l border-gray-300 h-12"></div>
        <ActivityItem icon={HotelIcon} label="Hotels" />
      </div>
    </div>
  );
}

function ActivityItem({ icon, label }) {
  return (
    <div className="flex items-center space-x-2 mr-3 ml-2">
      <img src={icon} alt={`${label} Icon`} className="w-5 h-5" />
      <p className="text-lg font-medium">{label}</p>
    </div>
  );
}
