import { CategoryType } from '@/type';

export interface ReservationItemType {
  reservationId: number;
  userName: string;
  storeName: string;
  category: CategoryType;
  reservationDate: string;
  mainDescription: string;
  subDescription: string;
  price: number;
  review: boolean;
  starMark: boolean;
}

export interface ReservationInfo {
  totalPrice: number;
  count: number;
}
