import { combineReducers } from "redux";
import authUser from "./authUser";
import authAdmin from "./authAdmin";
import alert from "./alert";
import bus from "./bus";
import ticket from "./ticket";
export default combineReducers({
  authUser,
  authAdmin,
  alert,
  bus,
  ticket,
});
