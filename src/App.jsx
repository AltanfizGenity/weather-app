import './styles/app.css';
import './styles/mantine-override.css';
import '@mantine/core/styles.css';
import { createContext } from 'react';
import { MantineProvider } from '@mantine/core';
import AppContainer from './AppContainer.jsx';

export const API_DATA = {
  apiKey: '629c877cae6f41e480f72948242704',
};

function App() {
  return (
    <MantineProvider defaultColorScheme='dark'>
      <main id='weather-app'>
        <AppContainer />
      </main>
    </MantineProvider>
  );
}

export default App;
