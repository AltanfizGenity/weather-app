import "./App.css";
import "@mantine/core/styles.css";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  BackgroundImage,
  Flex,
  MantineProvider,
} from "@mantine/core";
import Navbar from "./Components/Navbar";
import Weather from "./Components/Weather";
import WeatherSearchBox from "./Components/WeatherSearchBox.jsx";
import ForecastBox from "./Components/ForecastBox.jsx";
import { getWeatherBackgroundImage } from "./data/weather.js";

const url = "https://api.weatherapi.com/v1/";
const apiKey = "629c877cae6f41e480f72948242704";
const initialLocation = "Helsinki";

export const WeatherContext = createContext(null);

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [isSearchBoxOpen, setIsSearchBoxOpen] =
    useState(false);
  const [isForecastBoxOpen, setIsForecastBoxOpen] =
    useState(false);

  const bg = useMemo(() => {
    return weatherData?.current.condition || null;
  }, [weatherData]);

  const fetchWeatherData = useCallback(async (location) => {
    try {
      const response = await fetch(
        `${url}current.json?key=${apiKey}&q=${location}&aqi=no`
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      throw new Error(error);
    }
  });

  const fetchForecastData = useCallback(
    async (location) => {
      const forecastUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=7&aqi=no&alerts=no`;
      try {
        const response = await fetch(forecastUrl);
        const data = await response.json();
        setForecastData(data);
      } catch (error) {
        throw new Error(error);
      }
    }
  );

  /** This code nned refactor for performance.
   * Using context api with many context can lead performance issues because re-render each one of them value changed.
   * Use useMemo hook instead
   */
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
      <BackgroundImage src={getWeatherBackgroundImage(bg)}>
        <main id="weather-app">
          <WeatherContext.Provider value={contextData}>
            <Flex direction={"column"} h={"100%"}>
              <Navbar />
              <WeatherSearchBox />
              <ForecastBox />
              <Weather />
            </Flex>
          </WeatherContext.Provider>
        </main>
      </BackgroundImage>
    </MantineProvider>
  );
}

export function useWeatherContext() {
  const context = useContext(WeatherContext);
  if (context === undefined) {
    throw new Error(
      "Something wrong with this context, Check useWeatherContext hook code"
    );
  }
  return context;
}

export default App;
