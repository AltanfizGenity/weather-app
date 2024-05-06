export function getWindDirection(windCode) {
  let windDirection;
  switch (windCode) {
    case "SW": {
      windDirection = "South West";
      break;
    }
    case "SE": {
      windDirection = "South East";
      break;
    }
    case "NW": {
      windDirection = "North West";
      break;
    }
    case "NE": {
      windDirection = "North East";
      break;
    }
    case "W": {
      windDirection = "West";
      break;
    }
    case "N": {
      windDirection = "North";
      break;
    }
    case "E": {
      windDirection = "East";
      break;
    }
    case "S": {
      windDirection = "South";
      break;
    }
    case "SSW": {
      windDirection = "South-southwest";
      break;
    }
    case "ENE": {
      windDirection = "East-northeast";
      break;
    }
    default:
      console.log(windCode);
      windDirection = `code ${windCode} is not defined`;
  }
  return windDirection;
}
