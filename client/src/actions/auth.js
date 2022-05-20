import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import { setAlert } from "./alert";
import {
  REGISTER_USER_SUCCESS,
  REGISTER_ADMIN_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  ADMIN_LOADED,
  USER_AUTH_ERROR,
  ADMIN_AUTH_ERROR,
  LOGIN_USER_SUCCESS,
  LOGIN_ADMIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_PROFILE,
} from "./types";

export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get("api/users/");

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: USER_AUTH_ERROR,
    });
  }
};

export const loadAdmin = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get("api/admin");

    dispatch({
      type: ADMIN_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ADMIN_AUTH_ERROR,
    });
  }
};

//LOGOUT USER
export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
  dispatch({ type: CLEAR_PROFILE });
};

// Register User
export const registerUser = (formData) => async (dispatch) => {
  try {
    const res = await axios.post("api/users/register", formData);

    dispatch({
      type: REGISTER_USER_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: REGISTER_FAIL,
    });
  }
};
//Register Admin
export const registerAdmin = (formData) => async (dispatch) => {
  try {
    const res = await axios.post("api/admin/register", formData);

    dispatch({
      type: REGISTER_ADMIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadAdmin());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

// Login User
export const loginUser = (email, password) => async (dispatch) => {
  const body = { email, password };

  try {
    const res = await axios.post("api/users/login", body);

    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};
///login admin
export const loginAdmin = (email, password) => async (dispatch) => {
  const body = { email, password };

  try {
    const res = await axios.post("api/admin/login", body);

    dispatch({
      type: LOGIN_ADMIN_SUCCESS,
      payload: res.data,
    });

    dispatch(loadAdmin());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};
