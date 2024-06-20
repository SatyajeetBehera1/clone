import React, { useState } from 'react';
import Modal from './Modal';

const MidSectionPhotos = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewGallery = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="">
      <div className="container w-[82%] bg-white flex flex-col md:flex-row ml-[8%] md:ml-[8%]">
        <div className="left relative hidden md:block">
          <img
            className="w-full h-full object-cover rounded-md shadow-md z-0"
            src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/3795/1200x658_Srinagar.jpg?crop=460:300&downsize=460:300"
            alt="Srinagar Kashmir"
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
          <img
            className="w-full md:w-auto h-auto object-cover rounded-md shadow-md flex-1"
            src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1328/Q.jpg?crop=225:145&downsize=225:145"
            alt="Image 1"
          />
          <img
            className="w-full md:w-auto h-auto object-cover rounded-md shadow-md flex-1"
            src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1328/O.jpg?crop=225:145&downsize=225:145"
            alt="Image 2"
          />
          <img
            className="w-full md:w-auto h-auto object-cover rounded-md shadow-md flex-1"
            src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1328/V.jpg?crop=225:145&downsize=225:145"
            alt="Image 3"
          />
          <img
            className="w-full md:w-auto h-auto object-cover rounded-md shadow-md flex-1"
            src="https://hldak.mmtcdn.com/prod-s3-activity-templates/activitiesImagesFinal/activity/GOI/ACT10000000009982_9.jpg?crop=225:145&downsize=225:145"
            alt="Image 4"
          />
        </div>

        <div className="right hidden md:block">
          <img
            className="active ml-2 w-full h-full object-cover rounded-md shadow-md z-0"
            width="285"
            height="300"
            src="https://r1imghtlak.mmtcdn.com/2bb297aeb17b11ee9f360a58a9feac02.jpg?&downsize=285:300"
            alt="property_photo"
          />
        </div>
      </div>

      {isModalOpen && <Modal onClose={handleCloseModal} />}
    </div>
  );
};

export default MidSectionPhotos;
