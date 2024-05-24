import { axiosInstance } from '@/api/axiosInstance';

import { ReviewAPIType } from '@/type/reservation';

import { END_POINTS } from '@/constants/api';

import { CATEGORY } from '@/constants';

export const getAllReservation = async () => {
  const { data } = await axiosInstance.get(END_POINTS.RESERVATION_ALL);

  return data.data;
};

export const getMyReservationInfo = async (category: string) => {
  const categoryString = category === '전체' ? '' : '/' + CATEGORY[category];

  const { data } = await axiosInstance.get(`${END_POINTS.RESERVATION_MYINFO}${categoryString}`);

  return data.data;
};

export const postReservationMark = async (reservationId: number) => {
  const { data } = await axiosInstance.post(`${END_POINTS.RESERVATION_STARMARK}/${reservationId}`);

  return data;
};

export const postReviewWriting = async ({ reservationId, writing }: ReviewAPIType) => {
  const { data } = await axiosInstance.post(`${END_POINTS.REVIEW_WRITING}/${reservationId}`, {
    content: writing,
  });

  return data;
};

export const getReview = async (storeId: number) => {
  const { data } = await axiosInstance.get(`${END_POINTS.RESERVATION_REVIEW}/${storeId}`);

  return data;
};
