import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import GigSection from './components/GigSection/GigSection';
import Footer from './components/Footer/Footer';
import BrowseGigs from './components/BrowseGigs/BrowseGigs';
import Categories from './components/Categories/Categories';
import HowItWorks from './components/HowItWorks/HowItWorks';
import About from './components/About/About';
import { gigData } from './data/gigData';

function App() {
  const [isLowDataMode, setIsLowDataMode] = useState(false);
  const [connectionType, setConnectionType] = useState('unknown');

  // Detect network conditions and adjust for South African mobile users
  useEffect(() => {
    // Check if the navigator API is available
    if ('connection' in navigator) {
      const conn = navigator.connection;
      
      // Set initial connection type
      if (conn) {
        setConnectionType(conn.effectiveType);
        
        // Auto-enable low data mode for slow connections common in certain SA regions
        if (conn.effectiveType === '2g' || conn.effectiveType === 'slow-2g') {
          setIsLowDataMode(true);
        }
      }
      
      // Listen for connection changes
      const connectionChangeHandler = () => {
        if (conn) {
          setConnectionType(conn.effectiveType);
          
          if (conn.effectiveType === '2g' || conn.effectiveType === 'slow-2g') {
            setIsLowDataMode(true);
          }
        }
      };
      
      if (conn) {
        conn.addEventListener('change', connectionChangeHandler);
      }
      
      return () => {
        if (conn) {
          conn.removeEventListener('change', connectionChangeHandler);
        }
      };
    }
  }, []);

  return (
    <Router>
      <div className="App min-h-screen flex flex-col bg-gray-50">
        <nav className="bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center">
                <span className="text-xl font-bold text-blue-600">GigKonnect</span>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <Link to="/" className="text-gray-600 hover:text-blue-600 font-medium">Home</Link>
                <Link to="/browse-gigs" className="text-gray-600 hover:text-blue-600 font-medium">Browse Gigs</Link>
                <Link to="/categories" className="text-gray-600 hover:text-blue-600 font-medium">Categories</Link>
                <Link to="/how-it-works" className="text-gray-600 hover:text-blue-600 font-medium">How It Works</Link>
                <Link to="/about" className="text-gray-600 hover:text-blue-600 font-medium">About Us</Link>
              </div>
              <div className="md:hidden">
                <button className="text-gray-600 hover:text-blue-600">
                  <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                {isLowDataMode && (
                  <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-2 mx-auto max-w-7xl my-2">
                    Low data mode active. Images optimized for South African mobile networks.
                    <button 
                      className="ml-2 text-blue-600 underline"
                      onClick={() => setIsLowDataMode(!isLowDataMode)}
                    >
                      {isLowDataMode ? 'Disable' : 'Enable'}
                    </button>
                  </div>
                )}
                <GigSection title="Popular South African Services" gigs={isLowDataMode ? gigData.slice(6, 10) : gigData.slice(6)} isSAFocused={true} />
                <GigSection title="Trending Global Services" gigs={isLowDataMode ? gigData.slice(0, 4) : gigData.slice(0, 6)} />
              </>
            } />
            <Route path="/browse-gigs" element={<BrowseGigs />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );  return (
    <div className="App min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <Hero />
        {isLowDataMode && (
          <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-2 mx-auto max-w-7xl my-2">
            Low data mode active. Images optimized for South African mobile networks.
            <button 
              className="ml-2 text-blue-600 underline"
              onClick={() => setIsLowDataMode(!isLowDataMode)}
            >
              {isLowDataMode ? 'Disable' : 'Enable'}
            </button>
          </div>
        )}
        <GigSection title="Popular South African Services" gigs={isLowDataMode ? gigData.slice(6, 10) : gigData.slice(6)} isSAFocused={true} />
        <GigSection title="Trending Global Services" gigs={isLowDataMode ? gigData.slice(0, 4) : gigData.slice(0, 6)} />
      </main>
      <Footer />
      
      {/* Data-light mode toggle for South African users with limited connectivity */}
      <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8">
        <button 
          className="bg-white p-3 rounded-full shadow-lg text-blue-700 flex items-center text-sm"
          onClick={() => setIsLowDataMode(!isLowDataMode)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
          {isLowDataMode ? 'Standard Mode' : 'Data-light Mode'}
        </button>
      </div>
    </div>
  );
}

export default App;
