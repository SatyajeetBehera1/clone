import React from "react";

export default function Deals() {
  return (
    <div className="p-4 border bg-white border-gray-300 rounded-lg shadow-md w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-[90%]">
      <div className="bg-gradient-to-br from-teal-400 to-teal-600 border-b border-gray-300 rounded-lg">
        <h3 className="text-lg font-bold bg-blue-100 text-gray-800 px-3.5 py-5 m-0">Best Deals For You</h3>
      </div>
      <div className="space-y-4 bg-green-500 p-3 rounded-b-lg">
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
          <p className="text-sm text-white italic">For maximum benefits</p>
          <button className="bg-transparent text-white hover:text-white rounded-2xl text-xs font-bold border border-blue-500 focus:outline-none px-3 py-1">
            Login Now
          </button>
        </div>
        <div className="flex flex-col sm:flex-row sm:space-x-4">
          <ul className="space-y-1">
            <li className="text-sm text-white italic">• Redeem wallet</li>
            <li className="text-sm text-white italic">• Book faster</li>
          </ul>
          <ul className="space-y-1">
            <li className="text-sm text-white italic">• Get special deals</li>
            <li className="text-sm text-white italic">• Continue on any device</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
