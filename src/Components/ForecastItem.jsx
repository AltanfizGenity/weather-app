import React from 'react';
import { icon } from '../data/IconData';

import Temperature from './Temperature';
import { getDateString } from '../utils/date';

function ForecastItem({ forecastItem }) {
  const { date, day } = forecastItem;
  const { avgtemp_c, condition } = day;

  const modifiedDate = new Date(date);

  return (
    <div className='forecast-item'>
      <div className='forecast-info-left'>
        <div className='forecast-condition-icon'>{icon.forecast}</div>
        <div className='forecast-item-info'>
          <div className='forecast-item-date'>
            {getDateString(modifiedDate.getDate(), modifiedDate.getDay(), modifiedDate.getMonth())}
          </div>
          <div className='forecast-item-condition'>{condition.text}</div>
        </div>
      </div>
      <div className='forecast-info-right'>
        <Temperature className='temp-sm' temp_c={avgtemp_c} />
      </div>
    </div>
  );
}

export default ForecastItem;
