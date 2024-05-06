import React, { useContext } from "react";
import { getCurrentDate } from "../utils/date";
import { Flex } from "@mantine/core";
import Temperature from "./Temperature";
import WeatherDetails from "./WeatherDetails";
import { WeatherContext } from "../App";

function Weather() {
  const { weatherData } = useContext(WeatherContext);
  const { temp_c } = weatherData?.current || {};
  const { name } = weatherData?.location || {};

  return (
    <Flex id="weather" justify={"space-between"} align={"flex-end"} h={"100%"}>
      <Flex direction={"column"}>
        <Temperature fontSize={"15rem"} {...{ temp_c }} />
        <div className="location">{name}</div>
        <div className="weather-date">{getCurrentDate()}</div>
      </Flex>
      <WeatherDetails />
    </Flex>
  );
}

export default Weather;
