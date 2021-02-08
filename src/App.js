import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { DragDropContext } from "react-beautiful-dnd";

import "./css/styleSchedule.css";
import { listSort } from "./actions/listSortAction";
import { Handleuser } from "./helpers/handleuser";

import WeekdayContainer from "./components/weekdayContainer";
import { SidebarSearch } from "./presenters/sidebarSearch";
import WelcomePagePresenter from "./presenters/welcomePagePresenter";
import WorkoutView from "./views/workoutView";
import { apiSource } from "./api/apiSource";
import addExerciseToDay from "./actions/addExerciseAction";
import HeaderPresenter from "./presenters/headerPresenter";
import ProfilePagePresenter from "./presenters/profilePagePresenter";
import LogInPresenter from "./presenters/loginPresenter";
import SignOutPresenter from "./presenters/signOutPresenter";
import SignUpPresenter from "./presenters/signUpPresenter";
import ForgotPasswordPresenter from "./presenters/forgotPasswordPresenter";

// import onDragEnd from "./components/onDragEnd";
const App = ({ lists, redirect, todaysWorkout, addExercise, fixlist }) => {
  Handleuser();
  const onDragUpdate = (result) => {

    if (!result.destination) {
      return;


    }
  }
  const onDragEnd = async (result) => {
    //console.log(result);
    if (result.reason === "CANCEL") {
      return;
    }
    const { destination, source, draggableId } = result;
    if (!result.destination) {

      result.destination = result.source;

      fixlist(result.source.droppableId,
        result.source.droppableId,
        result.source.index,
        result.source.index,
        result.draggableId)
      // för att lösa en bug där från ingenstans så försvann destination elementet
      // och allt avbröts för att det inte fanns en droppable id
      return;
    }
    else {

      if (
        destination.draggableId === source.droppableId &&
        destination.index === source.index
      ) {
        return;
      }

      if (parseInt(source.droppableId) > 10) {

        if (parseInt(destination.droppableId) > 10) {
          return;
        }
        const sidebar_ex = await apiSource.getExercise(draggableId);
        // set timeout används för att lösa en issue där om man drog korten i snabb följd hängde inte vår reducer med => korten som fanns med syntes inte då
        setTimeout(() => {
          addExercise(
            parseInt(destination.droppableId),
            sidebar_ex.name,
            sidebar_ex
          )
        }, 100);
        fixlist(
          destination.droppableId,
          destination.droppableId,
          destination.index,
          destination.index,
          draggableId
        );


      } else {
        fixlist(
          source.droppableId,
          destination.droppableId,
          source.index,
          destination.index,
          draggableId
        );
      }
    }
  };
  return (
    <div className="App">
      <Router>
        <Redirect to={redirect.redirect}></Redirect>
        <HeaderPresenter />
        <Switch>
          <Route path="/welcome">
            <WelcomePagePresenter />
          </Route>
          <Route path="/login">
            <LogInPresenter />
          </Route>
          <Route path="/profilepage">
            <ProfilePagePresenter></ProfilePagePresenter>
          </Route>
          <Route path="/signout">
            <SignOutPresenter />
          </Route>
          <Route path="/signup">
            <SignUpPresenter />
          </Route>
          <Route path="/forgotpassword">
            <ForgotPasswordPresenter />
          </Route>
          <Route path="/workoutsummary">
            <WorkoutView todaysWorkout={todaysWorkout} />
          </Route>
          <Route path="/workout">
            <DragDropContext onDragEnd={onDragEnd}
              onDragUpdate={onDragUpdate}>
              <div className="sidebarNschedule">
                <div className="sidebar">
                  <SidebarSearch />
                </div>

                <div className="WeekdaySchedule">
                  {lists.map((list) => (
                    <WeekdayContainer
                      listID={list.id}
                      title={list.title}
                      cards={list.cards}
                      key={list.id}
                    />
                  ))}
                </div>
              </div>
            </DragDropContext>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    lists: state.lists,
    redirect: state.redirect,
    todaysWorkout: state.todaysWorkout,
    isLoggedIn: state.loggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addExercise: (selectedWeekday, text, object) =>
      dispatch(addExerciseToDay(selectedWeekday, text, object)),
    fixlist: (
      droppableIdStart,
      droppableIdEnd,
      droppableIndexStart,
      droppableIndexEnd,
      draggableId
    ) =>
      dispatch(
        listSort(
          droppableIdStart,
          droppableIdEnd,
          droppableIndexStart,
          droppableIndexEnd,
          draggableId
        )
      ),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);