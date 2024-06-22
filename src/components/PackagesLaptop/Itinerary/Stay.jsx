import React from "react";

export default function Stay() {
  return (
    <div className="p-6 bg-transparent rounded-lg shadow-lg w-full">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-800">Check-In At Deluxe Hotel In Lucerne</h3>
      </div>
      <div className="mb-4">
        <h3 className="text-lg text-gray-600">Stays will be allocated based on availability or similar category</h3>
      </div>
      <div className="flex items-center space-x-4 w-full">
        <div className="flex flex-col items-center flex-1">
          <img 
            src="https://media1.thrillophilia.com/filestore/0re6740s636p502lc0t3nzhg7xqo_318551001.jpg?w=320&dpr=1.3" 
            alt="ibis Styles Luzern City" 
            className="w-full h-64 rounded-lg shadow-md mb-2 object-cover"
          />
          <p className="text-lg font-semibold text-gray-700">ibis Styles Luzern City</p>
        </div>
        <div className="flex flex-col items-center flex-1">
          <img 
            src="https://media1.thrillophilia.com/filestore/0re6740s636p502lc0t3nzhg7xqo_318551001.jpg?w=320&dpr=1.3" 
            alt="ibis Styles Luzern City" 
            className="w-full h-64 rounded-lg shadow-md mb-2 object-cover"
          />
          <p className="text-lg font-semibold text-gray-700">ibis Styles Luzern City</p>
        </div>
        
      </div>
    </div>
  );
}
