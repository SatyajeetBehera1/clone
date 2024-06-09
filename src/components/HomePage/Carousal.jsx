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
            <p>T&C's Apply</p>
          </div>
          <div className="contentSection">
            <div>
              <p className="offerCardTitle">{item.title}</p>
              <p className="offerCardSubTitle">{item.subTitle}</p>
              <div className="divider" />
              <p className="offerCardOffers">{item.offer}</p>
            </div>
            <div className="knowMore">
              <p>KNOW MORE</p>
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

  const sliders = [slider0, slider1, slider2];

  return (
    <CarousalU>
      <div className='homeContainer bg-white m-10 rounded-lg'>
        <div className='sliderContainer'>
          <div className='sliderTitle'>
            <h2>Offers</h2>
            <div className='sliderLinks mt-6'>
              {["All Offers", "Flights", "Trains", "Cabs"].map((label, index) => (
                <p
                  key={index}
                  className="indLinks"
                  style={{ borderBottom: offers === index ? "3px solid #008cff" : "" }}
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
