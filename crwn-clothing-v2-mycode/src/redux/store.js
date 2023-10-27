import { createStore, compose, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./rootReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

const middleWare = [
  process.env.NODE_ENV !== "production" && logger,
  thunk,
].filter(Boolean);

const enhancedCompose =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const enhancer = enhancedCompose(applyMiddleware(...middleWare));

const persistconfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistconfig, rootReducer);

export const store = createStore(persistedReducer, undefined, enhancer);
export const persistor = persistStore(store);
