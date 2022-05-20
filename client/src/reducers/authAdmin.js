import {
  REGISTER_ADMIN_SUCCESS,
  ADMIN_LOADED,
  ADMIN_AUTH_ERROR,
  LOGIN_ADMIN_SUCCESS,
  LOGOUT,
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAdminAuthenticated: null,
  loading: true,
  admin: null,
};

function authAdminReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADMIN_LOADED:
      return {
        ...state,
        isAdminAuthenticated: true,
        loading: false,
        admin: payload,
      };
    case REGISTER_ADMIN_SUCCESS:
    case LOGIN_ADMIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAdminAuthenticated: true,
        loading: false,
      };

    case ADMIN_AUTH_ERROR:
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAdminAuthenticated: false,
        loading: false,
        admin: null,
      };
    default:
      return state;
  }
}

export default authAdminReducer;
