import { conditionData } from './condition';

const windDirection = {
  N: 'North',
  NNE: 'North-northeast',
  NE: 'Northeast',
  ENE: 'East-northeast',
  E: 'East',
  ESE: 'East-southeast',
  SE: 'Southeast',
  SSE: 'South-southeast',
  S: 'South',
  SSW: 'South-southwest',
  SW: 'Southwest',
  WSW: 'West-southwest',
  W: 'West',
  WNW: 'West-northwest',
  NW: 'Northwest',
  NNW: 'North-northwest',
};
export function getWindDirection(windCode) {
  return windDirection[windCode];
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
