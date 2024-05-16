import { DAY_IN_WEEKS } from '@/constants';

export const getDateInfo = (dateString: string) => {
  const dateObj = new Date(dateString);

  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const date = dateObj.getDate();
  const hour = dateObj.getHours();
  const minutes = dateObj.getMinutes();

  const day = dateObj.getDay();

  return { year, month, date, hour, minutes, day };
};

export const getReservationCardDate = (dateString: string) => {
  const { year, month, date, hour, minutes, day } = getDateInfo(dateString);

  const isCurrentYear = new Date().getFullYear() === year;
  const ampm = hour >= 12 ? '오후' : '오전';
  const hours = hour % 12 ? hour % 12 : 12;

  return isCurrentYear
    ? `${month}. ${date} ${DAY_IN_WEEKS[day]} ⏐ ${ampm} ${hours}:${String(minutes).padStart(2, '0')}`
    : `${String(year).slice(2, 4)}. ${month}. ${date} ${DAY_IN_WEEKS[day]} ⏐ ${ampm} ${hours}:${String(minutes).padStart(2, '0')}`;
};
