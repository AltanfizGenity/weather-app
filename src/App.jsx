import { useState } from 'react';
import './styles/app.css';
import './styles/mantine-override.css';
import '@mantine/core/styles.css';
import { BackgroundImage, MantineProvider } from '@mantine/core';
import AppContainer from './AppContainer.jsx';

export const API_DATA = {
  apiKey: '629c877cae6f41e480f72948242704',
};

function App() {
  return (
    <MantineProvider defaultColorScheme='dark'>
      <BackgroundImage>
        <main id='weather-app'>
          <AppContainer />
        </main>
      </BackgroundImage>
    </MantineProvider>
  );
}
export default App;
