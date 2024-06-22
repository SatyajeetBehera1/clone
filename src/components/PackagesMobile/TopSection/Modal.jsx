import React from 'react';

const ModalImage = ({ src, alt }) => (
  <div className="relative group overflow-hidden rounded-lg shadow-lg transition duration-300 ease-in-out mt-2">
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover"
      style={{ width: '100%', height: '100%' }}
    />
  </div>
);

export default function Modal({ onClose }) {
  const images = [
    {
      src: 'https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/3795/1200x658_Srinagar.jpg?crop=460:300&downsize=460:300',
      alt: 'Srinagar Kashmir'
    },
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
      src: 'https://hldak.mmtcdn.com/prod-s3-activity-templates/activitiesImagesFinal/activity/GOI/ACT10000000009982_9.jpg?crop=225:145&downsize=225:145',
      alt: 'Image 4'
    },
    {
      src: 'https://hldak.mmtcdn.com/prod-s3-activity-templates/activitiesImagesFinal/activity/GOI/ACT10000000009982_9.jpg?crop=225:145&downsize=225:145',
      alt: 'Image 4'
    },
  ];

  return (
    <div className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
      <div className="relative w-full h-full">
        {/* Modal content */}
        <div className="relative bg-white rounded-lg shadow-lg w-full h-full flex flex-col p-8">
          {/* Modal header */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-600">
            <h1 className="text-3xl font-bold text-gray-900">
              All-Inclusive Photos of Holiday
            </h1>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center focus:outline-none"
              onClick={onClose}
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* Modal body */}
          <div className="p-4 md:p-5 flex-grow overflow-y-auto scrollbar scrollbar-thumb-white">
            {/* Render all images */}
            <div className="grid gap-4 mt-8">
              {images.map((image, index) => (
                <ModalImage key={index} src={image.src} alt={image.alt} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
