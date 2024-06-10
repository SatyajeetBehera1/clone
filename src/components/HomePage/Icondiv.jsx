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
      <div className="icondiv h-[75px] pt-[5px] m-auto bg-white rounded-lg flex flex-wrap w-4/5 justify-around text-center shadow-md">
      
          <div>
            <span className="hover:text-blue-500 cursor-pointer text-[#a3a3a3]">
              <FlightIcon style={{ fontSize: 35, padding: 4 }}></FlightIcon>
            </span>
            <p className="p-0 -m-[-6px] text-[#555454] text-xs">Flights</p>
          </div>
          <div>
            <span className="hover:text-blue-500 cursor-pointer text-[#a3a3a3]">
              <HotelIcon style={{ fontSize: 35, padding: 4 }}></HotelIcon>
            </span>
            <p className="p-0 -m-[-6px] text-[#555454] text-xs">Hotels</p>
          </div>
          <div>
            <span className="hover:text-blue-500 cursor-pointer text-[#a3a3a3]">
              <HomeWorkIcon style={{ fontSize: 35, padding: 4 }}></HomeWorkIcon>
            </span>
            <p className="p-0 -m-[-6px] text-[#555454] text-xs">Home</p>
          </div>
          <div>
            <span className="hover:text-blue-500 cursor-pointer text-[#a3a3a3]">
              <HolidayVillageIcon
                style={{ fontSize: 35, padding: 4 }}
              ></HolidayVillageIcon>
            </span>
            <p className="p-0 -m-[-6px] text-[#555454] text-xs">Hoiday</p>
          </div>
          <div>
            <span className="hover:text-blue-500 cursor-pointer text-[#a3a3a3]">
              <TrainIcon style={{ fontSize: 35, padding: 4 }}></TrainIcon>
            </span>
            <p className="p-0 -m-[-6px] text-[#555454] text-xs">Trains</p>
          </div>
          <div>
            <span className="hover:text-blue-500 cursor-pointer text-[#a3a3a3]">
              <DirectionsBusFilledIcon
                style={{ fontSize: 35, padding: 4 }}
              ></DirectionsBusFilledIcon>
            </span>
            <p className="p-0 -m-[-6px] text-[#555454] text-xs">Buses</p>
          </div>
          <div>
            <span className="hover:text-blue-500 cursor-pointer text-[#a3a3a3]">
              <LocalTaxiIcon
                style={{ fontSize: 35, padding: 4 }}
              ></LocalTaxiIcon>
            </span >
            <p className="p-0 -m-[-6px] text-[#555454] text-xs">Cabs</p>
          </div>
          <div>
            <span className="hover:text-blue-500 cursor-pointer text-[#a3a3a3]">
              <CreditCardIcon
                style={{ fontSize: 35, padding: 4 }}
              ></CreditCardIcon>
            </span>
            <p className="p-0 -m-[-6px] text-[#555454] text-xs">Visa</p>
          </div>
          <div>
            <span className="hover:text-blue-500 cursor-pointer text-[#a3a3a3]">
              <LocalAtmIcon style={{ fontSize: 35, padding: 4 }}></LocalAtmIcon>
            </span>
            <p className="p-0 -m-[-6px] text-[#555454] text-xs">Insurance</p>
          </div>
        </div>
       
    </Icondivcss>
  );
};
