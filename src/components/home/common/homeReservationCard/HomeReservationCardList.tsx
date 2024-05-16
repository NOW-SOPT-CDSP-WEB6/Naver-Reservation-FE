import { ComponentPropsWithoutRef, ReactElement } from 'react';

import Text from '@/components/@common/Text/Text';
import {
  detailHeaderStyle,
  listStyle,
} from '@/components/home/common/homeReservationCard/HomeReservationCard.style';

import UpArrow from '@/assets/svgs/home/home_ic_up.svg?react';

interface HomeReservationCardListProps extends ComponentPropsWithoutRef<'ul'> {
  children: ReactElement[];
}

const HomeReservationCardList = ({ children }: HomeReservationCardListProps) => {
  return (
    <>
      <div css={detailHeaderStyle}>
        <Text>총 {children.length}건</Text>
        <Text size="medium">
          방문일자
          <UpArrow />
        </Text>
      </div>
      <ul css={listStyle}>{children}</ul>
    </>
  );
};

export default HomeReservationCardList;
