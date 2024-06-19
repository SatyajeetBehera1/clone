import React from 'react';

const TermsAndCondition = () => {
  const policies = [
    'Standard check-in time at the hotel is normally 2:00 pm and check-out is 11:00 am. An early check-in, or a late checkout is solely based on the discretion of the hotel.',
    'Please note that AC will be switched off during up-hill drives and at certain other times. This will be completely dependent on the driver’s discretion.',
    'The itinerary is fixed and cannot be modified. Transportation shall be provided as per the itinerary and will not be at disposal.',
    'In case of unavailability in the listed hotels, arrangement for an alternate accommodation will be made in a hotel of similar standard.',
    'Airline seats and hotel rooms are subject to availability at the time of booking.',
    'For any paid activity which is non-operational due to any unforeseen reason, we will process refund & same should reach the guest within 30 days of processing the refund. Also, for any activity which is complimentary and not charged to MMT & guest, no refund will be processed.',
    'Both Gondola Ride and Shikara Ride are subject to weather conditions. In case of cancellations arising due to bad weather or maintenance, a full refund of the activities will be provided.',
    'Given the region\'s cool climate, generally hotel rooms do not have air-conditioners. Should you wish to book an air-conditioned room, do get in touch with your MakeMyTrip representative as these would be subject to availability and at an additional cost.',
    'Room heaters will be provided by the hotel on request and on a direct payment basis. In case of a houseboat stay, an extra amount will be charged for Bukhari (traditional heater) for which the payment must be made directly at the location. Please note that room heaters in hotels and houseboats will be available for a fixed time only.',
    'During peak winters, hot water supply at the hotel may be limited or time bound.',
    'Accommodation in the quaint houseboats of Kashmir is purely for the experience. Unlike hotels, houseboats are faced with certain limitations such as lack of transportation between the houseboat and land, limited food menu, intermittent power supply and water supply, etc.',
    'In Gulmarg, the horseman union does not allow any vehicle to drop or pick up guests at/from the gondola. All sightseeing tours are also prohibited by the union.',
    'Aru Valley, Chandanwari and Betaab Valley at Pahalgam are not part of the itinerary (unless included) due to restrictions by the local transport union.',
    'You have an hour each to enjoy the picturesque snow-clad mountains and the green valleys of Aru Valley, Betab Valley and Chandanwadi in Pahalgam. If you wish to spend more time exploring these areas, you would have to pay the applicable additional amount to the driver/taxi union.',
    'Only vehicles allotted by the Local Unions of Pahalgam and Sonmarg can be used for sightseeing in the regions, and may not be as per the usual standards of MakeMyTrip.',
    'During winter, the road to Sonmarg remains closed and vehicles can only go up to Gagangir.',
    'For Sonmarg sightseeing, our vehicle will take the guest to the Sonmarg taxi stand. From there, the guest needs to hire a pony/local union cab for sightseeing. Thajwas Glacier, Zero Point at Sonmarg are not included in the tour, due to restrictions laid down by the local union.',
    'Due to a ban on new construction in Gulmarg, Pahalgam, and a few areas of Srinagar such as Dal Lake and Boulevard Road, some hotels may appear to be in a dilapidated state. Rest assured, these hotels provide excellent facilities and hospitality.',
    'In case of road closure due to snow and slippery roads, our vehicle will not be allowed to ply as a precautionary measure. This is as per govt./administration orders. Only snow jeeps/chained vehicles are allowed to ply. These vehicles can be hired on a direct payment basis or the same can be arranged by us at an additional cost.',
    'The package price doesn’t include special dinner or mandatory charges at time levied by the hotels especially during New Year and Christmas or any special occasions. MakeMyTrip shall try to communicate the same while booking the package. However MakeMyTrip may not have this information readily available all the time.',
    'In case your package needs to be cancelled due to any natural calamity, weather conditions etc. MakeMyTrip shall strive to give you the maximum possible refund subject to the agreement made with our trade partners/vendors.',
    'MMT reserves the right to modify the itinerary at any point, due to reasons including but not limited to: Force Majeure events, strikes, fairs, festivals, weather conditions, traffic problems, overbooking of hotels / flights, cancellation / rerouting of flights, closure of /entry restrictions at a place of visit, etc. While we will do our best to make suitable alternate arrangements, we would not be held liable for any refunds/compensation claims arising out of this. Moreover, any additional cost involved due to Force Majeure cases will have to be borne by guest.'
  ];

  return (
    <div className="space-y-4 mt-6">
      {policies.map((policy, index) => (
        <p key={index} className="text-gray-900">• {policy}</p>
      ))}
    </div>
  );
};

export default TermsAndCondition;
