import {
  REGISTER_USER_SUCCESS,
  USER_LOADED,
  USER_AUTH_ERROR,
  LOGIN_USER_SUCCESS,
  LOGOUT,
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isUserAuthenticated: false,
  loading: true,
  user: null,
};

function authUserReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        user: payload,
        isUserAuthenticated: true,
        loading: false,
      };
    case REGISTER_USER_SUCCESS:
    case LOGIN_USER_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isUserAuthenticated: true,
        loading: false,
      };

    case USER_AUTH_ERROR:
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isUserAuthenticated: false,
        loading: false,
        user: null,
      };
    default:
      return state;
  }
}

export default authUserReducer;
