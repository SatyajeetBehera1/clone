import React from "react";

export default function Delightful(props) {
  const { package: packageData } = props.placeData || {};
  if (!packageData) {
    return null;
  }

  return (
    <div className="container p-1 bg-white text-gray-800 rounded-md  sticky top-0 z-20">
      <div className="ml-[8%]">
        <h2 className="font-bold text-xl mb-4">Delightful {packageData.place_name} Holiday</h2>
        <div className="p-1 mt-[-10px]">
          <div className="flex flex-row items-center">
            <p className="text-xs text-gray-600 border border-black border-solid rounded-xl mr-4 w-[7%] text-center">
              Customizable
            </p>
            <p className="text-xs text-gray-600 border border-black border-solid rounded-xl mr-4 w-[4%] text-center">
            {packageData.total_days}D/{packageData.total_days - 1}N
            </p>
            <p className="text-base font-bold">
              1N Srinagar • 1N Gulmarg • 2N Pahalgam • 2N Srinagar
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
