import React from 'react';
import { weatherIcon } from '../data/IconData';
import { useWeatherContext } from '../context/WeatherContext';

function WeatherDetails() {
  const { weatherData } = useWeatherContext();
  const { humidity, condition, wind_kph } = weatherData?.current || {};

  return (
    <div id='weather-details'>
      <div className='weather-detail'>
        {weatherIcon.humidity}
        <p>{humidity}%</p>
      </div>
      <div className='weather-detail'>
        {weatherIcon.condition.PartlyCloudyIcon}
        <p>{condition?.text}</p>
      </div>
      <div className='weather-detail'>
        {weatherIcon.wind}
        <p>{wind_kph}kph</p>
      </div>
    </div>
  );
}

export default WeatherDetails;
