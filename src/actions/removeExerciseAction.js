import { CONSTANTS } from ".";

const removeExercise = (listID, cardID) => {
  return {
    type: CONSTANTS.REMOVE_CARD,
    payload: {
      listID,
      cardID,
    },
  };
};

export default removeExercise;
