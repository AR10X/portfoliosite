import React, { createContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const AppContext = createContext();

const capitalize = (string) => {
  if (typeof string !== 'string') return '';
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const AppProvider = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState('Explorer'); 
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const selectedItemFromPath = path === '/' ? 'Explorer' : capitalize(path.slice(1));
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
