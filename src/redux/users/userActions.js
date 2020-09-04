import actionTypes from '../actionTypes';

export const getUsers = page => {
  return {
    type: actionTypes.GET_USERS,
    payload: {
      page,
    },
  };
};

export const getUsersStart = () => {
  return {
    type: actionTypes.GET_USERS_START,
  };
};

export const getUsersSuccess = users => {
  return {
    type: actionTypes.GET_USERS_SUCCESS,
    payload: {
      users,
    },
  };
};

export const getUsersFailure = () => {
  return {
    type: actionTypes.GET_USERS_FAILURE,
  };
};
