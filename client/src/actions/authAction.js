import axios from "axios";
import { USER_LOADED, USER_LOADING, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL,
    LOGOUT_SUCCESS, REGISTER_SUCCESS, REGISTER_FAIL} from "./types";

import { returnErrors } from "./errorAction";

// Check token and load user making a request to api/user
export const loadUser = () => (dispatch, getState) => {
    // Dispatch the User loading ()changes from false to true
    dispatch({ type: USER_LOADING });

    // Get token form the local store
    const token = getState().auth.token;

    // Add the token to the header
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    };

    // If token is true, add to the headers
    if(token) {
        config.headers["x-auth-token"] = token;
    }

    // Fetching the user
    axios.get("/api/auth/user")
        .then(res => dispatch({
            type: USER_LOADED,
            payload: res.data
        }))
        .catch(error => {
            dispatch(returnErrors(error.response.data, error.response.status));
            dispatch({
                type: AUTH_ERROR
            });
        });
};