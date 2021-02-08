import { CONSTANTS } from "../actions";

const initialState = {
    day: "Monday",
    todaysWorkouts: [],
};

const startWorkoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.START_WORKOUT:

            const todaysRealWorkouts = action.payload.objects.filter(x => x != undefined)

            const workoutState = {
                day: action.payload.listID,
                todaysWorkouts: todaysRealWorkouts,
            };
            return workoutState;
        default:
            return state
    }
};

export default startWorkoutReducer
