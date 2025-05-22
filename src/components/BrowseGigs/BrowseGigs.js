import React from 'react';
import { gigData } from '../../data/gigData';
import GigGrid from '../GigGrid/GigGrid';
import './BrowseGigs.css';

const BrowseGigs = () => {
  return (
    <div className="browse-gigs">
      <h1>Browse Gigs</h1>
      <div className="gig-filters">
        <div className="filter-group">
          <h3>Categories</h3>
          <div className="filter-options">
            <button className="filter-btn">All</button>
            <button className="filter-btn">UI/UX</button>
            <button className="filter-btn">Development</button>
            <button className="filter-btn">Marketing</button>
            <button className="filter-btn">Business</button>
          </div>
        </div>
        <div className="filter-group">
          <h3>Price Range</h3>
          <div className="price-range">
            <input type="range" min="0" max="5000" />
            <span className="price-display">R0 - R5000</span>
          </div>
        </div>
      </div>
      <GigGrid gigs={gigData} />
    </div>
  );
};

export default BrowseGigs;
