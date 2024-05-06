import { Flex } from "@mantine/core";
import React, { useContext } from "react";
import { ForecastButton, SearchButton } from "./Buttons";
import { WeatherContext } from "../App";

function Navbar() {
  const { setIsSearchBoxOpen, setIsForecastBoxOpen } = useContext(WeatherContext);
  const openSearchBox = () => setIsSearchBoxOpen(true);
  const openForecastBox = () => setIsForecastBoxOpen(true);

  return (
    <nav id="navbar">
      <Flex justify={"space-between"} align={"center"}>
        <Flex>
          <h1 style={{ fontSize: "1rem" }}>Weather.app</h1>
        </Flex>
        <Flex id="navbar-controls" gap={"2rem"}>
          <SearchButton onClick={openSearchBox} />
          <ForecastButton onClick={openForecastBox} />
        </Flex>
      </Flex>
    </nav>
  );
}

export default Navbar;
