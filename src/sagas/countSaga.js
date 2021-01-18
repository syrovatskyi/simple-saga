import { put, takeEvery } from 'redux-saga/effects';
import {ASYNC_DECREMENT, ASYNC_INCREMENT, decrementCreator, incrementCreator} from "../redux/countReducer";


// function that  doing timeout
const delay = (ms) => {
  return new Promise(res => setTimeout(res, ms))
};

function* incrementWorker() {
  yield delay(1000);
  yield put(incrementCreator()) // sync action
}

function* decrementWorker() {
  yield delay(1000);
  yield put(decrementCreator()) // sync action
}



export function* countWatcher() {
  yield takeEvery(ASYNC_INCREMENT, incrementWorker);
  yield takeEvery(ASYNC_DECREMENT, decrementWorker);
}
