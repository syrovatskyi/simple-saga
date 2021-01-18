import {applyMiddleware, combineReducers, createStore} from "redux";
import userReducer from "./userReducer";
import countReducer from "./countReducer";
import createSagaMiddleware from 'redux-saga';
import {rootWatcher} from "../sagas";

const sagaMiddleware = createSagaMiddleware();

export const rootReducer = combineReducers({
  countReducer,
  userReducer
});

export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootWatcher);

