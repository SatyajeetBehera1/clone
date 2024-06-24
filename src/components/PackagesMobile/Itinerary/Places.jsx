import React from "react";

export default function Places() {
  return (
    <div className="flex flex-col items-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-4xl">
        <div className="p-6">
          <h1 className="text-xl font-bold text-gray-800 mb-6">
            Sightseeing in Munnar - 1 Hour
          </h1>
          <div className="flex md:flex-row">
            <img
              src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/phonixImages/Sedan_2.png"
              alt="Map of Munnar"
              className="rounded-lg border-2 border-gray-200 mb-4 md:mb-0 md:mr-4 h-24 w-32"
            />
            <div className="flex flex-col text-gray-700 ml-5">
              <ul className="list-disc list-inside">
                <li className="text-lg">Valara Waterfalls</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
