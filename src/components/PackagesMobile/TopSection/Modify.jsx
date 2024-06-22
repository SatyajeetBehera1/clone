import React from "react";

export default function Modify() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="h-[1px] bg-blue-400 w-[5%]"></div>
        <div className="w-[90%] flex items-center space-x-2 h-9 border border-blue-500 rounded-2xl p-2">
          <p className="text-sm text-black mr-[14%]">
            New Delhi • 2 Travellers • 3-5 Jul
          </p>
          <p className="text-blue-400 text-sm font-bold">MODIFY</p>
        </div>
        <div className="h-[1px] bg-blue-400 w-[5%]"></div>
      </div>
    </div>
  );
}
