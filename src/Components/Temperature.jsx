import React from "react";

function Temperature({ temp_c, fontSize }) {
  const temperatureStyle = {
    fontSize: fontSize || "inherit", // Set fontSize to the value of fontSize prop or inherit if not provided
  };

  return (
    <div className="temperature" style={temperatureStyle}>
      {temp_c}
      <span className="degree" style={{ fontSize: `75%` }}>
        &deg;
      </span>
    </div>
  );
}

export default Temperature;
