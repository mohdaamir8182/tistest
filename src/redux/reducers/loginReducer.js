import * as types from "../types";
const initialState = {
  user: null,
  error: null
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SAVE_USER_INFO:
      return {
        ...state,
        user: action.payload,
        error: null,
      };
    case types.LOG_OUT:
    return {
      user: null,
      error: null,
    };
    default:
      return state;
  }
};
