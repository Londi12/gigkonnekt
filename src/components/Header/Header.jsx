import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-blue-600 text-2xl font-bold">Gigkonnekt</span>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">Browse Gigs</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">Categories</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">How It Works</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">About Us</a>
          </nav>
          
          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium hidden sm:block">Sign In</a>
            <a
              href="#"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium"
            >
              Join
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
