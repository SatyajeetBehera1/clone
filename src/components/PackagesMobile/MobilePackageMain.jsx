import React from 'react';
import TopMain from './TopSection/TopMain';
import ItineraryMain from './Itinerary/ItineraryMain';
import Payment from './Bottom/Payment';
import Terms from './Terms/TermsMain';
import PoliciesMain from './Policies/PoliciesMain';

export default function MobilePackageMain(props) {
  return (
    <div>
      <TopMain {...props}></TopMain>
      <ItineraryMain {...props}></ItineraryMain>
      <Terms {...props}></Terms>
      <PoliciesMain {...props}></PoliciesMain>
      <Payment {...props}></Payment>
      <div className='h-[100px]'></div>
    </div>
  );
}
