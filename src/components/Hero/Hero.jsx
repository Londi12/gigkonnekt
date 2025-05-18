import React from 'react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">      <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Find the perfect freelance services in South Africa
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-blue-100">
            Gigkonnekt connects you with skilled South African professionals for any project
          </p>
          <div className="relative max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search for services..."
              className="w-full px-5 py-3 rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="absolute right-1 top-1 bg-blue-700 text-white px-5 py-2 rounded-full hover:bg-blue-800 transition-colors">
              Search
            </button>
          </div>          <div className="mt-6 text-sm text-blue-100">
            Popular: <span className="font-medium hover:underline cursor-pointer">BEE Consulting</span>, <span className="font-medium hover:underline cursor-pointer">Township Economy</span>, <span className="font-medium hover:underline cursor-pointer">Local Crafts</span>, <span className="font-medium hover:underline cursor-pointer">SA Tourism</span>, <span className="font-medium hover:underline cursor-pointer">Shweshwe Design</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
