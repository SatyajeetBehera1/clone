import React from "react";

export default function Delightful({ placeData }) {
  if (!placeData) {
    return null; 
  }
  console.log(placeData)
  const { package: packageInfo, plans} = placeData;

  const packageName = packageInfo.place_name
  const duration = `${packageInfo.total_days}N/${packageInfo.total_days + 1}D`;

  const itineraryDetails = plans.map((plan, index) => (
    <p key={plan.id} className="text-sm md:text-base font-bold">
      {plan.starting_point !== undefined ? `Day ${index + 1}: ${plan.starting_point} ➔ ${plan.ending_point}` : ''}
    </p>
  ));

  return (
    <div className="container p-3 bg-white text-gray-800 rounded-md sticky top-0">
      <div className="ml-4">
        <h2 className="font-bold text-xl mb-2 md:mb-4">Delightful {packageName} Holiday</h2>
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 mb-2 md:mb-0 flex items-center">
            <p className="text-sm md:text-sm text-gray-600 border border-gray-400 border-solid rounded-sm px-2 py-1 mr-2 mb-2 md:mb-0">
              Customizable
            </p>
            <p className="text-sm md:text-sm text-gray-600 border border-gray-400 border-solid rounded-sm px-2 py-1 mb-2 md:mb-0">
              {duration}
            </p>
          </div>
          <div className="w-full md:w-1/2">
            {itineraryDetails}
          </div>
        </div>
      </div>
    </div>
  );
}
