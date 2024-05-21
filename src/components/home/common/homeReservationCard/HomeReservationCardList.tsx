import { ComponentPropsWithoutRef, ReactElement, ReactNode } from 'react';

import Text from '@/components/@common/Text/Text';
import {
  detailHeaderStyle,
  listStyle,
} from '@/components/home/common/homeReservationCard/HomeReservationCard.style';

import UpArrow from '@/assets/svgs/home/home_ic_up.svg?react';

interface HomeReservationCardListProps extends ComponentPropsWithoutRef<'ul'> {
  children: ReactNode;
}

const HomeReservationCardList = ({ children }: HomeReservationCardListProps) => {
  const elements = children as ReactElement[];

  return (
    <>
      <div css={detailHeaderStyle}>
        <Text>총 {elements?.length}건</Text>
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
