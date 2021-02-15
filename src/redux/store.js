import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import logger from "redux-logger"
import { persistStore } from "redux-persist"
import rootReducer from "./rootReducer"

const initialState = {};

const middlewares = [thunk];

if (process.env.NODE_ENV === "development") middlewares.push(logger)

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

const persistor = persistStore(store)

export { store, persistor }
