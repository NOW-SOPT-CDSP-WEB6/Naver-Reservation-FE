import { useQuery } from '@tanstack/react-query';

import { AxiosError } from 'axios';

import { ReviewInfoType } from '@/type/review';

import { getReview } from '@/api';

export const useReviewsInfoQuery = (reservationId: number = 0) => {
  const { data: RiviewList } = useQuery<ReviewInfoType, AxiosError>({
    queryKey: ['review'],
    queryFn: () => getReview(reservationId),
  });
  return RiviewList;
};
