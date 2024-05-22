import { useMutation } from '@tanstack/react-query';

import { queryClient } from '@/hooks/queryClient';

import { postReservationMark } from '@/api/home';

export const useReservationMarkMutation = () => {
  const { mutate } = useMutation({
    mutationFn: (reservationId: number) => postReservationMark(reservationId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['reservation', 'list'],
      });
    },
  });

  return { mutate };
};
