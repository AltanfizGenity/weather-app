import React, { createContext, useState, useContext } from 'react';

const Context = createContext(null);

function StateContext({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isForecastOpen, setIsForecastOpen] = useState(false);

  const value = { isLoading, isSearchOpen, isForecastOpen, setIsSearchOpen, setIsForecastOpen, setIsLoading };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function useStateContext() {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error('Something wrong with this context, Check useStateContext hook code');
  }
  return context;
}

export default StateContext;
