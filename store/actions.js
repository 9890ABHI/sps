import axios from 'axios';
import {Alert} from 'react-native';

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
export const FETCH_NOTIFICATION_SUCCESS = 'FETCH_NOTIFICATION_SUCCESS';
export const FETCH_NOTIFICATION_ERROR = 'FETCH_NOTIFICATION_ERROR';

export const notificationSuccess = notificationData => ({
  type: FETCH_NOTIFICATION_SUCCESS,
  payload: notificationData,
});

export const notificationError = error => ({
  type: FETCH_NOTIFICATION_ERROR,
  payload: error,
});

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

// export const fetchNotifications = async () => {
//   try {
//     const response = await fetch(BASEURL+"notification");
//     const data = await response.json();

//     dispatch(notificationSuccess);
//   } catch (error) {
//     dispatch({ type: 'FETCH_ERROR' });
//   }
// };
//
export const fetchNotifications = () => async dispatch => {
  // dispatch(fetchNotificationsRequest());
  try {
    axios
      .get(BASEURL + 'api/notifications')
      .then(response => {
        console.log('Notifications fetched successfully:', response.data);
        notificationSuccess(response.data);
      })
      .catch(error => {
        console.error('Error fetching notifications:', error);
      });
    // const response = await axios.get(BASEURL + 'api/notifications');
    // dispatch(notificationSuccess(response.data));
    // console.log('Notifications fetched successfully:', response.data);
    // return response.data; // Return for any further processing if needed
  } catch (error) {
    dispatch(notificationError(error.message));
    console.error('Error fetching notifications:', error);
    throw error; // Re-throw for handling in the calling function
  }
};
//
export const login = credentials => async dispatch => {
  try {
    dispatch(loginRequest());
    const response = await axios.post(BASEURL + 'login', credentials);
    dispatch(loginSuccess(response.data.data));
    console.log('====================================');
    console.log(response);
    console.log('====================================');
    return response; // Return the response for further processing if needed
  } catch (error) {
    dispatch(loginFailure(error));
    throw error; // Re-throw the error for the calling function to handle
  }
};

export const teacherlogin = credentials => async dispatch => {
  try {
    dispatch(teacherLoginRequest());
    const response = await axios.post(BASEURL + 'loginteacher', credentials);
    dispatch(teacherLoginSuccess(response.data.data));
    console.log('====================================');
    console.log(response);
    console.log('====================================');
    return response; // Return the response for further processing if needed
  } catch (error) {
    dispatch(teacherLoginFailure(error));
    throw error; // Re-throw the error for the calling function to handle
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

// export const BASEURL = 'http://192.168.0.117:5000/';
// export const BASEURL = 'http://192.168.0.197:3001/';
// export const BASEURL = 'http://192.168.43.13:3001/';
// export const BASEURL = 'http://192.168.11.1:3001/';
// export const BASEURL = 'http://192.168.63.170:3001/';
// export const BASEURL ='https://api.render.com/deploy/srv-co4mpdf79t8c7394d80g?key=0WnDF8cK_zo';
// export const BASEURL = 'https://sps-backend-x5fl.onrender.com';
// export const BASEURL = 'https://timely-llama-00d951.netlify.app';
// export const BASEURL = 'https://sps-backend-axyz28475.onrender.com/';
// export const BASEURL = 'http://ec2-100-27-219-52.compute-1.amazonaws.com:3001/';
// export const BASEURL = 'https://ec2-34-203-248-90.compute-1.amazonaws.com:3001/';
// export const BASEURL = 'https://ec2-54-226-152-188.compute-1.amazonaws.com:3001/';
// export const BASEURL = 'https://sps-8ot7.onrender.com/';
export const BASEURL = 'https://sps-backend-production.up.railway.app/';

// export const BASEURL = 'http://192.168.105.170:3001/';
console.log('hell yeam');
axios
  .get('https://sps-backend-production.up.railway.app/') // Ensure the URL matches your backend server
  // .get('https://sps-backend-x5fl.onrender.com') // Ensure the URL matches your backend server
  .then(response => console.log('hell problem solve'))
  .catch(error => console.error('yo', error));
