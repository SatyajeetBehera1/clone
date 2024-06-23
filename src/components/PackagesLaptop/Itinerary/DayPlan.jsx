import React from "react";

const DayPlan = ({ activeDayIndex, setActiveDayIndex }) => {
  const days = ["Day 1", "Day 2", "Day 3", "Day 4"];
  const firstDays = days.slice(0, days.length - 1);
  const lastDay = days[days.length - 1];

  return (
    <div className="mt-1 p-6 bg-white shadow-lg rounded-lg w-full sm:w-[17%] sticky top-[23%]">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Day Plan</h2>
      <div className="sm:flex sm:flex-col">
        <ol className="relative border-l border-gray-300">
          {firstDays.map((day, index) => (
            <li key={index} className="mb-5 ml-6">
              <div
                className={`absolute w-3 h-3 rounded-full -left-1.5 border border-white ${
                  activeDayIndex === index ? "bg-blue-600" : "bg-gray-300"
                }`}
                onClick={() => setActiveDayIndex(index)}
              ></div>
              <time className="mb-1 text-sm font-medium leading-none text-gray-600">{day}</time>
            </li>
          ))}
        </ol>
        <ol className="relative">
          <li className="mb-5 ml-6">
            <div
              className={`absolute w-3 h-3 rounded-full -left-[5px] border border-white ${
                activeDayIndex === days.length - 1 ? "bg-blue-600" : "bg-gray-300"
              }`}
              onClick={() => setActiveDayIndex(days.length - 1)}
            ></div>
            <time className="mb-1 text-sm font-medium leading-none text-gray-600">{lastDay}</time>
          </li>

        </ol>
      </div>
    </div>
  );
};

export default DayPlan;
