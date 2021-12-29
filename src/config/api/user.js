import axios from '../axios';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  login: (data) => axios.post('auth/token/request', data),
  detailUser: () => axios.get('auth/token/detail'),
  refreshToken: () => axios.post('auth/token/refresh'),
  logout: () => axios.get('auth/token/revoke'),
};
