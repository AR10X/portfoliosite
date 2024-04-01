// AppContext.js
import React, { createContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState('Explorer'); // Initialize selectedItem to 'Explorer'
  const location = useLocation();

  useEffect(() => {
    // Parse the pathname from the location to set the selected item
    const path = location.pathname;
    const selectedItemFromPath = path === '/' ? 'Explorer' : path.slice(1).capitalize(); // Assuming the path is like "/about", "/projects", etc.
    setSelectedItem(selectedItemFromPath);
  }, [location.pathname]);

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
  };

  return (
    <AppContext.Provider value={{ selectedItem, handleItemClick }}>
      {children}
    </AppContext.Provider>
  );
};

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};
