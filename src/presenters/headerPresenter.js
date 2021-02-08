import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { SignOut } from "../helpers/auth";

import { redirectAction } from "../actions/redirectAction";
import HeaderView from "../views/headerView";

function HeaderPresenter() {
  const loggedIn = useSelector((state) => state.loggedIn.isLoggedIn);
  const redirect = useSelector((state) => state.redirect.redirect);
  const dispatch = useDispatch();

  return React.createElement(HeaderView, {
    loggedIn: loggedIn,
    onProfilePage: () => dispatch(redirectAction("/profilepage")),
    onLogIn: () => dispatch(redirectAction("/login")),
    onSignUp: () => dispatch(redirectAction("/signup")),
    onSignOut: () => SignOut(),
    onTraillo: () =>
      loggedIn
        ? dispatch(redirectAction("/workout"))
        : dispatch(redirectAction("/welcome")),
    onRedirect: redirect,
  });
}

export default HeaderPresenter;
