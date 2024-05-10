import { conditionData } from './condition';

/** This code need refactor or find better approach like create weather condition object data
 *  For now we use this for testing and mobility to finish the project
 */
export function getWindDirection(windCode) {
  let windDirection;
  switch (windCode) {
    case 'SW': {
      windDirection = 'South West';
      break;
    }
    case 'SE': {
      windDirection = 'South East';
      break;
    }
    case 'NW': {
      windDirection = 'North West';
      break;
    }
    case 'NE': {
      windDirection = 'North East';
      break;
    }
    case 'W': {
      windDirection = 'West';
      break;
    }
    case 'N': {
      windDirection = 'North';
      break;
    }
    case 'E': {
      windDirection = 'East';
      break;
    }
    case 'S': {
      windDirection = 'South';
      break;
    }
    case 'SSW': {
      windDirection = 'South-southwest';
      break;
    }
    case 'ENE': {
      windDirection = 'East-northeast';
      break;
    }
    case 'WSW': {
      windDirection = 'West-south-west';
      break;
    }
    case 'NNE': {
      windDirection = 'North of north-east';
      break;
    }
    case 'ESE': {
      windDirection = 'East of south-east';
      break;
    }
    default:
      console.log(windCode);
      windDirection = `code ${windCode} is not defined`;
  }
  return windDirection;
}

/**
 *
 * @param {Object} condition
 * @returns ImageObject
 */
export function getWeatherBackgroundImage(condition) {
  if (!condition) {
    return;
  }

  let image;
  const { code } = condition;

  conditionData.forEach((condition) => {
    if (condition.code.includes(code)) {
      image = condition.img;
      return;
    }
  });

  if (!image) throw new Error("Can't found the image for condition code, check condition data instead");

  return image;
}
