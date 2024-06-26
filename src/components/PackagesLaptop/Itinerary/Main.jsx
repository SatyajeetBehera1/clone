import React, { useState, useEffect } from "react";
import Deals from "./Deals";
import PoliciesMain from "../Policies/PoliciesMain";
import SummaryMain from "../Summary/SummaryMain";
import Parent from "./Parent";
import Pricing from "./Pricing";
import Coupons from "./Coupons";
import ItinerarySectionButton from "./ItinerarySectionButton";

export default function Main(props) {
  const { placeData, activeTab } = props;

  const basePrice = placeData
    ? parseFloat(placeData.package.package_price)
    : 500;
  const coupons = placeData ? placeData.coupons : [];

  const [discount, setDiscount] = useState(0);
  const [appliedCoupon, setAppliedCoupon] = useState("");
  const [message, setMessage] = useState("");
  const [finalPrice, setFinalPrice] = useState(basePrice);

  useEffect(() => {
    setFinalPrice(basePrice - discount);
  }, [basePrice, discount]);

  const applyCoupon = (couponCode) => {
    if (!couponCode) {
      setMessage("Please enter a coupon code.");
      return;
    }

    const coupon = coupons.find(
      (c) => c.coupon_name.toUpperCase() === couponCode.toUpperCase()
    );

    if (coupon) {
      if (coupon.coupon_name !== appliedCoupon) {
        setDiscount(parseFloat(coupon.coupon_price));
        setAppliedCoupon(coupon.coupon_name);
        setMessage("Coupon applied successfully!");
      } else {
        setMessage("Coupon is already applied.");
      }
    } else {
      setMessage("Invalid coupon code.");
    }
  };

  const removeCoupon = () => {
    setDiscount(0);
    setAppliedCoupon("");
    setMessage("");
    setFinalPrice(basePrice);
  };
  const [activeSection, setActiveSection] = useState(null);

  const handleButtonClick = (sectionName) => {
    setActiveSection(sectionName);
  };

  if (activeTab === "ITINERARY") {
    return (
      <div className="mx-[8%] mt-4 flex">
        <div className="bg-white">
          <ItinerarySectionButton
            onButtonClick={handleButtonClick}
            placeData={placeData}
          />
          <Parent activeSection={activeSection} placeData={placeData} />
        </div>

        <div className="flex flex-col">
          <div></div>
          <Pricing
            basePrice={basePrice}
            finalPrice={finalPrice}
            appliedCoupon={appliedCoupon}
          />
          <Coupons
            coupons={coupons}
            applyCoupon={applyCoupon}
            removeCoupon={removeCoupon}
            appliedCoupon={appliedCoupon}
            message={message}
            discount={discount}
          />
          <Deals activeSection={activeSection} placeData={placeData} />
        </div>
      </div>
    );
  } else if (activeTab === "POLICIES") {
    return (
      <div className="mx-[8%] mt-4 flex">
        <PoliciesMain placeData={placeData} />
        <div className="flex flex-col">
          <Pricing
            basePrice={basePrice}
            finalPrice={finalPrice}
            appliedCoupon={appliedCoupon}
          />
          <Coupons
            coupons={coupons}
            applyCoupon={applyCoupon}
            removeCoupon={removeCoupon}
            appliedCoupon={appliedCoupon}
            message={message}
            discount={discount}
          />
          <Deals placeData={placeData} />
        </div>
      </div>
    );
  } else if (activeTab === "SUMMARY") {
    return (
      <div className="mx-[8%] mt-4 flex">
        <SummaryMain placeData={placeData} />
        <div className="flex flex-col">
          <Pricing
            basePrice={basePrice}
            finalPrice={finalPrice}
            appliedCoupon={appliedCoupon}
          />
          <Coupons
            coupons={coupons}
            applyCoupon={applyCoupon}
            removeCoupon={removeCoupon}
            appliedCoupon={appliedCoupon}
            message={message}
            discount={discount}
          />
          <Deals placeData={placeData} />
        </div>
      </div>
    );
  } else {
    return null;
  }
}
