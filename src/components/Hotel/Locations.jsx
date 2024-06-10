import React from "react";
import { Locationscss } from "./Locationscss";

const flightData = [
  {
    title: "Chennai Flights",
    imgSrc: "http://promos.makemytrip.com/images/50x50-Other-23052019.png",
    locations: "Delhi, Mumbai, Chennai, Ahmedabad"
  },
  {
    title: "Goa Flights",
    imgSrc: "https://promos.makemytrip.com/store/GoaDT.JPG",
    locations: "Delhi, Mumbai, Chennai, Ahmedabad"
  },
  {
    title: "Mumbai Flights",
    imgSrc: "https://promos.makemytrip.com/store/MumbaiDT.JPG",
    locations: "Delhi, Mumbai, Chennai, Ahmedabad"
  },
  {
    title: "Hyderabad Flights",
    imgSrc: "http://promos.makemytrip.com/images/50x50-Ooty-23052019.png",
    locations: "Delhi, Mumbai, Chennai, Ahmedabad"
  },
  {
    title: "Delhi Flights",
    imgSrc: "https://promos.makemytrip.com/store/DelhiDT.JPG",
    locations: "Delhi, Mumbai, Chennai, Ahmedabad"
  },
  {
    title: "Pune Flights",
    imgSrc: "https://promos.makemytrip.com/store/PuneDT.JPG",
    locations: "Delhi, Mumbai, Chennai, Ahmedabad"
  },
  {
    title: "Kolkata Flights",
    imgSrc: "https://promos.makemytrip.com/store/SingaporeDT.JPG",
    locations: "Delhi, Mumbai, Chennai, Ahmedabad"
  },
  {
    title: "Bangalore Flights",
    imgSrc: "https://promos.makemytrip.com/store/BangaloreDT.JPG",
    locations: "Delhi, Mumbai, Chennai, Ahmedabad"
  },
  {
    title: "Jaipur Flights",
    imgSrc: "https://promos.makemytrip.com/store/JaipurDT.JPG",
    locations: "Delhi, Mumbai, Chennai, Ahmedabad"
  }
];

export const Locations = () => {
  return (
    <Locationscss>
      <div>
        <div className="mainContainer">
          {flightData.map((flight, index) => (
            <div className="indContainer" key={index}>
              <img src={flight.imgSrc} alt={`${flight.title} Image`} />
              <div className="indCardContent">
                <p className="indCardTitle">{flight.title}</p>
                <p className="indCardLocation">
                  Via: <span className="span">{flight.locations}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Locationscss>
  );
};
