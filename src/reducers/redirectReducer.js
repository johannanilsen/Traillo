import { CONSTANTS } from "../actions";

const initialState = {
  redirect: "/welcome"
};

const redirectNow = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.REDIRECT:
      const redirectState = {
        redirect: action.payload.redirect
      };
      return redirectState;
    default:
      return state;
  }
};

export default redirectNow;
