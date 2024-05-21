import { apiRequest } from '@/api/axiosinstance';

export const getAllReservation = async () => {
  const { data } = await apiRequest.get('api/v1/reservations/all');

  return data.data;
};
