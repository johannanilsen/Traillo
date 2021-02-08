import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { writeUserData } from "../helpers/writeUserData";
import { auth } from "../api/firebase";

import { SignUp } from "../helpers/auth";
import { redirectAction } from "../actions/redirectAction";
import SignUpView from "../views/signUpView";

function SignUpPresenter() {
  const [CurrentDisplayName, setCurrentDisplayName] = useState("");
  const [CurrentEmailadress, setCurrentEmailadress] = useState("");
  const [CurrentPassword, setCurrentPassword] = useState("");
  const [CurrentError, setCurrentError] = useState("");

  const dispatch = useDispatch();

  return React.createElement(SignUpView, {
    OnHandleDisplayNameChange: (e) => setCurrentDisplayName(e.target.value),
    OnHandleEmailChange: (e) => setCurrentEmailadress(e.target.value),
    OnHandlePasswordChange: (e) => setCurrentPassword(e.target.value),
    onSignUp: () =>
      auth
        .createUserWithEmailAndPassword(CurrentEmailadress, CurrentPassword)
        .then(() => {
          const user = auth.currentUser;
          writeUserData(user.uid, CurrentDisplayName, user.email);
        })
        .catch((error) => {
          setCurrentError(error.message);
        }),
    onLogIn: () => dispatch(redirectAction("/login")),
    errorMessage: CurrentError,
  });
}

export default SignUpPresenter;
