import { useQuery } from '@tanstack/react-query';

import { getAllReservation } from '@/api/getAllReservation';

import { ReservationItemType } from '@/type/reservation';

export const useAllReservation = () => {
  const { data } = useQuery<ReservationItemType[]>({
    queryFn: getAllReservation,
    queryKey: ['reservation'],
  });

  return data;
};
