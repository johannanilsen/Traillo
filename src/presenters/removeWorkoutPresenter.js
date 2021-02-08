import React from "react";
import { connect } from "react-redux";
import removeExercise from "../actions/removeExerciseAction";
import RemoveWorkoutButton from "../views/removeWorkoutView"

const RemoveWorkoutButtonPresenter = (props) => {
  const handleRemoveExercise = () => {
    const { dispatch } = props;

    dispatch(removeExercise(props.listID, props.cardID));
  };

  return React.createElement(RemoveWorkoutButton, {
    onRemoveExercise: () => handleRemoveExercise(),
    });
};

export default connect()(RemoveWorkoutButtonPresenter);


