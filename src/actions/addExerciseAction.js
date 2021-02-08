import { CONSTANTS } from ".";

const addExerciseToDay = (listID, text, object) => {
  return {
    type: CONSTANTS.ADD_CARD,
    payload: {
      text,
      listID,
      object,
    },
  };
};

export default addExerciseToDay;
