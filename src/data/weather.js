import cloudy from "../assets/cloudy.jpg";
import rainy from "../assets/rainy.jpg";
import snowy from "../assets/snowy.jpg";
import misty from "../assets/misty.jpg";
import thunderstorm from "../assets/thunderstorm.jpg";

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
    case "WSW": {
      windDirection = "West-south-west";
      break;
    }
    case "NNE": {
      windDirection = "North of north-east";
      break;
    }
    case "ESE": {
      windDirection = "East of south-east";
      break;
    }
    default:
      console.log(windCode);
      windDirection = `code ${windCode} is not defined`;
  }
  return windDirection;
}

const backgroundImageData = {
  cloudy,
  misty,
  rainy,
  snowy,
  thunderstorm,
};

/**
 *
 * @param {String} condition
 * @returns ImageObject
 */
export function getWeatherBackgroundImage(condition) {
  const image = null;
  condition = condition.toLowerCase();

  if (!condition) {
    throw new Error("unexpected condition value, check condition args");
  }

  switch (condition) {
    case "mist":
      image = misty;
      break;
    case "light rain":
    case "heavy rain":
      image = rainy;
      break;
    case "cloudy":
    case "partly cloudy":
    case "clear":
    case "sunny":
      image = cloudy;
      break;

    default:
      break;
  }
  return image;
}
