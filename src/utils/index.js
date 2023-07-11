import dateFormat from 'dateformat';
import moment from 'moment';

export function dateFormatter(date) {
  const newDate = new Date(date);
  return dateFormat(newDate, 'yy.mm.dd');
}

export function durationFormatter(time) {
  const hours = moment.duration(time, 'minutes').hours() || '';
  const minutes = moment.duration(time, 'minutes').minutes() || '00';
  const seconds = moment
    .duration(time, 'minutes')
    .seconds()
    .toString()
    .padStart(2, '0');
  return `${hours && `${hours}:`}${minutes}:${seconds}`;
}

export function thousandFormatter(num) {
  return parseInt(num).toLocaleString('ko');
}
