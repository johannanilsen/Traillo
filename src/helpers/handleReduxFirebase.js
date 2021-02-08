export const fromDb = (db, dispatch, userPath) => {
  db.ref(userPath).once("value", (snapshot) => {
    if (snapshot.val()) {
      dispatch({
        type: "UPDATE_STATE",
        payload: snapshot.val().list_state,
      });
    }
  });
};

export const fromStore = (state, db, userPath) => {
  db.ref(userPath).update({
    list_state: state.lists,
  });
};
