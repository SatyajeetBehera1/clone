import React, { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { Smallbutton } from "./Smallbutton";
import BusinessIcon from "@mui/icons-material/Business";
import { Icondiv } from "./Icondiv";
import { Bookingcss } from "./Bookingcss";
import { Fromto } from "./Fromto";
import { MultipleSlidesExample } from "./Slidebar";
import { Bottom } from "./Bottom";
import { Header } from "./Header";
import { Link } from "react-router-dom";
import { SmallBottom } from "./SmallBottom";
import { FareTypes } from "./FareTypes";
import { Login } from "../login/Login";
import { CarousalUI } from "./Carousal";

export const Main = () => {
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        const elements = document.querySelectorAll(".hide-on-mobile");
        elements.forEach((element) => (element.style.display = "none"));
      } else {
        const elements = document.querySelectorAll(".hide-on-mobile");
        elements.forEach((element) => (element.style.display = ""));
      }
    };

    // Initial check
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        <SmallBottom />
        <CarousalUI />
        <div style={{ width: "90%", margin: "auto" }}>
          <MultipleSlidesExample />
        </div>
        <Bottom />
      </div>
    </div>
  );
};
