import { CONSTANTS } from ".";

const ActionCreator = (value) => ({
  type: CONSTANTS.UPDATE_STATE,
  payload: value,
});

export default ActionCreator;
