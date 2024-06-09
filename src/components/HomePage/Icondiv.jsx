import FlightIcon from "@mui/icons-material/Flight";
import HotelIcon from "@mui/icons-material/Hotel";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import TrainIcon from "@mui/icons-material/Train";
import DirectionsBusFilledIcon from "@mui/icons-material/DirectionsBusFilled";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import {Icondivcss} from "./Icondivcss";
export const Icondiv = () => {
  return (
    <Icondivcss>
      <div className="icondiv">
        <div>
          <span>
            <FlightIcon style={{ fontSize: 40, padding: 4 }}></FlightIcon>
          </span>
          <p>Flights</p>
        </div>
        <div>
          <span>
            <HotelIcon style={{ fontSize: 40, padding: 4 }}></HotelIcon>
          </span>
          <p>Hotels</p>
        </div>
        <div>
          <span>
            <HomeWorkIcon style={{ fontSize: 40, padding: 4 }}></HomeWorkIcon>
          </span>
          <p>Home</p>
        </div>
        <div>
          <span>
            <HolidayVillageIcon
              style={{ fontSize: 40, padding: 4 }}
            ></HolidayVillageIcon>
          </span>
          <p>Hoiday</p>
        </div>
        <div>
          <span>
            <TrainIcon style={{ fontSize: 40, padding: 4 }}></TrainIcon>
          </span>
          <p>Trains</p>
        </div>
        <div>
          <span>
            <DirectionsBusFilledIcon
              style={{ fontSize: 40, padding: 4 }}
            ></DirectionsBusFilledIcon>
          </span>
          <p>Buses</p>
        </div>
        <div>
          <span>
            <LocalTaxiIcon style={{ fontSize: 40, padding: 4 }}></LocalTaxiIcon>
          </span>
          <p>Cabs</p>
        </div>
        <div>
          <span>
            <CreditCardIcon
              style={{ fontSize: 40, padding: 4 }}
            ></CreditCardIcon>
          </span>
          <p>Visa</p>
        </div>
        <div>
          <span>
            <LocalAtmIcon
              style={{ fontSize: 40, padding: 4 }}
            ></LocalAtmIcon>
          </span>
          <p>Insurance</p>
        </div>
       
      </div>
    </Icondivcss>
  );
};
