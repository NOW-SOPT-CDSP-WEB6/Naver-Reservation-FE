import axios from 'axios';

export const apiRequest = axios.create({
  baseURL: 'https://api.reservation-naver.r-e.kr/',
  headers: {
    memberId: 1,
  },
});
