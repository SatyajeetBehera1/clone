import React, { useState } from "react";
import { Navbar } from "../HomePage/Navbar";
import { Smallbutton } from "../HomePage/Smallbutton";
import BusinessIcon from "@mui/icons-material/Business";
import { Icondiv } from "../HomePage/Icondiv";
import { Bookingcss } from "../HomePage/Bookingcss";
import { Fromto } from "../HomePage/Fromto";
import { MultipleSlidesExample } from "../HomePage/Slidebar";
import { Bottom } from "../Hotel/Bottom";
import { Header } from "../HomePage/Header";
import { Link } from "react-router-dom";
import { FareTypes } from "../HomePage/FareTypes";
import { Login } from "../login/Login";
import { CarousalUI } from "../HomePage/Carousal";
import Luxe from "../Hotel/Luxe";
import QNA from "../Hotel/QNA";
import { Locations } from "../Hotel/Locations";
import Destinations from "./Destinations"

export const PackagesMain = () => {
  const [data, setData] = useState({
    from: "",
    to: "",
  });

  const handleData = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const addLocal = () => {
    localStorage.setItem("myKey", JSON.stringify(data));
  };

  const handlePopup = () => {
    const popup = document.getElementById("popup");
    popup.classList.toggle("active");
  };

  return (
    <div>
      <Header />
      <Navbar>
        <div className="topdiv">
          <Link to="/">
            <img
              className="mmtlogo "
              src="https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/mmtLogoWhite.png"
              alt="Logo"
            />
          </Link>
          <div className="login">
            <Login handleClick={handlePopup} />
          </div>
          <Smallbutton className="rounded-xl hide-on-mobile">
            <div className="smallbuttonpic">
              <BusinessIcon />
            </div>
            <div>
              <h4>My Trips</h4>
              <p>Manage your Bookings</p>
            </div>
          </Smallbutton>
          <Smallbutton className="rounded-xl hide-on-mobile">
            <div className="smallbuttonpic">
              <img
                src="https://imgak.mmtcdn.com/mybiz/assets/images/landing/myBizLogo_light.png"
                alt=""
              />
            </div>
            <div className="">
              <h4>Introducing myBiz</h4>
              <p>MakeMyTrip for Business</p>
            </div>
          </Smallbutton>
        </div>
        <Bookingcss>
          <Icondiv className="icondiv"></Icondiv>
          <div className="checkboxdiv hide-on-mobile">
            <div>
              <input type="checkbox" />
              <label>One Way</label>
              <input type="checkbox" />
              <label>Round Trip</label>
              <input type="checkbox" />
              <label>Multi City</label>
            </div>
            <div>Book International and Domestic Flights</div>
          </div>
          <Fromto handleChange={handleData} />
          <FareTypes />
        </Bookingcss>
        <div className="button">
          <button onClick={addLocal}>
            <Link to="/search">SEARCH</Link>
          </button>
        </div>
      </Navbar>
      <div style={{ background: "#ebe7e7", paddingTop: "50px" }}>
        <Luxe />
        <CarousalUI />
        <div style={{ width: "90%", margin: "auto" }}>
          <MultipleSlidesExample />
        </div>
        <Locations></Locations>
        <QNA></QNA>
        <Destinations></Destinations>
        <Bottom />
      </div>
    </div>
  );
};
