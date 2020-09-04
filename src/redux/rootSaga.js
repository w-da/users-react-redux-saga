import { all, fork } from 'redux-saga/effects';

import usersSaga from './users/usersSaga';

export default function* rootSaga() {
  yield all([fork(usersSaga)]);
}
