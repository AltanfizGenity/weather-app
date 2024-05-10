import React, { createContext, useState, useContext, useCallback, useEffect, useMemo } from 'react';
import { API_DATA } from '../App';
import { getWeatherBackgroundImage } from '../data/weather';

export const Context = createContext(null);
const initialLocation = 'Helsinki';

function WeatherContext({ updateImage, children }) {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  const fetchWeatherData = useCallback(async (location) => {
    const currentUrl = 'https://api.weatherapi.com/v1/';
    try {
      const response = await fetch(`${currentUrl}current.json?key=${API_DATA.apiKey}&q=${location}&aqi=no`);
      const data = await response.json();
      const condition = getWeatherBackgroundImage(data.current.condition);
      updateImage(condition);
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

  useEffect(() => {
    fetchWeatherData(initialLocation);
    fetchForecastData(initialLocation);
  }, []);

  const value = {
    weatherData,
    setWeatherData,
    forecastData,
    setForecastData,
    fetchForecastData,
    fetchWeatherData,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function useWeatherContext() {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error('Something wrong with this context, Check useWeatherContext hook code');
  }
  return context;
}

export default WeatherContext;
