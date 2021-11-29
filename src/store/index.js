import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import favouritesReducer from "./reducers/favourites";
import jobsReducer from "./reducers/jobs";

import { persistStore,persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { encryptTransform } from 'redux-persist-transform-encrypt'

export const initialState = {
  favourites: {
    elements: [],
  },
  jobs: {
    elements: [],
  },
};

const configPersist = {
  key:"root",
  storage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_ENCRYPT_KEY,
    }),
  ],
  }

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const mainReducer = combineReducers({
  favourites: favouritesReducer,
  jobs: jobsReducer,
});

const persistBigReducer = persistReducer(configPersist,mainReducer)


  const configStore = createStore(
  persistBigReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export const persistToStore = persistStore(configStore)
 export default configStore

