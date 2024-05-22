import { axiosInstance } from '@/api/axiosInstance';

import { CATEGORY } from '@/constants';

export const getAllReservation = async () => {
  const { data } = await axiosInstance.get('api/v1/reservations/all');

  return data.data;
};

export const getMyReservationInfo = async (category: string) => {
  const categoryString = category === '전체' ? '' : '/' + CATEGORY[category];

  const { data } = await axiosInstance.get(`api/v1/reservations${categoryString}`);

  return data.data;
};

export const postReservationMark = async (reservationId: number) => {
  const { data } = await axiosInstance.post(`api/v1/reservations/star/${reservationId}`);

  return data;
};
