import { NEW_USER, GET_USER, AUTH_USER } from "../actions/actions";

export const initialState = {
  userProfile: {
    firstName: "",
    lastName: "",
    email: "",
    username: ""
  },
  auth: false
};

export default function(state = initialState, action) {
  // console.log("reducer was hit");
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        auth: action.payload
      };
    default:
      return state;
  }
}
