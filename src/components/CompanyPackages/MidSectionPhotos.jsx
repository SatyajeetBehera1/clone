import React from "react";

const MidSectionPhotos = () => {
  const handleViewGallery = () => {
    window.location.reload();
  };

  return (
    <div className="">
      <div className="container w-[82%] bg-white flex ml-[8%]">
        <div className="relative">
          <img
            className="w-full h-full object-cover rounded-md shadow-md z-0"
            src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/3795/1200x658_Srinagar.jpg?crop=460:300&downsize=460:300"
            alt="Srinagar Kashmir"
          />
          <button
            className="absolute bottom-2 left-2 bg-black text-white px-2 py-1 rounded-xl shadow-md z-10 border-none"
            onClick={handleViewGallery}
          >
            View Gallery
          </button>
        </div>

        <div className="flex ">
          <div className="flex-1 bg-yellow-200 border-black border-[1px] rounded-md p-3 ml-2">
            <div className="imgDetails">
              <p className="bg-blue-500 text-white text-xs rounded-xl p-1 mb-2 w-[60%]">
                PACKAGE HIGHLIGHTS
              </p>
              <ul className="list-none text-sm">
                <li className="mb-1 font-bold">Day 2 - Gulmarg</li>
                <li className="mb-1 ">Kashmiri Authentic Lunch</li>
                <li className="mb-1 font-bold">Day 5 - Srinagar</li>
                <li className="mb-1">Excursion to Sonmarg</li>
                <li className="mb-1 font-bold">Day 6 - Srinagar</li>
              </ul>
              <p className="text-blue-500 cursor-pointer">
                VIEW ALL HIGHLIGHTS
              </p>
            </div>
            <div className="img">
              <img
                className="w-48 h-auto object-cover rounded-md shadow-md active pointer"
                src="https://hldak.mmtcdn.com/prod-s3-activity-templates/activitiesImagesFinal/activity/XGU/ACT10000000000371_3.jpeg?crop=195:97&downsize=195:97"
                alt="package_highlight_Image"
              />
            </div>
          </div>

          <div className="flex-1 ml-4">
            <div className="rightTop">
              <video
                className="w-full h-[142px] object-cover rounded-md shadow-md"
                preload="auto"
                autoPlay
                controls
              >
                <source
                  src="https://holidayz.makemytrip.com/344a698b-cafe-472f-bb74-646d024a1459"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="rightBottom relative mt-1">
              <img
                className="w-full h-auto object-cover rounded-md shadow-md active"
                src="https://hldak.mmtcdn.com/prod-s3-activity-templates/activitiesImagesFinal/activity/SXR/ACT10000000028626_2.png?crop=225:145&downsize=225:145"
                alt="m_image4"
              />
              <p className="absolute bottom-1 left-2 text-white px-1 py-1 z-10">
                Activities & Sightseeing
              </p>
            </div>
          </div>
        </div>

        <div className="right">
          <img
            className="active ml-2 w-full h-full object-cover rounded-md shadow-md z-0"
            width="285"
            height="300"
            src="https://r1imghtlak.mmtcdn.com/2bb297aeb17b11ee9f360a58a9feac02.jpg?&downsize=285:300"
            alt="property_photo"
          />
        </div>
      </div>
      
    </div>
  );
};

export default MidSectionPhotos;
