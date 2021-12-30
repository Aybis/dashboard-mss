import { setAuthorizationHeader } from '../../config/axios';
import dashboard from '../../config/api/dashboard';

import * as type from '../types/dashboard';

export const fetchDataSummary =
  ({ month, year }) =>
  async (dispatch) => {
    dispatch({
      type: type.LOADING,
      payload: true,
    });
    try {
      setAuthorizationHeader();
      const result = await dashboard.dataSummary({
        params: {
          month: month,
          year: year,
        },
      });
      if (result.status === 200) {
        dispatch({
          type: type.FETCH_DATA,
          payload: result.data.data,
        });
        dispatch({
          type: type.LOADING,
          payload: false,
        });
      }
    } catch (error) {
      console.log('error', error);
    }
  };

export const fetchDataDetailByStatus =
  ({ id, month, year }) =>
  async (dispatch) => {
    try {
      setAuthorizationHeader();
      const result = await dashboard.detailByStatus({
        params: {
          status_id: id,
          month: month,
          year: year,
        },
      });
      if (result.status === 200) {
        dispatch({
          type: type.FETCH_DATA_DETAIL,
          payload: result.data.data,
        });
        dispatch({
          type: type.LOADING,
          payload: false,
        });
      }
    } catch (error) {
      console.log('error', error);
    }
  };

export const fetchDataByunit =
  ({ month, year }) =>
  async (dispatch) => {
    dispatch({
      type: type.LOADING,
      payload: true,
    });
    try {
      setAuthorizationHeader();
      const result = await dashboard.dataByUnit({
        params: {
          month: month,
          year: year,
        },
      });

      if (result.status === 200) {
        dispatch({
          type: type.FETCH_DATA_BY_UNIT,
          payload: result.data.data,
        });
        dispatch({
          type: type.LOADING,
          payload: false,
        });
      }
    } catch (error) {
      console.log('error', error);
    }
  };
