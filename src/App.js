import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import GigSection from './components/GigSection/GigSection';
import Footer from './components/Footer/Footer';
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
