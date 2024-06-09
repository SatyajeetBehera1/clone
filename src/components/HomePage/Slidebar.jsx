import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from "react-slideshow-image";
import { Smallslide } from './Smallslide';

export const MultipleSlidesExample = () => {
  const properties = {
    duration: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    indicators: false,
    transitionDuration: 400,
    infinite: true,
  };
  if (window.innerWidth <= 768) { // Adjust the breakpoint according to your needs
    properties.slidesToShow = 1;
  } else {
    properties.slidesToShow = 3;
  }

  return (
    <div className="m-7">
      <Slide {...properties}>
        <div className="w-1/3 p-2"><Smallslide para={'Students Special Helpline: Call 01244628747 '} image={"https://promos.makemytrip.com/notification/xhdpi/Vande-Flight-10072020.png"} /></div>
        <div className="w-1/3 p-2"><Smallslide para={'We are now available in हिंदी!'} image={"https://promos.makemytrip.com/Growth/Images/B2C/2x/language1@2x_20210901.png"} /></div>
        <div className="w-1/3 p-2"><Smallslide para={'Many international destinations open for Indians now'} image={"https://promos.makemytrip.com/notification/xhdpi/Vande-Flight-10072020.png"} /></div>
        <div className="w-1/3 p-2"><Smallslide para={'Going abroad for education, employment or the Olympics?'} image={"https://promos.makemytrip.com/notification/xhdpi/Vande-Flight-10072020.png"} /></div>
        <div className="w-1/3 p-2"><Smallslide para={'Call 01244628747 for international booking... '} image={"https://promos.makemytrip.com/notification/xhdpi/Vande-Flight-10072020.png"} /></div>
        <div className="w-1/3 p-2"><Smallslide para={'Insurance made easy – Acko'} image={"https://tripmoneycmsimgak.mmtcdn.com/img/Acko_1_a95a85f8c1.png"} /></div>
        <div className="w-1/3 p-2"><Smallslide para={'Check out our Indian Travel Trends Report.'} image={"https://promos.makemytrip.com/Growth/Images/B2C/Uncompressed/Artboard_travRep.png"} /></div>
        <div className="w-1/3 p-2"><Smallslide para={'Finding Indian Food just got easier! '} image={"https://promos.makemytrip.com/images/CDN_upload/indiannessapphome2.png"} /></div>
        <div className="w-1/3 p-2"><Smallslide para={'Karo Acchi Sehat Ka Iraada'} image={"https://tripmoneycmsimgak.mmtcdn.com/img/abhi_1_223c8a2989.png"} /></div>
      </Slide>
    </div>
  );
};

export const BigSlidesExample = () => {
  const properties = {
    duration: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    indicators: false,
    transitionDuration: 300,
    infinite: false,
  };

  return (
    <div style={{ width: '90%', margin: 'auto' }}>
      <Slide {...properties}>
        <div className="parentbigslide w-1/2 p-2">
          <div className="bigslideDiv">
            <div>
              <img src="https://promos.makemytrip.com/notification/xhdpi//WOW_116x116.jpg" alt="" />
              <span>T&C'sApply</span>
            </div>
            <div>
              <h3>GENERAL </h3>
              <h2>#JoHogaWOWhoga: Book you flights at 30% off now.</h2>
              <div className="reddiv"></div>
              <p>Offer valid at HDFC credit card and EasyEMI.</p>
              <h4>Explore Now</h4>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  );
};
