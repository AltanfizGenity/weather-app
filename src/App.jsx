import "./App.css";
import "@mantine/core/styles.css";
import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import { Flex, MantineProvider } from "@mantine/core";
import Navbar from "./Components/Navbar";
import Weather from "./Components/Weather";

// import WeatherSearchBox from "./Components/Weather/WeatherSearchBox"?;
// import { clampMax } from "../../utils/number.js";
// import ForecastBox from "./Components/Weather/Forecast/ForecastBox.jsx";

const url = "https://api.weatherapi.com/v1/";
const apiKey = "629c877cae6f41e480f72948242704";
const initialLocation = "Jakarta";

export const WeatherContext = createContext(null);

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [isSearchBoxOpen, setIsSearchBoxOpen] = useState(false);
  const [isForecastBoxOpen, setIsForecastBoxOpen] = useState(false);

  const fetchWeatherData = useCallback(async (location) => {
    try {
      const response = await fetch(`${url}current.json?key=${apiKey}&q=${location}&aqi=no`);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  });

  const fetchForecastData = useCallback(async (location) => {
    const forecastUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=7&aqi=no&alerts=no`;
    try {
      const response = await fetch(forecastUrl);
      const data = await response.json();
      setForecastData(data);
    } catch (error) {
      throw new Error(error);
    }
  });

  const contextData = {
    weatherData,
    isSearchBoxOpen,
    setIsSearchBoxOpen,
    fetchWeatherData,
    fetchForecastData,
    forecastData,
    setForecastData,
    isForecastBoxOpen,
    setIsForecastBoxOpen,
  };

  // Onmount
  useEffect(() => {
    fetchWeatherData(initialLocation);
    fetchForecastData(initialLocation);
  }, []);

  return (
    <MantineProvider defaultColorScheme="dark">
      <main id="weather-app">
        <WeatherContext.Provider value={contextData}>
          <Flex direction={"column"} h={"100%"}>
            <Navbar />
            {/* <WeatherSearchBox /> */}
            {/* <ForecastBox /> */}
            <Weather />
          </Flex>
        </WeatherContext.Provider>
      </main>
    </MantineProvider>
  );
}

export default App;
