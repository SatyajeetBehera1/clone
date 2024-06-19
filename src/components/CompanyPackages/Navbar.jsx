import React from 'react';
import styled from 'styled-components';
import FlightIcon from "@mui/icons-material/Flight";
import HotelIcon from "@mui/icons-material/Hotel";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import TrainIcon from "@mui/icons-material/Train";
import DirectionsBusFilledIcon from "@mui/icons-material/DirectionsBusFilled";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocalAtmIcon from '@mui/icons-material/LocalAtm';

const Navbarcss = styled.div`
  .icondiv {
    p {
      padding: 0px;
      margin: -6px;
      color: #555454;
      font-size: 13px;
    }

    @media (max-width: 767px) {
      width: 70%;
      margin-bottom: 20px; 
      display: none;
    }
  }

  @media (max-width: 767px) {
    .icondiv > div {
      display: none;
    }
  }
`;

const icons = [
  { icon: <FlightIcon style={{ fontSize: 35, padding: 4 }} />, label: 'Flights' },
  { icon: <HotelIcon style={{ fontSize: 35, padding: 4 }} />, label: 'Hotels' },
  { icon: <HomeWorkIcon style={{ fontSize: 35, padding: 4 }} />, label: 'Home' },
  { icon: <HolidayVillageIcon style={{ fontSize: 35, padding: 4 }} />, label: 'Holiday' },
  { icon: <TrainIcon style={{ fontSize: 35, padding: 4 }} />, label: 'Trains' },
  { icon: <DirectionsBusFilledIcon style={{ fontSize: 35, padding: 4 }} />, label: 'Buses' },
  { icon: <LocalTaxiIcon style={{ fontSize: 35, padding: 4 }} />, label: 'Cabs' },
  { icon: <CreditCardIcon style={{ fontSize: 35, padding: 4 }} />, label: 'Visa' },
  { icon: <LocalAtmIcon style={{ fontSize: 35, padding: 4 }} />, label: 'Insurance' },
];

export const Icondiv = () => {
  return (
    <Navbarcss>
      <div className="icondiv h-[75px] pt-[5px] m-auto bg-white rounded-lg flex flex-wrap w-4/5 justify-around text-center shadow-md">
        {icons.map((item, index) => (
          <div key={index}>
            <span className="hover:text-blue-500 cursor-pointer text-[#a3a3a3]">
              {item.icon}
            </span>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </Navbarcss>
  );
};
