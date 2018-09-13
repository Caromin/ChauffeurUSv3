import { UPDATE_USER, AUTH_USER } from "../actions/actions";

export const initialState = {
  userProfile: {
    id: "",
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
    case UPDATE_USER:
      // console.log(
      //   "this is the payload: " + JSON.stringify(action.payload.sessionId)
      // );
      return {
        ...state,
        userProfile: {
          id: action.payload.sessionId,
          firstName: action.payload.sessionFirstName,
          lastName: action.payload.sessionLastName,
          email: action.payload.sessionEmail,
          username: action.payload.sessionUsername
        }
      };
    default:
      return state;
  }
}
