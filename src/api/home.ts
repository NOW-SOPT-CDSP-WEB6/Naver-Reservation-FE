import { apiRequest } from '@/api/axiosinstance';

export const getAllReservation = async () => {
  const { data } = await apiRequest.get('api/v1/reservations/all', {
    headers: {
      memberId: 1,
    },
  });

  return data.data;
};
