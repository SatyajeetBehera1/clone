import React, { useState } from "react";

export default function ItinerarySectionButton() {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonIndex, buttonName) => {
    setActiveButton(buttonIndex);
    console.log(buttonName);
  };

  const buttonClass =
    "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border hover:border-transparent rounded transition duration-300 ease-in-out";
  const activeButtonClass =
    "border border-blue-500 text-white bg-blue-500";

  return (
    <div className="border bg-blue-100 w-[95%] sticky top-[15.5%] z-10">
      <div className="top-row p-1 mx-3">
        <ul className="flex justify-between list-none">
          {[
            { name: "7 DAY PLAN", index: 1 },
            { name: "6 TRANSFERS", index: 2 },
            { name: "4 HOTELS", index: 3 },
            { name: "12 ACTIVITIES", index: 4 },
          ].map((button) => (
            <li key={button.index} className="text-md">
              <button
                className={`${buttonClass} ${activeButton === button.index ? activeButtonClass : ""}`}
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
}
