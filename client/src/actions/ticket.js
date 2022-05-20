import axios from "axios";
import { setAlert } from "./alert";
import {
  MY_TICKETS,
  TICKET_ERROR,
  SET_ALERT,
  TICKET_INFO,
  CANCEL_ALL_TICKETS,
  CANCEL_TICKET,
} from "./types";

export const myTickets = () => async (dispatch) => {
  try {
    const res = await axios.get("api/users/myTickets");
    dispatch({
      type: MY_TICKETS,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: TICKET_ERROR,
    });
  }
};

export const bookBus = (_id, name, email, phone, seat, date) => async (
  dispatch
) => {
  try {
    const query = {
      bus: _id,
      date: date,
      seat: seat,
      email: email,
      phone: phone,
      name: name,
    };
    const res = await axios.post("api/users/bookTicket", query);

    dispatch({
      type: SET_ALERT,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: TICKET_ERROR,
    });
  }
};

export const userInfo = (date, bus, seat) => async (dispatch) => {
  try {
    const query = {
      date: date,
      bus: bus._id,
      seat: seat,
    };
    const res = await axios.post("api/admin/ticketInfo", query);

    dispatch({
      type: TICKET_INFO,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: TICKET_ERROR,
    });
  }
};

export const cancelTicket = (id) => async (dispatch) => {
  try {
    const query = {
      id: id,
    };
    await axios.post("api/users/cancelTicket", query);

    dispatch({
      type: CANCEL_TICKET,
      payload: id,
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: TICKET_ERROR,
    });
  }
};

export const cancelTickets = (date, bus) => async (dispatch) => {
  try {
    const query = {
      date: date,
      bus: bus._id,
    };
    const res = await axios.post("api/admin/cancelTickets", query);

    dispatch({
      type: CANCEL_ALL_TICKETS,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: TICKET_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
