import React, { useState } from "react";
import Modal from "./Modal";

export default function Image (props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { package: packageData } = props.placeData || {};

  if (!packageData) {
    return null;
  }

  const images = [
    packageData.photo1,
    packageData.photo2,
    packageData.photo3,
    packageData.photo4,
    packageData.photo5,
    packageData.photo6
  ];
  const handleViewGallery = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex p-3 rounded-[20%]">
      <div className="leftSide relative flex-grow w-1/2 p-2 rounded-[20%]">
        <img
          className="w-full h-full object-cover shadow-md z-0 rounded-[5%]"
          src={images[0] || "default_image_url"}
          alt="Srinagar Kashmir"
          onClick={handleViewGallery}
        />
        <button
          className="absolute bottom-5 left-4 bg-black text-white px-2 py-1 rounded-xl shadow-md z-10 border-none"
          onClick={handleViewGallery}
        >
          View Gallery
        </button>
      </div>
      <div className="RightSide flex flex-col w-1/2 p-2">
        <div className="RightSideTop flex-grow-0 h-1/2 mb-2">
          <img
            className="w-full h-full object-cover shadow-md z-0 rounded-[5%]"
            src={images[0] || "default_image_url"}
            alt="Srinagar Kashmir"
            onClick={handleViewGallery}
          />
        </div>
        <div className="RightSideBottom flex space-x-1 h-1/2">
          <div className="RightSideBottomLeft flex-grow">
            <img
              className="w-full h-full object-cover shadow-md z-0 rounded-[5%]"
              src={images[0] || "default_image_url"}
              alt="Srinagar Kashmir"
              onClick={handleViewGallery}
            />
          </div>
          <div className="RightSideBottomRight flex-grow">
            <img
              className="w-full h-full object-cover shadow-md z-0 rounded-[5%]"
              src={images[0] || "default_image_url"}
              alt="Srinagar Kashmir"
              onClick={handleViewGallery}
            />
          </div>
        </div>
      </div>
      {isModalOpen && <Modal onClose={handleCloseModal} />}
    </div>
  );
}
