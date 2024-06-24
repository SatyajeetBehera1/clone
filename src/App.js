import React, { useEffect, useState } from 'react';
import { Main } from "./components/HomePage/Main";
import { HotelMain } from "./components/Hotel/HotelMain";
import { PackagesMain } from "./components/Packages/PackagesMain";
import { CompanyMain } from "./components/PackagesLaptop/CompanyMain";
import MobilePackagesMain from "./components/PackagesMobile/MobilePackageMain";
import { Route, Routes } from "react-router-dom";

function App() {
  const [placeData, setPlaceData] = useState(null);

  useEffect(() => {
    const fetchPlaceData = async () => {
      try 
      {
        const url = 'http://192.168.0.166:8000/api/place-name/';
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ place_name: 'puri' }),
        });

        if (!response.ok) {
          throw new Error('Network Error');
        }

        const data = await response.json();
        setPlaceData(data);
        console.log(data)
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchPlaceData();
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Main placeData={placeData} />} />
        <Route path="/hotel" exact element={<HotelMain placeData={placeData} />} />
        <Route path="/packages" exact element={<PackagesMain placeData={placeData} />} />
        <Route path="/mobilePackages" exact element={<MobilePackagesMain placeData={placeData} />} />
        <Route path="/companypackages" exact element={<CompanyMain placeData={placeData} />} />
      </Routes>
    </div>
  );
}

export default App;
