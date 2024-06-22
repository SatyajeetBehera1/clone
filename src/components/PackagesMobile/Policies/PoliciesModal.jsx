import React from "react";

const PoliciesModal = ({ isOpen, toggleModal }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
      <div className="relative w-full h-full max-w-screen-lg mx-auto overflow-auto">
        <div className="relative bg-white rounded-lg shadow-lg w-full h-full overflow-auto">
          <div className="flex items-center justify-between p-5 border-b rounded-t">
            <h3 className="text-2xl font-semibold text-gray-900">
              Policies
            </h3>
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
          <div className="p-6 space-y-4">
            <h1 className="font-bold text-2xl">Cancellation & Date Change</h1>
            <h1 className="font-bold text-2xl mt-2">Package Cancellation Policy</h1>
            <h1 className="text-red-500 text-lg">Cancellation not possible after booking</h1>
            <h1 className="font-bold text-2xl">Package Date Change Policy</h1>
            <h1 className="text-red-500 text-lg">Date Change not possible after booking</h1>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoliciesModal;
