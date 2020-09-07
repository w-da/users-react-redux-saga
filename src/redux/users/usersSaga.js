import { takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios';
import { v4 as uuid } from 'uuid';

import actionTypes from '../actionTypes';
import { getUsersStart, getUsersSuccess, getUsersFailure } from './userActions';

function* workerUsers(action) {
  console.log(action);
  yield put(getUsersStart());
  try {
    const { results } = yield call(fetchUsers);
    const usersWithFixedIds = yield call(fixUsersId, results);

    console.log(usersWithFixedIds);

    yield put(getUsersSuccess(results));
  } catch (error) {
    console.log('error is : ', error);
    yield put(getUsersFailure());
  }
}

async function fetchUsers() {
  const { data } = await axios.get(
    'https://randomuser.me/api/?page=1&results=20'
  );
  return data;
}

// Some of users return from server without an ID.
// This function creates ID's for them.

function fixUsersId(users) {
  return users.map(user => {
    if (!user.id.value) {
      user.id.value = uuid();
      return user;
    }
    return user;
  });
}

export default function* watchUsers() {
  yield takeEvery(actionTypes.GET_USERS, workerUsers);
}
