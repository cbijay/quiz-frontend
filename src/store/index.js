import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const middlware = [thunk];

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlware))
);
