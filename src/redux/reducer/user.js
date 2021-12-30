import * as type from '../types/user';

const initialState = {
  profile: {},
  auth: '',
  isValidation: false,
  session: '',
  updateSession: '',
  isLoading: false,
  isError: false,
  message: '',
};

export default function foo(state = initialState, action) {
  switch (action.type) {
    case type.OAUTH:
      return {
        ...state,
        auth: action.payload,
        isValidation: true,
      };

    case type.PROFILE:
      return {
        ...state,
        profile: action.payload,
      };

    case type.SESSION:
      return {
        ...state,
        session: action.payload,
        isValidation: true,
      };

    case type.REFRESH_TOKEN:
      return {
        ...state,
        updateSession: action.payload,
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
