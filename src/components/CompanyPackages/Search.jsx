import React, { useState, useEffect } from 'react';

function Search() {
  const [formData, setFormData] = useState({
    startingFrom: '',
    travellingOn: '',
    rooms: '',
    guests: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSearch = () => {
    console.log(formData);
  };

  // State to track if it's a mobile device
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the viewport width is less than or equal to 768px (typical mobile size)
    const checkIsMobile = () => {
      const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      setIsMobile(width <= 768);
    };

    // Initial check on component mount
    checkIsMobile();

    // Add event listener for resizing
    window.addEventListener('resize', checkIsMobile);

    // Clean up listener on component unmount
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  // Hide component if it's a mobile device
  if (isMobile) {
    return null; // Render nothing if it's a mobile device
  }

  // Render component for non-mobile devices
  return (
    <div className="container mx-auto h-[60px] bg-[#0a223d]">
      <div className="flex items-center space-x-4">
        <input
          type="text"
          name="startingFrom"
          placeholder="Starting From"
          value={formData.startingFrom}
          onChange={handleChange}
          className="px-4 py-2 border mt-2 border-gray-300 rounded-md bg-[#4a4a4a] border-none text-blue-500 ml-[10%]"
        />
        <input
          type="date"
          name="travellingOn"
          placeholder="Travelling On"
          value={formData.travellingOn}
          onChange={handleChange}
          className="px-4 py-2 border mt-2 border-gray-300 rounded-md bg-[#4a4a4a] border-none text-blue-500"
        />
        <input
          type="number"
          name="rooms"
          placeholder="Rooms & Guest"
          value={formData.rooms}
          onChange={handleChange}
          className="px-4 py-2 border mt-2 border-gray-300 rounded-md bg-[#4a4a4a] border-none text-blue-500"
        />
        <button
          onClick={handleSearch}
          className="px-6 py-2 bg-blue-500 mt-2 text-white rounded-2xl hover:bg-blue-700 border-none w-[10%]"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Search;
