import React from "react";

export default function GrandOffer() {
  return (
    <div>
      <div className="w-full h-2 bg-gray-300 mt-2"></div>
      <div className="px-3 py-1">
        <h1 className="font-bold">Grand Offers!</h1>
        <div className="flex w-full h-[15%] bg-blue-200 p-3 rounded-lg mt-2 justify-center">
          <img
            src="https://promos.makemytrip.com/images/ic-my-cash@2x.png"
            className="h-[30px] mt-1 mr-5"
            alt=""
          />
          <div>
            <p className="bg-white text-[80%]">
              Biggest Price drop Sale is Live : Flat 30% off
            </p>
            <p className="text-xs">Code: MMTPRICEDROP</p>
          </div>
        </div>
      </div>
      <div className="w-full h-2 bg-gray-300 mt-2"></div>
    </div>
  );
}
