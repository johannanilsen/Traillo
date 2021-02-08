const RemoveWorkoutButton = ({ onRemoveExercise }) => {
  return (
    <div>
      <button className="RemoveWorkout" onClick={onRemoveExercise}>
        X
      </button>
    </div>
  );
};

export default RemoveWorkoutButton;