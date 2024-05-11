import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Weather from './Components/Weather';
import WeatherSearchBox from './Components/WeatherSearchBox.jsx';
import ForecastBox from './Components/ForecastBox.jsx';
import Background from './Components/Background.jsx';
import { Flex } from '@mantine/core';
import WeatherContext from './context/WeatherContext.jsx';
import { useStateContext } from './context/StateContext.jsx';
import Loading from './Components/Loading.jsx';

function AppContainer() {
  const [image, setImage] = useState('');
  const updateImage = (newImage) => setImage(newImage);

  const { isLoading } = useStateContext();

  return (
    <div id='app-container'>
      <WeatherContext updateImage={updateImage}>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Background src={image} />
            <Navbar />
            <WeatherSearchBox />
            <ForecastBox />
            <Weather />
          </>
        )}
      </WeatherContext>
    </div>
  );
}

export default AppContainer;
