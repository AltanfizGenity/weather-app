import React from "react";

function Icon(props) {
  return (
    <div className="icon" style={props.style}>
      {props.children}
    </div>
  );
}

export default Icon;
