import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGOUT,
  TEACHER_LOGIN_SUCCESS,
  TEACHER_LOGIN_REQUEST,
  TEACHER_LOGIN_FAILURE,
  FETCH_NOTIFICATION_SUCCESS,
  FETCH_NOTIFICATION_ERROR,
} from './actions';

const initialState = {
  teacher: false,
  user: null,
  error: null,
  isLoading: false,
  student: false,
  isActive: true,
  notification: null,
  notificationCount: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case SIGNUP_REQUEST:
      return {...state, isLoading: true};

    case TEACHER_LOGIN_REQUEST:
      return {...state, loading: true, error: null};

    case LOGIN_SUCCESS || SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.payload == 'User dosent Exist' ? null : action.payload,
        isLoading: false,
        error: null,
        teacher: null,
        student: true,
        isActive: action.payload == 'User dosent Exist' ? true : false,
      };

    case TEACHER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        teacher: action.payload,
        error: null,
        user: null,
        student: false,
        isActive: false,
      };

    case TEACHER_LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        teacher: null,
        error: action.payload,
        user: null,
      };

    case LOGIN_FAILURE || SIGNUP_FAILURE:
      return {
        ...state,
        user: null,
        isLoading: false,
        error: action.error,
        teacher: false,
        isActive: true,
      };

    case LOGOUT:
      return {
        ...state,
        user: null,
        error: null,
        isLoading: false,
        teacher: null,
        student: false,
        isActive: true,
      };

    case FETCH_NOTIFICATION_SUCCESS:
      return {
        ...state,
        notification: action.payload,
        notificationCount: action.payload.length,
        loading: false,
      };
    case FETCH_NOTIFICATION_ERROR:
      return {
        ...state,
        loading: false,
        error: 'Failed to fetch notifications',
      };
    default:
      return state;
  }
};
