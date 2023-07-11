import dateFormat from 'dateformat';
import moment from 'moment';

export function dateFormatter(date) {
  const newDate = new Date(date);
  return dateFormat(newDate, 'dd.mm.yy');
}

export function durationFormatter(time) {
  const duration =
    moment.duration(time, 'minutes').asHours() >= 1
      ? moment.duration(time, 'minutes').asHours()
      : moment.duration(time, 'minutes').asMinutes();
  return duration.toString().replaceAll('.', ':');
}
