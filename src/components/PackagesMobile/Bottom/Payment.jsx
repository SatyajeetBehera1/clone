import React, { useState } from "react";
import OfferModal from "./OfferModal";

export default function Payment() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <div className="fixed bottom-1 inset-x-0 mx-auto max-w-screen-md bg-black shadow-lg rounded-t-lg p-4">
        <div className="flex items-center justify-between">
          <div className="price flex flex-col">
            <p className="text-sm font-bold text-gray-500 line-through">₹54,596</p>
            <p className="text-xl font-bold text-white">₹47,661</p>
            <p className="text-sm font-bold text-gray-500">Per person</p>
          </div>
          <button
            className="offer bg-gray-200 rounded-lg px-3 py-1 text-sm text-gray-700"
            onClick={toggleModal}
          >
            <p className="font-bold">Offer!</p>
          </button>
          <button className="Button rounded-lg bg-blue-600">
            <span className="px-4 py-2 text-lg font-bold text-white rounded-2xl hover:bg-blue-700">
              BOOK NOW
            </span>
          </button>
        </div>
      </div>
      <OfferModal isOpen={isModalOpen} toggleModal={toggleModal} />
    </div>
  );
}
