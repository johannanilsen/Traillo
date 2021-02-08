function AddWorkoutButtonView({ onWeekdayChange, weekdayOptions, onAddExercise }) {
    return (
      <div>
        <select onChange={onWeekdayChange}>
          {weekdayOptions.map((option) => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
          )}
        </select>
        <button
          className="AddWorkoutButton"
          onClick={onAddExercise}
        >
          + Add exercise
        </button>
      </div>
    );
  };

export default AddWorkoutButtonView