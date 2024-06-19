import React from 'react';

export default function Activities() {
  return (
    <div className="max-w-xl mx-auto p-2">
      <div className="mb-6">
        <p className="text-xl font-bold">Activity in Goa <span className="text-gray-600">7 Hrs</span></p>
      </div>
      <div className="bg-gray-100 rounded-lg shadow-md p-6">
        <div className="mb-6">
          <img src="https://hldak.mmtcdn.com/prod-s3-activity-templates/activitiesImagesFinal/activity/GOI/ACT10000000009982_9.jpg" alt="Goa Activity" className="w-full rounded-lg" />
        </div>
        <h3 className="text-2xl font-semibold mb-2">North Goa Sightseeing with Free Evening Catamaran Cruise and Private Transfer</h3>
        <h6 className="text-sm text-gray-600 mb-2">Goa, India</h6>
        <p className="leading-relaxed">Starting with a day exploring the lively markets and picturesque beaches, then ending the evening with a special catamaran boat cruise on the Mandovi River is a great way to experience the beauty and excitement of North Goa.</p>
      </div>
    </div>
  );
}
