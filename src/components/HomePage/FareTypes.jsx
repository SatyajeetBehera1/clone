import React from "react";

export const FareTypes = () => {
  return (
    <div className="flex items-center text-gray-700 text-sm justify-between mb-5 h-[75px] w-[95%] mx-auto mt-3.5">
      <div className="flex items-center text-gray-700 text-sm gap-x-5">
        <div className="text-black text-m font-bold leading-[14px] mr-1.25 w-[130px]">
          <p>Select a special fare</p>
          <p className="text-white bg-green-400 rounded-xl h-4 w-30 text-center">
            EXTRA SAVINGS
          </p>
        </div>
        <div className="flex items-center bg-[#eaf5ff] rounded-xl text-gray-700 text-xs font-bold leading-[14px] ml-1.25 w-[120px] h-full text-left">
          <input type="radio" />
          <div className="flex-col">
            <p className="text-sm">Regular</p>
            <p className="text-gray-300">Regular fares</p>
          </div>
        </div>
        <div className="flex items-center bg-[#eaf5ff] rounded-xl text-gray-700 text-xs font-bold leading-[14px] ml-1.25 w-[180px] h-full text-left">
          <input type="radio" />
          <div className="flex-col">
            <p className="text-sm">Student</p>
            <p className="text-gray-300">Extra discounts/baggage</p>
          </div>
        </div>
        <div className="flex items-center bg-[#eaf5ff] rounded-xl text-gray-700 text-xs font-bold leading-[14px] ml-1.25 w-[120px] h-full text-left">
          <input type="radio" />
          <div className="flex-col">
            <p className="text-sm">Senior Citizen</p>
            <p className="text-gray-300">up to ₹600 off</p>
          </div>
        </div>
        <div className="flex items-center bg-[#eaf5ff] rounded-xl text-gray-700 text-xs font-bold leading-[14px] ml-1.25 w-[120px] h-full text-left">
          <input type="radio" />
          <div className="flex-col">
            <p className="text-sm">Armed Forces</p>
            <p className="text-gray-300">up to ₹600 off</p>
          </div>
        </div>
        <div className="flex items-center bg-[#eaf5ff] rounded-xl text-gray-700 text-xs font-bold leading-[14px] ml-1.25 w-[150px] h-full text-left">
          <input type="radio" />
          <div className="flex-col">
            <p className="text-sm">Doctor and Nurses</p>
            <p className="text-gray-300">up to ₹600 off</p>
          </div>
        </div>
      </div>
    </div>
  );
};
