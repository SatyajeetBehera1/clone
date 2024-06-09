import React, { useState, useEffect } from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from "react-slideshow-image";
import { Smallslide } from './Smallslide';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SlideWrapper = styled.div`
  margin: 1rem;

  @media (max-width: 768px) {
    margin: 0.5rem;
  }
`;

export const MultipleSlidesExample = () => {
  const [slidesToShow, setSlidesToShow] = useState(window.innerWidth <= 768 ? 1 : 3);

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(window.innerWidth <= 768 ? 1 : 3);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const properties = {
    duration: 2000,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: false,
    indicators: false,
    transitionDuration: 400,
    infinite: true,
  };

  const slidesData = [
    { para: 'Students Special Helpline: Call 01244628747', image: 'https://promos.makemytrip.com/notification/xhdpi/Vande-Flight-10072020.png' },
    { para: 'We are now available in हिंदी!', image: 'https://promos.makemytrip.com/Growth/Images/B2C/2x/language1@2x_20210901.png' },
    { para: 'Many international destinations open for Indians now', image: 'https://promos.makemytrip.com/notification/xhdpi/Vande-Flight-10072020.png' },
    { para: 'Going abroad for education, employment or the Olympics?', image: 'https://promos.makemytrip.com/notification/xhdpi/Vande-Flight-10072020.png' },
    { para: 'Call 01244628747 for international booking...', image: 'https://promos.makemytrip.com/notification/xhdpi/Vande-Flight-10072020.png' },
    { para: 'Insurance made easy – Acko', image: 'https://tripmoneycmsimgak.mmtcdn.com/img/Acko_1_a95a85f8c1.png' },
    { para: 'Check out our Indian Travel Trends Report.', image: 'https://promos.makemytrip.com/Growth/Images/B2C/Uncompressed/Artboard_travRep.png' },
    { para: 'Finding Indian Food just got easier!', image: 'https://promos.makemytrip.com/images/CDN_upload/indiannessapphome2.png' },
    { para: 'Karo Acchi Sehat Ka Iraada', image: 'https://tripmoneycmsimgak.mmtcdn.com/img/abhi_1_223c8a2989.png' },
  ];

  return (
    <SlideWrapper>
      <Slide {...properties}>
        {slidesData.map((slide, index) => (
          <div key={index} className="p-2">
            <Smallslide para={slide.para} image={slide.image} />
          </div>
        ))}
      </Slide>
    </SlideWrapper>
  );
};

Smallslide.propTypes = {
  image: PropTypes.string.isRequired,
  para: PropTypes.string.isRequired,
};
