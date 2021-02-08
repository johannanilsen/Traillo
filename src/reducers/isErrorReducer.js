import { CONSTANTS } from "../actions";

const initialState = {
  isError: false,
  errorMessage: null,
};

const isErrorReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.IS_ERROR:
      state.isError = true;
      state.errorMessage = action.payload.errorMessage;
      return state;

    case CONSTANTS.IS_NOT_ERROR:
      state.isError = false;
      state.errorMessage = null;
      return state;

    default:
      return state;
  }
};
export default isErrorReducer;
