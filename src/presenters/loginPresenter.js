import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { redirectAction } from "../actions/redirectAction";
import LogIn from "../views/loginView";
import { useEffect } from "react";
import { auth } from "../api/firebase";

function LogInPresenter() {
  const [CurrentUserName, setCurrentUserName] = useState("");
  const [CurrentPassword, setCurrentPassword] = useState("");
  const [CurrentError, setCurrentError] = useState("");

  const dispatch = useDispatch();

  return React.createElement(LogIn, {
    onHandleUserNameChange: (e) => setCurrentUserName(e.target.value),
    onHandlePasswordChange: (e) => setCurrentPassword(e.target.value),
    onForgotPassword: () => dispatch(redirectAction("/forgotpassword")),
    onSignIn: () =>
      auth
        .signInWithEmailAndPassword(CurrentUserName, CurrentPassword)
        .then(() => {})
        .catch((error) => {
          setCurrentError(error.message);
        }),
    onSignUp: () => dispatch(redirectAction("/signup")),
    errorMessage: CurrentError,
  });
}

export default LogInPresenter;
