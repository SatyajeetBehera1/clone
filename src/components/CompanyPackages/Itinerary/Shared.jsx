import React from "react";

export default function Shared() {
  return (
    <div className="p-4 bg-transparent rounded-lg w-full">
        
      <ol className="relative border-l border-gray-300">
        <li className="mb-6 ml-6">
          <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-1.5 border border-white"></div>
          <div className="ml-3 flex-grow border w-full border-gray-400 rounded-lg py-2 px-4 text-sm text-gray-700">
            Zürich Hauptbahnhof
          </div>
        </li>
        
        <li className="ml-6">
          <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-1.5 border border-white"></div>
          <div className="ml-3 flex-grow border w-full border-gray-400 rounded-lg py-2 px-4 text-sm text-gray-700">Luzern Station</div>
        </li>
      </ol>
    </div>
  );
}
