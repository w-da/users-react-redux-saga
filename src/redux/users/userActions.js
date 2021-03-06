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

export const updateUser = (userId, markedTime) => {
  return {
    type: actionTypes.UPDATE_USER,
    payload: {
      userId,
      markedTime,
    },
  };
};
export const changeFilter = value => {
  return {
    type: actionTypes.CHANGE_FILTER,
    payload: {
      value,
    },
  };
};
