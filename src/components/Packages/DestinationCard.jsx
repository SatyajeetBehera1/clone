import React from 'react';

const DestinationCard = ({ destination }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{destination.name}</h2>
        <p className="text-gray-700 mb-4">{destination.description}</p>
        <p className="text-gray-900 font-semibold mb-2">Best Time to Visit: {destination.bestTimeToVisit}</p>
        <h3 className="text-xl font-semibold mb-2">Best Places to Visit:</h3>
        <ul className="list-disc list-inside text-gray-700">
          {destination.placesToVisit.map((place, index) => (
            <li key={index}>{place}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DestinationCard;