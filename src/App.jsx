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
  const [image, setImage] = useState('');
  const updateImage = (newImage) => setImage(newImage);

  return (
    <MantineProvider defaultColorScheme='dark'>
      <BackgroundImage src={image}>
        <main id='weather-app'>
          <AppContainer updateImage={updateImage} />
        </main>
      </BackgroundImage>
    </MantineProvider>
  );
}
export default App;
