import { ComponentPropsWithoutRef, ReactElement } from 'react';

import Text from '@/components/@common/Text/Text';
import * as S from '@/components/home/common/homeReservationCard/HomeReservationCard.style';

import { getReservationCardDate } from '@/utils/date';

interface HomeReservationCardHeaderProps extends ComponentPropsWithoutRef<'header'> {
  storeName: string;
  reservationDate: string;
  starTrigger?: ReactElement;
  icon: ReactElement;
}

const HomeReservationCardHeader = ({
  storeName,
  reservationDate,
  starTrigger,
  icon,
}: HomeReservationCardHeaderProps) => {
  return (
    <div css={S.titleWrapperStyle}>
      <div css={S.iconStyle}>{icon}</div>

      <header>
        <h5>{storeName}</h5>
        <Text size="small">{getReservationCardDate(reservationDate)}</Text>
      </header>

      {starTrigger}
    </div>
  );
};

export default HomeReservationCardHeader;
