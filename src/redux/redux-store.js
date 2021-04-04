import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import profileReducer from "./profile-reducer";
import thunkMiddleware from "redux-thunk";

let reducer = combineReducers({
  profile: profileReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunkMiddleware))
);
