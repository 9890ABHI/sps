import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGOUT,
  TEACHER_LOGIN_SUCCESS,
  TEACHER_SIGNUP_SUCCESS,
  TEACHER_LOGIN_REQUEST,
  TEACHER_LOGIN_FAILURE,
} from './actions';

const initialState = {
  teacher: null,
  user: null,
  error: null,
  isLoading: false,
  student: true,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case SIGNUP_REQUEST:
      return {...state, isLoading: true};

    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        error: null,
        teacher: null,
        student: true,
      };

    case TEACHER_LOGIN_REQUEST:
      return {...state, loading: true, error: null};

    case TEACHER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        teacher: action.payload,
        error: null,
        user: null,
        student: false,
      };

    case TEACHER_LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        teacher: null,
        error: action.payload,
        user: null,
      };

    case LOGIN_FAILURE:
    case SIGNUP_FAILURE:
      return {
        ...state,
        user: null,
        isLoading: false,
        error: action.error,
        teacher: null,
      };

    case LOGOUT:
      return {
        ...state,
        user: null,
        error: null,
        isLoading: false,
        teacher: null,
        student: false,
      };

    default:
      return state;
  }
};
