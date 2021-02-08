import { CONSTANTS } from "../actions";

const initialState = {
  isLoggedIn: false,
  user: null,
};

const loggedInReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.SIGN_IN:
      const displayName = action.payload.displayName;
      state.isLoggedIn = true;
      state.displayName = displayName;
      return state;

    case CONSTANTS.SIGN_OUT:
      state.isLoggedIn = false;
      state.displayName = null;
      return state;

    default:
      return state;
  }
};
export default loggedInReducer;
