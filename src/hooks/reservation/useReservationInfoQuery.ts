import { useQuery } from '@tanstack/react-query';

import { AxiosError } from 'axios';

import { ReservationInfo } from '@/type/reservation';

import { getMyReservationInfo } from '@/api';

export const useReservationInfoQuery = (category: string) => {
  const { data: reservationInfoData } = useQuery<ReservationInfo, AxiosError>({
    queryKey: ['reservation', 'myinfo', { filter: category }],
    queryFn: () => getMyReservationInfo(category),
    staleTime: Infinity,
  });

  return reservationInfoData;
};
