import axios from '../axios';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  login: (data) => axios.post('api/auth/token/request', data),
  detailUser: () => axios.get('api/auth/token/detail'),
  refreshToken: () => axios.post('api/auth/token/refresh'),
  logout: () => axios.post('/logout'),
};
