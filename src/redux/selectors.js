const getUsers = state => state.users.users;

const getMarkedUsers = state =>
  state.users.users.filter(user => user.markedTime);

const getIsLoading = state => state.users.isLoading;

const getError = state => state.users.hasError;

const getUserById = (state, userID) => {
  const users = getUsers(state);
  return users.find(user => user.id.value === userID);
};

const getMarkedUsersQuantity = state => {
  const markedUsers = getMarkedUsers(state);
  return markedUsers.length;
};

export default {
  getUsers,
  getIsLoading,
  getError,
  getUserById,
  getMarkedUsers,
  getMarkedUsersQuantity,
};
