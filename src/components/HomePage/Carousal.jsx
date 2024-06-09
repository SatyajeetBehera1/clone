import React, { useState, useEffect } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import { CarousalU } from "./CarousalUI";
import { slider0, slider1, slider2 } from "./CarousalData";

const Arrow = ({ direction, onClick }) => (
  <div
    className={`arrow ${direction === "prev" ? "left-arrow" : "right-arrow"}`}
    onClick={onClick}
  >
    {direction === "prev" ? (
      <NavigateBefore style={{ color: '#008cff', fontSize: 30 }} />
    ) : (
      <NavigateNext style={{ color: '#008cff', fontSize: 30 }} />
    )}
  </div>
);

const SlideContent = ({ item }) => (
  <>
    {item && (
      <div className="each-slide">
        <div className="ind-slide">
          <div className="imageSection">
            <img src={item.thumbnail_image} alt="" />
            <p className="text-xs text-gray-500">T&C's Apply</p>
          </div>
          <div className="contentSection">
            <div>
              <p className="offerCardTitle">{item.title}</p>
              <p className="offerCardSubTitle">{item.subTitle}</p>
              <div className="divider w-40 h-1 bg-red-500"></div>
              <p className="offerCardOffers text-sm text-gray-500">{item.offer}</p>
            </div>
            <div className="knowMore">
              <p className="text-sm font-bold text-blue-500">KNOW MORE</p>
            </div>
          </div>
        </div>
      </div>
    )}
  </>
);

export const CarousalUI = () => {
  const [offers, setOffers] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getSlidesToShow = () => {
    if (width < 575) return 1;
    if (width < 1024) return 1;
    return 2;
  };

  const properties = {
    duration: 20000,
    transitionDuration: 500,
    canSwipe: true,
    autoPlay: false,
    slidesToShow: getSlidesToShow(),
    slidesToScroll: getSlidesToShow(),
    prevArrow: <Arrow direction="prev" />,
    nextArrow: <Arrow direction="next" />
  };

  const sliders = [slider0, slider1, slider2, slider0];

  return (
    <CarousalU>
      <div className='homeContainer bg-white m-10 rounded-lg'>
        <div className='sliderContainer p-5'>
          <div className='sliderTitle'>
            <h2 className="text-xl font-bold">Offers</h2>
            <div className='sliderLinks mt-6 flex'>
              {["Holiday", "Flights", "Trains", "Cabs"].map((label, index) => (
                <p
                  key={index}
                  className={`indLinks cursor-pointer ${offers === index ? "border-b-2 border-blue-500" : ""}`}
                  onClick={() => setOffers(index)}
                >
                  {label}
                </p>
              ))}
            </div>
          </div>
          <Slide {...properties}>
            {sliders[offers].map((item, index) => (
              <div key={index}>
                <SlideContent item={item.first} />
                <SlideContent item={item.second} />
              </div>
            ))}
          </Slide>
        </div>
      </div>
    </CarousalU>
  );
};
