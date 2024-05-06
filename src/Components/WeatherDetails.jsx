import React, { useContext } from "react";
import { WeatherContext } from "../App";
import { Flex } from "@mantine/core";
import { weatherIcon } from "../data/Icon";

function WeatherDetails() {
  const { weatherData } = useContext(WeatherContext);
  const { humidity, condition, wind_kph } = weatherData?.current || {};

  return (
    <Flex align={"center"} justify={"center"} className="weather-details">
      <Flex className="detail" direction={"column"}>
        {weatherIcon.humidity}
        <p>{humidity}</p>
      </Flex>
      <Flex className="detail" direction={"column"}>
        {weatherIcon.condition.PartlyCloudyIcon}
        <p>{condition?.text}</p>
      </Flex>
      <Flex className="detail" direction={"column"}>
        {weatherIcon.wind}
        <p>{wind_kph}</p>
      </Flex>
    </Flex>
  );
}

export default WeatherDetails;
