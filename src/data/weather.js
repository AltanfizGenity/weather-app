import { conditionData, iconConditionData } from './data.js';

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

/**
 *
 * @param {Object} condition
 * @returns Object that contains icon data
 */
export function getWeatherConditionIcon(condition) {
  let iconData;

  if (!condition) {
    return;
  }

  const { code } = condition;

  iconConditionData.forEach((conditionItem) => {
    if (code === conditionItem.code) {
      iconData = conditionItem;
      return;
    }
  });

  if (!iconData) throw new Error("Can't found icon data for condition code, check condition data instead");

  return iconData;
}
