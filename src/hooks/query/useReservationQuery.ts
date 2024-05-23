import { useQuery } from '@tanstack/react-query';

import { ReservationItemType } from '@/type/reservation';
import { getAllReservation } from '@/api';

export const useReservationQuery = (category: string) => {
  const { data: ReservationData } = useQuery<ReservationItemType[]>({
    queryFn: getAllReservation,
    queryKey: ['reservation', 'list'],
    staleTime: Infinity,
    select: (data: ReservationItemType[]) =>
      category === '전체'
        ? data.sort((a, b) => a.reservationId - b.reservationId)
        : data
            .filter((item) => item.category === category)
            .sort((a, b) => a.reservationId - b.reservationId),
  });

  return ReservationData;
};
