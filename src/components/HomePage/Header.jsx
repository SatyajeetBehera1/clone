import FlightIcon from "@mui/icons-material/Flight";
import HotelIcon from "@mui/icons-material/Hotel";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import TrainIcon from "@mui/icons-material/Train";
import DirectionsBusFilledIcon from "@mui/icons-material/DirectionsBusFilled";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import styled from "styled-components";
import { useState } from "react";
import { Login } from "../login/Login";

const Icondivcss = styled.div`
  .icondiv {
    height: 70px;
    width: 100%;
    margin: auto;
    background-color: white;
    display: flex;
    flex-direction: row;
    position: fixed;
    z-index: 100;
    text-align: center;
    box-shadow: 1px 3px 5px #c0c0c0;
    .icons {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      width: 60%;
    }
  }
  .disnone {
    display: none;
  }
  @media only screen and (max-width: 768px) {
    .icondiv {
      display: none;
    }
  }
`;

export const Header = () => {
  const handlePopup = () => {
    const popup = document.getElementById("popup");
    popup.classList.toggle("active");
  };
  const [nav, setNav] = useState(false);
  const handleChange = () => {
    if (window.scrollY >= 100) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", handleChange);
  return (
    <Icondivcss>
      <div className={nav ? "icondiv" : "disnone"}>
        <div className="relative top-[10px] left-[0px]">
          <img
            src="https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/logo@2x.png"
            alt="Logo"
            className="w-1/2"
          />
        </div>
        <div className="icons">
          <div>
            <span className="hover:text-blue-500 cursor-pointer text-[#a3a3a3]">
              <FlightIcon style={{ fontSize: 30, padding: 4 }}></FlightIcon>
            </span>
            <p className="p-0 -m-[-6px] text-[#555454] text-xs">Flights</p>
          </div>
          <div>
            <span className="hover:text-blue-500 cursor-pointer text-[#a3a3a3]">
              <HotelIcon style={{ fontSize: 30, padding: 4 }}></HotelIcon>
            </span>
            <p className="p-0 -m-[-6px] text-[#555454] text-xs">Hotels</p>
          </div>
          <div>
            <span className="hover:text-blue-500 cursor-pointer text-[#a3a3a3]">
              <HomeWorkIcon style={{ fontSize: 30, padding: 4 }}></HomeWorkIcon>
            </span>
            <p className="p-0 -m-[-6px] text-[#555454] text-xs">Home</p>
          </div>
          <div>
            <span className="hover:text-blue-500 cursor-pointer text-[#a3a3a3]">
              <HolidayVillageIcon
                style={{ fontSize: 30, padding: 4 }}
              ></HolidayVillageIcon>
            </span>
            <p className="p-0 -m-[-6px] text-[#555454] text-xs">Hoiday</p>
          </div>
          <div>
            <span className="hover:text-blue-500 cursor-pointer text-[#a3a3a3]">
              <TrainIcon style={{ fontSize: 30, padding: 4 }}></TrainIcon>
            </span>
            <p className="p-0 -m-[-6px] text-[#555454] text-xs">Trains</p>
          </div>
          <div>
            <span className="hover:text-blue-500 cursor-pointer text-[#a3a3a3]">
              <DirectionsBusFilledIcon
                style={{ fontSize: 30, padding: 4 }}
              ></DirectionsBusFilledIcon>
            </span>
            <p className="p-0 -m-[-6px] text-[#555454] text-xs">Buses</p>
          </div>
          <div>
            <span className="hover:text-blue-500 cursor-pointer text-[#a3a3a3]">
              <LocalTaxiIcon
                style={{ fontSize: 30, padding: 4 }}
              ></LocalTaxiIcon>
            </span >
            <p className="p-0 -m-[-6px] text-[#555454] text-xs">Cabs</p>
          </div>
          <div>
            <span className="hover:text-blue-500 cursor-pointer text-[#a3a3a3]">
              <CreditCardIcon
                style={{ fontSize: 30, padding: 4 }}
              ></CreditCardIcon>
            </span>
            <p className="p-0 -m-[-6px] text-[#555454] text-xs">Visa</p>
          </div>
          <div>
            <span className="hover:text-blue-500 cursor-pointer text-[#a3a3a3]">
              <LocalAtmIcon style={{ fontSize: 30, padding: 4 }}></LocalAtmIcon>
            </span>
            <p className="p-0 -m-[-6px] text-[#555454] text-xs">Insurance</p>
          </div>
        </div>
        <div className="relative top-3 left-10 ">
          <Login handleClick={handlePopup} />
        </div>
      </div>
    </Icondivcss>
  );
};
