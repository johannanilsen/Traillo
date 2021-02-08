import { CONSTANTS } from ".";

export const isLoggedOut = () => {
  return {
    type: CONSTANTS.SIGN_OUT,
  };
};
