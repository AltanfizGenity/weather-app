import React from "react";
import { icon } from "../data/IconData";

function IconButton(props) {
  return (
    <div aria-roledescription="icon-button" className="icon-btn" onClick={props.onClick}>
      {props.children}
    </div>
  );
}

function SearchButton(props) {
  return <IconButton {...props}>{icon.search}</IconButton>;
}

function ForecastButton(props) {
  return <IconButton {...props}>{icon.forecast}</IconButton>;
}

export { SearchButton, ForecastButton };
