import { combineReducers } from "redux";
import listsReducer from "./listsReducer";
import loggedInReducer from "./isLoggedIn";
import redirectNow from "./redirectReducer";
import startWorkoutReducer from "./startWorkoutReducer";
import isErrorReducer from "./isErrorReducer";

export default combineReducers({
  lists: listsReducer,
  loggedIn: loggedInReducer,
  redirect: redirectNow,
  todaysWorkout: startWorkoutReducer,
  isError: isErrorReducer,
});
