import React from 'react';

export default function DayPlan({ activeDay }) {
  return (
    <div className="w-full flex mt-8 bg-gray-100 rounded-lg shadow-md overflow-x-auto">
      <div className="flex items-center justify-between bg-orange-300 rounded-l-lg shadow-sm p-1">
        <h1 className="text-2xl font-bold text-gray-800">Day&nbsp;{activeDay}</h1>
      </div>
      <div className="bg-white flex rounded-r-lg shadow-md p-1 m">
        <p className="text-lg font-semibold text-gray-800 mr-2">Included:</p>
        <ul className="gap-3 flex ml-5x ">
          {[' Transfer', ' Sightseeing', ' Hotel'].map((item, index) => (
            <li
              key={index}
              className="text-base font-medium text-black rounded-full shadow-sm mt-[2px]"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
