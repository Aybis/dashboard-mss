import axios from './index';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const session = JSON.parse(localStorage.getItem('session'));

  if (session) {
    axios.defaults.headers.common.authorization = `Bearer ${session}`;
  } else {
    delete axios.defaults.headers.common.authorization;
  }
};
