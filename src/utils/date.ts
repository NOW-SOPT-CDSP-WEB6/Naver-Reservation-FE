import { DAY_IN_WEEKS } from '@/constants';

export const convertDate = (dateStr: string): string => {
  // 입력된 문자열을 Date 객체로 변환
  const dateObj = new Date(dateStr);
  // Date 객체를 원하는 형식으로 포맷팅
  const formattedDate = `${dateObj.getFullYear()}.${(dateObj.getMonth() + 1)}.${dateObj.getDate()}(${getDayOfWeek(dateObj)})`;
  return formattedDate;
}

// 요일을 반환하는 함수
export const getDayOfWeek = (date: Date): string => {
  const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
  return daysOfWeek[date.getDay()];
}

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
