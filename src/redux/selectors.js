const getUsers = state => state.users.users;

const getIsLoading = state => state.users.isLoading;

const getError = state => state.users.hasError;

const getUserById = (state, userID) => {
  const users = getUsers(state);
  return users.find(user => user.id.value === userID);
};

export default {
  getUsers,
  getIsLoading,
  getError,
  getUserById,
};
