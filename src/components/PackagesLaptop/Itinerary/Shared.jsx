import React from "react";
import TransferIcon from "../Summary/Transfer.svg";

export default function Shared() {
  return (
    <div className="flex flex-col items-center">
      <div className="rounded-lg overflow-hidden w-full max-w-2xl p-6 bg-white shadow-md">
        <div className="flex">

      <img src={TransferIcon} alt="Icon" className="w-5 h-5 mr-2 mt-2" />
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Transfer in Vehicles
        </h3>
        </div>
        <hr className="h-px my-4 bg-gray-200 border-0" />
        <div className="bg-transparent rounded-lg w-full">
          <ol className="relative border-l border-gray-300 ml-4">
            <li className="mb-6 ml-6 flex flex-col items-start">
              <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-1.5 border border-white"></div>
              <span className="text-gray-600 font-medium mb-1">From</span>
              <div className="ml-3 w-full border border-gray-400 rounded-lg py-2 px-4 text-sm text-gray-700">
                Zürich Hauptbahnhof
              </div>
            </li>
            <li className="ml-6 flex flex-col items-start list-none">
              <div className="w-3 h-3 bg-blue-500 rounded-full -left-1.5 border border-white ml-[-30px]"></div>
              <span className="text-gray-600 font-medium mb-1 ">To</span>
              <div className="ml-[2%] w-full border border-gray-400 rounded-lg py-2 px-4 text-sm text-gray-700">
                Luzern Station
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
