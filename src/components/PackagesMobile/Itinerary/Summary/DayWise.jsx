import React from "react";
import ActivitiesIcon from "./Activities.svg";
import TransferIcon from "./Transfer.svg";
import HotelIcon from "./Hotel.svg";

export default function DayWise() {
  return (
    <div className="bg-gray-100 rounded-lg overflow-hiddeng">
      {/* Day Header */}
      <div className="flex items-center bg-gray-200 p-3">
        <h1 className="text-lg font-bold">Day 1 - Lucerne</h1>
        <div className="flex ml-4">
          <IconWithSeparator icon={ActivitiesIcon} />
          <IconWithSeparator icon={TransferIcon} />
          <IconWithoutSeparator icon={HotelIcon} />
        </div>
      </div>

      {/* Activity Details */}
      <div className="p-4">
        <ActivityDetail icon={TransferIcon} title="Transfer" description="Transfer from Zürich Hauptbahnhof to Luzern Station" />
        <hr className="my-5" />
        <ActivityDetail icon={ActivitiesIcon} title="Activity" description="Swiss Continuous Pass - 6 Days Pass" />
        <hr className="my-5" />
        <ActivityDetail icon={HotelIcon} title="Hotel" description="Check-in at Deluxe Hotel in Lucerne" />
      </div>
      <div className="flex items-center bg-gray-200 p-3">
        <h1 className="text-lg font-bold">Day 2 - Lucerne</h1>
        <div className="flex ml-4">
          <IconWithSeparator icon={ActivitiesIcon} />
          <IconWithSeparator icon={TransferIcon} />
          <IconWithoutSeparator icon={HotelIcon} />
        </div>
      </div>

      {/* Activity Details */}
      <div className="p-4">
        <ActivityDetail icon={TransferIcon} title="Transfer" description="Transfer from Zürich Hauptbahnhof to Luzern Station" />
        <hr className="my-5" />
        <ActivityDetail icon={ActivitiesIcon} title="Activity" description="Swiss Continuous Pass - 6 Days Pass" />
        <hr className="my-5" />
        <ActivityDetail icon={HotelIcon} title="Hotel" description="Check-in at Deluxe Hotel in Lucerne" />
      </div>
      <div className="flex items-center bg-gray-200 p-3">
        <h1 className="text-lg font-bold">Day 3 - Lucerne</h1>
        <div className="flex ml-4">
          <IconWithSeparator icon={ActivitiesIcon} />
          <IconWithSeparator icon={TransferIcon} />
          <IconWithoutSeparator icon={HotelIcon} />
        </div>
      </div>

      {/* Activity Details */}
      <div className="p-4">
        <ActivityDetail icon={TransferIcon} title="Transfer" description="Transfer from Zürich Hauptbahnhof to Luzern Station" />
        <hr className="my-5" />
        <ActivityDetail icon={ActivitiesIcon} title="Activity" description="Swiss Continuous Pass - 6 Days Pass" />
        <hr className="my-5" />
        <ActivityDetail icon={HotelIcon} title="Hotel" description="Check-in at Deluxe Hotel in Lucerne" />
      </div>
      <div className="flex items-center bg-gray-200 p-3">
        <h1 className="text-lg font-bold">Day 4 - Lucerne</h1>
        <div className="flex ml-4">
          <IconWithSeparator icon={ActivitiesIcon} />
          <IconWithSeparator icon={TransferIcon} />
          <IconWithoutSeparator icon={HotelIcon} />
        </div>
      </div>

      {/* Activity Details */}
      <div className="p-4">
        <ActivityDetail icon={TransferIcon} title="Transfer" description="Transfer from Zürich Hauptbahnhof to Luzern Station" />
        <hr className="my-5" />
        <ActivityDetail icon={ActivitiesIcon} title="Activity" description="Swiss Continuous Pass - 6 Days Pass" />
        <hr className="my-5" />
        <ActivityDetail icon={HotelIcon} title="Hotel" description="Check-in at Deluxe Hotel in Lucerne" />
      </div>
    </div>
  );
}

// Component for icons with separators
function IconWithSeparator({ icon }) {
  return (
    <div className="flex items-center">
      <img src={icon} alt="Icon" className="w-5 h-5 mr-2" />
      <div className="w-px h-5 bg-gray-400 mr-2"></div>
    </div>
  );
}

// Component for icon without separator
function IconWithoutSeparator({ icon }) {
  return (
    <div className="flex items-center">
      <img src={icon} alt="Icon" className="w-5 h-5 mr-2" />
    </div>
  );
}

// Component for activity details
function ActivityDetail({ icon, title, description }) {
  return (
    <div className="flex items-center mb-4">
      <img src={icon} alt="Icon" className="w-5 h-5 mr-3" />
      <p className="font-semibold">{title}:</p>
      <p className="ml-2">{description}</p>
    </div>
  );
}
