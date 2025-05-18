import React, { useState, useEffect } from 'react';
import GigCard from '../GigCard/GigCard';
import { saCategoryList } from '../../utils/saLocalization';

const GigGrid = ({ gigs }) => {
  const [filteredGigs, setFilteredGigs] = useState(gigs);
  const [activeFilter, setActiveFilter] = useState('All');
  const [saFilterActive, setSaFilterActive] = useState(false);
  
  // Reset filters when parent gigs array changes
  useEffect(() => {
    setFilteredGigs(gigs);
    setActiveFilter('All');
  }, [gigs]);
  
  // Handle filter change
  const handleFilterChange = (category) => {
    setActiveFilter(category);
    
    if (category === 'All') {
      // If SA-only filter is active, keep it
      if (saFilterActive) {
        const saOnly = gigs.filter(gig => gig.id > 6); // IDs > 6 are South African gigs
        setFilteredGigs(saOnly);
      } else {
        setFilteredGigs(gigs);
      }
    } else {
      // Filter by category and potentially also by SA-only
      let filtered = gigs.filter(gig => gig.category === category);
      
      // Additional SA filter if needed
      if (saFilterActive) {
        filtered = filtered.filter(gig => gig.id > 6);
      }
      
      setFilteredGigs(filtered);
    }
  };
  
  // Toggle South Africa-only filter
  const toggleSaFilter = () => {
    const newState = !saFilterActive;
    setSaFilterActive(newState);
    
    if (newState) {
      // Show only South African gigs (id > 6) with current category filter
      if (activeFilter === 'All') {
        setFilteredGigs(gigs.filter(gig => gig.id > 6));
      } else {
        setFilteredGigs(gigs.filter(gig => gig.category === activeFilter && gig.id > 6));
      }
    } else {
      // Remove SA-only filter but keep category filter
      if (activeFilter === 'All') {
        setFilteredGigs(gigs);
      } else {
        setFilteredGigs(gigs.filter(gig => gig.category === activeFilter));
      }
    }
  };

  return (
    <div>
      {/* Category filters - mobile responsive */}
      <div className="mb-6 overflow-x-auto pb-2">
        <div className="flex space-x-2 min-w-max">
          <button
            onClick={() => handleFilterChange('All')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
              ${activeFilter === 'All' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            All Categories
          </button>
          
          {/* South African Categories Filter Buttons */}
          {saCategoryList.slice(0, 5).map(category => (
            <button
              key={category}
              onClick={() => handleFilterChange(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${activeFilter === category 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              {category}
            </button>
          ))}
          
          {/* South Africa Only Toggle */}
          <button
            onClick={toggleSaFilter}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ml-2 flex items-center
              ${saFilterActive 
                ? 'bg-red-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            <span className="mr-1">🇿🇦</span> SA Only
          </button>
        </div>
      </div>
      
      {/* Grid of Gigs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGigs.length > 0 ? (
          filteredGigs.map(gig => (
            <GigCard key={gig.id} gig={gig} />
          ))
        ) : (
          <div className="col-span-full text-center py-12 text-gray-500">
            No gigs found matching your filters. Try changing your search criteria.
          </div>
        )}
      </div>
    </div>
  );
};

export default GigGrid;
