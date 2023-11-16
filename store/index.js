import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./reducers";
const RootReducers = combineReducers({
  auth: authReducer,
});

export const store = createStore(RootReducers, applyMiddleware(thunk));