import axios from 'axios';

const serverAxios = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  headers: {
    memberId: 1,
  },
});

export default serverAxios;
