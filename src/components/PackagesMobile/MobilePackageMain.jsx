import React from 'react'
import TopMain from './TopSection/TopMain'
import ItineraryMain from './Itinerary/ItineraryMain'
import Payment from './Bottom/Payment'
import Terms from './Terms/TermsMain'
import PoliciesMain from './Policies/PoliciesMain'

export default function MobilePackageMain() {
  return (
    <div>
      <TopMain></TopMain>
      <ItineraryMain></ItineraryMain>
      <Terms></Terms>
      <PoliciesMain></PoliciesMain>
      <Payment></Payment>
      <div className='h-[100px]'></div>
    </div>
  )
}
