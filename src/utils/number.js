/**
 *
 * @param {Number} number
 * @param {Number} max
 * @returns Number
 */
export function clampMax(number, max) {
  return number > max ? max : number;
}
