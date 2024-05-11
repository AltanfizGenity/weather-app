import React from 'react';
import { getCurrentDate } from '../utils/date';
import Temperature from './Temperature';
import WeatherDetails from './WeatherDetails';
import { useWeatherContext } from '../context/WeatherContext';

function Weather() {
  const { weatherData } = useWeatherContext();
  const { temp_c } = weatherData?.current ?? {};
  const { name } = weatherData?.location ?? {};

  return (
    <div id='weather'>
      <div id='weather-info'>
        <Temperature className='main-weather-temperature' {...{ temp_c }} />
        <div id='weather-desc'>
          <div id='weather-location'>{name}</div>
          <div id='weather-date'>{getCurrentDate()}</div>
        </div>
      </div>
      <WeatherDetails />
    </div>
  );
}

export default Weather;
