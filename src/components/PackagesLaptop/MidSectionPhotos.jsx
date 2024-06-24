import React, { useState } from 'react';
import Modal from './Modal';

const MidSectionPhotos = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewGallery = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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

  return (
    <div className="">
      <div className="container w-[82%] bg-white flex flex-col md:flex-row ml-[8%] md:ml-[8%]">
        <div className="left relative hidden md:block">
          <img
            className="w-full h-full object-cover rounded-md shadow-md z-0"
            src={images[0] || "default_image_url"}
            alt="Main"
            onClick={handleViewGallery}
          />
          <button
            className="absolute bottom-2 left-2 bg-black text-white px-2 py-1 rounded-xl shadow-md z-10 border-none"
            onClick={handleViewGallery}
          >
            View Gallery
          </button>
        </div>

        <div className="middle grid grid-cols-2 gap-2 md:flex-1 md:ml-2 md:flex md:flex-wrap md:justify-between md:gap-2 w-full">
          {images.slice(1, 5).map((src, index) => (
            <img
              key={index}
              className="w-full md:w-auto h-auto object-cover rounded-md shadow-md flex-1"
              src={src || "default_image_url"}
              alt={`Image ${index + 1}`}
            />
          ))}
        </div>

        <div className="right hidden md:block">
          <img
            className="active ml-2 w-full h-full object-cover rounded-md shadow-md z-0"
            width="285"
            height="300"
            src={images[5] || "default_image_url"}
            alt="Property Photo"
          />
        </div>
      </div>

      {isModalOpen && <Modal onClose={handleCloseModal} />}
    </div>
  );
};

export default MidSectionPhotos;
