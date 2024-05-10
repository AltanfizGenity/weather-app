import React, { useState, useEffect, useCallback, useContext, createContext } from 'react';
import Navbar from './Components/Navbar';
import Weather from './Components/Weather';
import WeatherSearchBox from './Components/WeatherSearchBox.jsx';
import ForecastBox from './Components/ForecastBox.jsx';
import { Flex } from '@mantine/core';
import WeatherContext from './context/WeatherContext.jsx';
import StateContext from './context/StateContext.jsx';

function AppContainer({ updateImage }) {
  return (
    <Flex id='app-container' direction={'column'} h={'100%'}>
      <WeatherContext updateImage={updateImage}>
        <StateContext>
          <Navbar />
          <WeatherSearchBox />
          <ForecastBox />
          <Weather />
        </StateContext>
      </WeatherContext>
    </Flex>
  );
}

export default AppContainer;
