import { AuthorizationStatus } from './constants';

export function getRandomNumber(min: number, max: number) {
  const minCeil = Math.ceil(min);
  const maxFloor = Math.floor(max);
  return Math.floor(Math.random() * (maxFloor - minCeil + 1)) + minCeil;
}

export const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

const SECONDS_IN_MINUTE = 60;
const SECONDS_IN_HOUR = 3600;
const MIN_TWO_DIGIT = 10;
const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


export function formatTime(secs = 0): string {
  if (!secs) {
    return '00:00';
  }

  const secsInt = parseInt(secs.toString(), 10);
  const hours = Math.floor(secsInt / SECONDS_IN_HOUR);
  const minutes = Math.floor((secsInt - (hours * SECONDS_IN_HOUR)) / SECONDS_IN_MINUTE);
  const seconds = secsInt - (hours * SECONDS_IN_HOUR) - (minutes * SECONDS_IN_MINUTE);

  const secondsStr = seconds < MIN_TWO_DIGIT ? `0${seconds}` : seconds;
  const minutesStr = minutes < MIN_TWO_DIGIT ? `0${minutes}` : minutes;

  if (secs < SECONDS_IN_HOUR) {
    return `${minutesStr}:${secondsStr}`;
  }

  const hoursStr = hours < MIN_TWO_DIGIT ? `0${hours}` : hours;

  return `${hoursStr}:${minutesStr}:${secondsStr}`;
}

export function formatDate(date: string) {
  const newDate = new Date(date);
  const month = MONTH_NAMES[newDate.getMonth()];
  const day = newDate.getDate();
  const year = newDate.getFullYear();
  return `${month} ${day}, ${year}`;
}
