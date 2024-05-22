import { ComponentPropsWithoutRef, ReactNode } from 'react';

import { listStyle } from '@/components/home/common/homeReservationCard/HomeReservationCard.style';

interface HomeReservationCardListProps extends ComponentPropsWithoutRef<'ul'> {
  children: ReactNode;
}

const HomeReservationCardList = ({ children }: HomeReservationCardListProps) => {
  return (
    <>
      <ul css={listStyle}>{children}</ul>
    </>
  );
};

export default HomeReservationCardList;
