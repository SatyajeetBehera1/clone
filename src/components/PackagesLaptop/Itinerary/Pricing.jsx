import React from "react";

const Pricing = () => {
  return (
    <div className="p-4 border bg-white border-gray-300 rounded-lg shadow-md w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-[90%] sticky top-[10%] z-40">
      <div className="flex items-center justify-between">
        <p className="text-sm font-bold text-gray-500 line-through">
          ₹54,596
        </p>
        <p className="text-sm text-red-500 ml-2">
          15% OFF
        </p>
      </div>

      <div className="flex items-center mt-4">
        <p className="text-xl font-bold text-gray-800">
          ₹46,485
        </p>
        <p className="text-sm font-bold text-gray-800 ml-2 mt-1.5">
          /Adult
        </p>
      </div>

      <div className="mt-2">
        <p className="text-sm text-gray-500">
          Excluding applicable taxes
        </p>
      </div>

      <div className="flex justify-center mt-6">
        <button className="w-full sm:w-4/5 rounded-md bg-blue-500 text-white h-10">
          PROCEED TO PAYMENT
        </button>
      </div>
    </div>
  );
};

export default Pricing;
