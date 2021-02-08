import React from "react";
import { connect } from "react-redux";
import addExerciseToDay from "../actions/addExerciseAction";
import AddWorkoutButtonView from "../views/addWorkoutButtonView"
import weekdayOptions from "../helpers/initialWeekdayOptions"

const AddWorkoutButton = (props) => {
  const [selectedWeekday, setSelectedWeekday] = React.useState(0);

  const handleAddExercise = () => {
    const { dispatch } = props;
    var text = props.props.name;
    var object = props.props;

    if (text) {
      dispatch(addExerciseToDay(parseInt(selectedWeekday), text, object));
    }
  };

  return React.createElement(AddWorkoutButtonView, {
    weekdayOptions,
    onWeekdayChange: (e) => setSelectedWeekday(e.target.value), 
    onAddExercise: () => handleAddExercise(),
    });
};

export default connect()(AddWorkoutButton);