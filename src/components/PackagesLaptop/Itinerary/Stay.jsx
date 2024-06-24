import React from "react";

export default function Stay() {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-4xl mx-auto">
      <div className="mb-6 text-center">
        <h3 className="text-2xl font-bold text-gray-800">
          Check-In At Deluxe Hotel In Lucerne
        </h3>
        <h4 className="text-lg text-gray-600 mt-2">
          Stays will be allocated based on availability or similar category
        </h4>
      </div>
      <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
        <div className="flex flex-col items-center flex-1">
          <img
            src="https://media1.thrillophilia.com/filestore/0re6740s636p502lc0t3nzhg7xqo_318551001.jpg?w=320&dpr=1.3"
            alt="ibis Styles Luzern City"
            className="w-full h-64 rounded-lg shadow-md mb-4 object-cover"
          />
          <p className="text-lg font-semibold text-gray-700">
            ibis Styles Luzern City
          </p>
        </div>
        <div className="flex flex-col items-center flex-1">
          <img
            src="https://media1.thrillophilia.com/filestore/0re6740s636p502lc0t3nzhg7xqo_318551001.jpg?w=320&dpr=1.3"
            alt="ibis Styles Luzern City"
            className="w-full h-64 rounded-lg shadow-md mb-4 object-cover"
          />
          <p className="text-lg font-semibold text-gray-700">
            ibis Styles Luzern City
          </p>
        </div>
      </div>
    </div>
  );
}
