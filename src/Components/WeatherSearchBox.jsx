import React, { createContext, useState } from 'react';
import { Drawer, Flex, TextInput } from '@mantine/core';
import { SearchButton } from './Buttons';
import LocationItem from './LocationItem';
import { useWeatherContext } from '../context/WeatherContext';
import { useStateContext } from '../context/StateContext';
import cities from 'cities.json';

export const weatherSearchContext = createContext(null);

function WeatherSearchBox() {
  const { fetchWeatherData, fetchForecastData } = useWeatherContext();
  const { isSearchOpen, setIsSearchOpen } = useStateContext();

  const [locationQuery, setLocationQuery] = useState('');
  const [locations, setLocations] = useState([]);

  const searchLocation = (evt) => {
    evt.preventDefault();
    setLocationQuery('');
    const searchedData = cities.filter((city) => city.name.toLowerCase().includes(locationQuery.toLowerCase()));
    setLocations(searchedData);
  };

  const chooseLocation = (locationName = '') => {
    setIsSearchOpen(false);
    setLocations([]);
    fetchWeatherData(locationName);
    fetchForecastData(locationName);
  };

  return (
    <>
      <Drawer
        opened={isSearchOpen}
        onClose={setIsSearchOpen}
        position='right'
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
        withCloseButton={false}
        className='drawer search-box'
        px={'lg'}
      >
        <Flex direction={'column'} gap={'3rem'}>
          <form onSubmit={searchLocation}>
            <Flex align={'center'} gap={'lg'}>
              <TextInput
                placeholder='Search location'
                flex={2}
                value={locationQuery}
                onChange={(evt) => setLocationQuery(evt.currentTarget.value)}
                onSubmit={searchLocation}
              />
              <SearchButton onClick={searchLocation} />
            </Flex>
          </form>
          <Flex className='search-result' direction={'column'}>
            {locations.map((location, index) => (
              <LocationItem locationName={location.name} key={index} onClick={() => chooseLocation(location.name)} />
            ))}
          </Flex>
        </Flex>
      </Drawer>
    </>
  );
}

export default WeatherSearchBox;
