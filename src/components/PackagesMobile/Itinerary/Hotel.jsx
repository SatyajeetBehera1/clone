import React from "react";

export default function Hotel() {
  return (
    <div className="flex flex-col items-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-4xl p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Check-in to Hotel in Munnar
        </h1>
        <div className="flex md:flex-row items-center md:items-start">
          <img
            src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/phonixImages/Sedan_2.png"
            alt="Hotel"
            className="rounded-lg border-2 border-gray-200 mb-4 md:mb-0 md:mr-6 h-32 w-[30%]"
          />
          
            <div className="flex flex-col mb-2 ml-5">
              <p className="text-lg font-bold mr-2">4/5</p>
              <p className="text-lg font-semibold">Tea Village Munnar by EGH</p>
            <p className="text-md">Chithirapuram</p>
            </div>
        </div>
      </div>
    </div>
  );
}
