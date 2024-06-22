import React, { useState } from "react";

const DayButton = ({ onButtonClick }) => {
  const [activeDay, setActiveDay] = useState(null);

  const handleButtonClick = (buttonIndex, buttonName) => {
    setActiveDay(buttonIndex);
    onButtonClick(buttonName); // Pass buttonName to parent component
  };

  const buttonClass =
    "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 rounded transition duration-300 ease-in-out";
  const activeButtonClass = "bg-blue-500 text-white";

  return (
    <div className="sticky top-16 z-10">
      <div className="bg-blue-100 border-b border-blue-500">
        <div className="max-w-screen-sm mx-auto overflow-x-auto">
          <ul className="flex text-sm p-2">
            {[
              { name: "DAY 1", index: 1 },
              { name: "DAY 2", index: 2 },
              { name: "DAY 3", index: 3 },
              { name: "DAY 4", index: 4 },
              { name: "DAY 5", index: 5 },
            ].map((button) => (
              <li key={button.index} className="mr-2">
                <button
                  className={`${buttonClass} ${
                    activeDay === button.index ? activeButtonClass : ""
                  }`}
                  onClick={() => handleButtonClick(button.index, button.name)}
                >
                  {button.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DayButton;
