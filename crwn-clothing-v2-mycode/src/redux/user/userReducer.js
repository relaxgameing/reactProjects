import { userActionTypes } from "./userTypes";

const inistialState = {
  currentUser: null,
};

export const userReducer = (state = inistialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case userActionTypes.SET_CURRENT_USER:
      return { ...state, currentUser: payload };

    default:
      return state;
  }
};
