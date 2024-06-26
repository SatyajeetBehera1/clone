import React, { useState } from "react";

const Coupons = ({ coupons, applyCoupon, removeCoupon, appliedCoupon, message, discount }) => {
  const [selectedCoupon, setSelectedCoupon] = useState("");

  const handleApplyCoupon = () => {
    applyCoupon(selectedCoupon);
  };

  const handleRemoveCoupon = () => {
    setSelectedCoupon("");
    removeCoupon();
  };
  return (
    <div className="mt-2 p-4 border bg-white border-gray-300 rounded-lg shadow-md w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-[90%]">
      <div className="text-xl font-semibold mb-6 text-center">
        Coupons & Offers
      </div>
      <div className="mb-6 flex flex-col sm:flex-row items-center justify-center">
        <input
          type="text"
          placeholder="Enter Code"
          className="bg-blue-50 border text-gray-900 text-sm rounded-lg border-blue-400 focus:ring-blue-500 focus:border-blue-500 block w-[90%] sm:w-auto p-2.5 placeholder-gray-500 outline-none"
          value={selectedCoupon}
          onChange={(e) => setSelectedCoupon(e.target.value)}
        />
        {appliedCoupon ? (
          <button
            className="mt-2 sm:mt-0 sm:ml-2 bg-red-500 text-white px-3 py-2 rounded-lg"
            onClick={handleRemoveCoupon}
          >
            Remove
          </button>
        ) : (
          <button
            className="mt-2 sm:mt-0 sm:ml-2 bg-blue-500 text-white px-3 py-2 rounded-lg"
            onClick={handleApplyCoupon}
          >
            Apply
          </button>
        )}
      </div>
      {coupons.map((coupon) => (
        <div key={coupon.id} className="mb-4 border-2 rounded-lg border-blue-500 p-2 shadow-inner">
          <div className="flex justify-between">
            <h4 className="font-medium text-gray-800 text-sm">{coupon.coupon_name}</h4>
            <p className="text-green-700 font-bold">- ₹{coupon.coupon_price}</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-xs text-gray-600 w-[250px]">{coupon.coupon_description}</p>
            <button onClick={() => setSelectedCoupon(coupon.coupon_name)} className="text-blue-500 text-sm">
              Apply
            </button>
          </div>
        </div>
      ))}
      {message && <div className="mb-4 text-center text-red-500">{message}</div>}
      {discount > 0 && <div className="mb-4 text-center text-green-500">Discount Applied: ₹{discount}</div>}
    </div>
  );
};

export default Coupons;
