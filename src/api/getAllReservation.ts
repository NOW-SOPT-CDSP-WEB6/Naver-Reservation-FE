import { axiosInstance } from '@/api/axiosInstance';

import { RESERVATIONS_ALL_URL } from '@/constants/api';

export const getAllReservation = async () => {
  const { data } = await axiosInstance.get(RESERVATIONS_ALL_URL);

  return data.data;
};
