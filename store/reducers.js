import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    LOGOUT,
  } from "./actions";
  
  const initialState = {
    user: null,
    error: null,
    isLoading: false,
    student:null,
    teacher:null
  };
  
  export const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_REQUEST:
      case SIGNUP_REQUEST:
        return { ...state, isLoading: true };
  
      case LOGIN_SUCCESS:
      case SIGNUP_SUCCESS:
        return { ...state, user: action.user, isLoading: false, error: null };
  
      case LOGIN_FAILURE:
      case SIGNUP_FAILURE:
        return { ...state, user: null, isLoading: false, error: action.error };

      case LOGOUT: // Handle the LOGOUT action
        return { ...state, user: null, error: null, isLoading: false };
  
      default:
        return state;
    }
  };
