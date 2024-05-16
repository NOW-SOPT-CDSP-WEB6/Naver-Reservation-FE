import NaverCalendar from '@assets/svgs/home/home_ic_day.svg?react';

import { HTMLAttributes } from 'react';

import Text from '@/components/@common/Text/Text';
import {
  itemStyle,
  mainTextStyle,
  rankNumberStyle,
  statusbarStyle,
} from '@/components/home/common/homeMostReservation/HomeMostReservation.style';

interface HomeMostReservationItemProps extends HTMLAttributes<HTMLLIElement> {
  rank?: number;
  maxCount?: number;
  currentCount?: number;
}

export const HomeMostReservationItem = ({
  rank,
  children,
  maxCount,
  currentCount,
}: HomeMostReservationItemProps) => {
  return (
    <li css={itemStyle}>
      <div css={rankNumberStyle}>{rank}</div>
      <p css={mainTextStyle}>
        <NaverCalendar />
        <Text size="medium">{children}</Text>
      </p>
      <Text size="medium">{currentCount}회</Text>
      <progress css={statusbarStyle} max={maxCount} value={currentCount} />
    </li>
  );
};
