import { all } from 'redux-saga/effects'
import {countWatcher} from "./countSaga";
import {userWatcher} from "./userSaga";

// global watcher

export function* rootWatcher() {
  yield all([countWatcher(), userWatcher()])
}
