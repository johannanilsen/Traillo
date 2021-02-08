import { createStore } from "redux";
import rootReducer from "../reducers";
import { db, auth } from "../api/firebase";
import { fromStore, fromDb } from "../helpers/handleReduxFirebase";

const store = createStore(rootReducer);

auth.onAuthStateChanged(async (user) => {
  if (user) {
    const userPath = "users/" + auth.currentUser.uid;

    await fromDb(db, store.dispatch, userPath); // AWAIT THIS SO IT DOESNT OVERWRITE WITH REDUX STATE BEFORE THIS HAS BEEN COMPLETED!!!

    const unsubscribe = store.subscribe(() =>
      fromStore(store.getState(), db, userPath)
    );

    auth.onAuthStateChanged((changedUser) => {
      if (user !== changedUser) {
        unsubscribe(); // We want to unsubscribe our store listener if the user changes
      }
    });
  }
});

export default store;
