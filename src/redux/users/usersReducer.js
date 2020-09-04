import actionTypes from '../actionTypes';

const initialState = {
  isLoading: false,
  users: [],
  hasError: false,
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USERS_START:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.GET_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: [...state.users, ...action.payload.users],
      };
    case actionTypes.GET_USERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };
    default:
      return state;
  }
};
