import React from "react";
import HotelIcon from "../Summary/Hotel.svg";

export default function Stay({ hotels }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-4xl mx-auto">
      {/* Header Section */}
      <div className="mb-6 text-center">
        <div className="flex items-center justify-center mb-2">
          <img src={HotelIcon} alt="Hotel Icon" className="w-6 h-6 mr-2" />
          <h3 className="text-2xl font-bold text-gray-800">
            Check-In At Deluxe Hotel In Lucerne
          </h3>
        </div>
        <p className="text-lg text-gray-600">
          Stays will be allocated based on availability or similar category
        </p>
      </div>

      {/* Hotel Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {hotels.map((hotel, index) => (
          <HotelCard
            key={index}
            imageUrl={hotel.hotel_image1} // Adjust based on API structure
            name={hotel.hotel_name} // Adjust based on API structure
          />
        ))}
      </div>
    </div>
  );
}

function HotelCard({ imageUrl, name }) {
  return (
    <div className="flex flex-col items-center">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-64 rounded-lg shadow-md object-cover mb-4"
      />
      <p className="text-lg font-semibold text-gray-700">{name}</p>
    </div>
  );
}
