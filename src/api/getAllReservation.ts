import { serverAxios } from '@/api/';

export const getAllReservation = async () => {
  const { data } = await serverAxios.get('api/v1/reservations/all');

  return data.data;
};
