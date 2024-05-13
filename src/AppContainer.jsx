import React, { useState, lazy, Suspense } from 'react';
import Navbar from './Components/Navbar';
import Weather from './Components/Weather';
import Background from './Components/Background.jsx';
import WeatherContext from './context/WeatherContext.jsx';
import { useStateContext } from './context/StateContext.jsx';
import Loading from './Components/Loading.jsx';

const WeatherSearchBox = lazy(() => import('./Components/WeatherSearchBox.jsx'));
const ForecastBox = lazy(() => import('./Components/ForecastBox.jsx'));

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
            <Suspense fallback={<Loading text='Load features...' />}>
              <WeatherSearchBox />
              <ForecastBox />
            </Suspense>
            <Weather />
          </>
        )}
      </WeatherContext>
    </div>
  );
}

export default AppContainer;
