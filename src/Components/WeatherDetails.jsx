import React from 'react';
import { weatherIcon } from '../data/IconData';
import { useWeatherContext } from '../context/WeatherContext';
import { iconConditionData } from '../data/data';
import { getWeatherConditionIcon } from '../data/weather';

function WeatherDetails() {
  const { weatherData } = useWeatherContext();
  const { humidity, condition, wind_kph } = weatherData?.current || {};
  const iconData = getWeatherConditionIcon(condition);

  return (
    <div id='weather-details'>
      <div className='weather-detail'>
        {weatherIcon.humidity}
        <p>{humidity}%</p>
      </div>
      <div className='weather-detail'>
        {iconData.icon.day}
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
