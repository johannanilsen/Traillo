import { CONSTANTS } from ".";


const getExercisesFromDay = (listID, objects) => {

    return {
        type: CONSTANTS.START_WORKOUT,
        payload: {
            listID,
            objects,
        },
    };
};

export default getExercisesFromDay;
