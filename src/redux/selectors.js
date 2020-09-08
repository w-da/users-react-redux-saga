import { createSelector } from 'reselect';

// OTHER

const getFilterValue = state => state.users.filterValue;

const getIsLoading = state => state.users.isLoading;

const getError = state => state.users.hasError;

const getPage = state => state.users.page;

// USERS

const getUsers = state => state.users.users;

const getUserById = (state, userID) => {
  const users = getUsers(state);
  return users.find(user => user.id.value === userID);
};

const getFilteredUsers = createSelector(
  [getUsers, getFilterValue],
  (users, filterValue) => {
    const filteredUsers = users.filter(
      user =>
        user.name.first.toLowerCase().includes(filterValue.toLowerCase()) ||
        user.name.last.toLowerCase().includes(filterValue.toLowerCase())
    );

    return filteredUsers;
  }
);

// MARKED_USERS

const getMarkedUsers = state =>
  state.users.users.filter(user => user.markedTime);

const getMarkedUsersQuantity = state => {
  const markedUsers = getMarkedUsers(state);
  return markedUsers.length;
};

const getFilteredMarkedUsers = createSelector(
  [getMarkedUsers, getFilterValue],
  (markedUsers, filterValue) => {
    const filteredMarkedUsers = markedUsers.filter(
      user =>
        user.name.first.toLowerCase().includes(filterValue.toLowerCase()) ||
        user.name.last.toLowerCase().includes(filterValue.toLowerCase())
    );

    return filteredMarkedUsers;
  }
);

export default {
  getUsers,
  getIsLoading,
  getError,
  getUserById,
  getMarkedUsers,
  getMarkedUsersQuantity,
  getPage,
  getFilterValue,
  getFilteredUsers,
  getFilteredMarkedUsers,
};
