import { CONSTANTS } from ".";

export const redirectAction = (redirectTo) => {
    return {
        type: CONSTANTS.REDIRECT,
        payload: {
            redirect: redirectTo,
        },
    };
};
