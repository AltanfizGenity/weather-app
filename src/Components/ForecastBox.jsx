import { Button, Divider, Drawer, Flex, Title } from '@mantine/core';
import React, { useState } from 'react';
import { getWindDirection } from '../data/weather';
import { icon, weatherIcon } from '../data/IconData';
import Icon from './Icon';
import ForecastItem from './ForecastItem';
import Temperature from './Temperature';
import { useWeatherContext } from '../context/WeatherContext';
import { useStateContext } from '../context/StateContext';
import '../styles/forecast.css';

// Adjusting API | We using free tier
const forecastDayRanges = [3, 5, 7];

function ForecastBox() {
  const { forecastData } = useWeatherContext();
  const { isForecastOpen, setIsForecastOpen } = useStateContext();
  const [forecastRange, setForecastRange] = useState(3);

  if (!forecastData) {
    return <p>loading...</p>;
  }

  const { location, forecast, current } = forecastData || {};

  return (
    <>
      <Drawer.Root
        opened={isForecastOpen}
        onClose={setIsForecastOpen}
        position='right'
        id='forecast-box'
        className='drawer'
      >
        <Drawer.Overlay />
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title>
              <Flex id='forecast-location' align={'center'}>
                <Icon className='forecast-location-icon'>{icon.locationMarker}</Icon>
                <div className='location-name'>{`${location.name}, ${location.country}`}</div>
              </Flex>
            </Drawer.Title>
            <Drawer.CloseButton />
          </Drawer.Header>
          <Drawer.Body>
            <div id='forecast-body'>
              <ForecastCurrent current={current} />
              <Divider />
              <ForecastNext
                {...{
                  forecast,
                  setForecastRange,
                  forecastRange,
                }}
              />
            </div>
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>
    </>
  );
}

function ForecastCurrent({ current }) {
  const { temp_c, wind_kph, wind_dir } = current;
  const windDirection = getWindDirection(wind_dir);

  return (
    <Flex className='forecast-current' justify={'center'} align={'center'} direction={'column'} gap={'md'}>
      <Temperature className='temp-md' temp_c={temp_c} />
      <Flex className='forecast-current-info' gap={'md'}>
        <div className='icon'>
          <Icon>{weatherIcon.wind}</Icon>
        </div>
        <div className='info'>{`${windDirection}, ${wind_kph} kph`}</div>
      </Flex>
    </Flex>
  );
}

function ForecastNext(props) {
  const { forecast, setForecastRange, forecastRange } = props;
  return (
    <Flex id='forecast-next' direction={'column'}>
      <ForecastNextHeader setForecastRange={setForecastRange} forecastRange={forecastRange} />
      <ForecastNextContent {...{ forecast, forecastRange }} />
    </Flex>
  );
}

function ForecastNextHeader({ setForecastRange, forecastRange }) {
  return (
    <div id='forecast-next-header'>
      <div id='forecast-next-title'>The Next Days Forecast</div>
      <div id='forecast-next-range'>
        {forecastDayRanges.map((range, index) => {
          return (
            <Button
              variant='subtle'
              color='rgba(255, 255, 255, 1)'
              onClick={() => setForecastRange(range)}
              key={index}
              className={`range-btn ${range === forecastRange ? 'range-active' : ''}`}
            >
              {range} days
            </Button>
          );
        })}
      </div>
    </div>
  );
}

function ForecastNextContent({ forecast, forecastRange }) {
  return (
    <Flex className='forecast-next-content' direction={'column'} gap={'2rem'}>
      {forecast.forecastday.slice(0, forecastRange).map((forecastItem, index) => {
        return <ForecastItem key={index} forecastItem={forecastItem} />;
      })}
    </Flex>
  );
}

export default ForecastBox;
