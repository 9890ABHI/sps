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

import {NetworkInfo} from 'react-native-network-info';

// Get Local IP
// NetworkInfo.getIPAddress();
const ips = NetworkInfo.getIPAddress().then(ipAddress => {
  console.log('ipAddress', ipAddress);
});

const getIPAddress = async () => {
  try {
    const ipAddress = await NetworkInfo.getIPAddress();
    console.log('ipAddress', ipAddress);
    return ipAddress;
  } catch (error) {
    console.error('Error getting IP address:', error);
    return null;
  }
};

const ipAddress = getIPAddress();
console.log('ipAddress', ipAddress);
// Usage
const fetchIP = async () => {
  const ipAddress = await getIPAddress();
  console.log('Returned IP address:', ipAddress);
  return ipAddress;
  // Now you can use ipAddress in your application
};

const ip = fetchIP();
console.log('ip', ip);
// export const BASEURL = 'http://192.168.0.197:3001/';
export const BASEURL = 'http://192.168.43.13:3001/';
// export const BASEURL = `http://${}:3001/`;
console.log('BASEURL', BASEURL);
export const login = credentials => async dispatch => {
  try {
    // dispatch(loginRequest());
    await axios
      .post(BASEURL + 'login', credentials)
      .then(async res => {
        console.log(res.data);
        console.log('credentials', credentials);
        dispatch(loginSuccess(res.data.data));
      })
      .catch(error => console.log(error));

    // try {
    //   const response = axios.get(BASEURL + `api/student/${credentials.email}`);
    //   console.log('data', response.data);
    //   // dispatch(loginSuccess(response.data));
    // } catch (error) {
    //   console.error('Error fetching course:', error);
    // }
  } catch (error) {
    dispatch(loginFailure(error));
  }
};
export const teacherlogin = credentials => async dispatch => {
  try {
    // dispatch(loginRequest());
    dispatch(teacherLoginRequest());
    await axios
      .post(BASEURL + 'loginteacher', credentials)
      .then(res => {
        console.log('res', res.data.data);
        // TeacherDetails(credentials.email)
        dispatch(teacherLoginSuccess(res.data.data));
      })
      .catch(error => console.log(error));
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
