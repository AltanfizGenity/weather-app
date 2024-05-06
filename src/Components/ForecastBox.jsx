import { Button, Divider, Drawer, Flex, Title } from "@mantine/core";
import React, { useState } from "react";
import { getWindDirection } from "../data/weather";
import { icon, weatherIcon } from "../data/IconData";
import Icon from "./Icon";
import ForecastItem from "./ForecastItem";
import Temperature from "./Temperature";
import "../forecast.css";
import { useWeatherContext } from "../App";

// Adjusting API | We using free tier
const forecastDayRanges = [3, 5, 7];

function ForecastBox() {
  const { forecastData, isForecastBoxOpen, setIsForecastBoxOpen } = useWeatherContext();
  const [forecastRange, setForecastRange] = useState(3);

  if (!forecastData) {
    return <p>loading...</p>;
  }

  const { location, forecast, current } = forecastData || {};

  return (
    <>
      <Drawer.Root opened={isForecastBoxOpen} onClose={setIsForecastBoxOpen} position="right" id="forecast-box" size={"500px"}>
        <Drawer.Overlay />
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title>
              <Flex gap={"sm"} align={"center"}>
                <Icon className="location-icon">{icon.locationMarker}</Icon>
                <div className="location-name">{`${location.name}, ${location.country}`}</div>
              </Flex>
            </Drawer.Title>
            <Drawer.CloseButton />
          </Drawer.Header>
          <Drawer.Body>
            <div className="forecast-body" style={{ marginTop: "1rem" }}>
              <ForecastCurrent current={current} />
              <Divider />
              <ForecastNext {...{ forecast, setForecastRange, forecastRange }} />
            </div>
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>
    </>
  );
}

function ForecastCurrent({ current }) {
  const { temp_c, wind_kph, wind_dir } = current;
  const windDirection = getWindDirection(wind_dir);

  return (
    <Flex className="forecast-current" justify={"center"} align={"center"} direction={"column"} gap={"md"}>
      <Temperature fontSize={"7rem"} temp_c={temp_c} />
      <Flex className="forecast-current-info" gap={"md"}>
        <div className="icon">
          <Icon>{weatherIcon.wind}</Icon>
        </div>
        <div className="info">{`${windDirection}, ${wind_kph} km/h`}</div>
      </Flex>
    </Flex>
  );
}

function ForecastNext(props) {
  const { forecast, setForecastRange, forecastRange } = props;
  return (
    <Flex className="forecast-next" direction={"column"} gap={"lg"}>
      <ForecastNextHeader setForecastRange={setForecastRange} />
      <ForecastNextContent {...{ forecast, forecastRange }} />
    </Flex>
  );
}

function ForecastNextHeader({ setForecastRange }) {
  return (
    <Flex className="forecast-next-header" direction={"column"} gap={"sm"} justify={"center"} align={"center"}>
      <Title className="forecast-next-title" order={3}>
        The Next Days Forecast
      </Title>
      <Flex className="forecast-next-range" align={"center"} gap={"md"}>
        {forecastDayRanges.map((range, index) => {
          return (
            <Button variant="subtle" color="rgba(255, 255, 255, 1)" onClick={() => setForecastRange(range)} key={index}>
              {range} days
            </Button>
          );
        })}
      </Flex>
    </Flex>
  );
}

function ForecastNextContent({ forecast, forecastRange }) {
  return (
    <Flex className="forecast-next-content" direction={"column"} gap={"2rem"}>
      {forecast.forecastday.slice(0, forecastRange).map((forecastItem, index) => {
        return <ForecastItem key={index} forecastItem={forecastItem} />;
      })}
    </Flex>
  );
}

export default ForecastBox;
