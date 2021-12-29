import user from '../../config/api/user';
import { setAuthorizationHeader } from '../../config/axios';
import * as type from '../types/user';

export const setAuthentication = (data) => ({
  type: type.OAUTH,
  payload: data,
});

export const setValidationUser = (token) => async (dispatch) => {
  try {
    dispatch({
      type: type.LOADING,
      payload: true,
    });
    localStorage.setItem('session', JSON.stringify(token));

    setAuthorizationHeader();

    const result = await user.detailUser();

    if (result.status === 200) {
      dispatch({
        type: type.PROFILE,
        payload: result.data.data,
      });

      dispatch({
        type: type.SESSION,
        payload: token,
      });

      dispatch({
        type: type.LOADING,
        payload: false,
      });
    }
  } catch (error) {
    localStorage.removeItem('session', JSON.stringify(token));
    console.log('error', error.response);

    dispatch({
      type: type.ERROR,
      payload: true,
    });
  }
};

export const userLogin = (data) => async (dispatch) => {
  try {
    // set redux loading
    dispatch({
      type: type.LOADING,
      payload: true,
    });

    // asynchronouse user login
    const result = await user.login(data);

    if (result.status === 200) {
      // set validasi user and insert to redux
      dispatch(setValidationUser(result.data.data.access_token));

      // set redux oauth
      dispatch({
        type: type.OAUTH,
        payload: result.data.data,
      });

      // stop loading
      dispatch({
        type: type.LOADING,
        payload: false,
      });
    }
  } catch (error) {
    console.log('error', error.response);

    dispatch({
      type: type.LOADING,
      payload: false,
    });

    dispatch({
      type: type.ERROR,
      payload: true,
    });
  }
};

export const userLogout = (data) => async (dispatch) => {
  try {
    dispatch({
      type: type.LOADING,
      payload: true,
    });

    setAuthorizationHeader();
    const result = user.logout();

    localStorage.removeItem('session');

    if (result.status === 200) {
      console.log('logout success', result);
    }

    dispatch({
      type: type.LOADING,
      payload: true,
    });
  } catch (error) {
    console.log(error.response);

    dispatch({
      type: type.LOADING,
      payload: true,
    });
  }
};
