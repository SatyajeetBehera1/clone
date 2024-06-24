import React from "react";

export default function PrivateACSedan() {
  return (
    <div className="flex flex-col items-center bg-gray-100 pt-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-4xl">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Private AC Sedan - AC for sightseeing in & around Munnar
          </h1>
          <div className="flex space-x-2 text-gray-600 mb-4">
            <span>PRIVATE TRANSFER</span>
            <span>|</span>
            <span>Swift, Etios</span>
            <span>or similar</span>
          </div>
          <div className="flex rounded-lg">
            <img
              src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/phonixImages/Sedan_2.png"
              alt="Private AC Sedan for sightseeing in Munnar"
              className="h-24 w-32 rounded-lg border-2 border-solid border-gray-200"
            />
            <div className="flex flex-col justify-center ml-4 text-gray-700">
              <div className="flex space-x-2 mb-2">
                <p>3 Seater</p>
                <span>|</span>
                <p>AC</p>
                <span>|</span>
                <p>2 Luggage Bags</p>
              </div>
              <div>
                <p>4 Sightseeing Transfers Included</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
