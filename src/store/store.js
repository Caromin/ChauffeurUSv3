import { createStore, applyMiddleware, compose } from "redux";
import combineReducers from "../reducers/index";
import thunk from "redux-thunk";

// this initial state is different from reducers inital state, reducers pass in their own state in the combineReducer
const initialState = {};
const middleware = [thunk];

const store = createStore(
  combineReducers,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
