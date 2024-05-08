import React, { useState, useEffect, useCallback, useContext, createContext } from 'react';
import Navbar from './Components/Navbar';
import Weather from './Components/Weather';
import WeatherSearchBox from './Components/WeatherSearchBox.jsx';
import ForecastBox from './Components/ForecastBox.jsx';
import { Flex } from '@mantine/core';
import { API_DATA } from './App.jsx';

export const WeatherContext = createContext(null);
const initialLocation = 'Helsinki';

function AppContainer() {
  /** This code need refactor for performance.
   * using many state context can lead to spagety code or messy code, instead look up for any alternative approach for managing the react state or data flow
   */
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [isSearchBoxOpen, setIsSearchBoxOpen] = useState(false);
  const [isForecastBoxOpen, setIsForecastBoxOpen] = useState(false);

  const fetchWeatherData = useCallback(async (location) => {
    const currentUrl = 'https://api.weatherapi.com/v1/';
    try {
      const response = await fetch(`${currentUrl}current.json?key=${API_DATA.apiKey}&q=${location}&aqi=no`);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      throw new Error(error);
    }
  });

  const fetchForecastData = useCallback(async (location) => {
    const forecastUrl = `https://api.weatherapi.com/v1/forecast.json?key=${API_DATA.apiKey}&q=${location}&days=7&aqi=no&alerts=no`;
    try {
      const response = await fetch(forecastUrl);
      const data = await response.json();
      setForecastData(data);
    } catch (error) {
      throw new Error(error);
    }
  });

  /** This code need refactor for performance.
   * Using context api with many context can lead performance issues because re-render each one of them value changed.
   * Use useMemo hook instead or look up for other alternative
   */
  const contextData = {
    weatherData,
    isSearchBoxOpen,
    setIsSearchBoxOpen,
    fetchWeatherData,
    fetchForecastData,
    forecastData,
    setForecastData,
    isForecastBoxOpen,
    setIsForecastBoxOpen,
  };

  // Onmount
  useEffect(() => {
    fetchWeatherData(initialLocation);
    fetchForecastData(initialLocation);
  }, []);

  return (
    <Flex id='app-container' direction={'column'} h={'100%'}>
      <WeatherContext.Provider value={contextData}>
        <Navbar />
        <WeatherSearchBox />
        <ForecastBox />
        <Weather />
      </WeatherContext.Provider>
    </Flex>
  );
}

export function useWeatherContext() {
  const context = useContext(WeatherContext);
  if (context === undefined) {
    throw new Error('Something wrong with this context, Check useWeatherContext hook code');
  }
  return context;
}

export default AppContainer;
