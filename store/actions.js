

// Action Types
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LOGOUT = "LOGOUT";

export const SIGNUP_REQUEST = "SIGNUP_REQUEST";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";




// Action Creators
export const loginRequest = () => ({ type: LOGIN_REQUEST });
export const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, user });
export const loginFailure = (error) => ({ type: LOGIN_FAILURE, error });

export const logout = () => ({ type: LOGOUT });

export const signupRequest = () => ({ type: SIGNUP_REQUEST });
export const signupSuccess = (user) => ({ type: SIGNUP_SUCCESS, user });
export const signupFailure = (error) => ({ type: SIGNUP_FAILURE, error });




export const login = (credentials) => async (dispatch) => {
  try {
    dispatch(loginRequest());
    // Make API request for login here
    // Once successful, dispatch loginSuccess(user)
    dispatch(loginSuccess(credentials));
    // If there's an error, dispatch loginFailure(error)
  } catch (error) {
    dispatch(loginFailure(error));
  }
};



export const logoutUser = () => (dispatch) => {
  // You can perform any cleanup or API requests here

  // Dispatch the logout action to update the user's state
  dispatch(logout());
};

// Thunk for signing up
export const signup = (userData) => async (dispatch) => {
  try {
    dispatch(signupRequest());
    // Make API request for signup here
    // Once successful, dispatch signupSuccess(user)
    dispatch(signupSuccess(userData));
    // If there's an error, dispatch signupFailure(error)
  } catch (error) {
    dispatch(signupFailure(error));
  }
};




