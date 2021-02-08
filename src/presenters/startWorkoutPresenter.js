import React from "react";
import { connect } from "react-redux";

import getExercisesFromDay from "../actions/getExerciseAction";
import { redirectAction } from "../actions/redirectAction";
import StartWorkoutButtonView from "../views/startWorkoutView"

const StartWorkoutButton = (props) => {
    const { dispatch } = props;
    const selectedWeekday = props.listID;
    const cards = props.cards.length;


    const getExercises = () => {
        var cards = [...props.cards]
        var objects = [];
        cards.map((exercise) => objects.push(exercise.object));

        if (cards) {
            dispatch(getExercisesFromDay(parseInt(selectedWeekday), objects));
            dispatch(redirectAction("/workoutsummary"))
        }
    };

    return (cards > 0 ?
        React.createElement(StartWorkoutButtonView, {
            onStartWorkout: () => getExercises(),
        }) :
        null)
};

export default connect()(StartWorkoutButton);