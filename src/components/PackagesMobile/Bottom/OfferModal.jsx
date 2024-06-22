import React from "react";

const OfferModal = ({ isOpen, toggleModal }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-lg mx-auto max-h-full">
        <div className="relative bg-white rounded-lg shadow-lg w-full">
          <div className="flex items-center justify-between p-5 border-b rounded-t">
            <h3 className="text-2xl font-semibold text-gray-900">Special Offers</h3>
            <button
              onClick={toggleModal}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
            >
              <svg
                className="w-5 h-5"
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
                  d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-6 space-y-6 bg-gray-50">
            <div className="relative">
              <input
                type="text"
                placeholder="Have a Coupon Code?"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-20"
              />
              <button className="absolute top-1/2 right-2 transform -translate-y-1/2 text-blue-600 font-bold hover:text-blue-700 focus:outline-none">
                Apply
              </button>
            </div>
          </div>
          <div className="bg-white">
            <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-sm mb-2">
              <div className="flex flex-col w-[85%]">
                <h2 className="font-bold text-gray-900">AIRDROP</h2>
                <p className="text-gray-600">Hurry, offer valid only for flight-inclusive deals!</p>
                <p className="font-bold text-green-500 text-sm">-₹47,661</p>
              </div>
              <button className="text-blue-600 font-bold hover:text-blue-800 focus:outline-none">Apply</button>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-sm mb-2">
              <div className="flex flex-col  w-[85%]">
                <h2 className="font-bold text-gray-900">AIRDROP</h2>
                <p className="text-gray-600">Hurry, offer valid only for flight-inclusive deals!</p>
                <p className="font-bold text-green-500 text-sm">-₹47,661</p>
              </div>
              <button className="text-blue-600 font-bold hover:text-blue-800 focus:outline-none">Apply</button>
            </div>
          </div>
          <div className="flex items-center justify-between py-4">
            <div className="h-[1px] bg-blue-400 w-[30%]"></div>
            <div className="w-[40%] bg-blue-100 flex items-center justify-center space-x-2 h-9 border border-blue-500 rounded-2xl p-2">
              <p className="text-sm text-blue-600 font-bold">View 2 More</p>
            </div>
            <div className="h-[1px] bg-blue-400 w-[30%]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferModal;
