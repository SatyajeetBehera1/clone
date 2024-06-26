import React, { useState } from "react";

const ItinerarySectionButton = ({ onButtonClick }) => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonIndex, buttonName) => {
    setActiveButton(buttonIndex);
    onButtonClick(buttonName); // Pass buttonName to parent component
  };

  const buttonClass =
    "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border hover:border-transparent rounded transition duration-300 ease-in-out";
  const activeButtonClass = "border border-blue-500 text-white bg-blue-500";

  return (
    <div className="border bg-blue-100 w-[95%] sticky top-[16%] z-10">
      <div className="top-row p-1 mx-3">
        <ul className="flex justify-between list-none">
          {[
            { name: "DAY PLAN", index: 1 },
            { name: "TRANSFERS", index: 2 },
            { name: "HOTELS", index: 3 },
            { name: "ACTIVITIES", index: 4 },
          ].map((button) => (
            <li key={button.index} className="text-md">
              <button
                className={`${
                  buttonClass
                } ${activeButton === button.index ? activeButtonClass : ""}`}
                aria-pressed={activeButton === button.index}
                onClick={() => handleButtonClick(button.index, button.name)}
              >
                {button.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ItinerarySectionButton;
