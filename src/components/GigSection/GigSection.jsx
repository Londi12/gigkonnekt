import React from 'react';
import GigGrid from '../GigGrid/GigGrid';

const GigSection = ({ title, gigs, isSAFocused = false }) => {
  return (
    <div className="py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            {title}
            {isSAFocused && (
              <span className="ml-2 text-sm bg-red-100 text-red-800 py-1 px-2 rounded-full">
                🇿🇦 SA Focus
              </span>
            )}
          </h2>
          <div className="text-sm text-blue-600">
            <a href="#" className="hover:underline flex items-center">
              View All
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
        <GigGrid gigs={gigs} />
      </div>
    </div>
  );
};

export default GigSection;
