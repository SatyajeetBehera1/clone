import React from 'react';
import DestinationCard from './DestinationCard';

const dest = [
  {
    name: 'Goa',
    bestTimeToVisit: 'November to February',
    placesToVisit: [
      'Calangute', 'Baga', 'Anjuna', 'Miramar', 'Palolem', 'Panjim', 'Patnem Beach'
    ],
    description: 'The unofficial party place of India, Goa is more than that. It has a great legacy, history and culture that are yet to be explored. But if beaches are what you are looking for, then the state has that too.',
  },
  {
    name: 'Kerala',
    bestTimeToVisit: 'September to March',
    placesToVisit: [
      'Sree Padmanabhaswamy Temple', 'Francis CSI Church', 'Paradesi Synagogue', 'Eravikulam National Park', 'Varkala Beach', 'Athirappilly Waterfalls'
    ],
    description: "God's own country, Kerala has been a popular tourist destination in India. You can explore it all with India tours to this marvellous destination.",
  },
  {
    name: 'Kashmir',
    bestTimeToVisit: 'March to August',
    placesToVisit: [
      'Gulmarg', 'Srinagar', 'Dal Lake', 'Sonamarg', 'Indira Gandhi Tulip Garden'
    ],
    description: 'For decades, the Kashmir valley has attracted tourists from all over the world. If you can\'t plan a vacation on your own, you should check out India tours for Kashmir to help you with an unforgettable holiday.',
  },
  {
    name: 'Rajasthan',
    bestTimeToVisit: 'November to February',
    placesToVisit: [
      'Jaipur', 'Udaipur', 'Chittor', 'Jodhpur', 'Jaisalmer', 'Mount Abu'
    ],
    description: 'If you are looking for mesmerising India tours, then Rajasthan is undoubtedly your destination of choice. From its sprawling forts and historical landmarks to its signature architecture, beautiful lakes and rich culinary traditions, the state is a must-try for the best tour packages in the country.',
  },
  {
    name: 'Sikkim',
    bestTimeToVisit: 'March to May',
    placesToVisit: [
      'Gangtok', 'Nathu La Pass', 'Tsomgo Lake', 'Rumtek Monastery'
    ],
    description: 'If you are looking for an Indian destination that is fit for a world tour package, then look no further than Sikkim. You can plan amazing India tours to this mountain marvel, which is home to the country\'s highest peak, Kanchenjunga.',
  },
  {
    name: 'Shimla',
    bestTimeToVisit: 'May to June/December to January',
    placesToVisit: [
      'The Ridge', 'Green Valley', 'Mall Road', 'Jakhoo Hill'
    ],
    description: 'Shimla, the Queen of the Hills, is the stuff that dreamy India tours are made of! Shimla is a great destination for international honeymoon packages, with its pristine landscape, mountains, greenery and romantic weather.',
  },
  {
    name: 'Uttarakhand',
    bestTimeToVisit: 'March to April/September to October',
    placesToVisit: [
      'Dehradun', 'Mussoorie', 'Nainital', 'Auli', 'Rishikesh'
    ],
    description: 'There are many India tours which keep Uttarakhand at the forefront and why not? The state is blessed with unmatched natural beauty. Find Uttarakhand tour packages covering several popular destinations.',
  },
  {
    name: 'Ooty',
    bestTimeToVisit: 'October to June',
    placesToVisit: [
      'Ooty Botanical Garden', 'Emerald Lake', 'Ooty Lake', 'Doddabetta Peak', 'Kalhatty Waterfalls', 'Deer Park'
    ],
    description: 'Those looking for soothing India tours may also consider Ooty. Your Ooty tour should include some of the region’s signature attractions. Ooty is also famous for its tea and coffee plantations.',
  },
  {
    name: 'Nainital',
    bestTimeToVisit: 'March to June',
    placesToVisit: [
      'Nainital Lake', 'Naina Devi Hindu Temple', 'Snow View Observation Point'
    ],
    description: 'India tours are also incomplete without a trip to beautiful Nainital. This resort town in Uttarakhand lies at 2,000 meters above sea level. Enjoy the cable car rides as part of your Nainital tour package along with the stunning views of Nanda Devi (the highest mountain peak in Uttarakhand) in Nainital.',
  },
  {
    name: 'Manali',
    bestTimeToVisit: 'March to June',
    placesToVisit: [
      'Hadimba Temple', 'Museum of Himachal Culture & Folk Art', 'Van Vihar National Park', 'Jogini Waterfall', 'Solang Valley'
    ],
    description: 'Manali is synonymous with scintillating India tours, encompassing romantic honeymoons, camping, hiking, skiing at the Solang Valley and trekking at the Parvati Valley. It is also famous for rafting, paragliding and other adventure activities.',
  },
];

function Destinations() {
  return (
    <div className="container mx-auto px-4 py-8 bg-[#ebe7e7] w-[80%]">
      <h1 className="text-4xl font-bold text-center mb-8">Best Destinations to Visit in India</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {dest.map((destination, index) => (
          <DestinationCard key={index} destination={destination} />
        ))}
      </div>
    </div>
  );
}

export default Destinations;
