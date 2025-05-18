import React, { useState, useEffect } from 'react';
import { FaStar, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import { formatZAR } from '../../utils/saLocalization';

const GigCard = ({ gig }) => {
  const { title, description, price, sellerName, rating, reviewCount, deliveryTime, category, image } = gig;
  const [isLowDataMode, setIsLowDataMode] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  
  // Check for low data mode from localStorage or network conditions
  useEffect(() => {
    // Check if in low data mode (can be set by App.js component)
    const lowDataCheck = localStorage.getItem('lowDataMode') === 'true';
    setIsLowDataMode(lowDataCheck);
    
    // Check connection quality using the Network Information API if available
    if ('connection' in navigator && navigator.connection) {
      if (navigator.connection.saveData || 
          navigator.connection.effectiveType === '2g' || 
          navigator.connection.effectiveType === 'slow-2g') {
        setIsLowDataMode(true);
      }
    }
  }, []);

  const handleBuyClick = () => {
    alert(`Thank you for your interest in "${title}". Your purchase request has been initiated.`);
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">      {/* Gig Image - Optimized for South African mobile networks */}
      <div className="relative">
        {isLowDataMode && !isImageLoaded ? (
          <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
            <button 
              onClick={() => setIsImageLoaded(true)}
              className="bg-blue-600 text-white px-3 py-1 rounded text-xs"
            >
              Load Image
            </button>
          </div>
        ) : (
          <img 
            src={isLowDataMode ? `${image}&q=60&w=400` : image} 
            alt={title} 
            loading="lazy"
            width="400"
            height="192"
            className="w-full h-48 object-cover"
          />
        )}
        <div className="absolute top-2 right-2">
          <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
            {category}
          </span>
        </div>
      </div>

      {/* Gig Content */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-bold text-gray-800 text-lg mb-2 line-clamp-2 hover:text-blue-600">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2 text-sm">
          {description}
        </p>

        {/* Seller Info */}
        <div className="text-sm text-gray-500 mb-3">
          by <span className="font-medium">{sellerName}</span>
        </div>

        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex items-center text-yellow-400 mr-1">
            <FaStar />
          </div>
          <span className="font-bold text-gray-700">{rating}</span>
          <span className="text-gray-500 text-sm ml-1">({reviewCount})</span>
        </div>        {/* Delivery Time */}
        <div className="flex items-center text-gray-600 text-sm mb-2">
          <FaClock className="mr-1" />
          <span>Delivers in {deliveryTime} day{deliveryTime !== 1 ? 's' : ''}</span>
        </div>
        
        {/* Add South African location marker (for new SA-specific gigs) */}
        {gig.id > 6 && (
          <div className="flex items-center text-gray-600 text-sm mb-4">
            <FaMapMarkerAlt className="mr-1 text-red-500" />
            <span>South Africa</span>
          </div>
        )}        <div className="mt-auto">          <div className="flex items-center justify-between">
            <div className="text-green-600 font-bold">
              {formatZAR(price)}
            </div>
            <button 
              onClick={handleBuyClick} 
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GigCard;
