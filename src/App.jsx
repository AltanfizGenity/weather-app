import "./App.css";
import "@mantine/core/styles.css";
import { Flex, MantineProvider } from "@mantine/core";
import { createContext } from "react";
import Navbar from "./Components/Navbar";
import Weather from "./Components/Weather";

export const WeatherContext = createContext(null);

function App() {
  return (
    <MantineProvider defaultColorScheme="dark">
      <main id="weather-app">
        <WeatherContext.Provider value={{}}>
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
