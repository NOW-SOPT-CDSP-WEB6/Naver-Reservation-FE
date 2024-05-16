import { HTMLAttributes } from 'react';

import { HomeMostReservationItem } from '@/components/home/common/homeMostReservation/HomeMostReservationItem';

interface HomeMostReservationProps extends HTMLAttributes<HTMLUListElement> {}

export const HomeMostReservation = ({ children }: HomeMostReservationProps) => {
  return <ul>{children}</ul>;
};

HomeMostReservation.item = HomeMostReservationItem;
