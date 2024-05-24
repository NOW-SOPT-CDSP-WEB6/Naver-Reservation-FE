import { useQuery } from '@tanstack/react-query';

import { AxiosError } from 'axios';

import { ReviewInfoItemType } from '@/type/review';

import { getReview } from '@/api';

export const useReviewsInfoQuery = (reservationId: number = 0) => {
  const { data: RiviewList } = useQuery<ReviewInfoItemType, AxiosError>({
    queryKey: ['review'],
    queryFn: () => getReview(reservationId),
  });
  return RiviewList;
};
