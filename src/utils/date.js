export function getCurrentDate() {
  const iDate = new Date();
  const date = iDate.getDate();
  const day = iDate.getDay();
  const month = iDate.getMonth();
  const year = iDate.getFullYear();
  return `${getDaysName(day)}, ${getMonthsName(month, true)} ${date}`;
}

/**
 *
 * @param {number} date
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @returns String
 */
export function getDateString(date, day, month, year) {
  return `${getDaysName(day)}, ${getMonthsName(month, true)} ${date} ${year ? year : ""}`;
}

/**
 *
 * @param {Number} monthIndex
 * @param {Boolean} isAbbr
 * @returns String
 */
export function getMonthsName(monthIndex = 0, isAbbr = false) {
  if (monthIndex < 0 || monthIndex > 11) {
    throw new Error("Month index is beyond limit, use 0 - 11 for month code");
  }
  return isAbbr ? months[monthIndex].slice(0, 3) : months[monthIndex];
}

/**
 *
 * @param {Number} dayIndex
 * @returns String
 */

export function getDaysName(dayIndex = 0) {
  if (dayIndex < 0 || dayIndex > 11) {
    throw new Error("Day index is beyond limit, use 0 - 6 for day code");
  }

  return days[dayIndex];
}

/**
 *
 * @param {Number} time
 * @returns String
 */
function zeroPadTime(time = 0) {
  return time < 10 ? `0${time}` : time;
}

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
