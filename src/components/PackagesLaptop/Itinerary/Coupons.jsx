import React, { useState } from "react";

export default function Coupons() {
  const [selectedCoupon, setSelectedCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  const applyCoupon = (coupon) => {
    let discountValue = 0;
    switch (coupon) {
      case "AIRDROP":
        discountValue = 8111;
        break;
      case "MMTRBLFEST":
        discountValue = 10919;
        break;
      default:
        discountValue = 0;
    }
    return discountValue;
  };

  const handleApplyCoupon = () => {
    const discountValue = applyCoupon(selectedCoupon.toUpperCase());
    setDiscount(discountValue);
  };

  const handleRemoveCoupon = () => {
    setSelectedCoupon("");
    setDiscount(0);
  };

  return (
    <div className="p-4 border border-gray-300 rounded-lg shadow-md w-full mt-2 sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-[90%]">
      <div className="text-xl font-semibold mb-6 text-center">
        Coupons & Offers
      </div>

      <div className="w-full mb-6 flex items-center bg-gray-100 rounded-lg shadow-inner p-3">
        <div className="text-xs bg-sky-700 text-white rounded-full w-10 h-7 flex items-center justify-center">
          EMI
        </div>
        <div className="ml-4">
          <div className="text-sm text-gray-700 font-medium">
            No cost EMI @ ₹15,495
          </div>
          <div className="text-xs text-gray-600">
            Book your holidays with Easy EMI options.
          </div>
        </div>
      </div>

      <div className="mb-6 flex flex-col sm:flex-row items-center justify-center">
        <input
          type="text"
          placeholder="Enter Code"
          className="bg-blue-50 border text-gray-900 text-sm rounded-lg border-blue-400 focus:ring-blue-500 focus:border-blue-500 block w-[90%] sm:w-auto p-2.5 placeholder-gray-500 outline-none"
          value={selectedCoupon}
          onChange={(e) => setSelectedCoupon(e.target.value)}
        />
        <button
          className="mt-2 sm:mt-0 sm:ml-2 bg-blue-500 text-white px-3 py-2 rounded-lg"
          onClick={handleApplyCoupon}
        >
          Apply
        </button>
      </div>

      {discount > 0 && (
        <div className="mb-4 border-2 rounded-lg border-blue-500 p-2 shadow-inner">
          <div className="flex justify-between">
            <h4 className="font-medium text-gray-800">{selectedCoupon}</h4>
            <p className="text-green-700 font-bold">- ₹{discount}</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-xs text-gray-600 w-3/4">
              Enjoy additional discount on your transaction.
            </p>
            <button
              onClick={handleRemoveCoupon}
              className="text-blue-500 text-sm"
            >
              Remove
            </button>
          </div>
        </div>
      )}

      <div className="mb-4 border-2 rounded-lg border-blue-500 p-2 shadow-inner">
        <div className="flex justify-between">
          <h4 className="font-medium text-gray-800 text-sm">FEDERALEMI</h4>
          <p className="text-green-700 font-bold">- ₹9,232</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-xs text-gray-600 w-3/4">
            Enjoy additional discount on federal international EMI transactions.
          </p>
          <button
            onClick={() => setSelectedCoupon("FEDERALEMI")}
            className="text-blue-500 text-sm"
          >
            Apply
          </button>
        </div>
      </div>

      <div className="mb-4 border-2 rounded-lg border-blue-500 p-2 shadow-inner">
        <div className="flex justify-between">
          <h4 className="font-medium text-gray-800 text-sm">MMTHOLIDAY</h4>
          <p className="text-green-700 font-bold">- ₹9,827</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-xs text-gray-600 w-3/4">
            Grab Up to 30% Off* with Citibank Credit & Debit Cards
          </p>
          <button
            onClick={() => setSelectedCoupon("MMTHOLIDAY")}
            className="text-blue-500 text-sm"
          >
            Apply
          </button>
        </div>
      </div>

      <div className="text-center">
        <p className="font-bold text-sky-500">+2 More</p>
      </div>
    </div>
  );
}
