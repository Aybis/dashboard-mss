import * as type from '../types/dashboard';

const initialState = {
  data: {},
  dataDetail: {},
  dataByUnit: {},
  dataWonAndLose: {},
  isLoading: false,
  isError: false,
  status: 'idle',
  isMessage: '',
};

export default function foo(state = initialState, action) {
  switch (action.type) {
    case type.FETCH_DATA:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };

    case type.FETCH_DATA_BY_UNIT:
      return {
        ...state,
        dataByUnit: action.payload,
        isLoading: false,
      };

    case type.FETCH_DATA_DETAIL:
      return {
        ...state,
        dataDetail: action.payload,
      };

    case type.FETCH_DATA_WIN_LOSE:
      return {
        ...state,
        dataWonAndLose: action.payload,
      };

    case type.LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case type.ERROR:
      return {
        ...state,
        isError: action.payload,
      };

    case type.MESSAGE:
      return {
        ...state,
        message: action.payload,
      };

    default:
      return state;
  }
}
