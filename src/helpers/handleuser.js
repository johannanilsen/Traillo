import { useDispatch } from "react-redux";
import { isLoggedIn } from "../actions/loginAction";
import { isLoggedOut } from "../actions/logoutAction";
import { auth } from "../api/firebase";
import { useEffect } from "react";
import { redirectAction } from "../actions/redirectAction";

export const Handleuser = async () => {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(isLoggedIn(user));
        dispatch(redirectAction("/workout"));
      } else {
        dispatch(isLoggedOut());
        dispatch(redirectAction("/welcome"));
      }
    });
  }, [dispatch]);
};
