import RemoveWorkoutButtonPresenter from "../presenters/removeWorkoutPresenter";
import { Draggable } from "react-beautiful-dnd";

const ExerciseCard = ({ cardID, listID, text, index }) => {
  return (
    <Draggable draggableId={String(cardID)} index={index}>
      {(provided) => (
        <div
          className="ExerciseCard"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div className="RemoveExercise">
            <RemoveWorkoutButtonPresenter cardID={cardID} listID={listID} />
          </div>

          <div>{text}</div>
        </div>
      )}
    </Draggable>
  );
};

export default ExerciseCard;
