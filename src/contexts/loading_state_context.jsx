import React, { createContext, useContext, useState } from 'react';

// Creating the loading context
const LoadingContext = createContext({
  isLoading: true,
  setLoading: () => {}
});

export const useLoading = () => useContext(LoadingContext);

export const LoadingProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};
