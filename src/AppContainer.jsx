import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Weather from './Components/Weather';
import WeatherSearchBox from './Components/WeatherSearchBox.jsx';
import ForecastBox from './Components/ForecastBox.jsx';
import Background from './Components/Background.jsx';
import { Flex } from '@mantine/core';
import WeatherContext from './context/WeatherContext.jsx';
import StateContext from './context/StateContext.jsx';

function AppContainer() {
  const [image, setImage] = useState('');
  const updateImage = (newImage) => setImage(newImage);

  return (
    <Flex id='app-container' direction={'column'} h={'100%'}>
      <WeatherContext updateImage={updateImage}>
        <StateContext>
          <Navbar />
          <WeatherSearchBox />
          <Background src={image} />
          <ForecastBox />
          <Weather />
        </StateContext>
      </WeatherContext>
    </Flex>
  );
}

export default AppContainer;
