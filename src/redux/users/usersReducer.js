import actionTypes from '../actionTypes';

const initialState = {
  isLoading: false,
  users: [],
  hasError: false,
  page: 1,
  filterValue: '',
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USERS_START:
      return {
        ...state,
        isLoading: true,
        hasError: false,
      };
    case actionTypes.GET_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: [...state.users, ...action.payload.users],
        hasError: false,
        page: state.page + 1,
      };
    case actionTypes.GET_USERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };
    case actionTypes.UPDATE_USER:
      return {
        ...state,
        users: updateUser(
          state.users,
          action.payload.userId,
          action.payload.markedTime
        ),
      };

    case actionTypes.CHANGE_FILTER:
      return {
        ...state,
        filterValue: action.payload.value,
      };
    default:
      return state;
  }
};

function updateUser(users, userId, markedTime) {
  const updatedUsers = users.map(user => {
    if (user.id.value === userId) {
      user.markedTime = markedTime;
      return user;
    }
    return user;
  });

  return updatedUsers;
}
