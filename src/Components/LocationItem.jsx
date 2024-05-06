import React from "react";

function LocationItem(props) {
  const { locationName } = props;
  return (
    <div className="location-item" onClick={props.onClick}>
      {locationName ?? "none"}
    </div>
  );
}

export default LocationItem;
