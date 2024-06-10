import React, { useState, useEffect } from 'react';

const TopCarousal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/heroBannerImages/Europe-Holiday-1200x320-19Mar.jpg?crop=1200:320&downsize=1200:320",
    "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/heroBannerImages/SwissPeak-1200x320-20Mar.jpg?crop=1200:320&downsize=1200:320",
    "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/heroBannerImages/HoneyPackages_1200x320_23Jan.jpg?crop=1200:320&downsize=1200:320",
    "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/heroBannerImages/HeroBanner-1200x320-290524.jpg?crop=1200:320&downsize=1200:320",
    "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/heroBannerImages/HeroBanner-1200x320-290524.jpg?crop=1200:320&downsize=1200:320"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); 

    return () => clearInterval(interval); 
  }, [images.length]);

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className='bg-[#ebe7e7] mt-[-20px]'>
    <div id="default-carousel" className="relative w-[80%] m-auto bg-[#ebe7e7] rounded-lg" data-carousel="slide">
      <div className="relative h-56 md:h-96 overflow-hidden rounded-lg">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
            data-carousel-item
          >
            <img src={image} className="w-full h-full object-cover" alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="absolute ml-[-30px] z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-2 h-3 rounded-full border-none ${index === currentIndex ? 'bg-blue-600' : 'bg-white '}`}
            aria-current={index === currentIndex}
            aria-label={`Slide ${index + 1}`}
            onClick={() => handleIndicatorClick(index)}
            data-carousel-slide-to={index}
          ></button>
        ))}
      </div>
    </div>
    </div>
  );
};

export default TopCarousal;
