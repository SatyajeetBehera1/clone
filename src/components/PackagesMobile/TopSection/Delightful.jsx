import React from "react";

export default function Delightful() {
  return (
    <div className="container p-3 bg-white text-gray-800 rounded-md sticky top-0">
      <div className="ml-4">
        <h2 className="font-bold text-xl mb-2 md:mb-4">
          Delightful Kashmir Holiday
        </h2>
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 mb-2 md:mb-0 flex items-center">
            <p className="text-sm md:text-sm text-gray-600 border border-gray-400 border-solid rounded-sm px-2 py-1 mr-2 mb-2 md:mb-0">
              Customizable
            </p>
            <p className="text-sm md:text-sm text-gray-600 border border-gray-400 border-solid rounded-sm px-2 py-1 mb-2 md:mb-0">
              6N/7D
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-sm md:text-base font-bold">
              1N Srinagar • 1N Gulmarg • 2N Pahalgam • 2N Srinagar
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
