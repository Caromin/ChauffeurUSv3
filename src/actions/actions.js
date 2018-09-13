export const UPDATE_USER = "UPDATE_USER ";
export const AUTH_USER = "AUTH_USER";

// this is allowed (exporting functions, intead of only an object)
// cause of redux-thunk that is passed in the combineReducers page
// probably not needed, because I'm only passing a object here.
export const authorizeUser = updatedStatus => dispatch => {
  dispatch({
    type: AUTH_USER,
    payload: updatedStatus
  });
};

export const saveUser = userInfo => dispatch => {
  dispatch({
    type: UPDATE_USER,
    payload: userInfo
  });
};
