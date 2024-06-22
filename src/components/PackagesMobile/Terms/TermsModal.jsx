import React from "react";

const exclusionsAndTerms = [
  "Standard check-in time at the hotel is normally 2:00 pm and check-out is 11:00 am. An early check-in, or a late check-out is solely based on the discretion of the hotel.",
  "A maximum of 3 adults are allowed in one room. The third occupant shall be provided a mattress/rollaway bed.",
  "Double or Twin bed type provided during check-in is at the final discretion of hotel.",
  "The itinerary is fixed and cannot be modified. Transportation shall be provided as per the itinerary and will not be at disposal. For any paid activity which is non-operational due to any unforeseen reason, we will process refund & same should reach the guest within 30 days of processing the refund. Also, for any activity which is complimentary and not charged to MMT & guest, no refund will be processed.",
  "AC will not be functional anywhere in cool or hilly areas.",
  "Entrance fee, sightseeing tickets and guide charges are not included in the packages.",
  "If your flights involve a combination of different airlines, you may have to collect your luggage on arrival at the connecting hub and register it again while checking in for the onward journey to your destination.",
  "Booking rates are subject to change without prior notice.",
  "Airline seats and hotel rooms are subject to availability at the time of booking.",
  "Pricing of the booking is based on the age of the passengers. Please make sure you enter the correct age of passengers at the time of booking. Passengers furnishing incorrect age details may incur penalty at the time of travelling.",
  "In case of unavailability in the listed hotels, arrangement for an alternate accommodation will be made in a hotel of similar standard.",
  "In case your package needs to be cancelled due to any natural calamity, weather conditions etc. MakeMyTrip shall strive to give you the maximum possible refund subject to the agreement made with our trade partners/vendors.",
  "MMT reserves the right to modify the itinerary at any point, due to reasons including but not limited to: Force Majeure events, strikes, fairs, festivals, weather conditions, traffic problems, overbooking of hotels / flights, cancellation / re-routing of flights, closure of /entry restrictions at a place of visit, etc. While we will do our best to make suitable alternate arrangements, we would not be held liable for any refunds/compensation claims arising out of this.",
  "Certain hotels may ask for a security deposit during check-in, which is refundable at check-out subject to the hotel's policy.",
  "The booking price does not include: Expenses of personal nature, such as laundry, telephone calls, room service, alcoholic beverages, mini bar charges, tips, portage, camera fees etc.",
  "Any other items not mentioned under Inclusions are not included in the cost of the booking.",
  "The package price does not include special dinner or mandatory charges at time levied by the hotels especially during New Year and Christmas or any special occasions. MakeMyTrip shall try to communicate the same while booking the package. However MakeMyTrip may not have this information readily available all the time.",
  "Cost of deviation and cost of extension of the validity on your ticket is not included.",
  "For queries regarding cancellations and refunds, please refer to our Cancellation Policy.",
  "Disputes, if any, shall be subject to the exclusive jurisdiction of the courts in New Delhi.",
  "Check-in time on a houseboat is 12 pm and check-out time is 9:00 am.",
  "Due to its climatic conditions, Munnar in Kerala does not have AC rooms.",
  "Most of the Hotels in Munnar are located far away from the city centre and local market.",
  "If a guest is staying on a houseboat, the sightseeing will not be conducted.",
];

const TermsModal = ({ isOpen, toggleModal }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
      <div className="relative w-full h-full max-w-screen-lg mx-auto overflow-auto">
        <div className="relative bg-white rounded-lg shadow-lg w-full max-h-full overflow-auto">
          <div className="flex items-center justify-between p-5 border-b rounded-t">
            <h3 className="text-2xl font-semibold text-gray-900">
              Terms And Conditions
            </h3>
            <button
              onClick={toggleModal}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-6 space-y-4">
            <h1 className="font-bold text-xl">EXCLUSIONS</h1>
            <ul className="list-disc list-inside">
              <li className="text-black">
                Package price does not include Gala dinner charges applicable on
                Christmas and New Year's Eve.
              </li>
            </ul>
            <h1 className="font-bold text-xl">Terms And Conditions</h1>
            <ul className="list-disc list-inside">
              {exclusionsAndTerms.map((item, index) => (
                <li key={index} className="text-black">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsModal;
