export const NEW_USER = "NEW_USER";
export const GET_USER = "GET_USER";
export const AUTH_USER = "AUTH_USER";

// this is allowed (exporting functions, intead of only an object)
// cause of redux-thunk that is passed in the combineReducers page
// probably not needed, because I'm only passing a object here.
export const authorizeUser = updatedStatus => dispatch => {
  console.log("action was hit");
  dispatch({
    type: AUTH_USER,
    payload: updatedStatus
  });
};
