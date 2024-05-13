import React, { createContext, useRef, useState } from 'react';
import { Drawer, Flex, TextInput } from '@mantine/core';
import { SearchButton } from './Buttons';
import LocationItem from './LocationItem';
import { useWeatherContext } from '../context/WeatherContext';
import { useStateContext } from '../context/StateContext';
import cities from 'cities.json';

export const weatherSearchContext = createContext(null);

function WeatherSearchBox() {
  const { fetchData } = useWeatherContext();
  const { isSearchOpen, setIsSearchOpen } = useStateContext();

  const locationRef = useRef(null);
  const [locations, setLocations] = useState([]);

  const searchLocation = (evt) => {
    evt.preventDefault();
    const searchedData = cities
      .filter((city) => city.name.toLowerCase().includes(locationRef.current.value.toLowerCase().trim()))
      .slice(0, 15);
    setLocations(searchedData);
  };

  const chooseLocation = (locationName = '') => {
    setIsSearchOpen(false);
    setLocations([]);
    locationRef.current.value = '';
    fetchData(locationName);
  };

  return (
    <>
      <Drawer.Root opened={isSearchOpen} onClose={setIsSearchOpen} position='right' id='search-box' className='drawer'>
        <Drawer.Overlay />
        <Drawer.Content id='searchbox-content'>
          <Drawer.Header>
            <h5>Search location</h5>
            <Drawer.CloseButton id='close-search-btn' />
          </Drawer.Header>
          <Drawer.Body>
            <Flex direction={'column'} gap={'3rem'}>
              <div id='search-header'>
                <form id='search-form' onSubmit={searchLocation}>
                  <TextInput
                    id='search-input'
                    placeholder='Ex: London, Jakarta, etc...'
                    ref={locationRef}
                    onSubmit={searchLocation}
                  />
                  <SearchButton onClick={searchLocation} />
                </form>
              </div>
              <Flex className='search-result' direction={'column'}>
                {locations.map((location, index) => (
                  <LocationItem
                    locationName={location.name}
                    key={index}
                    onClick={() => chooseLocation(location.name)}
                  />
                ))}
              </Flex>
            </Flex>
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>
    </>
  );
}

export default WeatherSearchBox;
