import { CONSTANTS } from ".";
import "firebase/auth";

export const isLoggedIn = (user) => {
  return {
    type: CONSTANTS.SIGN_IN,
    payload: {
      user: user,
    },
  };
};
