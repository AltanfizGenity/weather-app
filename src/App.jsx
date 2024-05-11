import { useState } from 'react';
import './styles/app.css';
import './styles/mantine-override.css';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import AppContainer from './AppContainer.jsx';
import StateContext from './context/StateContext.jsx';

export const API_DATA = {
  apiKey: '629c877cae6f41e480f72948242704',
};

function App() {
  return (
    <MantineProvider defaultColorScheme='dark'>
      <main id='weather-app'>
        <StateContext>
          <AppContainer />
        </StateContext>
      </main>
    </MantineProvider>
  );
}
export default App;
