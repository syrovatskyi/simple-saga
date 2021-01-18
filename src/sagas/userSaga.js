import { put, takeEvery, call } from 'redux-saga/effects';
import {FETCH_USERS, setUsers} from "../redux/userReducer";

const fetchUsersFromApi = () => {
  return fetch('https://jsonplaceholder.typicode.com/users?_limit=10')
};
// async worker
function* fetchUserWorker() {
  const data = yield call(fetchUsersFromApi);
  const json = yield call(() => new Promise(resolve => resolve(data.json())));
  yield put(setUsers(json));
}

export function* userWatcher() {
  yield takeEvery(FETCH_USERS, fetchUserWorker)
}
