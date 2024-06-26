import React from "react";
import TransferIcon from "../Summary/Transfer.svg";

const Shared = ({ startingPoint, endingPoint, vehicleData}) => {
  const vehicalName = vehicleData[0] ? vehicleData[0].car_name : ''; // Using ternary operator to safely access car_name

  return (
    <div className="flex flex-col items-center">
      {/* Transfer Title Section */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-4xl">
        <div className="p-6">
          <div className="flex items-center mb-4">
            <img
              src={TransferIcon}
              alt="Transfer Icon"
              className="w-5 h-5 mr-2 mt-1"
            />
            <h3 className="text-2xl font-bold text-gray-800">
              Transfer in Vehicles
            </h3>
          </div>

          {/* Vehicle Details */}
          <div className="flex flex-col md:flex-row md:items-center p-4 rounded-lg mb-4">
            <img
              src={vehicleData[0] ? vehicleData[0].car_photo || "https://via.placeholder.com/150" : "https://via.placeholder.com/150"}
              alt={`Vehicle: ${vehicalName}`}
              className="h-24 w-32 rounded-lg border-2 border-solid border-gray-200 mb-4 md:mb-0"
            />
            <div className="md:flex md:flex-col md:ml-4 text-gray-700">
              <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                {vehicalName} - {vehicleData[0] ? vehicleData[0].car_description : ''}
              </h1>
              <div className="flex space-x-2 text-sm text-gray-600 mb-2">
                <span>{vehicleData[0] ? (vehicleData[0].is_private ? 'PRIVATE TRANSFER' : 'SHARED TRANSFER') : ''}</span>
                <span>|</span>
                <span>{vehicleData[0] ? vehicleData[0].car_colour : ''}</span>
              </div>
              <div className="flex space-x-2 text-sm text-gray-600 mb-2">
                <span>{vehicleData[0] ? `${vehicleData[0].seats} Seater` : ''}</span>
                <span>|</span>
                <span>{vehicleData[0] ? (vehicleData[0].ac ? 'AC' : 'Non-AC') : ''}</span>
                <span>|</span>
                <span>{vehicleData[0] ? `${vehicleData[0].luggage_bags} Luggage Bags` : ''}</span>
              </div>
              <div>
                <p className="text-sm text-gray-600">
                  Included: {vehicleData[0] ? (vehicleData[0].side_seen_included ? 'Sightseeing Included' : 'No Sightseeing Included') : ''}
                </p>
              </div>
            </div>
          </div>

          {/* Journey Details */}
          <div className="bg-white rounded-lg overflow-hidden w-full max-w-4xl p-4">
            <div className="w-full">
              <ol className="relative border-l border-gray-300 pl-4">
                <li className="mb-6 flex flex-col items-start">
                  <div className="w-3 h-3 bg-blue-500 rounded-full ml-[-22px] border border-white"></div>
                  <span className="text-gray-600 font-medium mb-1">From</span>
                  <div className="ml-3 w-full border border-gray-400 rounded-lg py-2 px-4 text-sm text-gray-700">
                    {startingPoint ? startingPoint : ''}
                  </div>
                </li>
                <li className="flex flex-col items-start">
                  <div className="w-3 h-3 bg-blue-500 rounded-full -left-1.5 ml-[-22px] border border-white"></div>
                  <span className="text-gray-600 font-medium mb-1">To</span>
                  <div className="ml-3 w-full border border-gray-400 rounded-lg py-2 px-4 text-sm text-gray-700">
                    {endingPoint ? endingPoint : ''}
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shared;
