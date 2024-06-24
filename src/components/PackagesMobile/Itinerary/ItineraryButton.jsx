import React, { useState } from "react";

const ItineraryButton = ({ onButtonClick }) => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonIndex, buttonName) => {
    setActiveButton(buttonIndex);
    onButtonClick(buttonName); // Pass buttonName to parent component
  };

  const buttonClass =
    "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 rounded transition duration-300 ease-in-out";
  const activeButtonClass = "bg-blue-500 text-white";

  return (
    <div className="sticky top-0 z-20 ">
      <div className="bg-blue-100 border-t border-blue-500">
        <div className="max-w-screen-sm mx-auto overflow-x-auto">
          <ul className="flex text-sm p-2">
            {[
              { name: "DAYPLAN", index: 1 },
              { name: "TRANSFERS", index: 2 },
              { name: "HOTELS", index: 3 },
              { name: "ACTIVITIES", index: 4 },
              { name: "SUMMARY", index: 5 },
            ].map((button) => (
              <li key={button.index} className="mr-2">
                <button
                  className={`${buttonClass} ${
                    activeButton === button.index ? activeButtonClass : ""
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

export default ItineraryButton;
