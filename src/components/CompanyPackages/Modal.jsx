import React from 'react';

// ModalImage component to render each image
const ModalImage = ({ src, alt, className }) => (
  <div className={`overflow-hidden rounded-lg mb-4 md:mb-5 ${className}`}>
    <img src={src} alt={alt} className="object-cover w-full h-full" />
  </div>
);

export default function Modal({ onClose }) {
  const images = [
    {
      src: 'https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1328/Q.jpg?crop=225:145&downsize=225:145',
      alt: 'Image 1'
    },
    {
      src: 'https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1328/O.jpg?crop=225:145&downsize=225:145',
      alt: 'Image 2'
    },
    {
      src: 'https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1328/V.jpg?crop=225:145&downsize=225:145',
      alt: 'Image 3'
    },
    {
      src: 'https://hldak.mmtcdn.com/prod-s3-activity-templates/activitiesImagesFinal/activity/GOI/ACT10000000009982_9.jpg?crop=225:145&downsize=225:145',
      alt: 'Image 4'
    },
    {
      src: 'https://r1imghtlak.mmtcdn.com/2bb297aeb17b11ee9f360a58a9feac02.jpg?&downsize=285:300',
      alt: 'Image 6'
    },
    {
      src: 'https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/3795/1200x658_Srinagar.jpg?crop=460:300&downsize=460:300',
      alt: 'Image 7'
    },
    {
      src: 'https://hldak.mmtcdn.com/prod-s3-activity-templates/activitiesImagesFinal/activity/GOI/ACT10000000009982_9.jpg?crop=225:145&downsize=225:145',
      alt: 'Image 8'
    },
    {
      src: 'https://r1imghtlak.mmtcdn.com/2bb297aeb17b11ee9f360a58a9feac02.jpg?&downsize=285:300',
      alt: 'Image 9'
    },
    {
      src: 'https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/3795/1200x658_Srinagar.jpg?crop=460:300&downsize=460:300',
      alt: 'Image 10'
    },
    {
      src: 'https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/3795/1200x658_Srinagar.jpg?crop=460:300&downsize=460:300',
      alt: 'Image 10'
    },
  ];

  return (
    <div className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
      <div className="relative w-full h-full ">
        {/* Modal content */}
        <div className="relative bg-white rounded-lg shadow w-full h-full flex flex-col px-8 pt-8">
          {/* Modal header */}
          <div className="flex items-center justify-center p-4 md:p-5 border-b rounded-t border-gray-600">
            <h1 className="text-3xl font-bold text-gray-900">
              All-Inclusive Photos of Holiday Holiday
            </h1>
            {/* Close button */}
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
              onClick={onClose}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* Modal body */}
          <div className="p-4 mx-[6%] md:p-5 flex-grow overflow-y-auto grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {/* Render all images dynamically */}
            {images.map((image, index) => (
              <ModalImage
                key={index}
                src={image.src}
                alt={image.alt}
                className={(index === 0 || index === 7) ? 'sm:col-span-2 sm:row-span-2' : ''}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
