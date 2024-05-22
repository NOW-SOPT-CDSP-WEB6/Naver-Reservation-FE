import { serverAxios } from '@/api/';
import { RESERVATIONS_ALL_URL } from '@/constants/api';

export const getAllReservation = async () => {
  const { data } = await serverAxios.get(RESERVATIONS_ALL_URL);

  return data.data;
};
