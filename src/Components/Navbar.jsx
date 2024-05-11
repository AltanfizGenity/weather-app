import React from 'react';
import { ForecastButton, SearchButton } from './Buttons';
import { useStateContext } from '../context/StateContext';

function Navbar() {
  const { setIsSearchOpen, setIsForecastOpen } = useStateContext();
  const openSearchBox = () => setIsSearchOpen(true);
  const openForecastBox = () => setIsForecastOpen(true);

  return (
    <nav id='navbar'>
      <div id='navbar-title'>
        <h1>Weather.app</h1>
      </div>
      <div id='navbar-controls'>
        <SearchButton onClick={openSearchBox} />
        <ForecastButton onClick={openForecastBox} />
      </div>
    </nav>
  );
}

export default Navbar;
