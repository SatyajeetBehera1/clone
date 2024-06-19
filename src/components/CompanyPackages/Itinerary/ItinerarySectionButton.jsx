import React, { useState } from "react";

export default function ItinerarySectionButton() {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonIndex) => {
    setActiveButton(buttonIndex);
  };

  const buttonClass =
    "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border hover:border-transparent rounded transition duration-300 ease-in-out";
  const activeButtonClass =
    "border border-blue-500 text-white";

  return (
    <div className="border bg-blue-100 w-[95%] sticky top-[15.5%] z-10">
      <div className="TopRow p-1">
        <ul className="flex list-none">
          <li className="m-1 text-md">
            <button
              className={`${buttonClass} ${activeButton === 1 ? activeButtonClass : ""}`}
              onClick={() => handleButtonClick(1)}
            >
              7 DAY PLAN
            </button>
          </li>
          <li className="m-1 text-md">
            <button
              className={`${buttonClass} ${activeButton === 2 ? activeButtonClass : ""}`}
              onClick={() => handleButtonClick(2)}
            >
              2 FLIGHTS & 6 TRANSFERS
            </button>
          </li>
          <li className="m-1 text-md">
            <button
              className={`${buttonClass} ${activeButton === 3 ? activeButtonClass : ""}`}
              onClick={() => handleButtonClick(3)}
            >
              4 HOTELS
            </button>
          </li>
          <li className="m-1 text-md">
            <button
              className={`${buttonClass} ${activeButton === 4 ? activeButtonClass : ""}`}
              onClick={() => handleButtonClick(4)}
            >
              12 ACTIVITIES
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
