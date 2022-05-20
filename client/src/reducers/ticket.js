import {
  MY_TICKETS,
  TICKET_ERROR,
  TICKET_INFO,
  CANCEL_TICKET,
} from "../actions/types";

const initialState = {
  ticket: "",
  tickets: "",
  loading: true,
};

function ticketReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case TICKET_INFO:
      return {
        ...state,
        ticket: payload,
        loading: false,
      };
    case MY_TICKETS:
      return {
        ...state,
        tickets: payload,
        loading: false,
      };
    case CANCEL_TICKET:
      return {
        ...state,
        tickets: state.tickets.filter((ticket) => ticket.id !== payload),
        loading: false,
      };
    case TICKET_ERROR:
      return {
        ...state,
        tickets: "",
      };
    default:
      return state;
  }
}

export default ticketReducer;
