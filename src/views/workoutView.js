import { connect } from "react-redux";
import { redirectAction } from "../actions/redirectAction";
import { apiSource } from "../api/apiSource";
import React from "react";
import "../css/workoutView.css"


function WorkoutView(todaysWorkout) {
    const { dispatch } = todaysWorkout;
    const stripHTMLTag = /(<([^>]+)>)/gi;
    const fetchCategories = async () => await apiSource.getCategories();
    const [exerciseCategories, setCategories] = React.useState([]);

    React.useEffect(() => {
        let isMounted = true;
        async function fetchData() {
            const categories = await fetchCategories();
            if (isMounted) {
                setCategories(categories);
            }
        };
        fetchData();
        return function cleanup() {
            isMounted = false;
        }
    }, []);

    const tot_categories = todaysWorkout.todaysWorkout.todaysWorkouts.map((workout) =>
        exerciseCategories.filter((musc) => workout.category === musc.id)).flat().reduce((acc, curr) => {
            return acc.findIndex(elem => elem.id === curr.id) !== -1
                ? acc
                : acc.concat(curr)
        }, []);

    if (todaysWorkout.todaysWorkout.todaysWorkouts.length < 1) {
        return (
            <div className="fullWorkoutView">

                <div className="center">No Workouts have been added to the day! </div>
                <button className="backToWeekBtn_empty" style={{ float: "right" }} onClick={() => dispatch(redirectAction("/workout"))}>Back To Week View</button>
            </div >
        )
    }

    return (<div className="fullWorkoutView">
        <div className="allWorkouts">
            {todaysWorkout.todaysWorkout.todaysWorkouts.map((workout, i) =>

                <div key={`${workout.id} ${1}${i}`} className="oneWorkout">
                    <div key={`${workout.id} ${2}${i}`} className="workoutTitle">{workout.name}</div>
                    <div key={`${workout.id} ${3}${i}`} className="workoutBody">{workout.description.replace(stripHTMLTag, "")}</div>
                    <div key={`${workout.id} ${4}${i}`} className="workoutMuscle">Muscle Groups Trained: {exerciseCategories
                        .filter((musc) => workout.category === musc.id)
                        .map((ex) => ex.name)}</div>
                </div>

            )}
        </div>
        <div className="backNMuscle">
            <div className="muscleCategories">
                <p className="workoutTitle"> Muscle Groups Trained In This Workout:</p>
                {tot_categories.map((cat, i) =>
                    <li key={`${cat.id} ${i}`}>{cat.name}</li>)}
            </div>
            <button className="backToWeekBtn" style={{ float: "right" }} onClick={() => dispatch(redirectAction("/workout"))}>Back To Week View</button>
        </div>
    </div>

    )
}

export default connect()(WorkoutView);