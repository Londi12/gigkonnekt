/**
 * South African Localization Utilities
 * Helper functions for South African market-specific features
 */

// Currency formatter for South African Rand
export const formatZAR = (amount) => {
  return new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: 'ZAR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
};

// South African provinces for location filtering
export const saProvinces = [
  'Gauteng',
  'Western Cape',
  'Eastern Cape',
  'KwaZulu-Natal',
  'Free State',
  'North West',
  'Mpumalanga',
  'Limpopo',
  'Northern Cape'
];

// South African service categories
export const saCategoryList = [
  'Web Design',
  'Web Development',
  'BEE Consulting',
  'Township Economy',
  'Local Crafts',
  'SA Tourism',
  'Digital Marketing',
  'Graphic Design',
  'Content Writing',
  'WordPress',
];

// Network connection quality detection for data savings
export const detectConnectionQuality = () => {
  if (!navigator.connection) {
    return 'unknown';
  }
  
  const conn = navigator.connection;
  if (conn.saveData) {
    return 'save-data';
  }
  
  return conn.effectiveType; // '4g', '3g', '2g', 'slow-2g'
};

// Check if the user should use data-saving mode
export const shouldUseLowDataMode = () => {
  const connectionType = detectConnectionQuality();
  
  // Enable low data mode for slow connections common in certain SA regions
  if (connectionType === 'save-data' || 
      connectionType === '2g' || 
      connectionType === 'slow-2g') {
    return true;
  }
  
  // Check user preference
  if (localStorage.getItem('lowDataMode') === 'true') {
    return true;
  }
  
  return false;
};
