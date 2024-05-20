import axios from 'axios';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT = 'LOGOUT';

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const TEACHER_LOGIN_REQUEST = 'TEACHER_LOGIN_REQUEST';
export const TEACHER_LOGIN_SUCCESS = 'TEACHER_LOGIN_SUCCESS';
export const TEACHER_LOGIN_FAILURE = 'TEACHER_LOGIN_FAILURE';

export const teacherLoginRequest = () => ({
  type: TEACHER_LOGIN_REQUEST,
});

export const teacherLoginSuccess = teacherData => ({
  type: TEACHER_LOGIN_SUCCESS,
  payload: teacherData,
});

export const teacherLoginFailure = error => ({
  type: TEACHER_LOGIN_FAILURE,
  payload: error,
});

export const loginRequest = () => ({type: LOGIN_REQUEST});
export const loginSuccess = user => ({type: LOGIN_SUCCESS, payload: user});
export const loginFailure = error => ({type: LOGIN_FAILURE, error});

export const logout = () => ({type: LOGOUT});

export const signupRequest = () => ({type: SIGNUP_REQUEST});
export const signupSuccess = user => ({type: SIGNUP_SUCCESS, user});
export const signupFailure = error => ({type: SIGNUP_FAILURE, error});

export const login = credentials => async dispatch => {
  try {
    dispatch(loginRequest());
    await axios
      .post(BASEURL + 'login', credentials)
      .then(res => {
        res.data.data == 'User dosent Exist'
          ? dispatch(loginFailure(error.data))
          : dispatch(loginSuccess(res.data.data));
      })
      .catch(error => dispatch(loginFailure(error.data)));
  } catch (error) {
    dispatch(loginFailure(error.data));
  }
};
export const teacherlogin = credentials => async dispatch => {
  try {
    dispatch(teacherLoginRequest());
    await axios
      .post(BASEURL + 'loginteacher', credentials)
      .then(res => {
        console.log('res', res.data.data);
        dispatch(teacherLoginSuccess(res.data.data));
      })
      .catch(error => dispatch(teacherLoginFailure(error)));
  } catch (error) {
    dispatch(teacherLoginFailure(error));
  }
};

export const logoutUser = () => dispatch => {
  dispatch(logout());
};

export const signup = userData => async dispatch => {
  try {
    dispatch(signupRequest());
    dispatch(signupSuccess(userData));
  } catch (error) {
    dispatch(signupFailure(error));
  }
};

// export const BASEURL = 'http://192.168.0.197:3001/';
// export const BASEURL = 'http://192.168.43.13:3001/';
// export const BASEURL = 'http://192.168.11.1:3001/';
// export const BASEURL = 'http://192.168.63.170:3001/';
// export const BASEURL ='https://api.render.com/deploy/srv-co4mpdf79t8c7394d80g?key=0WnDF8cK_zo';
// export const BASEURL = 'https://sps-backend-x5fl.onrender.com';
// export const BASEURL = 'https://timely-llama-00d951.netlify.app';
// export const BASEURL = 'https://sps-backend-axyz28475.onrender.com/';
// export const BASEURL = 'http://ec2-100-27-219-52.compute-1.amazonaws.com:3001/';
export const BASEURL =
  'http://ec2-54-163-200-241.compute-1.amazonaws.com:3001/';
