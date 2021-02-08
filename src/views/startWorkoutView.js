function StartWorkoutButtonView({ onStartWorkout }) {
return (
    <div>
        <button className="AddWorkoutButton" onClick={onStartWorkout}>Start Workout!</button>
    </div>
    ); 
};

export default StartWorkoutButtonView
