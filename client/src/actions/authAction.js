import axios from 'axios';
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from './types';

import { returnErrors } from './errorAction';

// Check token and load user making a request to api/user
export const loadUser = () => (dispatch, getState) => {
  // Dispatch the User loading ()changes from false to true
  dispatch({ type: USER_LOADING });

  // Fetching the user
  axios
    .get('/api/auth/user', tokenConfig(getState))
    .then(res =>
      dispatch({
        type: USER_LOADED,
        payload: res.data
      })
    )
    .catch(error => {
      dispatch(returnErrors(error.response.data, error.response.status));
      dispatch({
        type: AUTH_ERROR
      });
    });
};

// Register User
export const register = ({ name, email, password }) => dispatch => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  // Request body
  const body = JSON.stringify({ name, email, password });

  axios
    .post('/api/users', body, config)
    .then(res =>
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      })
    )
    .catch(error => {
      dispatch(
        returnErrors(
          error.response.data,
          error.response.status,
          'REGISTER_FAIL'
        )
      );
      dispatch({
        type: REGISTER_FAIL
      });
    });
};

// Login User
export const login = ({ email, password }) => dispatch => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  // Request body
  const body = JSON.stringify({ email, password });

  axios
    .post('/api/auth', body, config)
    .then(res =>
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      })
    )
    .catch(error => {
      dispatch(
        returnErrors(error.response.data, error.response.status, 'LOGIN_FAIL')
      );
      dispatch({
        type: LOGIN_FAIL
      });
    });
};

// Logout User
export const logout = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};

// Setup config/headers and token
export const tokenConfig = getState => {
  // Get token form the local store
  const token = getState().auth.token;

  // Add the token to the header
  const config = {
    headers: {
      'Content-type': 'application/json'
    }
  };

  // If token is true, add to the headers
  if (token) {
    config.headers['x-auth-token'] = token;
  }

  return config;
};
