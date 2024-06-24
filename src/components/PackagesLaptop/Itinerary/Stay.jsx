import React from "react";
import HotelIcon from "../Summary/Hotel.svg";

export default function Stay() {
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
        <HotelCard
          imageUrl="https://media1.thrillophilia.com/filestore/0re6740s636p502lc0t3nzhg7xqo_318551001.jpg?w=320&dpr=1.3"
          name="ibis Styles Luzern City"
        />
        <HotelCard
          imageUrl="https://media1.thrillophilia.com/filestore/0re6740s636p502lc0t3nzhg7xqo_318551001.jpg?w=320&dpr=1.3"
          name="ibis Styles Luzern City"
        />
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
