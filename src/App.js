import React, { useEffect, useState } from "react";
import { Main } from "./components/HomePage/Main";
import { HotelMain } from "./components/Hotel/HotelMain";
import { PackagesMain } from "./components/Packages/PackagesMain";
import { CompanyMain } from "./components/PackagesLaptop/CompanyMain";
import MobilePackagesMain from "./components/PackagesMobile/MobilePackageMain";
import { Route, Routes } from "react-router-dom";

function App() {
  // const [placeData, setPlaceData] = useState(null);

  // useEffect(() => {
  //   const fetchPlaceData = async () => {
  //     try
  //     {
  //       const url = 'http://192.168.0.166:8000/api/place-name/';
  //       const response = await fetch(url, {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({ place_name: 'puri' }),
  //       });

  //       if (!response.ok) {
  //         throw new Error('Network Error');
  //       }

  //       const data = await response.json();
  //       setPlaceData(data);
  //       console.log(data)
  //     } catch (error) {
  //       console.error('Fetch error:', error);
  //     }
  //   };

  //   fetchPlaceData();
  // }, []);
  let placeData={
    "package": {
      "id": 1,
      "place_name": "puri",
      "description": "fgghjklmhngfetry",
      "total_days": 3,
      "package_image1": "/package_images/KIIT2.png",
      "package_image2": "/package_images/KIIT2_MhA26v4.png",
      "package_image3": "/package_images/KIIT2_d1QQNPv.png",
      "package_image4": "/package_images/KIIT2_OSoJsI2.png",
      "package_image5": "/package_images/KIIT2_8p0djUY.png",
      "package_image6": "/package_images/KIIT2_I0YxHRI.png",
      "is_active": true,
      "package_price": "5000.00",
      "coupons": ["pack1"]
    },
    "activities": [
      {
        "id": 1,
        "place": 1,
        "activity_name": "activity 1",
        "activity_description": "e31wdhxgcwbjkghe",
        "is_active": true,
        "activity_image1": "/activity_images/KIIT2.png",
        "activity_image2": "/activity_images/KIIT2_3GbFTJ4.png",
        "activity_image3": "/activity_images/KIIT2_nawSYww.png"
      },
      {
        "id": 2,
        "place": 1,
        "activity_name": "activity 2",
        "activity_description": "3ghhesdxjc sn",
        "is_active": true,
        "activity_image1": "/activity_images/KIIT1_fCLLHSv.JPG",
        "activity_image2": "/activity_images/KIIT1_xDTdY1B.JPG",
        "activity_image3": "/activity_images/KIIT1_wI8cOPx.JPG"
      }
    ],
    "plans": [
      {
        "plan": {
          "id": 1,
          "package": 1,
          "day_number": 1,
          "starting_point": "bbsr",
          "ending_point": "puri",
          "image": "/plan_images/KIIT1_sBi3ReU.JPG"
        },
        "hotels": [
          {
            "id": 1,
            "package": 1,
            "hotel_price": "2000.00",
            "day_number": 1,
            "hotel_name": "hotel 1",
            "hotel_id": "5182c7ca-95c5-4925-b66d-72f00231862a",
            "hotel_description": "2edrchqjks",
            "hotel_rating": "3.00",
            "hotel_location": "near puri",
            "is_active": true,
            "hotel_image1": "/hotel_images/KIIT2_ivIpckm.png",
            "hotel_image2": "/hotel_images/KIIT2_ijnGl9x.png",
            "hotel_image3": "/hotel_images/KIIT2_7gaIqEi.png"
          }
        ],
        "vehicles": [
          {
            "id": 1,
            "package": 1,
            "day_number": 1,
            "car_name": "innova",
            "car_colour": "black",
            "driver_name": "sibu",
            "driver_number": "9178263098",
            "is_private": true,
            "car_number": "od02ct4937",
            "car_description": "ehgdwhkjxcwhd",
            "luggage_bags": 4,
            "car_photo": "/car_photos/KIIT2.png",
            "price_per_hour": "13.00",
            "ac": true,
            "side_seen_included": true,
            "is_active": true,
            "seats": 7,
            "first_aid": true,
            "available_location": "bbsr",
            "created_at": "2024-06-25T10:09:10.922520Z",
            "added_by": "jd",
            "owner_name": "sibu"
          }
        ],
        "itineraries": [
          {
            "id": 1,
            "plan": 1,
            "subplace_name": "sakhigopal",
            "total_sightseeing_places": 5,
            "distance_between_subplaces": "1000.00",
            "time_taken_between_subplaces": "00:00:02",
            "sightseeing_places": []
          }
        ]
      },
      {
        "plan": {
          "id": 2,
          "package": 1,
          "day_number": 2,
          "starting_point": "chandanpur",
          "ending_point": "puri",
          "image": "/plan_images/KIIT1_Za7oAVp.JPG"
        },
        "hotels": [
          {
            "id": 2,
            "package": 1,
            "hotel_price": "3000.00",
            "day_number": 2,
            "hotel_name": "hotel 2",
            "hotel_id": "9e5aa3df-d67d-402e-a1bd-6cd14c7f4871",
            "hotel_description": "ehjgdhjkc",
            "hotel_rating": "3.00",
            "hotel_location": "near puri",
            "is_active": true,
            "hotel_image1": "/hotel_images/KIIT2_LLgPpj1.png",
            "hotel_image2": "/hotel_images/KIIT2_1jdCA3A.png",
            "hotel_image3": "/hotel_images/KIIT2_7D3oRwP.png"
          }
        ],
        "vehicles": [
          {
            "id": 2,
            "package": 1,
            "day_number": 2,
            "car_name": "innova",
            "car_colour": "black",
            "driver_name": "sibu",
            "driver_number": "9178263098",
            "is_private": true,
            "car_number": "od02ct4937",
            "car_description": "sertyuikjl,mn",
            "luggage_bags": 4,
            "car_photo": "/car_photos/KIIT2_sPbRnFr.png",
            "price_per_hour": "15.00",
            "ac": true,
            "side_seen_included": true,
            "is_active": true,
            "seats": 4,
            "first_aid": true,
            "available_location": "bbsr",
            "created_at": "2024-06-25T10:42:57.428876Z",
            "added_by": "jd",
            "owner_name": "sibu"
          }
        ],
        "itineraries": [
          {
            "id": 2,
            "plan": 2,
            "subplace_name": "chandanpur",
            "total_sightseeing_places": 1,
            "distance_between_subplaces": "100.00",
            "time_taken_between_subplaces": "00:00:02",
            "sightseeing_places": []
          }
        ]
      },
      {
        "plan": {
          "id": 3,
          "package": 1,
          "day_number": 3,
          "starting_point": "sakhigopal",
          "ending_point": "puri",
          "image": "/plan_images/KIIT2_o43bAHG.png"
        },
        "hotels": [
          {
            "id": 3,
            "package": 1,
            "hotel_price": "2500.00",
            "day_number": 3,
            "hotel_name": "hotel 3",
            "hotel_id": "a475a04f-eae8-4bde-87e0-d2528c6fe094",
            "hotel_description": "hgdchsxjk",
            "hotel_rating": "3.00",
            "hotel_location": "near puri",
            "is_active": true,
            "hotel_image1": "/hotel_images/KIIT2_qiD34FV.png",
            "hotel_image2": "/hotel_images/KIIT2_KvcPsFf.png",
            "hotel_image3": "/hotel_images/KIIT2_dqbPdeA.png"
          }
        ],
        "vehicles": [
          {
            "id": 3,
            "package": 1,
            "day_number": 3,
            "car_name": "innova",
            "car_colour": "black",
            "driver_name": "sibu",
            "driver_number": "9178263098",
            "is_private": true,
            "car_number": "od02ct4937",
            "car_description": "eretyuikhg",
            "luggage_bags": 5,
            "car_photo": null,
            "price_per_hour": "18.00",
            "ac": true,
            "side_seen_included": true,
            "is_active": true,
            "seats": 1,
            "first_aid": true,
            "available_location": "bbsr",
            "created_at": "2024-06-25T10:44:11.560950Z",
            "added_by": "jd",
            "owner_name": "sibu"
          }
        ],
        "itineraries": [
          {
            "id": 3,
            "plan": 3,
            "subplace_name": "sakhigopal",
            "total_sightseeing_places": 3,
            "distance_between_subplaces": "14.00",
            "time_taken_between_subplaces": "00:06:40",
            "sightseeing_places": []
          }
        ]
      }
    ],
    "coupons": [
      {
        "id": 1,
        "coupon_name": "pack1",
        "coupon_description": "ehgwftui1kgshx",
        "coupon_price": "1000.00",
        "is_active": true
      }
    ]
  }
  
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Main placeData={placeData} />} />
        <Route
          path="/hotel"
          exact
          element={<HotelMain placeData={placeData} />}
        />
        <Route
          path="/packages"
          exact
          element={<PackagesMain placeData={placeData} />}
        />
        <Route
          path="/mobilePackages"
          exact
          element={<MobilePackagesMain placeData={placeData} />}
        />
        <Route
          path="/companypackages"
          exact
          element={<CompanyMain placeData={placeData} />}
        />
      </Routes>
    </div>
  );
}

export default App;
