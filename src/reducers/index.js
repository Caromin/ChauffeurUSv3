import { combineReducers } from "redux";
import userReducer from "./userReducer";

// combining all of the reducers IF THERE WAS MORE THAN ONE, but ONLY ONE ATM.
export default combineReducers({
  userInfo: userReducer
});
